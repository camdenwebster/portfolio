import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Swift', level: 75 },
        { name: 'Python', level: 65 },
      ],
    },
    {
      title: 'Testing & Automation',
      skills: [
        { name: 'XCUITest', level: 90 },
        { name: 'Robot Framework', level: 90 },
        { name: 'Test Planning', level: 90 },
        { name: 'Test Automation', level: 85 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Xcode', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'JIRA', level: 90 },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Technical Support', level: 90 },
        { name: 'Documentation', level: 85 },
        { name: 'Team Leadership', level: 80 },
        { name: 'Problem Solving', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6 dark:text-white">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium dark:text-white">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2.5">
                      <div
                        className="bg-primary-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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