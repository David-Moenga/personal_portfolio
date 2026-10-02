const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

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

async function request<T>(endpoint: string): Promise<T | null> {
  try {
    const result = await fetch(`${API_URL}/api${endpoint}`, { next: { revalidate: 60 } });
    return result.ok ? result.json() : null;
  } catch {
    return null;
  }
}

export async function getProjects(): Promise<PortfolioProject[]> {
  const response = await request<PortfolioProject[]>("/projects/");
  return response ?? [];
}

export async function getProject(slug: string): Promise<PortfolioProject | null> {
  const response = await request<PortfolioProject>(`/projects/${slug}/`);
  return response;
}

export async function getPosts(): Promise<BlogPost[]> {
  const response = await request<BlogPost[]>("/posts/");
  return response ?? [];
}

export async function getSkills(): Promise<string[]> {
  const response = await request<Skill[]>("/skills/");
  const skills = response ?? [];
  return skills.map((s) => s.name);
}

export async function getExperience(): Promise<Experience[]> {
  const response = await request<Experience[]>("/experience/");
  return response ?? [];
}
