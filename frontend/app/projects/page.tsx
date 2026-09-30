"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { getProjects, PortfolioProject } from "../../lib/api";

export default function ProjectsPage() {
  const [projects] = useState<PortfolioProject[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [loaded, setLoaded] = useState(false);

  useState(() => {
    getProjects().then((data) => {
      setProjects(data);
      setLoaded(true);
    });
  });

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach((p) => p.technologies?.forEach((t) => techs.add(t)));
    return Array.from(techs).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.technologies?.includes(filter));
  }, [projects, filter]);

  return (
    <>
      <section className="shell page-hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Selected projects.</h1>
        <p className="lead">
          A collection of web applications, data projects, and tools I&apos;ve built to learn, explore, and solve real problems.
        </p>
      </section>

      <section className="shell section">
        <div className="filter-bar">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? "active" : ""}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {!loaded ? (
          <div className="loading">Loading projects...</div>
        ) : (
          <div className="grid">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
