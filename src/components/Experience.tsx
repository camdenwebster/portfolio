import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Jamf',
      position: 'Senior Software Engineer, Test',
      period: 'Oct 2019 - Present',
      location: 'Remote',
      description: 'Built test automation from scratch for Jamf Connect and Unlock apps, establishing XCUITests and reusable CI/CD pipelines that scaled from MVP to production serving 76k+ organizations managing 33M+ devices.',
      achievements: [
        'Built test automation from scratch for Jamf Connect and Unlock apps, establishing XCUITests and reusable CI/CD pipelines that scaled from MVP to production serving 76k+ organizations managing 33M+ devices',
        'Pioneered comprehensive testing strategy as primary QA engineer for new product line, including test planning, risk assessment, exploratory testing, and go/no-go release criteria reducing incidents by 40%',
        'Mentored team members on iOS testing best practices, Swift development patterns, and CI/CD strategies',
        'Collaborated closely with product managers, designers, and backend engineers on mobile feature requirements and technical implementation planning',
        'Designed and implemented Python-based automation framework for authentication and access control systems, saving $80k/year in licensing costs while reducing manual testing time by 90%',
        'Built AI-driven test generation tool using Claude and MCP to automate end-to-end test creation, pioneering innovative approaches to scale testing coverage'
      ],
      technologies: ['Swift', 'XCUITest', 'XCTest', 'Python', 'Robot Framework', 'Jenkins', 'GitHub Actions', 'Fastlane', 'Anka Virtualization']
    },
    {
      company: 'Jamf',
      position: 'Senior Technical Support Engineer',
      period: 'Jul 2017 - Oct 2019',
      location: 'Eau Claire, WI',
      description: 'Solved complex mobile device management issues, developed deep understanding of customer experiences. Served as final escalation point for technical support before engineering engagement.',
      achievements: [
        'Solved complex mobile device management issues, developed deep understanding of customer experiences',
        'Served as final escalation point for technical support before engineering engagement'
      ],
      technologies: ['Technical Support', 'Problem Solving', 'Jamf Pro', 'macOS', 'iOS', 'Mobile Device Management']
    },
    {
      company: 'Jamf',
      position: 'Technical Account Manager',
      period: 'Sep 2015 - Jul 2017',
      location: 'Eau Claire, WI',
      description: 'Managed relationships and provided dedicated technical support for 120 enterprise customer accounts.',
      achievements: [
        'Managed relationships and provided dedicated technical support for 120 enterprise customer accounts'
      ],
      technologies: ['Account Management', 'Technical Support', 'Customer Relations', 'Jamf Pro']
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
              <ul className="mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5 flex-shrink-0 leading-relaxed">•</span>
                    <span className="flex-1 leading-relaxed">{achievement}</span>
                  </li>
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