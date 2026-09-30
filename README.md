# David Moenga — Personal Portfolio

A full-stack portfolio application with a Next.js frontend and Django REST API. It showcases projects, professional experience, skills, education, certifications, and technical writing, while Django Admin provides content management.

## Stack

- Frontend: Next.js 14, React, TypeScript
- Backend: Django, Django REST Framework
- Database: PostgreSQL

## Run locally

```
# Backend
cd backend
cp .env.example .env
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

```
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` for the portfolio and `http://localhost:8000/admin/` to manage its content.

## Adding your content

Add projects and posts in Django Admin. A project appears on the home page when its `featured` field is enabled. A post becomes public when its `published` field is enabled.

Place your photo at `frontend/public/profile.jpg` to display it in the home-page hero card. Until then, the `DM` placeholder is displayed.

## Features

- **Project Showcase**: Display your projects with detailed descriptions, technologies used, and links to source code or live demos
- **Project Filtering**: Filter projects by technology
- **Project Details**: Individual project pages with highlights and comprehensive information
- **Skills & Experience**: Showcase your professional skills and work experience
- **Blog**: Share your technical writing and insights
- **Contact Form**: Allow visitors to get in touch with you
- **Responsive Design**: Looks great on all devices
- **Admin Panel**: Easy content management through Django Admin

## About

[david-moenga.vercel.app](https://david-moenga.vercel.app)
