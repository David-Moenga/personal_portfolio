import { projects as sampleProjects } from "./data";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

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

async function request<T>(endpoint: string): Promise<T | null> {
  try {
    const result = await fetch(`${API_URL}${endpoint}`, { next: { revalidate: 60 } });
    return result.ok ? result.json() : null;
  } catch {
    return null;
  }
}

export async function getProjects(): Promise<PortfolioProject[]> {
  const response = await request<PortfolioProject[] | { results: PortfolioProject[] }>("/projects/");
  if (Array.isArray(response)) return response;
  if (response && "results" in response) return response.results;
  return sampleProjects.map((project, index) => ({
    id: index,
    title: project.title,
    slug: project.title.toLowerCase().replaceAll(" ", "-"),
    summary: project.description,
    description: project.description,
    image: "",
    technologies: project.tags,
    highlights: [],
    status: "completed",
    featured: index < 3,
    repository_url: "",
    live_url: "",
    created_at: new Date().toISOString(),
  }));
}

export async function getProject(slug: string): Promise<PortfolioProject | null> {
  const response = await request<PortfolioProject>(`/projects/${slug}/`);
  return response;
}

export async function getPosts(): Promise<BlogPost[]> {
  const response = await request<BlogPost[] | { results: BlogPost[] }>("/posts/");
  return Array.isArray(response) ? response : response?.results ?? [];
}

export type Skill = {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  order: number;
};

export async function getSkills(): Promise<string[]> {
  const response = await request<Skill[] | { results: Skill[] }>("/skills/");
  const skills = Array.isArray(response) ? response : response?.results ?? [];
  return skills.map((s) => s.name);
}

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

export async function getExperience(): Promise<Experience[]> {
  const response = await request<Experience[] | { results: Experience[] }>("/experience/");
  return Array.isArray(response) ? response : response?.results ?? [];
}
