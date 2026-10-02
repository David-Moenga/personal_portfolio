import Link from "next/link";

type Project = {
  title: string;
  summary?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  highlights?: string[];
  status?: string;
  slug?: string;
  repository_url?: string;
  live_url?: string;
};

const statusColors: Record<string, string> = {
  completed: "#176b4d",
  in_progress: "#d97706",
  maintained: "#2563eb",
};

const statusLabels: Record<string, string> = {
  completed: "Completed",
  in_progress: "In Progress",
  maintained: "Maintained",
};

export function ProjectCard({ project }: { project: Project }) {
  const description = project.summary ?? project.description ?? "";
  const technologies = project.technologies ?? [];
  const status = project.status ?? "completed";

  return (
    <article className="card project-card">
      <div className="project-image-wrapper">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title.slice(0, 2).toUpperCase()}</span>
          </div>
        )}
        <span
          className="status-badge"
          style={{ backgroundColor: statusColors[status] || statusColors.completed }}
        >
          {statusLabels[status] || "Completed"}
        </span>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{description}</p>
        {technologies.length > 0 && (
          <div className="tech-tags">
            {technologies.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="project-links">
          {project.repository_url && (
            <a
              href={project.repository_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Code →
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
