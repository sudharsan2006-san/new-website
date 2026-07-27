import { ACHIEVEMENTS } from '../lib/constants';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-blue-500/5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-2 text-blue-400">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
