import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function SelectedWorksSection() {
  const featured = projects.filter((project) => project.featured);
  return (
    <section className="selected section-pad">
      <div className="container">
        <div className="section-head">
          <div>
            <SectionLabel>من دفتر الكتابة</SectionLabel>
            <h2>
              أعمال <em>مختارة.</em>
            </h2>
          </div>
          <Link className="under-link" to="/works">
            كل الأعمال والمشاريع
          </Link>
        </div>
        <div className="selected-grid">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              large={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
