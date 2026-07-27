import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../lib/constants';
import { Code, Layout, Database, ShieldCheck, Sparkles, Layers, Info, X } from 'lucide-react';
import { Skill } from '../types';

const categoryConfig = [
  { name: 'All', icon: <Layers className="w-5 h-5" /> },
  { name: 'Programming', icon: <Code className="w-5 h-5" /> },
  { name: 'Frontend', icon: <Layout className="w-5 h-5" /> },
  { name: 'Backend', icon: <Database className="w-5 h-5" /> },
  { name: 'Testing', icon: <ShieldCheck className="w-5 h-5" /> },
  { name: 'Soft Skills', icon: <Sparkles className="w-5 h-5" /> },
  { name: 'Interests', icon: <Layers className="w-5 h-5" /> },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl font-bold mb-4 text-center">Technical & Programming Skills</h2>
        <p className="text-gray-400 text-center mb-6">Core programming languages, development stacks, testing methodologies, and analytical problem-solving competencies.</p>
        <div className="flex items-center justify-center gap-2 text-blue-400 mb-12 text-sm font-mono tracking-widest">
            <Info className="w-4 h-4" />
            <span>CLICK ANY SKILL TO VIEW PROFICIENCY & DETAILS</span>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categoryConfig.map((cat) => {
            const count = cat.name === 'All' ? SKILLS.length : SKILLS.filter(s => s.category === cat.name).length;
            return (
                <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all ${
                    selectedCategory === cat.name
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 ring-2 ring-blue-400'
                    : 'bg-neutral-900 text-gray-400 hover:bg-neutral-800'
                }`}
                >
                {cat.icon}
                {cat.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${selectedCategory === cat.name ? 'bg-blue-800' : 'bg-neutral-800'}`}>{count}</span>
                </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedSkill(skill)}
                className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl text-center relative overflow-hidden cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(59, 130, 246, 0.5)',
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {skill.name}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Skill Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl max-w-md w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-3xl font-bold mb-4 text-blue-400">{selectedSkill.name}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{selectedSkill.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
