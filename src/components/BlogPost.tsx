import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostBySlug, BlogPost as BlogPostType } from '../utils/markdown';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        navigate('/blog');
        return;
      }

      try {
        const postData = await getPostBySlug(slug);
        if (!postData) {
          setError('Post not found');
          return;
        }

        setPost(postData);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 dark:text-red-400 mb-4">{error || 'Post not found'}</p>
        <button
          onClick={() => navigate('/blog')}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-200"
        >
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <header className="mb-8">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{post.date}</p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-4" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
            p: ({node, ...props}) => <p className="mb-4 text-gray-700 dark:text-gray-300" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />,
            code: ({node, inline, ...props}) => 
              inline ? (
                <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-sm" {...props} />
              ) : (
                <pre className="block p-4 rounded bg-gray-100 dark:bg-gray-800 font-mono text-sm overflow-x-auto">
                  <code {...props} />
                </pre>
              ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
        <button
          onClick={() => navigate('/blog')}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-200"
        >
          ← Back to Blog
        </button>
      </div>
    </article>
  );
};

export default BlogPost; 