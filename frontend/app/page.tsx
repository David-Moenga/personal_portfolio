import Link from "next/link";
import { ProjectCard } from "../components/ProjectCard";
import { skills } from "../lib/data";
import { getProjects } from "../lib/api";
import { ProfileImage } from "../components/ProfileImage";
export default async function Home() {
  const dynamicProjects = (await getProjects()).filter((project) => project.featured).slice(0, 3);
  return (
    <>
      <section className="shell hero">
        <div>
          <p className="eyebrow">Hello, I&apos;m David Moenga</p>
          <h1>
            I provide <em>simple</em> solutions to <em>complex</em> problems.
          </h1>
          <p className="lead">
            Software engineer and data analyst focused on building reliable web
            applications and turning complex data into decisions people can act
            on.
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
            <p className="eyebrow">Selected work</p>
            <h2>My Work</h2>
          </div>
          <Link href="/projects" className="button outline">
            All projects →
          </Link>
        </div>
        <div className="grid">
          {dynamicProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section className="shell section">
        <div className="section-head">
          <div>
            <p className="eyebrow">My toolkit</p>
            <h2>Built for the whole picture.</h2>
          </div>
          <p className="section-copy">
            I bring together thoughtful engineering and practical analysis to
            build products that work beautifully and solve real problems.
          </p>
        </div>
        <div className="card">
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
