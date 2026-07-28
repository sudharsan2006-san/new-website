import { motion } from 'motion/react';
import { Linkedin, Code2, Trophy } from 'lucide-react';
import { LINKEDIN_URL, HACKERRANK_URL, CODECHEF_URL } from '../lib/constants';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  const links = [
    { name: 'LinkedIn', url: LINKEDIN_URL, icon: Linkedin, color: 'bg-[#0A66C2]' },
    { name: 'HackerRank', url: HACKERRANK_URL, icon: Trophy, color: 'bg-[#2EC866]' },
    { name: 'CodeChef', url: CODECHEF_URL, icon: Code2, color: 'bg-[#5B4638]' },
  ];

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-2 px-6 py-3 ${link.color} text-white rounded-xl font-bold transition-colors`}
        >
          <link.icon className="w-5 h-5" />
          {link.name}
        </motion.a>
      ))}
    </div>
  );
}
