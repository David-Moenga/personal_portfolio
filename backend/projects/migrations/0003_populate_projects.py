from django.db import migrations


def populate_projects(apps, schema_editor):
    Project = apps.get_model("projects", "Project")

    projects = [
        {
            "title": "TrustMall",
            "slug": "trustmall",
            "summary": "A decentralized escrow-powered marketplace enabling secure and transparent trade between buyers and sellers.",
            "description": "TrustMall is a blockchain-based marketplace that uses escrow smart contracts to ensure secure transactions. Buyers can purchase goods with confidence, knowing their funds are held in escrow until the seller delivers. The platform supports multiple cryptocurrencies and provides a transparent dispute resolution mechanism.",
            "repository_url": "https://github.com/David-Moenga/new_trustmall",
            "live_url": "",
            "technologies": ["TypeScript", "Next.js", "Solidity", "Stellar", "Tailwind CSS"],
            "highlights": [
                "Smart contract-based escrow system",
                "Multi-cryptocurrency support",
                "Dispute resolution mechanism",
                "Real-time transaction tracking",
            ],
            "status": "completed",
            "featured": True,
        },
        {
            "title": "SwiftSend",
            "slug": "swiftsend",
            "summary": "A cross-border money transfer platform leveraging Stellar blockchain for fast, low-cost remittances.",
            "description": "SwiftSend is a fintech application that enables users to send money across borders using Stellar blockchain technology. The platform offers competitive exchange rates, near-instant settlements, and lower fees compared to traditional remittance services. Features include transaction history, withdrawal tracking, and a secure wallet system.",
            "repository_url": "https://github.com/David-Moenga/SwiftSend1",
            "live_url": "",
            "technologies": ["React", "Vite", "Django", "Stellar", "Python", "JWT"],
            "highlights": [
                "Stellar blockchain integration",
                "JWT authentication system",
                "Withdrawal tracking",
                "Transaction history",
                "Route-guarded protected pages",
            ],
            "status": "completed",
            "featured": True,
        },
        {
            "title": "CineScope",
            "slug": "cinescope",
            "summary": "A movie discovery app with trending titles, search, and personalized recommendations powered by TMDB API.",
            "description": "CineScope is a modern movie discovery application that lets users browse trending movies, search for titles, and explore detailed information about films. Built with React and Vite, it integrates with the TMDB API for real-time movie data and Appwrite for search-trend tracking.",
            "repository_url": "https://github.com/David-Moenga/Movie_Recomination_app",
            "live_url": "",
            "technologies": ["React", "Vite", "TMDB API", "Appwrite", "JavaScript"],
            "highlights": [
                "TMDB API integration",
                "Trending movies discovery",
                "Advanced search functionality",
                "Search trend tracking with Appwrite",
                "Responsive modern design",
            ],
            "status": "completed",
            "featured": True,
        },
        {
            "title": "ncAGENTS",
            "slug": "ncagents",
            "summary": "An AI agent management platform for creating, deploying, and collaborating with intelligent AI agents.",
            "description": "ncAGENTS is a comprehensive AI agent management platform that democratizes AI development. It provides tools for creating custom AI agents with advanced memory systems, multi-agent collaboration, voice interaction, and blockchain integration. Features include agent templates, performance analytics, and an agent marketplace.",
            "repository_url": "https://github.com/David-Moenga/Agend49",
            "live_url": "",
            "technologies": ["TypeScript", "React", "Tailwind CSS", "Framer Motion", "ElevenLabs", "Stellar"],
            "highlights": [
                "AI agent creation and management",
                "Multi-agent collaboration",
                "Voice interaction (ElevenLabs)",
                "Blockchain wallet integration",
                "Agent marketplace",
            ],
            "status": "completed",
            "featured": True,
        },
        {
            "title": "E-Commerce Platform",
            "slug": "ecommerce-platform",
            "summary": "A full-stack e-commerce application with Django backend and React frontend.",
            "description": "A complete e-commerce solution built with Django REST Framework backend and React frontend. Features include product catalog, shopping cart, user authentication, order management, and payment integration.",
            "repository_url": "https://github.com/David-Moenga/E-Commerce-platform",
            "live_url": "",
            "technologies": ["Django", "React", "PostgreSQL", "REST API", "Python"],
            "highlights": [
                "Full-stack architecture",
                "User authentication",
                "Shopping cart functionality",
                "Order management system",
            ],
            "status": "completed",
            "featured": False,
        },
        {
            "title": "Statistics & SQL Data Analysis",
            "slug": "statistics-sql-data-analysis",
            "summary": "A comprehensive data analysis project covering statistics, probability, and SQL data preparation.",
            "description": "An in-depth exploration of statistical methods, probability theory, and SQL data preparation techniques. This project demonstrates practical applications of statistical analysis on real-world datasets using Jupyter Notebooks.",
            "repository_url": "https://github.com/David-Moenga/statistics_sql_and_data_analysis",
            "live_url": "",
            "technologies": ["Jupyter Notebook", "Python", "SQL", "Pandas", "Statistics"],
            "highlights": [
                "Statistical analysis",
                "Probability theory",
                "SQL data preparation",
                "Data visualization",
            ],
            "status": "completed",
            "featured": False,
        },
        {
            "title": "Exploratory Data Analysis",
            "slug": "exploratory-data-analysis",
            "summary": "Working with messy datasets to explore, summarize, and visualize data to understand patterns and relationships.",
            "description": "A hands-on data analysis project focused on cleaning, exploring, and visualizing messy datasets. Covers data quality assessment, pattern detection, anomaly identification, and relationship analysis before applying machine learning models.",
            "repository_url": "https://github.com/David-Moenga/ExploratoryDataAnalysis",
            "live_url": "",
            "technologies": ["Jupyter Notebook", "Python", "Pandas", "Matplotlib", "Seaborn"],
            "highlights": [
                "Data cleaning and preparation",
                "Pattern detection",
                "Anomaly identification",
                "Interactive visualizations",
            ],
            "status": "completed",
            "featured": False,
        },
        {
            "title": "Portfolio Creator",
            "slug": "portfolio-creator",
            "summary": "A Flask-based web application for creating and managing professional portfolios with authentication and security.",
            "description": "A web application built with Flask that helps users create and manage professional portfolios. Implements authentication, authorization, and security best practices. Users can customize their portfolio content and share it with potential employers.",
            "repository_url": "https://github.com/David-Moenga/Porfolio_Creator",
            "live_url": "",
            "technologies": ["Flask", "HTML", "CSS", "Python", "Authentication"],
            "highlights": [
                "User authentication system",
                "Authorization and security",
                "Portfolio customization",
                "Responsive design",
            ],
            "status": "completed",
            "featured": False,
        },
        {
            "title": "Customer Review Site",
            "slug": "customer-review-site",
            "summary": "A single-page application helping small business owners collect feedback and reviews from customers.",
            "description": "A lightweight single-page application designed for small business owners to gather customer feedback and reviews. Features an intuitive interface for submitting reviews and a dashboard for business owners to view and analyze feedback.",
            "repository_url": "https://github.com/David-Moenga/customer-review-site",
            "live_url": "",
            "technologies": ["JavaScript", "HTML", "CSS", "React"],
            "highlights": [
                "Review submission system",
                "Business dashboard",
                "Feedback analytics",
                "Mobile-responsive design",
            ],
            "status": "completed",
            "featured": False,
        },
        {
            "title": "ChamaApp",
            "slug": "chamaapp",
            "summary": "A prototype application automating operations for traditional chama savings groups.",
            "description": "ChamaApp is a prototype application designed to automate the operations of traditional chama savings groups. Features include member management, contribution tracking, loan management, and financial reporting.",
            "repository_url": "https://github.com/David-Moenga/chamapp",
            "live_url": "",
            "technologies": ["JavaScript", "React", "Node.js"],
            "highlights": [
                "Member management",
                "Contribution tracking",
                "Loan management",
                "Financial reporting",
            ],
            "status": "completed",
            "featured": False,
        },
        {
            "title": "Apple Clone",
            "slug": "apple-clone",
            "summary": "A pixel-perfect Apple products showcase built with React, Tailwind CSS, and GSAP animations.",
            "description": "A stunning clone of Apple's product showcase website, built to master GSAP animations and modern React development. Features smooth scroll animations, responsive design, and pixel-perfect UI replication.",
            "repository_url": "https://github.com/David-Moenga/Apple-Clone",
            "live_url": "",
            "technologies": ["React", "Tailwind CSS", "GSAP", "JavaScript"],
            "highlights": [
                "GSAP scroll animations",
                "Pixel-perfect UI",
                "Responsive design",
                "Modern React patterns",
            ],
            "status": "completed",
            "featured": False,
        },
        {
            "title": "Everything About AI",
            "slug": "everything-about-ai",
            "summary": "A curated collection of learning resources for Generative AI, Machine Learning, Agentic AI, LLMs, RAG, and MLOps.",
            "description": "A comprehensive curated collection of AI learning resources covering Generative AI, Machine Learning, Agentic AI, Large Language Models, Retrieval-Augmented Generation, Fine-tuning, and MLOps. Serves as a knowledge hub for AI enthusiasts.",
            "repository_url": "https://github.com/David-Moenga/everything_about_ai",
            "live_url": "",
            "technologies": ["AI", "Machine Learning", "LLMs", "RAG", "MLOps"],
            "highlights": [
                "Curated AI resources",
                "Learning paths",
                "Practical guides",
                "Community contributions",
            ],
            "status": "maintained",
            "featured": False,
        },
        {
            "title": "Vendas.co.ke",
            "slug": "vendas-coke",
            "summary": "A live e-commerce platform hosted at vendas.co.ke, showcasing full-stack development and deployment expertise.",
            "description": "Vendas.co.ke is a fully functional e-commerce platform that demonstrates end-to-end development and deployment capabilities. The platform is live and serving real users, showcasing practical experience with production systems, domain hosting, and real-world problem solving.",
            "repository_url": "",
            "live_url": "https://vendas.co.ke",
            "technologies": ["Full-Stack", "E-Commerce", "Web Hosting", "Production"],
            "highlights": [
                "Live production deployment",
                "Custom domain hosting",
                "Real-world user traffic",
                "End-to-end development",
            ],
            "status": "maintained",
            "featured": True,
        },
    ]

    for project_data in projects:
        Project.objects.get_or_create(
            slug=project_data["slug"],
            defaults=project_data,
        )


def reverse_populate(apps, schema_editor):
    Project = apps.get_model("projects", "Project")
    Project.objects.filter(slug__in=[
        "trustmall", "swiftsend", "cinescope", "ncagents",
        "ecommerce-platform", "statistics-sql-data-analysis",
        "exploratory-data-analysis", "portfolio-creator",
        "customer-review-site", "chamapp", "apple-clone",
        "everything-about-ai", "vendas-coke",
    ]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("projects", "0002_add_status_and_highlights"),
    ]

    operations = [
        migrations.RunPython(populate_projects, reverse_populate),
    ]
