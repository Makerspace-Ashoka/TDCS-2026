import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

export default function MakerspaceSection() {
  const galleryImages = [
    '/makerspace/media__1779142527199.jpg',
    '/makerspace/media__1779142530955.jpg',
    '/makerspace/media__1779142536437.jpg',
    '/makerspace/media__1779142550253.jpg',
    '/makerspace/media__1779142561687.jpg'
  ]

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
          The Makerspace Labs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -12, transition: { duration: 0.15, ease: 'easeOut', delay: 0 } }}
            className="bg-cardBg border border-gray-800 rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-150"
          >
            <div className="font-mono text-neon-green text-sm mb-4"># who_we_are()</div>
            <h3 className="text-2xl font-bold text-white mb-4 font-display">Who We Are</h3>
            <div className="text-gray-300 mb-6 leading-relaxed space-y-4">
              <p>The Makerspace Labs is a collaborative innovation ecosystem built around the philosophy of learning through creation. More than a workspace, it is a shared environment where makers, engineers, educators, and curious minds come together to experiment, prototype, and transform ideas into tangible reality.</p>
              <p>Rooted in open innovation and interdisciplinary collaboration, the Makerspace functions as a living "library of tools" — empowering individuals to explore technologies, develop practical skills, and create with confidence.</p>
            </div>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-start">
                <span className="text-neon-green mr-3">▶</span>
                <span className="text-neon-cyan">Built on the principles of open collaboration and experiential learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3">▶</span>
                <span className="text-neon-cyan">Equipped with advanced tools for design, fabrication, robotics, and rapid prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3">▶</span>
                <span className="text-neon-cyan">Cultivating the next generation of builders, innovators, and problem-solvers</span>
              </li>
            </ul>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -12, transition: { duration: 0.15, ease: 'easeOut', delay: 0 } }}
            className="bg-cardBg border border-gray-800 rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-150 relative"
          >
            <div className="absolute top-8 right-8 w-12 h-12 border-2 border-neon-cyan/30 flex items-center justify-center opacity-50">
               <div className="w-2 h-2 bg-neon-cyan shadow-glow-cyan" />
               <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-cyan" />
               <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon-cyan" />
               <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon-cyan" />
               <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-cyan" />
            </div>

            <div className="font-mono text-neon-green text-sm mb-4"># what_we_do()</div>
            <h3 className="text-2xl font-bold text-white mb-4 font-display">What We Do</h3>
            <div className="text-gray-300 mb-6 leading-relaxed space-y-4">
              <p>The Makerspace Labs exists to bridge the gap between imagination and execution. We create environments where ideas are not confined to sketches or discussions, but are engineered, tested, refined, and brought to life through hands-on learning.</p>
              <p>From robotics and electronics to fabrication and intelligent systems, the Makerspace encourages experimentation, prototyping, and creative exploration across disciplines. Here, innovation becomes tangible — something you can build, iterate upon, and hold in your hands.</p>
            </div>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-start">
                <span className="text-neon-green mr-3">▶</span>
                <span className="text-neon-purple">Hands-on learning driven by experimentation and discovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3">▶</span>
                <span className="text-neon-purple">Collaborative prototyping across technology, design, and engineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-green mr-3">▶</span>
                <span className="text-neon-purple">Transforming creative concepts into real-world solutions and working systems</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative w-full pb-4">
            <Marquee gradient={false} speed={30} className="overflow-hidden py-4">
              <div className="flex gap-4 items-center pl-4">
                {galleryImages.map((img, i) => (
                  <div 
                    key={i} 
                    className="w-80 h-48 bg-cardBg border border-gray-800 rounded-lg overflow-hidden hover:border-neon-cyan hover:shadow-glow-cyan hover:-translate-y-3 transition-all duration-150 group cursor-pointer flex-shrink-0"
                  >
                     <img 
                       src={img} 
                       alt={`Makerspace facility view ${i + 1}`} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                     />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <button className="px-8 py-3 rounded border border-neon-cyan text-neon-cyan font-mono hover:bg-neon-cyan/10 transition-colors hover:shadow-glow-cyan">
            Explore Makerspace
          </button>
        </motion.div>
      </div>
    </section>
  )
}
