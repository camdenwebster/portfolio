import React from 'react';
import { BookOpen, Users, Coffee, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in QA and Test Automation, I specialize
              in building comprehensive test frameworks and ensuring software quality.
              My background in technical support and account management brings a unique
              perspective to testing, focusing on both technical excellence and user experience.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm passionate about creating efficient, maintainable test automation
              solutions that help teams deliver high-quality software. Currently expanding
              my skills through iOS development studies to bridge the gap between
              development and testing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg">
              <BookOpen className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                B.A. Music Technology ('14)
                <br />
                Saint Mary's University of Minnesota
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg">
              <Users className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2 dark:text-white">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                5+ Years QA
                <br />
                4+ Years Tech Support
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg">
              <Coffee className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2 dark:text-white">Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">
                XCUITest Implementation
                <br />
                E2E Test Frameworks
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg">
              <Award className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2 dark:text-white">Certifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                ISTQB Foundation
                <br />
                iOS Dev (In Progress)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;