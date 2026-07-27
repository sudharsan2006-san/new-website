import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { LINKEDIN_URL } from '../lib/constants';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <motion.a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl font-bold hover:bg-[#004182] transition-colors ${className}`}
    >
      <Linkedin className="w-5 h-5" />
      LinkedIn
    </motion.a>
  );
}
