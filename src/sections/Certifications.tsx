import { BASIC_CERTIFICATIONS, PROFESSIONAL_CERTIFICATIONS } from '../lib/constants';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {BASIC_CERTIFICATIONS.map((cert) => (
            <div key={cert.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-2 text-blue-400">{cert.provider}</h3>
              <p className="text-lg font-semibold text-white mb-2">{cert.title}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-12 text-center">Professional Certifications</h2>
        <div className="grid grid-cols-1 gap-6">
          {PROFESSIONAL_CERTIFICATIONS.map((cert) => (
            <div key={cert.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-2 text-blue-400">{cert.provider}</h3>
              <p className="text-lg font-semibold text-white mb-2">{cert.title}</p>
              
              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <p><strong>Session:</strong> {cert.session}</p>
                <p><strong>Duration:</strong> {cert.duration}</p>
                <p><strong>Result:</strong> {cert.result} (Score: {cert.score})</p>
                <p><strong>Credits:</strong> {cert.credits}</p>
                {cert.learningOutcomes && (
                  <div className="mt-4">
                    <p className="font-semibold text-white">Key Learning Outcomes:</p>
                    <ul className="list-disc list-inside mt-2 text-gray-400">
                      {cert.learningOutcomes.map(outcome => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
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
