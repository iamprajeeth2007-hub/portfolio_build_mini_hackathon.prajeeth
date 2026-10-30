"""Stitch HTML -> JSX converter. Reads <main> of each export and emits a React page component."""
import re, sys, json
from html.parser import HTMLParser

UP = '/mnt/user-data/uploads/'
VOID = {'br','img','input','hr','meta','link','source','wbr'}
ATTR = {'class':'className','for':'htmlFor','maxlength':'maxLength','viewbox':'viewBox','stroke-width':'strokeWidth',
        'stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','tabindex':'tabIndex','rows':'rows',
        'crossorigin':'crossOrigin','autocomplete':'autoComplete'}
BOOL = {'required','disabled','selected','checked','readonly','hidden'}

class Node:
    def __init__(s, tag, attrs): s.tag=tag; s.attrs=dict(attrs); s.kids=[]; s.parent=None
class Parser(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.root=Node('root',[]); s.cur=s.root
    def handle_starttag(s, tag, attrs):
        n=Node(tag,attrs); n.parent=s.cur; s.cur.kids.append(n)
        if tag not in VOID: s.cur=n
    def handle_startendtag(s, tag, attrs):
        n=Node(tag,attrs); n.parent=s.cur; s.cur.kids.append(n)
    def handle_endtag(s, tag):
        if tag in VOID: return
        n=s.cur
        while n and n.tag!=tag: n=n.parent
        if n and n.parent: s.cur=n.parent
    def handle_data(s, d): s.cur.kids.append(d)

def text_of(n):
    if isinstance(n,str): return n
    return ''.join(text_of(k) for k in n.kids)
def norm(t): return ' '.join(t.split())

def css_obj(style):
    out=[]
    for decl in re.split(r';(?![^(]*\))', style):
        if ':' not in decl: continue
        k,v=decl.split(':',1); k=k.strip(); v=v.strip()
        k=re.sub(r'-([a-z])',lambda m:m.group(1).upper(),k)
        out.append(f'{k}: {json.dumps(v)}')
    return '{{ '+', '.join(out)+' }}'

class Conv:
    def __init__(s, cfg): s.cfg=cfg; s.case_i=0
    def href(s, n):
        h=n.attrs.get('href','#'); t=norm(text_of(n))
        for key,to in s.cfg.get('links',{}).items():
            if key in t:
                if isinstance(to,list): v=to[s.case_i%len(to)]; s.case_i+=1; return v
                return to
        return h
    def attrs(s, n, extra=None):
        parts=[]; a=dict(n.attrs)
        tag=n.tag
        if 'data-alt' in a:
            alt=a.pop('data-alt')
            if tag=='img' and 'alt' not in a: a['alt']=alt
            elif tag!='img': parts.append(f'role="img" aria-label={json.dumps(alt)}')
        if tag=='img':
            a.setdefault('alt',''); a['loading']='lazy'; a['decoding']='async'
        for k,v in a.items():
            if k in ('data-filter','data-framework-tab','data-category','data-active-classes','data-path','data-location','onclick','onsubmit'): continue
            if k=='href' and tag=='a': continue
            if k=='style': parts.append(f'style={css_obj(v)}'); continue
            name=ATTR.get(k,k)
            if k in BOOL and v in ('',k): parts.append(name); continue
            if k=='hidden': continue
            if '"' in v or '\n' in v or '{' in v and k!='class': parts.append(f'{name}={{{json.dumps(v)}}}')
            else: parts.append(f'{name}="{v}"')
        return parts
    def text(s, t, prev, nxt, parent):
        c=re.sub(r'\s+',' ',t)
        if not c.strip():
            if prev is not None and nxt is not None and parent.tag in ('p','h1','h2','h3','h4','span','a','li','button','label','div') and parent.tag!='div' :
                return "{' '}"
            return ''
        lead = c.startswith(' ') and prev is not None
        trail= c.endswith(' ') and nxt is not None
        c=c.strip()
        c=c.replace('{',"{'{'}").replace('}',"{'}'}").replace('<','&lt;').replace('>','&gt;')
        return ("{' '}" if lead else '')+c+("{' '}" if trail else '')
    def emit(s, n, depth=0, ctx=None):
        ctx=ctx or {}
        pad='  '*depth
        tag=n.tag
        cfg=s.cfg
        T=tag; extra=[]
        if tag in ('script','style'): return ''
        if tag=='a':
            T='SmartLink'; extra.append(f'href={json.dumps(s.href(n))}')
        # filter / tabs
        if tag=='button' and 'data-filter' in n.attrs:
            f=n.attrs['data-filter']; cls=n.attrs['class']
            base=' '.join(c for c in cls.split() if c not in ('filter-btn','bg-surface-container','text-on-surface','shadow-sm','text-secondary','hover:text-on-surface','transition-colors'))
            ps=[p for p in s.attrs(n) if not p.startswith('className')]
            return (f'{pad}<button type="button" onClick={{() => setFilter({json.dumps(f)})}} aria-pressed={{filter === {json.dumps(f)}}} '
                    f'className={{`{base} ${{filter === {json.dumps(f)} ? "bg-surface-container text-on-surface shadow-sm" : "text-secondary hover:text-on-surface transition-colors"}}`}}>'
                    f'{s.kidsinline(n)}</button>')
        if tag=='button' and 'data-framework-tab' in n.attrs:
            f=n.attrs['data-framework-tab']; cls=n.attrs['class']
            base=' '.join(c for c in cls.split() if c not in ('framework-tab','active','bg-surface-container-high','text-on-surface','text-secondary','hover:text-on-surface','transition-all'))
            return (f'{pad}<button type="button" role="tab" onClick={{() => setTab({json.dumps(f)})}} aria-selected={{tab === {json.dumps(f)}}} '
                    f'className={{`{base} transition-all ${{tab === {json.dumps(f)} ? "bg-surface-container-high text-on-surface" : "text-secondary hover:text-on-surface"}}`}}>'
                    f'{s.kidsinline(n)}</button>')
        if tag=='div' and n.attrs.get('id','').startswith('content-') and cfg.get('tabs'):
            key=n.attrs['id'][8:]
            n.attrs['class']=' '.join(c for c in n.attrs['class'].split() if c!='hidden'); n.attrs.pop('id')
            inner=s.emit_el(n,depth+2,'motion.div',[ 'initial={{ opacity: 0, y: 8 }}','animate={{ opacity: 1, y: 0 }}','transition={{ duration: 0.3, ease: EASE }}',f'key={json.dumps(key)}','role="tabpanel"'])
            return f'{pad}{{tab === {json.dumps(key)} && (\n{inner}\n{pad})}}'
        # category sections
        if tag=='section' and 'data-category' in n.attrs and cfg.get('only_cat') is None:
            cat=n.attrs['data-category']
            cls=n.attrs['class']
            n.attrs['class']='@@CAT@@'
            out=s.emit_el(n,depth,'motion.section',s.reveal_props(ctx))
            return out.replace('className="@@CAT@@"', f'className={{`{cls} ${{filter === "all" || filter === {json.dumps(cat)} ? "" : "hidden"}}`}}')
        # reveal for root children
        if ctx.get('root') and tag in ('section','div') and ctx.get('idx',0)>0:
            return s.emit_el(n,depth,'motion.'+tag,s.reveal_props(ctx))
        # stagger grids
        cls=n.attrs.get('class','')
        if tag in ('div','ul') and ctx.get('section') and re.search(r'\bgrid\b',cls) and 'grid-cols' in cls:
            els=[k for k in n.kids if isinstance(k,Node)]
            if 2<=len(els)<=8 and all(k.tag in ('div','a','article') for k in els):
                trig=['animate="show"'] if ctx.get('hero') else ['whileInView="show"','viewport={VIEWPORT}']
                return s.emit_el(n,depth,'motion.div',['variants={staggerParent}','initial="hidden"']+trig,child_motion=True,hero=ctx.get('hero'))
        if ctx.get('stagger_child') and tag in ('div','a','article'):
            T2='motion.div' if tag!='a' else 'SmartLink'
            if tag=='a': return s.emit_el(n,depth,'SmartLink',extra)
            return s.emit_el(n,depth,'motion.div',['variants={staggerChild}'])
        # page-specific hero targets
        for pred,props in cfg.get('motion_targets',[]):
            if pred(n): return s.emit_el(n,depth,'motion.'+tag,props)
        return s.emit_el(n,depth,T,extra)
    def reveal_props(s,ctx):
        return ['initial="hidden"','whileInView="show"','viewport={VIEWPORT}','variants={sectionReveal}']
    def kidsinline(s,n):
        out=[]
        ks=n.kids
        for i,k in enumerate(ks):
            if isinstance(k,str): out.append(s.text(k, ks[i-1] if i else None, ks[i+1] if i+1<len(ks) else None, n))
            else: out.append(s.emit(k,0).strip())
        return ''.join(out)
    def emit_el(s,n,depth,T,extra,child_motion=False,hero=False):
        pad='  '*depth
        ps=s.attrs(n)+extra
        head=f'<{T}'+(' '+' '.join(ps) if ps else '')
        if n.tag in VOID: return f'{pad}{head} />'
        ks=n.kids
        if not any((isinstance(k,Node) or k.strip()) for k in ks): return f'{pad}{head}></{T}>'
        # inline text-only children
        if all(isinstance(k,str) for k in ks):
            return f'{pad}{head}>{s.kidsinline(n)}</{T}>'
        lines=[f'{pad}{head}>']
        ctx_hero=hero or getattr(s,'_hero',False)
        # keep section ctx flag only below sections
        for i,k in enumerate(ks):
            if isinstance(k,str):
                t=s.text(k, ks[i-1] if i else None, ks[i+1] if i+1<len(ks) else None, n)
                if t: lines.append('  '*(depth+1)+t)
            else:
                lines.append(s.emit(k,depth+1,{'section':True,'stagger_child':child_motion,'hero':hero or ctx_hero}))
        lines.append(f'{pad}</{T}>')
        return '\n'.join(lines)

def convert(src, cfg):
    html=open(UP+src).read()
    m=html[html.find('<main'):html.find('</main>')+7]
    p=Parser(); p.feed(m)
    main=p.root.kids[0]
    wrap=[k for k in main.kids if isinstance(k,Node)][0]  # div.flex.flex-col.w-full
    c=Conv(cfg)
    items=[k for k in wrap.kids if isinstance(k,Node) and k.tag not in ('script','style')]
    if cfg.get('only_cat') is not None:
        cats=[k for k in items if 'data-category' in k.attrs]
        items=[cats[cfg['only_cat']]]
    body=[]
    for i,k in enumerate(items):
        c._hero=(i==0 and cfg.get('hero_stagger',False)); body.append(c.emit(k,3,{'root':True,'idx':(i if cfg.get('only_cat') is None else 1),'hero':c._hero}))
    return '\n'.join(body), wrap.attrs.get('class','')

if __name__=='__main__':
    pass
