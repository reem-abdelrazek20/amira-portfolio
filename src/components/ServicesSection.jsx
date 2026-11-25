import { FileText, LibraryBig, Megaphone, PenLine } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";

const services = [
  [
    Megaphone,
    "كتابة المحتوى التسويقي",
    "منشورات وسائل التواصل الاجتماعي، وإعلانات قصيرة وجذابة.",
  ],
  [
    FileText,
    "المقالات والتطوير الذاتي",
    "مقالات رأي وتأملات قريبة من تفاصيل الحياة اليومية.",
  ],
  [
    LibraryBig,
    "الكتب والمحتوى التوعوي",
    "مراجعات كتب وملخصات ومحتوى يساعد على الفهم.",
  ],
  [
    PenLine,
    "إعادة الصياغة والتحرير",
    "تحسين وضوح النصوص والحفاظ على روح الفكرة.",
  ],
];

export default function ServicesSection() {
  return (
    <section className="services section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <SectionLabel>ما أقدّمه</SectionLabel>
            <h2>
              خدمات <em>كتابية.</em>
            </h2>
          </div>
         
        </div>
        <div className="service-grid">
          {services.map(([Icon, title, description]) => (
            <article className="service-item" key={title}>
              <span className="service-icon">
                <Icon size={23} strokeWidth={1.7} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
