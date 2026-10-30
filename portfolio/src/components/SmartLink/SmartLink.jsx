import { Link } from 'react-router-dom';

export default function SmartLink({ href = '#', children, ...rest }) {
  if (href.startsWith('/')) return <Link to={href} {...rest}>{children}</Link>;
  if (href.startsWith('#')) {
    const onClick = (e) => {
      const el = document.getElementById(href.slice(1));
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    };
    return <a href={href} onClick={onClick} {...rest}>{children}</a>;
  }
  if (/^https?:/.test(href)) return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  return <a href={href} {...rest}>{children}</a>;
}
