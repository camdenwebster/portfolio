import React, { useState } from 'react';
import { Mail, Github, Linkedin, CheckCircle, X, FileText, MessageCircle, Bird, Hash } from 'lucide-react';

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
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Social Media Column */}
              <div className="text-center md:text-right md:pr-6">
                <h3 className="text-xl font-bold mb-6 dark:text-white">Social Media</h3>
                <div className="space-y-4">
                  <a
                    href="https://x.com/ciwebs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors justify-center md:justify-end"
                  >
                    <Hash size={20} />
                    Twitter/X
                  </a>
                  <a
                    href="https://iosdev.space/@camdeniw@iosdev.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors justify-center md:justify-end"
                  >
                    <MessageCircle size={20} />
                    Mastodon
                  </a>
                  <a
                    href="https://bsky.app/profile/camdeniw.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors justify-center md:justify-end"
                  >
                    <Bird size={20} />
                    BlueSky
                  </a>
                  <a
                    href="https://linkedin.com/in/camdenwebster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors justify-center md:justify-end"
                  >
                    <Linkedin size={20} />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Contact Information Column */}
              <div className="text-center md:text-left md:pl-6">
                <h3 className="text-xl font-bold mb-6 dark:text-white">Contact & Portfolio</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@camdenwebster.dev"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors justify-center md:justify-start"
                  >
                    <Mail size={20} />
                    hello@camdenwebster.dev
                  </a>
                  <a
                    href="https://github.com/camdenwebster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors justify-center md:justify-start"
                  >
                    <Github size={20} />
                    github.com/camdenwebster
                  </a>
                  <a
                    href="/Resume-CamdenWebster-iOS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors justify-center md:justify-start"
                  >
                    <FileText size={20} />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;