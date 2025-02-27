import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show validation errors
    setTouched({
      name: true,
      email: true,
      message: true
    });

    // Check if form is valid
    if (formState.name && formState.email && formState.message) {
      // Form is valid, show success modal
      setShowSuccessModal(true);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset touched state
      setTouched({
        name: false,
        email: false,
        message: false
      });
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Get in Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@camdenwebster.dev"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Mail size={20} />
                  contact@camdenwebster.dev
                </a>
                <a
                  href="https://github.com/camdenwebster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Github size={20} />
                  github.com/camdenwebster
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 dark:text-white">Send a Message</h3>
              <form 
                className="space-y-4"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Netlify form hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border ${
                      touched.name && !formState.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-dark-border focus:ring-primary-500'
                    } bg-white dark:bg-dark-card text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:border-transparent`}
                    required
                  />
                  {touched.name && !formState.name && (
                    <p className="mt-1 text-sm text-red-500">Name is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border ${
                      touched.email && !formState.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-dark-border focus:ring-primary-500'
                    } bg-white dark:bg-dark-card text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:border-transparent`}
                    required
                  />
                  {touched.email && !formState.email && (
                    <p className="mt-1 text-sm text-red-500">Email is required</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border ${
                      touched.message && !formState.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-dark-border focus:ring-primary-500'
                    } bg-white dark:bg-dark-card text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:border-transparent`}
                    required
                  ></textarea>
                  {touched.message && !formState.message && (
                    <p className="mt-1 text-sm text-red-500">Message is required</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-bg rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center text-center">
              <CheckCircle size={64} className="text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 dark:text-white">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your message has been sent successfully. I'll be in touch with you soon!
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;