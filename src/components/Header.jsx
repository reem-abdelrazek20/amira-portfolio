import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { whatsappUrl } from '../data/siteConfig.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="header"><div className="nav-wrap container">
    <Link className="brand" to="/" onClick={close}><span className="brand-mark"><img className="brand-logo" src="/logo.png" alt=""/></span><span>أميرة عبد الرازق<small>كاتبة محتوى عربية</small></span></Link>
    <button className="menu-toggle" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav-links open' : 'nav-links'}>
      <NavLink end to="/" onClick={close}>الرئيسية</NavLink><NavLink to="/works" onClick={close}>الأعمال والمشاريع</NavLink>
      <a href="/#about" onClick={close}>عن أميرة</a><a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={close}>لنتحدث</a>
    </nav>
  </div></header>;
}
