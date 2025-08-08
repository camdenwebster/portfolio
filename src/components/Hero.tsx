import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-primary-950 dark:to-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-screen">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left pt-32 lg:pt-0">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Hello! 👋
              </h1>
              <div className="w-24 h-1 bg-primary-500 mx-auto lg:mx-0 mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              <p>
                My name's Camden. I'm a Software Engineer specializing in Apple platforms, dedicated to delivering quality mobile experiences.
              </p>
              <p>
                My background in software quality and customer experience gives me a unique perspective on building robust, scalable mobile applications.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-12">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 min-w-[160px] justify-center"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition-colors flex items-center justify-center min-w-[160px]"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Right image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-end h-full">
            <div className="relative flex items-end justify-center lg:justify-end w-full h-full">
              <img
                src="/headshot-2025.webp"
                alt="Camden Webster"
                className="max-h-full w-auto object-contain object-bottom"
                style={{ maxHeight: 'calc(100vh - 2rem)' }}
                onError={(e) => {
                  console.error('Image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;