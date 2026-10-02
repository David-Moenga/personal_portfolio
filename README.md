# David Moenga — Personal Portfolio

A modern, fully static portfolio website built with Next.js. Showcases projects, professional experience, skills, and provides a contact section.

## Stack

- Frontend: Next.js 14, React, TypeScript
- Styling: Custom CSS with CSS variables
- Deployment: Vercel / Netlify (static site)

## Features

- **Project Showcase**: Display your projects with detailed descriptions, technologies used, and links to source code or live demos
- **Project Filtering**: Filter projects by technology
- **Project Details**: Individual project pages with highlights and comprehensive information
- **Skills & Experience**: Showcase your professional skills and work experience
- **Contact Section**: Contact information and email form
- **Responsive Design**: Looks great on all devices
- **Modern UI**: Clean, modern design with smooth animations

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the portfolio.

## Deployment

This is a fully static site with no backend dependency. Deploy to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Project Structure
```
├── app/                # Next.js app router pages
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   ├── experience/     # Experience page
│   ├── projects/       # Projects page
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── ProfileImage.tsx
│   └── ProjectCard.tsx
├── lib/                # Data and utilities
│   ├── api.ts          # Static data (no backend)
│   └── data.ts         # Static project data
├── public/             # Static assets
└── package.json
```

## About

[david-moenga.vercel.app](https://david-moenga.vercel.app)
