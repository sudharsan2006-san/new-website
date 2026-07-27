import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-blue-500/5">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-400 mb-12">Feel free to reach out for collaborations or opportunities.</p>
        <div className="flex gap-4 justify-center mb-12">
          <SocialLinks />
          <motion.a
            href="mailto:sudharsan9001@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Gmail
          </motion.a>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl" />
          <input type="email" placeholder="Email" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl" />
          <textarea placeholder="Message" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl h-32"></textarea>
          <button className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}
