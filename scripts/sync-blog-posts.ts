import fs from 'fs';
import path from 'path';

const BLOG_SOURCE_DIR = process.env.BLOG_SOURCE_DIR || '';
const BLOG_DEST_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

// Ensure source directory is provided
if (!BLOG_SOURCE_DIR) {
  console.error('Error: BLOG_SOURCE_DIR environment variable is required');
  console.error('Usage: BLOG_SOURCE_DIR=/path/to/blog/posts npm run sync-blog');
  process.exit(1);
}

// Ensure source directory exists
if (!fs.existsSync(BLOG_SOURCE_DIR)) {
  console.error(`Error: Source directory does not exist: ${BLOG_SOURCE_DIR}`);
  process.exit(1);
}

// Create destination directory if it doesn't exist
if (!fs.existsSync(BLOG_DEST_DIR)) {
  fs.mkdirSync(BLOG_DEST_DIR, { recursive: true });
  console.log(`Created destination directory: ${BLOG_DEST_DIR}`);
}

// Copy blog posts from source to destination
console.log('Syncing blog posts...');
console.log(`Source: ${BLOG_SOURCE_DIR}`);
console.log(`Destination: ${BLOG_DEST_DIR}`);

const sourceFiles = fs.readdirSync(BLOG_SOURCE_DIR)
  .filter(file => file.endsWith('.md'));

if (sourceFiles.length === 0) {
  console.log('No markdown files found in source directory');
  process.exit(0);
}

let copiedCount = 0;
sourceFiles.forEach(file => {
  const sourcePath = path.join(BLOG_SOURCE_DIR, file);
  const destPath = path.join(BLOG_DEST_DIR, file);

  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied: ${file}`);
    copiedCount++;
  } catch (error) {
    console.error(`✗ Failed to copy ${file}:`, error);
  }
});

console.log(`\nSuccessfully synced ${copiedCount} blog post(s)`);
console.log('\nNote: Astro automatically detects files in src/content/blog/');
console.log('No manual configuration needed!');
