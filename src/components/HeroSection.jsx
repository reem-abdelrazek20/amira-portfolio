import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>كلمات تشبهك وتصل إلى الناس
            </div>
            <h1>
              أكتب لتصل
              <br />
              الفكرة <em>بصدق.</em>
            </h1>
            <p className="hero-lead">
              أنا أميرة عبد الرازق، كاتبة محتوى عربية. أساعد الأفكار على أن تجد
              كلماتها؛ واضحة، قريبة، وتترك أثراً.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" to="/works">
                تصفّحي أعمالي
              </Link>
              <a className="text-link" href="#about">
                تعرّفي عليّ
              </a>
            </div>
            
          </div>
          <div className="hero-image-stage">
            <img
              className="hero-image"
              src="/book.png"
              alt="كتب ومحبرة وريشة كتابة"
            />
           
          </div>
        </div>
      </section>
      <div className="ticker" aria-hidden="true">
        <div>
          <span>كلمات قريبة</span><Sparkles className="ticker-icon" size={15} strokeWidth={1.6}/>
          <span>أفكار واضحة</span><Sparkles className="ticker-icon" size={15} strokeWidth={1.6}/>
          <span>حكايات تستحق أن تُروى</span><Sparkles className="ticker-icon" size={15} strokeWidth={1.6}/>
          <span>كلمات قريبة</span><Sparkles className="ticker-icon" size={15} strokeWidth={1.6}/>
          <span>أفكار واضحة</span><Sparkles className="ticker-icon" size={15} strokeWidth={1.6}/>
          <span>حكايات تستحق أن تُروى</span><Sparkles className="ticker-icon" size={15} strokeWidth={1.6}/>
        </div>
      </div>
    </>
  );
}
