import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TypewriterEffect from '../TypewriterEffect'

export default function Hero() {
  const scrollToCurriculum = () => {
    const timelineElement = document.getElementById('curriculum-timeline')
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-10">
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Main heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-display font-black mb-6 text-white tracking-widest uppercase neon-text drop-shadow-md animate-glitch"
          style={{ textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff' }}
        >
          Young Scholars Program
        </motion.h1>

        {/* Subheading with typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-neon-cyan mb-12"
        >
          <TypewriterEffect text="Tech, Data & Computer Science" speed={70} />
        </motion.div>

        {/* Terminal box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-8 p-4 sm:p-6 inline-block"
        >
          <div className="font-mono text-sm sm:text-base text-neon-green flex items-start gap-2">
            <span>$</span>
            <TypewriterEffect
              text="> Entering the future of hands-on innovation."
              speed={40}
            />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <button
            onClick={scrollToCurriculum}
            className="group relative px-8 py-4 rounded-full font-sans font-semibold text-white border border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:shadow-glow-cyan"
          >
            <span className="flex items-center gap-3 justify-center">
              Explore the 8-Day Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
