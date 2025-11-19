import { useState } from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProjectImage } from '../ui/ProjectImage';
import { projects } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import type { Project } from '../../types/portfolio';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <Section id="projects" title="Projects">
      <div className="text-terminal-prompt text-lg font-mono mb-6">
        <span className="terminal-success">$</span> ls -la projects/
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-8"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded font-mono text-sm transition-all ${
              selectedCategory === category
                ? 'bg-terminal-accent text-white'
                : 'bg-terminal-surface border border-terminal-border text-terminal-text hover:border-terminal-accent'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="terminal-prompt">&gt;</span> {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                hover
                delay={index * 0.1}
                className="h-full flex flex-col cursor-pointer p-0 overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                {project.image && (
                  <ProjectImage 
                    src={project.image} 
                    alt={project.title}
                    variant="card"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  {project.featured && (
                    <span className="text-xs text-terminal-success font-mono mb-2">
                      <span className="terminal-prompt">&gt;</span> FEATURED
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2 terminal-command">
                    <span className="terminal-prompt">&gt;</span> {project.title}
                  </h3>
                <p className="text-terminal-text mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-terminal-bg border border-terminal-border rounded text-xs text-terminal-accent font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs text-terminal-text font-mono">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1"
                    >
                      <Button variant="primary" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="terminal-card max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold terminal-command">
                  <span className="terminal-prompt">&gt;</span> {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-terminal-text hover:text-terminal-error transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              {selectedProject.image && (
                <ProjectImage 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  variant="modal"
                />
              )}
              <p className="text-terminal-text mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 terminal-command">
                  <span className="terminal-prompt">&gt;</span> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-terminal-surface border border-terminal-border rounded text-sm text-terminal-accent font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      <Github className="w-5 h-5" />
                      View Code
                    </Button>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" className="w-full">
                      <ExternalLink className="w-5 h-5" />
                      Visit Live
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

