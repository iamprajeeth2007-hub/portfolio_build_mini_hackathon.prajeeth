import re, os, sys
sys.path.insert(0,os.path.dirname(__file__))
from convert import convert
OUT='/home/claude/portfolio/src/pages'
HDR="""import { motion } from 'framer-motion';
import SmartLink from '../../components/SmartLink/SmartLink';
import { staggerParent, staggerChild, sectionReveal, VIEWPORT, EASE } from '../../lib/motion';
import { useSeo } from '../../hooks/useSeo';
%(extra_imports)s
export default function %(name)s() {
  useSeo(%(seo)s);
%(hooks)s
  return (
    <>
%(body)s
    </>
  );
}
"""
def write(name,body,seo,hooks='',extra_imports='',dirname=None):
    # WRAPFIX: allow action-button rows to wrap on narrow screens
    body=re.sub(r'<div className="flex items-center gap-space-sm">(\s*<SmartLink)',r'<div className="flex flex-wrap items-center gap-space-sm">\1',body)
    d=f'{OUT}/{dirname or name}'; os.makedirs(d,exist_ok=True)
    open(f'{d}/{name}.jsx','w').write(HDR%dict(name=name,seo=seo,hooks=hooks,body=body,extra_imports=extra_imports))

def sub1(s,old,new):
    assert old in s, old[:80]
    return s.replace(old,new,1)

LINK={'Home':{'All Projects':'/projects','Case Study':['/projects/campus-eats','/projects/pocketpal','/projects/resq'],'Explore Benzson Programs':'/benzson',"Let's Connect":'/contact'}}
# ---------- simple pages
specs={
 'Home':('code_01bdbb.html',{'hero_stagger':True,'links':LINK['Home']},
   "{ title: 'Prajeeth Raaj PK — Developer · Entrepreneur · Student Innovator', description: 'Building ideas into products. Creating opportunities through technology. Portfolio of Prajeeth Raaj PK, B.Tech CSE (AI & ML) at REVA University and founder of Benzson Technologia.', path: '/' }"),
 'About':('code_820450.html',{'hero_stagger':True,'links':{'Examine The Projects':'/projects','Explore Benzson Venture':'/benzson'}},
   "{ title: 'About — Prajeeth Raaj PK', description: 'Behind the work: the mindset, education and interests of Prajeeth Raaj PK, a developer and student innovator studying CSE (AI & ML) at REVA University.', path: '/about' }"),
 'Benzson':('code_f784d4.html',{'links':{'General Inquiry':'/contact'}},
   "{ title: 'Benzson Technologia — Practical STEM learning · Prajeeth Raaj PK', description: 'Benzson Technologia is a student-driven practical-learning initiative that helps students experience science and technology beyond the classroom.', path: '/benzson' }"),
 'Experience':('code_985811.html',{'links':{'View All Projects':'/projects','Reach Out':'/contact'}},
   "{ title: 'Experience — Prajeeth Raaj PK', description: 'Milestones, ventures, workshops and education of Prajeeth Raaj PK.', path: '/experience' }"),
}
for name,(src,cfg,seo) in specs.items():
    body,_=convert(src,cfg); write(name,body,seo)

# ---------- Projects (filter + framework tabs)
body,_=convert('code_1.html',{'tabs':True})
write('Projects',body,"{ title: 'Projects — Prajeeth Raaj PK', description: 'Selected work and ventures: Campus Eats, PocketPal and ResQ, plus upcoming builds.', path: '/projects' }",
  hooks="  const [filter, setFilter] = useState('all');\n  const [tab, setTab] = useState('problem');",extra_imports="import { useState } from 'react';")
# the converter links project-page buttons to external URLs already; add detail links to each project title area via ProjectDetails

# ---------- Project details (reuse the project showcase section from the Stitch projects screen)
DET=[('CampusEats','campus-eats',0,"Campus Eats — Prajeeth Raaj PK","College food-court ordering application inspired by overcrowding and network difficulties in the REVA University food court."),
     ('PocketPal','pocketpal',1,"PocketPal — Prajeeth Raaj PK","Personal finance management application focused on expenses, debts, budgeting, analytics and financial insights."),
     ('ResQ','resq',2,"ResQ — Prajeeth Raaj PK","ResQ emergency response and dispatch project by Prajeeth Raaj PK.")]
