import { useState } from "react";
import SectionLabel from "../components/SectionLabel.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { categories, projects } from "../data/projects.js";

export default function WorksPage() {
  const [active, setActive] = useState("الكل");
  const visible =
    active === "الكل"
      ? projects
      : projects.filter((project) => project.type === active);
  return (
    <main className="works-page">
      <div className="container">
        <div className="works-hero">
          <div>
            <SectionLabel>دفتر الأعمال</SectionLabel>
            <h1>
              كل كلمة لها <em>حكاية.</em>
            </h1>
            <p>
              مقالات، ملخصات كتب، وكتابة للعلامات التجارية — هذه مساحة تجمع
              نماذج من عملي.
            </p>
          </div>
          <div className="works-count">
            <strong>0{projects.length}</strong>
            <span>
              نماذج
              <br />
              كتابية
            </span>
          </div>
        </div>
        <div className="filter-row">
          <span>تصفّحي حسب النوع</span>
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                className={active === category ? "filter active" : "filter"}
                key={category}
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="works-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="works-endnote">
         لكل فكرة، طريقة تحكيها
        </div>
      </div>
    </main>
  );
}
