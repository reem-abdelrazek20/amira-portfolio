import { Link, useParams } from "react-router-dom";
import SectionLabel from "../components/SectionLabel.jsx";
import { projects } from "../data/projects.js";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  if (!project)
    return (
      <main className="not-found container">
        <SectionLabel>العمل غير موجود</SectionLabel>
        <h1>يبدو أن هذه الصفحة أخذت استراحة.</h1>
        <Link className="button button-dark" to="/works">
          العودة إلى الأعمال
        </Link>
      </main>
    );
  return (
    <main className="detail-page">
      <div className="container">
        <Link className="back-link" to="/works">
          العودة إلى كل الأعمال
        </Link>
        <div
          className="detail-cover"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(28, 35, 25, .86), rgba(28, 35, 25, .12)), url("${project.image}")`,
          }}
        >
          <div className="detail-cover-meta">
            <span>
              {project.category} · {project.type}
            </span>
            <span>{project.readTime}</span>
          </div>
          <h1>{project.title}</h1>
        </div>
        <article className="detail-body">
          
          <SectionLabel>من دفتر أميرة</SectionLabel>
          {project.body.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="detail-sign">— أميرة عبد الرازق</div>
          <Link className="under-link" to="/works">
            تصفّحي أعمالاً أخرى
          </Link>
        </article>
      </div>
    </main>
  );
}
