import { motion } from 'motion/react';
import { Trophy, Award, Droplets } from 'lucide-react';

export default function HackathonWin() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300 shadow-2xl shadow-blue-500/10"
        >
          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row gap-6">
            {/* Trophy Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    🏆 Hackathon Win
                  </h3>
                  <p className="text-lg text-white font-medium">QthinkX Ideathon</p>
                </div>
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center gap-2 text-blue-300 text-sm font-semibold shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  <Award className="w-4 h-4" />
                  🥈 2nd Place
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
                <Droplets className="w-5 h-5" />
                <span>Winning Project: AquaGuard</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Smart water quality monitoring system built to detect contamination and deliver real-time alerts. 
                Impressed judges at QthinkX Ideathon and secured 2nd place among top college teams.
              </p>
              <motion.a 
                whileTap={{ scale: 0.95 }} 
                href="https://aquagurad23.netlify.app/" 
                target="_blank" 
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project ↗
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
