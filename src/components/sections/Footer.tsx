import { motion } from 'framer-motion'
import { Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-neon-cyan/30 bg-black/60 backdrop-blur-md pt-16 pb-6 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Column 1: YSP TDCS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-neon-cyan mb-6">YSP TDCS</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-sans pr-4">
              Empowering the next generation of tech innovators through immersive learning in AI, Robotics, and Data Science.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/makerspace_ashoka?igsh=MXdtamowM25hZTg1aw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-neon-pink hover:text-neon-pink hover:shadow-glow-pink transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://github.com/Makerspace-Ashoka/ronnie_robot" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-glow-cyan transition-all duration-300 group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-display font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#curriculum-timeline" className="text-gray-400 hover:text-neon-cyan font-sans text-sm transition-colors relative group inline-block">
                  Curriculum
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#resources" className="text-gray-400 hover:text-neon-cyan font-sans text-sm transition-colors relative group inline-block">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#instructors" className="text-gray-400 hover:text-neon-cyan font-sans text-sm transition-colors relative group inline-block">
                  Instructors
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-sans text-center md:text-left">
            © 2026 Young Scholars Programme: Tech, Data & Computer Science. All rights reserved.
          </p>
          <div className="font-mono text-sm border border-neon-green/30 bg-neon-green/5 px-4 py-2 rounded text-neon-green shadow-[0_0_10px_rgba(57,255,20,0.1)]">
            <span className="mr-2">$</span>{'>>'} Thank you for visiting <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-neon-green translate-y-1" />
          </div>
        </div>
      </div>
    </footer>
  )
}
