import Marquee from 'react-fast-marquee'

export default function MarqueeSection() {
  const items = [
    'Hardware',
    'Systems Thinking',
    'Electronics',
    'Mechanics',
    'Kinematics',
    'Computer-Aided Design',
    '3D Printing',
    'Robotics'
  ]

  // Duplicate items a few times to ensure the marquee is long enough
  const displayItems = [...items, ...items, ...items]

  return (
    <section className="relative w-full py-4 bg-black/60 border-y border-neon-cyan/20 backdrop-blur-sm z-10">
      <Marquee
        gradient={false}
        speed={40}
        className="overflow-hidden"
      >
        <div className="flex items-center">
          {displayItems.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="font-mono text-neon-cyan text-sm sm:text-base whitespace-nowrap mx-6 opacity-80 hover:opacity-100 transition-opacity">
                {item}
              </span>
              <span className="font-mono text-neon-cyan/50 text-sm whitespace-nowrap">
                ///
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  )
}
