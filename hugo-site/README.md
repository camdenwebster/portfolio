# Camden Webster Portfolio - Hugo + Hextra

This is the Hugo version of Camden Webster's portfolio, migrated from React to use Hugo static site generator with the Hextra theme for reduced maintenance overhead and improved performance.

## 🚀 Quick Start

### Prerequisites

1. **Install Hugo Extended** (required for SCSS processing):
   ```bash
   # On macOS
   brew install hugo
   
   # On Ubuntu/Debian
   sudo apt install hugo
   
   # Or download directly
   curl -L https://github.com/gohugoio/hugo/releases/download/v0.134.3/hugo_extended_0.134.3_linux-amd64.tar.gz | tar -xz
   sudo mv hugo /usr/local/bin/
   ```

2. **Verify installation**:
   ```bash
   hugo version
   # Should show Hugo Extended v0.134.3 or later
   ```

### Setup and Development

1. **Initialize Hugo modules** (first time only):
   ```bash
   cd hugo-site
   hugo mod init github.com/camdenwebster/portfolio
   hugo mod get github.com/imfing/hextra
   ```

2. **Start development server**:
   ```bash
   hugo server --buildDrafts --buildFuture
   # or
   npm run dev
   ```

3. **View site**: Open http://localhost:1313

### Building for Production

```bash
# Clean previous builds
hugo --gc --minify

# Or using npm
npm run build
```

The built site will be in the `public/` directory.

## 📁 Project Structure

```
hugo-site/
├── content/
│   ├── _index.md           # Homepage content
│   └── blog/
│       ├── _index.md       # Blog listing page
│       └── *.md           # Blog posts
├── layouts/
│   └── _default/
│       └── home.html       # Custom homepage layout
├── static/
│   ├── headshot.png        # Profile image
│   └── resume.pdf          # Resume file
├── hugo.toml              # Hugo configuration
├── go.mod                 # Hugo modules configuration
└── package.json           # NPM scripts
```

## 🎨 Customization

### Theme Configuration

The site uses the Hextra theme with custom configurations in `hugo.toml`:

- **Navigation**: Configured in `[menu.main]` section
- **Colors**: Customized via Hextra's built-in dark/light mode
- **Features**: Search, responsive design, syntax highlighting

### Content Management

#### Adding Blog Posts

Create a new markdown file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: 2025-06-25
tags: ["tag1", "tag2"]
categories: ["Category"]
description: "Brief description"
draft: false
---

Your content here...
```

#### Updating Portfolio Content

Edit `content/_index.md` to update:
- Hero section content
- About me information
- Project descriptions
- Contact information

## 🔧 Migration from React

This Hugo site recreates the functionality of the original React portfolio:

### Completed Features ✅
- Hero section with professional photo and introduction
- About section with experience and education
- Projects showcase with detailed descriptions
- Blog system with markdown support
- Dark/light mode theme switching
- Responsive design
- SEO optimization

### Key Improvements
- **Performance**: Static generation = faster loading
- **SEO**: Better search engine optimization
- **Maintenance**: No framework dependencies to update
- **Hosting**: Can be hosted anywhere that serves static files
- **Content**: Easier content management with markdown

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `hugo --gc --minify`
3. Set publish directory: `public`
4. Deploy

### Vercel
1. Import project to Vercel
2. Framework preset: Hugo
3. Build command: `hugo --gc --minify`
4. Output directory: `public`

### GitHub Pages
1. Use GitHub Actions workflow (can be provided if needed)
2. Configure Pages to serve from `gh-pages` branch

## 📚 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Serve built site locally
npm run serve

# Clean build artifacts
npm run clean
```

## 🎯 Next Steps

1. **Test locally**: Run `hugo server` and verify all content displays correctly
2. **Customize styling**: Modify layouts and add custom CSS as needed
3. **Add missing sections**: Skills, Experience components if needed
4. **Setup deployment**: Choose hosting provider and configure build pipeline
5. **Update DNS**: Point domain to new Hugo site when ready

## 🔗 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hextra Theme](https://github.com/imfing/hextra)
- [Hugo Modules](https://gohugo.io/hugo-modules/)
- [Markdown Guide](https://www.markdownguide.org/)

## 📞 Support

If you need help with the migration or have questions about the Hugo setup, feel free to reach out!