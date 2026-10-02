import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject } from "../../../lib/api";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="shell page-hero">
        <Link href="/projects" className="back-link">
          ← Back to projects
        </Link>
        <p className="eyebrow">{project.status === "completed" ? "Completed Project" : project.status === "in_progress" ? "In Progress" : "Maintained"}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
      </section>

      <section className="shell section">
        <div className="project-detail">
          <div className="project-detail-main">
            <h2>About this project</h2>
            <p className="project-description-full">{project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
              <>
                <h2>Key Highlights</h2>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <>
                <h2>Technologies Used</h2>
                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="project-detail-sidebar">
            <div className="card sidebar-card">
              <h3>Links</h3>
              {project.repository_url && (
                <a
                  href={project.repository_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link"
                >
                  View Source Code →
                </a>
              )}
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link"
                >
                  Live Demo →
                </a>
              )}
              <Link href="/projects" className="sidebar-link">
                More Projects →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
