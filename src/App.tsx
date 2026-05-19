import { useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Container, Engine } from 'tsparticles-engine'

import CustomCursor from './components/CustomCursor'
import ScrollProgressBar from './components/ScrollProgressBar'
import Hero from './components/sections/Hero'
import MarqueeSection from './components/sections/MarqueeSection'
import About from './components/sections/About'
import MeetRonnie from './components/sections/MeetRonnie'
import MakerspaceSection from './components/sections/MakerspaceSection'
import Timeline from './components/sections/Timeline'
import Resources from './components/sections/Resources'
import Instructors from './components/sections/Instructors'
import Footer from './components/sections/Footer'

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Keep reference to particles container for custom interactions
    if (container) {
      (window as any).tsParticles = (window as any).tsParticles || { domItem: () => container }
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-darkBg text-gray-300 overflow-x-hidden font-sans">
      {/* Global Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: { value: 'transparent' },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                  color: '#00f0ff'
                },
              },
            },
          },
          particles: {
            color: { value: '#00f0ff' },
            links: {
              color: '#00f0ff',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: { type: 'circle' },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Hero />
        <MarqueeSection />
        <Resources />
        <MarqueeSection />
        <About />
        <Timeline />
        <MeetRonnie />
        <Instructors />
        <MakerspaceSection />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
