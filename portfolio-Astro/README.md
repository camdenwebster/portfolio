# Camden Webster - Astro Portfolio

A modern, performant portfolio website built with Astro, Tailwind CSS, and TypeScript.

## 🚀 Features

- **Fast & Lightweight**: Built with Astro for optimal performance
- **Modern Design**: Clean, responsive design using Tailwind CSS
- **Blog System**: Integrated blog using Astro Content Collections
- **TypeScript**: Fully typed for better development experience
- **SEO Friendly**: Optimized for search engines
- **Static Site Generation**: Pre-rendered pages for fast loading

## 📦 Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Beautiful typography for markdown content

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Blog Management

### Syncing Blog Posts

To sync blog posts from an external source (e.g., Obsidian vault):

```bash
BLOG_SOURCE_DIR=/path/to/blog/posts npm run sync-blog
```

This will copy markdown files from your source directory to `src/content/blog/`.

### Blog Post Format

Blog posts should be markdown files with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Adding Blog Posts Manually

1. Create a new `.md` file in `src/content/blog/`
2. Add the required frontmatter (title, date, excerpt, tags)
3. Write your content in markdown
4. The post will automatically appear on the blog pages

## 📂 Project Structure

```
/
├── public/              # Static assets (images, PDFs, etc.)
├── scripts/             # Build and utility scripts
│   └── sync-blog-posts.ts
├── src/
│   ├── components/      # Astro components
│   │   ├── About.astro
│   │   ├── Blog.astro
│   │   ├── Contact.astro
│   │   ├── Experience.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── content/         # Content collections
│   │   ├── blog/        # Blog posts
│   │   └── config.ts    # Content collection config
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Routes
│   │   ├── blog/
│   │   │   ├── [slug].astro  # Dynamic blog post page
│   │   │   └── index.astro   # Blog listing page
│   │   └── index.astro       # Home page
│   └── styles/          # Global styles
│       └── global.css
├── astro.config.mjs     # Astro configuration
├── package.json
├── tailwind.config.mjs  # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.mjs`. The primary color palette uses indigo/blue shades.

### Content

- **Hero Section**: Edit `src/components/Hero.astro`
- **About Section**: Edit `src/components/About.astro`
- **Projects**: Edit the `projects` array in `src/components/Projects.astro`
- **Skills**: Edit the `skillCategories` array in `src/components/Skills.astro`
- **Experience**: Edit the `experiences` array in `src/components/Experience.astro`
- **Contact**: Edit `src/components/Contact.astro`

## 🚀 Deployment

This site can be deployed to any static hosting service:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)

Simply connect your repository and configure the build command:

```bash
npm run build
```

And the output directory:

```
dist
```

## 📄 License

© 2026 Camden Webster. All rights reserved.
