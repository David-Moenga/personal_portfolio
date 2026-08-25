import { projects as sampleProjects } from "./data";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";
export type PortfolioProject = { title: string; slug: string; summary: string; image: string; technologies: string[]; featured: boolean };
export type BlogPost = { title: string; slug: string; excerpt: string; published_at: string | null };
async function request<T>(endpoint: string): Promise<T | null> { try { const result = await fetch(`${API_URL}${endpoint}`, { next: { revalidate: 60 } }); return result.ok ? result.json() : null; } catch { return null; } }
export async function getProjects(): Promise<PortfolioProject[]> { const response = await request<PortfolioProject[] | { results: PortfolioProject[] }>("/projects/"); if (Array.isArray(response)) return response; if (response && "results" in response) return response.results; return sampleProjects.map((project, index) => ({ title: project.title, slug: project.title.toLowerCase().replaceAll(" ", "-"), summary: project.description, image: "", technologies: project.tags, featured: index < 3 })); }
export async function getPosts(): Promise<BlogPost[]> { const response = await request<BlogPost[] | { results: BlogPost[] }>("/posts/"); return Array.isArray(response) ? response : response?.results ?? []; }