for comp,slug,i,title,desc in DET:
    body,_=convert('code_1.html',{'only_cat':i})
    write(comp,body,"{ title: %r, description: %r, path: '/projects/%s' }"%(title,desc,slug),dirname='ProjectDetails')

# ---------- Contact
body,_=convert('code.html',{})
b=body
b=sub1(b,'<div className="hidden flex-col items-center justify-center py-space-3xl text-center" id="contactSuccessState">','{sent ? (\n<div className="flex flex-col items-center justify-center py-space-3xl text-center" role="status">')
b=sub1(b,'Message Dispatched','Draft Ready')
b=re.sub(r'Thank you for reaching out\. The transmission has cleared our pipeline\. Prajeeth typically responds within 24 hours\.','Your email app should now be open with the message pre-filled. Press send there to deliver it.',b)
b=re.sub(r'<button (className="[^"]*") id="resetFormBtn" type="button">','<button \\1 type="button" onClick={() => setSent(false)}>',b)
b=re.sub(r'</div>\n(\s*)<form className="flex flex-col gap-space-lg" id="portfolioContactForm">',r'</div>\n\1) : (\n\1<form className="flex flex-col gap-space-lg" noValidate onSubmit={handleSubmit}>',b,count=1)
b=sub1(b,'</form>','</form>\n)}')
FM={'senderName':'name','senderEmail':'email','inquiryType':'type','timelineUrgency':'horizon','messageBody':'message'}
for idv,k in FM.items():
    pat=re.compile(r'(<(?:input|select|textarea) [^>]*?)id="%s"'%idv)
    assert pat.search(b),idv
    b=pat.sub(lambda m:m.group(1)+f'id="{idv}" name="{k}" value={{values.{k}}} onChange={{onChange}} aria-invalid={{!!errors.{k}}}',b,count=1)
b=re.sub(r'<option disabled selected value="">','<option disabled value="">',b)
b=sub1(b,'<option selected value="NextQuarter">','<option value="NextQuarter">')
for idv,k in {'nameError':'name','emailError':'email','messageError':'message'}.items():
    pat=re.compile(r'<span className="hidden ([^"]*)" id="%s">([^<]*)</span>'%idv)
    assert pat.search(b),idv
    b=pat.sub(lambda m:'{errors.%s && <span className="%s" role="alert">%s</span>}'%(k,m.group(1),m.group(2)),b,count=1)
# add select error for type
b=sub1(b,'0 / 1200','{values.message.length} / 1200')
b=sub1(b,'<span id="btnLabel">Transmit Message</span>','<span>{sending ? \'Opening mail…\' : \'Transmit Message\'}</span>')
b=re.sub(r'(<button className="px-space-xl py-space-md rounded-lg bg-primary-container[^"]*") id="submitBtn" type="submit">',r'\1 type="submit" disabled={sending}>',b)
b=sub1(b,'type="button">Copy</button>','type="button" onClick={copyFingerprint}>{copied ? \'Copied\' : \'Copy\'}</button>')
b=re.sub(r'id="charCounter"','aria-live="polite"',b)
hooks="""  const [values, setValues] = useState({ name: '', email: '', type: '', horizon: 'NextQuarter', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const copyFingerprint = async () => {
    try {
      await navigator.clipboard.writeText('49E2 0FA1 CC92 ... B873');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch { /* clipboard unavailable */ }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = {};
    if (!values.name.trim()) er.name = true;
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(values.email.trim())) er.email = true;
    if (!values.message.trim()) er.message = true;
    setErrors(er);
    if (Object.keys(er).length) return;
    // No backend is connected. Open the visitor's email client with the message pre-filled.
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry${values.type ? ' — ' + values.type : ''} from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\\n\\n— ${values.name.trim()} (${values.email.trim()})\\nHorizon: ${values.horizon}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => { setSending(false); setSent(true); setValues({ name: '', email: '', type: '', horizon: 'NextQuarter', message: '' }); }, 600);
  };"""
write('Contact',b,"{ title: 'Contact — Prajeeth Raaj PK', description: 'Get in touch with Prajeeth Raaj PK for product collaborations, venture discussions, speaking engagements and hackathon co-builds.', path: '/contact' }",hooks=hooks,
      extra_imports="import { useState } from 'react';\nimport { CONTACT_EMAIL } from '../../data/site';")
print('generated')
