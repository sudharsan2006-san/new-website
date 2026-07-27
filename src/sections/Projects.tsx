import { motion } from 'motion/react';
import { PROJECTS } from '../lib/constants';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors"
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              style={{ perspective: 1000 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a whileTap={{ scale: 0.95 }} href={project.githubUrl} target="_blank" className="text-sm font-semibold hover:text-blue-400">GitHub</motion.a>
                {project.demoUrl !== '#' && (
                  <motion.a whileTap={{ scale: 0.95 }} href={project.demoUrl} target="_blank" className="text-sm font-semibold hover:text-blue-400">Live Demo</motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
