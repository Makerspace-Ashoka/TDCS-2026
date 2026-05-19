import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-display font-bold mb-8 text-white tracking-wide text-center"
          style={{ textShadow: '0 0 5px #00f0ff' }}
        >
          About the Curriculum
        </motion.h2>

        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 px-4 py-1 border border-neon-cyan rounded-full shadow-glow-cyan text-neon-cyan font-mono text-sm sm:text-base inline-block"
        >
          Robotics101
        </motion.div>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-16 font-sans"
        >
          Designed around the philosophy of learning by building, this intensive 8-day program immerses students in the worlds of Robotics, Artificial Intelligence, Machine Learning, and Data Science. Through prototyping, experimentation, and collaborative creation, students transform ideas into functional systems while developing the mindset of innovators.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {[
            { num: '8', label: 'Days' },
            { num: '5', label: 'Instructors' },
            { num: '16', label: 'Hours of Learning' },
            { num: '∞', label: 'Possibilities' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -12, transition: { duration: 0.15, ease: 'easeOut', delay: 0 } }}
              className="bg-cardBg border border-gray-800 rounded-xl aspect-square flex flex-col items-center justify-center transition-all duration-150 hover:border-neon-cyan hover:shadow-glow-cyan group"
            >
              <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                {stat.num}
              </div>
              <div className="text-gray-400 font-sans uppercase tracking-widest text-xs sm:text-sm group-hover:text-white transition-colors">
                / {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
