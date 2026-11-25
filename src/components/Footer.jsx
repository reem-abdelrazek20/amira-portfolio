import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { siteConfig } from '../data/siteConfig.js';

const socialItems = [
  { key: 'instagram', label: 'Instagram', Icon: FaInstagram },
  { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedinIn },
  { key: 'facebook', label: 'Facebook', Icon: FaFacebookF }
];

export default function Footer() {
  return <footer className="footer"><div className="container footer-main">
    <Link className="brand footer-brand" to="/"><span className="brand-mark"><img className="brand-logo" src="/logo.png" alt=""/></span><span>أميرة عبد الرازق<small>كاتبة محتوى عربية</small></span></Link>
    <div className="footer-socials" aria-label="مواقع التواصل الاجتماعي">
      <span className="footer-social-title">تابعيني على</span>
      {socialItems.map(({ key, label, Icon }) => {
        const href = siteConfig.socials[key];
        return href
          ? <a className="social-link" key={key} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon/></a>
          : <span className="social-link social-placeholder" key={key} aria-label={`${label} — أضيفي الرابط في siteConfig.js`} title={`${label}: أضيفي الرابط في siteConfig.js`}><Icon/></span>;
      })}
    </div>
    <span className="footer-note">كُتبت بمحبة، في القاهرة <span className="footer-flower">✳</span></span>
  </div><div className="container footer-bottom"><span>© أميرة عبد الرازق</span><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>إلى الأعلى</a></div></footer>;
}
