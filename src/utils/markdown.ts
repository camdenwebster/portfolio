import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for the browser
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

export interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
  content: string;
}

const BLOG_POSTS = [
  {
    "slug": "3-key-lesson-community-college",
    "path": "/content/blog/3-key-lesson-community-college.md"
  }
];

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    console.log(`Fetching blog post with slug: ${slug}`);
    const post = BLOG_POSTS.find(p => p.slug === slug);
    
    if (!post) {
      throw new Error(`Post not found with slug: ${slug}`);
    }

    const response = await fetch(post.path);
    console.log(`Fetch response status: ${response.status}`);
    
    if (!response.ok) {
      throw new Error(`Failed to load post: ${response.statusText}`);
    }
    
    const markdown = await response.text();
    console.log('Markdown content received:', markdown.slice(0, 100) + '...');
    
    const { data, content } = matter(markdown);
    console.log('Parsed frontmatter:', data);
    
    // Ensure all required fields are present with default values if missing
    return {
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toLocaleDateString(),
      tags: Array.isArray(data.tags) ? data.tags : [],
      excerpt: data.excerpt || 'No excerpt available',
      slug,
      content: content || ''
    };
  } catch (error) {
    console.error('Error in getPostBySlug:', error);
    return null;
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    console.log('Getting all posts...');
    
    const posts = await Promise.all(
      BLOG_POSTS.map(async ({ slug }) => {
        const post = await getPostBySlug(slug);
        console.log(`Post result for ${slug}:`, post ? 'found' : 'not found');
        return post;
      })
    );

    const filteredPosts = posts.filter((post): post is BlogPost => post !== null);
    console.log(`Found ${filteredPosts.length} valid posts`);

    return filteredPosts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
} 