import React from 'react';
import { GraduationCap, Briefcase, Code, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">I build apps that work reliably from day one.</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With 6+ years of enterprise software experience and 3+ years of iOS development, I combine development skills with a quality-first approach most developers learn too late. At Jamf, I built testing infrastructure for iOS apps serving 33 million devices.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My published apps deliver digital experiences that just work.            
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg">
              <GraduationCap className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                B.A. Music Technology, Entrepreneurship
                <br />
                iOS Mobile App Dev Certificate
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg">
              <Briefcase className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2 dark:text-white">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                3+ Years iOS Development
                <br />
                6+ Years Mobile Engineering
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg">
              <Code className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2 dark:text-white">Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">
                MovingBox iOS App
                <br />
                TaskBlock iOS App
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-dark-card rounded-lg">
              <Award className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold mb-2 dark:text-white">Certifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                ISTQB Foundation Level
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;