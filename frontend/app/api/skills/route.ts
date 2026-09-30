import { NextResponse } from "next/server";

const skills = [
  { id: 1, name: "Python", category: "Backend", proficiency: 90, order: 1 },
  { id: 2, name: "JavaScript", category: "Frontend", proficiency: 85, order: 2 },
  { id: 3, name: "TypeScript", category: "Frontend", proficiency: 80, order: 3 },
  { id: 4, name: "Django", category: "Backend", proficiency: 85, order: 4 },
  { id: 5, name: "Next.js", category: "Frontend", proficiency: 90, order: 5 },
  { id: 6, name: "React", category: "Frontend", proficiency: 88, order: 6 },
  { id: 7, name: "PostgreSQL", category: "Database", proficiency: 80, order: 7 },
  { id: 8, name: "SQL", category: "Database", proficiency: 85, order: 8 },
  { id: 9, name: "Git & GitHub", category: "Tools", proficiency: 90, order: 9 },
  { id: 10, name: "Data Analysis", category: "Data", proficiency: 85, order: 10 },
  { id: 11, name: "REST APIs", category: "Backend", proficiency: 88, order: 11 },
  { id: 12, name: "Power BI", category: "Data", proficiency: 75, order: 12 },
  { id: 13, name: "Stellar", category: "Blockchain", proficiency: 70, order: 13 },
  { id: 14, name: "Solidity", category: "Blockchain", proficiency: 65, order: 14 },
  { id: 15, name: "Docker", category: "DevOps", proficiency: 70, order: 15 },
];

export async function GET() {
  return NextResponse.json(skills);
}
