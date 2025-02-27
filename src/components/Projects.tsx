import React from 'react';
import { ExternalLink, Github, ShoppingCart, Code, TestTube } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CartCopilot',
      description: 'An iOS application designed to streamline the grocery shopping experience with real-time cost tracking and shopping list management. Features include shopping trip management, barcode scanning, and detailed cost analysis.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
      technologies: ['Swift', 'SwiftUI', 'SwiftData', 'MVVM', 'XCTest'],
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
      title: 'Jamf Connect Test Framework',
      description: 'A comprehensive test automation framework for Jamf Connect Login, a macOS login window replacement. Built with Python and Robot Framework to ensure product quality and reliability.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
      technologies: ['Python', 'Robot Framework', 'Jenkins', 'CI/CD'],
      role: 'Test Automation Engineer',
      features: [
        'End-to-end test automation',
        'CI/CD integration',
        'Custom test reporting',
        'Parallel test execution'
      ]
    },
    {
      title: 'XCUITest Implementation',
      description: 'Developed and implemented XCUITest suites for the Jamf Connect product line, ensuring comprehensive UI testing coverage and improved product quality.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      technologies: ['Swift', 'XCUITest', 'CI/CD', 'Test Planning'],
      role: 'Test Engineer',
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

                {project.githubUrl && (
                  <div className="mt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      <Github size={20} />
                      View Source Code
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;