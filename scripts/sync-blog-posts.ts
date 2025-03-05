import fs from 'fs';
import path from 'path';

const BLOG_SOURCE_DIR = process.env.BLOG_SOURCE_DIR || '';
const BLOG_DEST_DIR = path.join(process.cwd(), 'public', 'content', 'blog');
const MARKDOWN_TS_PATH = path.join(process.cwd(), 'src', 'utils', 'markdown.ts');

// Ensure source directory is provided
if (!BLOG_SOURCE_DIR) {
  console.error('Error: BLOG_SOURCE_DIR environment variable is required');
  process.exit(1);
}

// Create destination directory if it doesn't exist
if (!fs.existsSync(BLOG_DEST_DIR)) {
  fs.mkdirSync(BLOG_DEST_DIR, { recursive: true });
}

// Copy blog posts from source to destination
console.log('Syncing blog posts...');
const sourceFiles = fs.readdirSync(BLOG_SOURCE_DIR)
  .filter(file => file.endsWith('.md'));

sourceFiles.forEach(file => {
  const sourcePath = path.join(BLOG_SOURCE_DIR, file);
  const destPath = path.join(BLOG_DEST_DIR, file);
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Copied ${file}`);
});

// Update BLOG_POSTS array in markdown.ts
console.log('\nUpdating BLOG_POSTS array...');

// Read all markdown files in the destination directory
const blogPosts = fs.readdirSync(BLOG_DEST_DIR)
  .filter(file => file.endsWith('.md'))
  .map(file => ({
    slug: path.basename(file, '.md'),
    path: `/content/blog/${file}`
  }));

// Read the current markdown.ts file
let markdownTs = fs.readFileSync(MARKDOWN_TS_PATH, 'utf-8');

// Find the BLOG_POSTS array in the file
const blogPostsRegex = /const BLOG_POSTS = \[([\s\S]*?)\];/;
const newBlogPostsArray = `const BLOG_POSTS = ${JSON.stringify(blogPosts, null, 2)};`;

// Replace the existing array with the new one
markdownTs = markdownTs.replace(blogPostsRegex, newBlogPostsArray);

// Write the updated content back to markdown.ts
fs.writeFileSync(MARKDOWN_TS_PATH, markdownTs);

console.log('Successfully updated BLOG_POSTS array');
console.log(`\nSynced ${sourceFiles.length} blog posts`); 