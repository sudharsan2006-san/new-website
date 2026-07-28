import { motion } from 'motion/react';
import { Trophy, Code2, ExternalLink, Terminal } from 'lucide-react';
import { HACKERRANK_URL, CODECHEF_URL, LEETCODE_URL } from '../lib/constants';

const profiles = [
  {
    name: 'HackerRank',
    username: 'sudharsan9001',
    url: HACKERRANK_URL,
    color: 'bg-[#00EA64]',
    icon: Trophy,
    stats: [
      { label: 'Problems', value: '150+' },
      { label: 'Certs', value: '5' },
      { label: 'Badges', value: '10+' },
    ]
  },
  {
    name: 'CodeChef',
    username: 'merry_pool_49',
    url: CODECHEF_URL,
    color: 'bg-[#5B4638]',
    icon: Code2,
    stats: [
      { label: 'Rating', value: '1200' },
      { label: 'Highest', value: '1350' },
      { label: 'Rank', value: 'Top 10%' },
    ]
  },
  {
    name: 'LeetCode',
    username: 'sudharsan06',
    url: LEETCODE_URL,
    color: 'bg-[#FFA116]',
    icon: Terminal,
    stats: [
      { label: 'Solved', value: '100+' },
      { label: 'Rank', value: '1,332,681' },
    ]
  }
];

export default function CodingProfiles() {
  return (
    <section className="max-w-4xl mx-auto my-12 px-6">
      <h2 className="text-sm text-neutral-400 uppercase tracking-widest text-center mb-8">Coding Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {profiles.map((profile) => (
          <motion.div
            key={profile.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl hover:border-blue-500/50 transition-colors flex flex-col items-center gap-6"
          >
            <div className={`w-20 h-20 rounded-full ${profile.color} flex items-center justify-center border-2 border-neutral-800`}>
              <profile.icon className="w-10 h-10 text-white" />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
              <p className="text-gray-400">{profile.username}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {profile.stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="text-lg font-bold text-blue-500">{stat.value}</p>
                  <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <motion.a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 ${profile.color} text-white rounded-full font-bold hover:opacity-90 transition-opacity flex items-center gap-2`}
            >
              View Profile <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
