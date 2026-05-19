import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-blue-900/60 backdrop-blur-sm z-50"
      style={{
        width: `${scrollProgress}%`,
        boxShadow: `0 0 8px rgba(30, 58, 138, 0.6)`,
      }}
    />
  )
}
