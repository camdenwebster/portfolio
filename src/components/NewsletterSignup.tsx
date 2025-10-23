import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Replace with your MailerLite form endpoint
    // Sign up at https://www.mailerlite.com/
    // Create a form and get the form endpoint URL
    const MAILERLITE_FORM_ENDPOINT = 'YOUR_MAILERLITE_FORM_ENDPOINT';

    try {
      // This is a placeholder - you'll need to implement the actual API call
      // based on your chosen email service provider (MailerLite, Kit, etc.)

      // For MailerLite, you would typically:
      // 1. Create an embedded form in your MailerLite account
      // 2. Use their provided JavaScript snippet or API endpoint
      // 3. Send a POST request with the email address

      // Example placeholder:
      if (!MAILERLITE_FORM_ENDPOINT.startsWith('YOUR_')) {
        const response = await fetch(MAILERLITE_FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setStatus('success');
          setMessage('Thanks for subscribing! Check your email to confirm.');
          setEmail('');
        } else {
          throw new Error('Subscription failed');
        }
      } else {
        // Development mode - simulate success
        setStatus('success');
        setMessage('Newsletter integration pending - sign up for MailerLite to activate');
        setEmail('');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-lg p-8 shadow-lg">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-primary-100 mb-6">
          Get notified about new blog posts and updates. No spam, unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-transparent focus:border-white focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${
              status === 'success' ? 'text-green-100' : 'text-red-100'
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-primary-200 text-xs mt-4">
          Free forever. 1,000 subscribers included.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
