import { projects as sampleProjects } from "./data";

export type PortfolioProject = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  status: string;
  featured: boolean;
  repository_url: string;
  live_url: string;
  created_at: string;
};

export type BlogPost = { title: string; slug: string; excerpt: string; published_at: string | null };

export type Skill = {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  order: number;
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  location: string;
  start_date: string;
  end_date: string | null;
  description: string;
  technologies: string[];
};

export async function getProjects(): Promise<PortfolioProject[]> {
  return sampleProjects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    slug: project.title.toLowerCase().replaceAll(" ", "-"),
    summary: project.description,
    description: project.description,
    image: "",
    technologies: project.tags,
    highlights: [],
    status: "completed",
    featured: index < 4,
    repository_url: "",
    live_url: "",
    created_at: new Date().toISOString(),
  }));
}

export async function getProject(slug: string): Promise<PortfolioProject | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export async function getPosts(): Promise<BlogPost[]> {
  return [];
}

export async function getSkills(): Promise<string[]> {
  return ["Python", "JavaScript", "TypeScript", "Django", "Next.js", "React", "PostgreSQL", "SQL", "Git & GitHub", "Data Analysis", "REST APIs", "Power BI", "Stellar", "Solidity", "Docker"];
}

export async function getExperience(): Promise<Experience[]> {
  return [
    {
      id: 1,
      company: "Freelance",
      role: "Software Engineer",
      location: "Nairobi, Kenya",
      start_date: "2024-01-01",
      end_date: null,
      description: "Designing and developing full-stack web applications using modern frameworks. Building scalable APIs, responsive frontends, and integrating blockchain technologies for fintech solutions.",
      technologies: ["Python", "Django", "React", "Next.js", "PostgreSQL", "Stellar"],
    },
    {
      id: 2,
      company: "Data Science Africa",
      role: "Data Analyst",
      location: "Nairobi, Kenya",
      start_date: "2023-06-01",
      end_date: "2024-12-31",
      description: "Analyzed complex datasets to extract actionable insights. Built interactive dashboards and reports for stakeholders. Conducted statistical analysis and predictive modeling to support business decisions.",
      technologies: ["Python", "SQL", "Pandas", "Power BI", "Tableau", "Statistics"],
    },
    {
      id: 3,
      company: "Decodelabs",
      role: "Data Science Intern",
      location: "Nairobi, Kenya",
      start_date: "2023-01-01",
      end_date: "2023-05-31",
      description: "Assisted in data collection, cleaning, and analysis. Developed machine learning models for predictive analytics. Created data visualizations and presentations for team meetings.",
      technologies: ["Python", "Scikit-learn", "Jupyter", "Data Visualization", "Machine Learning"],
    },
  ];
}
