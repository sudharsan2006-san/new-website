import { useLayoutEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundParticles from '../components/BackgroundParticles';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background Zoom Effect
      gsap.to(bgRef.current, {
        scale: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1, // Smooth scrub
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Zoom Effect */}
      <div ref={bgRef} className="absolute inset-0 z-0 bg-neutral-900 will-change-transform translate-z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-neutral-950 to-neutral-950" />
        <BackgroundParticles />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Content */}
      <motion.div
        ref={contentRef}
        className="text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
          Hi, I'm<br />
          <span className="text-blue-500">Sudharsan U</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Software Developer • Full Stack Developer
        </p>
        <div className="flex gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition-all"
          >
            View Projects
          </motion.button>
          <motion.a 
            href="https://drive.google.com/uc?export=download&id=1tXMa3llB0pzTXyXaffZcL_D-wNVZhoWm"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
