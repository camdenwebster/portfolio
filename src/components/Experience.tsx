import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Jamf',
      position: 'Senior Test Engineer',
      period: '2019 - Present',
      location: 'Remote (Algonquin, IL)',
      description: 'Responsible for product quality and test automation efforts for the Jamf Connect product line.',
      achievements: [
        'Designed and implemented a custom Python/Robot Framework-based test automation framework to automate the Jamf Connect Login product (a macOS login window replacement)',
        'Implemented XCUITest suite for remaining apps in product line',
        'Implemented CI/CD pipelines for automated testing (Jenkins and Anka)'
      ],
      technologies: ['Python', 'Robot Framework', 'XCUITest', 'Jenkins', 'Anka']
    },
    {
      company: 'Jamf',
      position: 'Senior Technical Support Engineer',
      period: '2015 - 2019',
      location: 'Eau Claire, WI',
      description: 'Provided advanced technical support and solutions for enterprise customers as a final escalation point.',
      achievements: [
        'Served as final escalation point on a specialized team handling worldwide technical support issues before engineering engagement',
        'Led internal training initiatives as subject matter expert for Jamf Connect and NoMAD tools during acquisition',
        'Conducted comprehensive training sessions for technical support department on new Jamf Pro features as part of the release training team'
      ],
      technologies: ['Technical Support', 'Product Training', 'Problem Solving', 'Jamf Pro', 'Salesforce', 'Jamf Connect', 'NoMAD']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg relative"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                    <Calendar size={18} className="mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin size={18} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

              <h4 className="font-semibold mb-2 dark:text-white">Key Achievements:</h4>
              <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="mb-1">{achievement}</li>
                ))}
              </ul>

              <div>
                <h4 className="font-semibold mb-2 dark:text-white">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;