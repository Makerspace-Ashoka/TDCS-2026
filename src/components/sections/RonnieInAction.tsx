import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

export default function RonnieInAction() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
    
    // Simulate finding the global tsparticles and speeding them up for an "animation transition"
    const tsParticlesContainer = (window as any).tsParticles?.domItem(0)
    if (tsParticlesContainer) {
      tsParticlesContainer.options.particles.move.speed = 10
      tsParticlesContainer.refresh()
      
      setTimeout(() => {
        tsParticlesContainer.options.particles.move.speed = 0.5
        tsParticlesContainer.refresh()
        setIsPlaying(false)
      }, 2000)
    } else {
      setTimeout(() => setIsPlaying(false), 2000)
    }
  }

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-display font-bold mb-16 text-neon-cyan text-center tracking-wider"
          style={{ textShadow: '0 0 5px #00f0ff' }}
        >
          Ronnie in Action
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-xl sm:text-2xl text-gray-300 font-sans leading-relaxed">
              Watch our interactive robot navigate the obstacle course and demonstrate its AI-powered object recognition capabilities.
            </p>
          </motion.div>

          {/* Right: Media Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-video bg-black/80 rounded-xl border-2 border-neon-cyan shadow-glow-cyan flex items-center justify-center overflow-hidden group">
              <AnimatePresence>
                {isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-neon-cyan/20 backdrop-blur-sm z-10"
                  />
                )}
              </AnimatePresence>
              
              <button
                onClick={handlePlayClick}
                className="relative z-20 w-24 h-24 rounded-full border-2 border-neon-cyan flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
              >
                <Play className="w-10 h-10 ml-2" fill="currentColor" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
