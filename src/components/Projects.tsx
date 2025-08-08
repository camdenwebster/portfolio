import React from 'react';
import { ExternalLink, Github, ShoppingCart, Code, TestTube } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MovingBox',
      description: 'An AI-powered home inventory app built with SwiftUI. Take a photo of your items and let AI handle the cataloging for you.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800',
      technologies: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit', 'OpenAI', 'RevenueCat', 'TelemetryDeck', 'Sentry'],
      githubUrl: 'https://github.com/camdenwebster/MovingBox',
      websiteUrl: 'https://movingbox.ai',
      role: 'iOS Developer',
      features: [
        'AI-powered image recognition for inventory items',
        'Cloud sync with SwiftData and CloudKit',
        'In-app purchases using RevenueCat',
        'Analytics and error tracking',
        'Modern SwiftUI interface'
      ]
    },
    {
      title: 'TaskBlock',
      description: 'A task manager and calendar designed to implement Time Blocking techniques. Built as an exercise in learning UIKit while creating a practical productivity application.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
      technologies: ['Swift', 'UIKit', 'Core Data', 'MVC Architecture', 'Interface Builder'],
      githubUrl: 'https://github.com/camdenwebster/TaskBlock',
      role: 'iOS Developer',
      features: [
        'Intelligent auto-scheduling based on task priority and difficulty',
        'Time blocking methodology with predefined blocks',
        'Task categorization and flexible properties',
        'Core Data integration for persistence',
        'Custom UIKit interface with storyboards'
      ]
    },
    {
      title: 'CartCopilot',
      description: 'An iOS application designed to streamline the grocery shopping experience with real-time cost tracking and shopping list management.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
      technologies: ['Swift', 'SwiftUI', 'SwiftData', 'Swfit Testing'],
      githubUrl: 'https://github.com/camdenwebster/CartCopilot',
      role: 'iOS Developer',
      features: [
        'Real-time cost tracking with tax calculation',
        'Barcode scanner for quick item addition',
        'Offline-first architecture',
        'Custom store profiles and categories'
      ]
    },
    {
      title: 'Jamf Connect Login Test Framework',
      description: 'A comprehensive test automation framework for Jamf Connect Login, a macOS login window replacement. Built with Python and Robot Framework.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'Robot Framework', 'Jenkins', 'CI/CD'],
      role: 'Test Automation Engineer',
      features: [
        'End-to-end test automation using SSH and VNC',
        'Jenkins, Anka CI/CD integration',
        'Reporting via ReportPortal and TestRail',
        'Parallel test execution'
      ]
    },
    {
      title: 'XCUITest Implementation',
      description: 'Developed and implemented XCUITest suites for the Jamf Connect and Unlock products, ensuring comprehensive UI testing coverage and improved product quality.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      technologies: ['Swift', 'XCUITest', 'CI/CD', 'Test Planning'],
      role: 'Test Automation Engineer',
      features: [
        'UI test automation',
        'Performance testing',
        'Accessibility testing',
        'Test strategy development'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-dark-bg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-primary-900/50 text-blue-600 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      <ExternalLink size={20} />
                      Visit Website
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      <Github size={20} />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;