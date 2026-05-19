import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // Direct DOM manipulation - zero latency
      cursor.style.transform = `translate(${x - 16}px, ${y - 16}px)`

      const target = e.target as HTMLElement
      const isClickable = target.closest(
        'a, button, [role="button"], input, select, textarea, .cursor-pointer, .glassmorphism, .group'
      ) !== null
      
      if (isClickable) {
        cursor.style.transform += ' scale(1.2)'
        cursor.style.borderColor = '#00f0ff' // turns cyan/blue on hover
        cursor.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.4), inset 0 0 10px rgba(0, 240, 255, 0.2)'
      } else {
        cursor.style.borderColor = 'transparent'
        cursor.style.boxShadow = 'none'
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[100] w-8 h-8 border-2 flex items-center justify-center transition-opacity duration-200"
      style={{ 
        willChange: 'transform',
        borderColor: 'transparent',
        transitionProperty: 'opacity, border-color, box-shadow'
      }}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Horizontal line */}
        <div className="absolute w-4 h-[2px] bg-neon-cyan shadow-[0_0_5px_rgba(0,240,255,0.8)]" />
        {/* Vertical line */}
        <div className="absolute w-[2px] h-4 bg-neon-cyan shadow-[0_0_5px_rgba(0,240,255,0.8)]" />
      </div>
    </div>
  )
}

CustomCursor.displayName = 'CustomCursor'

export default CustomCursor
