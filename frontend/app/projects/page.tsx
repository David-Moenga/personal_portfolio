import { ProjectCard } from "../../components/ProjectCard";
import { getProjects } from "../../lib/api";
export default async function ProjectsPage() { const projects = await getProjects(); return <><section className="shell page-hero"><p className="eyebrow">Portfolio</p><h1>Selected projects.</h1><p className="lead">A collection of web applications and data projects I&apos;ve used to learn, explore, and solve problems.</p></section><section className="shell section"><div className="grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section></>; }
