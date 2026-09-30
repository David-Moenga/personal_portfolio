import { getExperience } from "../../lib/api";

export default async function ExperiencePage() {
  const experience = await getExperience();

  return (
    <>
      <section className="shell page-hero">
        <p className="eyebrow">Career</p>
        <h1>Experience.</h1>
        <p className="lead">
          My professional journey and the experiences that have shaped my career.
        </p>
      </section>

      <section className="shell section">
        {experience.length === 0 ? (
          <div className="card">
            <p style={{ color: "var(--muted)", margin: 0 }}>
              Experience details will be added soon. Check back later!
            </p>
          </div>
        ) : (
          <div className="experience-list">
            {experience.map((exp: any) => (
              <div className="card experience-card" key={exp.id}>
                <div className="experience-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="experience-company">
                      {exp.company} {exp.location && `· ${exp.location}`}
                    </p>
                  </div>
                  <p className="experience-date">
                    {exp.start_date} — {exp.end_date || "Present"}
                  </p>
                </div>
                <p className="experience-description">{exp.description}</p>
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="tech-tags">
                    {exp.technologies.map((tech: string) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
