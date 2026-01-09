# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start Astro development server
- `npm run build` - Build for production (includes type checking)
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

### Blog Management
- `npm run sync-blog` - Sync blog posts from external source (e.g., Obsidian vault)
- Set `BLOG_SOURCE_DIR` environment variable to point to your blog source directory

## Architecture Overview

This is a modern portfolio website built with Astro, Tailwind CSS, and TypeScript.

### Key Structure
- **Static Site Generator**: Built with Astro for optimal performance and SEO
- **Content Collections**: Blog posts managed through Astro's built-in content collections
- **Component Architecture**: Page sections are individual Astro components (Hero, About, Projects, etc.)
- **File-based Routing**: Routes automatically generated from files in `src/pages/`
- **No Dark Mode**: Light mode only design

### Blog Post Management
- Blog posts are markdown files in `src/content/blog/`
- Each post must have frontmatter with: `title`, `date`, `excerpt`, and `tags`
- Astro automatically generates routes for all posts via Content Collections
- The sync script copies posts from external source to `src/content/blog/`
- No manual configuration needed - Astro handles everything automatically

### Routing
- `/` - Main portfolio page with all sections (Hero, About, Projects, Skills, Experience, Blog, Contact)
- `/blog` - Blog listing page showing all posts
- `/blog/[slug]` - Individual blog post pages (dynamically generated)
- Uses hash-based navigation (#about, #projects, etc.) for sections on the main page

### Styling
- Tailwind CSS with custom indigo/blue color palette
- Typography plugin for markdown content styling
- Global styles in `src/styles/global.css`
- Responsive design with mobile-first approach

### Build Configuration
- Astro with Tailwind integration
- TypeScript with strictest settings
- Static site generation (SSG) - all pages pre-rendered at build time
- Output directory: `dist/`

### Content Management

#### Adding/Editing Content
- **Hero**: Edit `src/components/Hero.astro`
- **About**: Edit `src/components/About.astro`
- **Projects**: Edit the `projects` array in `src/components/Projects.astro`
- **Skills**: Edit the `skillCategories` array in `src/components/Skills.astro`
- **Experience**: Edit the `experiences` array in `src/components/Experience.astro`
- **Contact**: Edit social links and contact info in `src/components/Contact.astro`
- **Blog Posts**: Add `.md` files to `src/content/blog/` with proper frontmatter

#### Static Assets
- Images, PDFs, and other static files go in `public/`
- Referenced without `/public` prefix (e.g., `/headshot-2025.webp`)
