import { EXPERIENCE } from '../lib/constants';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex gap-4">
              {exp.logo && <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full object-contain bg-white p-1" />}
              <div>
                <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                <p className="text-lg text-white">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/40 transition-colors"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
