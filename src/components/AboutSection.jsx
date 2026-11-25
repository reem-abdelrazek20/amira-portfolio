import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel.jsx";
import PhotoPlaceholder from "./PhotoPlaceholder.jsx";

export default function AboutSection() {
  return (
    <section className="intro section-pad" id="about">
      <div className="container intro-grid">
        <div className="intro-heading">
       
          <PhotoPlaceholder />
        </div>
        <div className="intro-text">
          <p className="intro-first">
            أنا أميرة عبد الرازق الصادق، كاتبة محتوى عربية، تخرّجت في كلية
            التجارة شعبة اللغة الإنجليزية. منحتني دراستي فهماً لعالم الأعمال
            والتسويق وطريقة تفكير العملاء.
          </p>
          <p>
            شغفي هو الكتابة بنوعيها: التسويقية التي تُقنع وتدفع للفعل، والتأملية
            التي تلامس القارئ وتدعوه للتفكير في نفسه. أؤمن أن النص الجيد واضح
            أولاً، قريب من القارئ ثانياً، ومبدع دائماً.
          </p>
          <p>
            أكتب على مدونتي «And you?!» عن التطوير الذاتي والكتب والحياة
            اليومية، وأعمل مع الأفراد والعلامات التجارية لصياغة رسائلهم بلغة
            عربية جذابة.
          </p>
          <Link className="under-link" to="/works">
            اكتشفي ما أكتب
          </Link>
        </div>
      </div>
    </section>
  );
}
