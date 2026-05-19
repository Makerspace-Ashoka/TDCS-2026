import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const galleryImages = [
  '/ronnie/1.jpg',
  '/ronnie/2.jpg',
  '/ronnie/3.jpg',
  '/ronnie/4.jpg',
  '/ronnie/5.jpg'
]

export default function MeetRonnie() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-display font-bold mb-16 text-neon-pink text-center tracking-wider"
          style={{ textShadow: '0 0 5px #ff007f' }}
        >
          Meet Ronnie: Your Robotic Companion
        </motion.h2>

        {/* Horizontal Marquee Carousel */}
        <div className="relative w-full overflow-hidden pb-8">
          <Marquee gradient={false} speed={40} pauseOnHover={true} className="overflow-hidden py-4">
            <div className="flex gap-6 pr-6">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="w-80 h-48 bg-cardBg border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-neon-pink hover:shadow-glow-pink flex-shrink-0 group cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`Ronnie Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
