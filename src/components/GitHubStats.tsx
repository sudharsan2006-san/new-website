import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Repo {
  language: string;
}

interface GitHubData {
  public_repos: number;
  login: string;
  avatar_url: string;
}

export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [languages, setLanguages] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const userRes = await fetch('https://api.github.com/users/sudharsan2006-san');
        if (!userRes.ok) throw new Error('Failed to fetch user data');
        const userData = await userRes.json();
        setData(userData);

        const reposRes = await fetch('https://api.github.com/users/sudharsan2006-san/repos');
        if (!reposRes.ok) throw new Error('Failed to fetch repos data');
        const reposData = await reposRes.json();

        const langCount: Record<string, number> = {};
        if (Array.isArray(reposData)) {
          reposData.forEach(repo => {
            if (repo.language) {
              langCount[repo.language] = (langCount[repo.language] || 0) + 1;
            }
          });
        }
        setLanguages(langCount);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="text-center p-6 text-gray-400">Loading GitHub stats...</div>;
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto my-12 p-8 bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl"
    >
      <div className="flex items-center gap-6 mb-8">
        <img src={data.avatar_url} alt={data.login} className="w-20 h-20 rounded-full" />
        <div>
          <h3 className="text-2xl font-bold text-white">{data.login}</h3>
          <p className="text-gray-400">GitHub Stats</p>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-6xl font-bold text-blue-500">{data.public_repos}</p>
        <p className="text-sm text-neutral-400 uppercase tracking-widest mt-2">Repositories</p>
      </div>

      <div>
        <p className="text-sm text-neutral-400 uppercase tracking-widest mb-4">Top Languages</p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(languages).sort((a,b) => b[1] - a[1]).slice(0, 5).map(([lang, count]) => (
            <span key={lang} className="px-4 py-1.5 bg-neutral-900 text-neutral-200 rounded-full text-xs border border-neutral-800">
              {lang} ({count})
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
