import { NextResponse } from "next/server";

const experiences = [
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

export async function GET() {
  return NextResponse.json(experiences);
}
