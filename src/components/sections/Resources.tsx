import { motion } from 'framer-motion'
import { Download, Github, FileText, Code2, BookOpen, Cpu, Link as LinkIcon } from 'lucide-react'

const resources = [
  {
    title: 'Curriculum Guide',
    description: 'Complete 8-day curriculum with detailed lesson plans',
    icon: FileText,
  },
  {
    title: 'Code Repository',
    description: 'All source code and Arduino sketches',
    icon: Code2,
  },
  {
    title: 'Learning Materials',
    description: 'Comprehensive study guides and references',
    icon: BookOpen,
  },
  {
    title: 'Hardware Setup',
    description: 'Component list and wiring diagrams',
    icon: Cpu,
  },
]

export default function Resources() {
  return (
    <section id="resources" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-display font-bold mb-16 text-neon-gold text-center tracking-wider"
          style={{ textShadow: '0 0 5px #ffd700' }}
        >
          Resources
        </motion.h2>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, transition: { duration: 0.15, ease: 'easeOut', delay: 0 } }}
                className="bg-cardBg border border-gray-800 rounded-xl p-6 flex flex-col h-full hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-150 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
                  <Icon className="w-8 h-8 text-white group-hover:text-neon-cyan transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-neon-cyan mb-2 font-display">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-400 mb-8 flex-grow">
                  {resource.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-cyan transition-colors">
                  <LinkIcon className="w-4 h-4" />
                  Links
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-cardBg p-10 rounded-xl border border-gray-800 hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300 flex flex-col items-center text-center group">
            <Github className="w-12 h-12 text-white mb-6 group-hover:text-neon-cyan transition-colors" />
            <h3 className="text-2xl font-bold text-white mb-3 font-mono group-hover:text-neon-cyan transition-colors">
              Open Source Repository
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              Access all code, documentation, and project files on our GitHub repository
            </p>
            <a
              href="https://github.com/Makerspace-Ashoka/ronnie_robot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-gray-600 hover:border-neon-cyan text-white hover:text-neon-cyan rounded font-mono transition-all duration-300"
            >
              Visit GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
