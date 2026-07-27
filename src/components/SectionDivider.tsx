import { motion } from 'motion/react';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: '50%', opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mx-auto my-16"
    />
  );
}
