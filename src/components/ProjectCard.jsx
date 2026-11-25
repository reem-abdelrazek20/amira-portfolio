import { Link } from "react-router-dom";

export default function ProjectCard({ project, large = false }) {
  return (
    <Link
      to={`/works/${project.id}`}
      className={`project-card ${large ? "project-card-large" : ""}`}
    >
      <div className={`project-cover cover-${project.number}`}>
        <img
          className="project-photo"
          src={project.image}
          alt={project.imageAlt}
          title={`صورة من Unsplash — ${project.photoCredit}`}
          loading="lazy"
        />
        <span className="cover-number">{project.number}</span>
        <span className="cover-caption">{project.category}</span>
      </div>
      <div className="project-meta">
        <span>{project.type}</span>
        <span>{project.readTime}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.excerpt}</p>
      <span className="read-link">اقرئي العمل</span>
    </Link>
  );
}
