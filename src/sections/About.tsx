import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-blue-500/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <motion.div 
          className="p-8 bg-white/5 border border-white/10 rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I am a B.Tech Information Technology student at SRM Easwari Engineering College, Chennai. 
            Passionate about software development, web design, and artificial intelligence. 
            I enjoy building functional websites and solving complex programming problems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, I focus on developing my communication skills or enjoying 
            cricket and online games like Free Fire.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
