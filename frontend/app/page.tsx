import Link from "next/link";
import { ProjectCard } from "../components/ProjectCard";
import { skills } from "../lib/data";
import { getProjects } from "../lib/api";
import { ProfileImage } from "../components/ProfileImage";

export default async function Home() {
  const dynamicProjects = (await getProjects()).filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="shell hero">
        <div>
          <p className="eyebrow">Hello, I&apos;m David Moenga</p>
          <h1>
            I build <em>digital products</em> that solve real problems.
          </h1>
          <p className="lead">
            Software engineer and data analyst based in Nairobi, Kenya. I focus on building reliable web applications, 
            exploring blockchain technology, and turning complex data into decisions people can act on.
          </p>
          <div className="actions">
            <Link className="button" href="/projects">
              Explore my work
            </Link>
            <Link className="button outline" href="/contact">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="floating">Based in Nairobi, Kenya 🇰🇪</div>
          <ProfileImage />
        </div>
      </section>

      <section className="shell section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2>Projects I&apos;m proud of</h2>
          </div>
          <Link href="/projects" className="button outline">
            All projects →
          </Link>
        </div>
        <div className="grid">
          {dynamicProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="shell section">
        <div className="section-head">
          <div>
            <p className="eyebrow">My toolkit</p>
            <h2>Technologies I work with</h2>
          </div>
          <p className="section-copy">
            I bring together thoughtful engineering and practical analysis to build products that work beautifully and solve real problems.
          </p>
        </div>
        <div className="card skills-card">
          {skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="shell section">
        <p className="eyebrow">Let&apos;s create something</p>
        <h2 style={{ maxWidth: 700 }}>Have a problem worth solving?</h2>
        <div className="actions">
          <Link href="/contact" className="button">
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
