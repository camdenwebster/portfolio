import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'iOS Development',
      skills: [
        'Swift',
        'SwiftUI', 
        'UIKit',
        'MVVM',
        'Protocol-Oriented Programming',
        'Dependency Injection'
      ],
    },
    {
      title: 'API Integration',
      skills: [
        'REST APIs',
        'JSON parsing',
        'URLSession',
        'async/await',
        'GraphQL (familiar)'
      ],
    },
    {
      title: 'Mobile Testing',
      skills: [
        'XCUITest',
        'XCTest',
        'Swift Testing',
        'Snapshot Testing',
        'Accessibility Testing',
        'API Testing'
      ],
    },
    {
      title: 'CI/CD & DevOps',
      skills: [
        'GitHub Actions',
        'Jenkins',
        'Fastlane',
        'Anka Virtualization',
        'Xcode Cloud'
      ],
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        'JIRA',
        'TestRail',
        'Charles Proxy',
        'Sentry',
        'TelemetryDeck',
        'Git',
        'Bash'
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-dark-card rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;