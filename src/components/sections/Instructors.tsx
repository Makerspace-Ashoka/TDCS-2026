import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const instructors = [
  {
    name: 'Vini Desai',
    image: '/instructors/Vini.jpg',
    email: 'vini.desai_ug25@ashoka.edu.in',
    bio: 'Psychology major with a minor in Philosophy. Passionate about understanding human behavior and ethical frameworks.',
    tags: ['Psychology', 'Philosophy']
  },
  {
    name: 'Hitova Assumi',
    image: '/instructors/Tova.jpg',
    email: 'hitova.assumi_ug2023@ashoka.edu.in',
    bio: 'International Relations major with China Studies minor. My presentations are great and so am I.',
    tags: ['International Relations', 'China Studies']
  },
  {
    name: 'Sampurna Pandey',
    image: '/instructors/Sampurna.jpg',
    email: 'sampurna.pandey_ug2023@ashoka.edu.in',
    bio: 'Computer Science major with Economics minor. Interested in the intersection of technology and economic systems.',
    tags: ['Computer Science', 'Economics']
  },
  {
    name: 'Riya Arora',
    image: '/instructors/Riya.jpg',
    email: 'riya.arora_ug2023@ashoka.edu.in',
    bio: 'Physics major with Mathematics minor. Passionate about exploring the fundamental laws of the universe.',
    tags: ['Physics', 'Mathematics']
  },
  {
    name: 'Vaishnavi Jha',
    image: '/instructors/Vaishnavi.jpg',
    email: 'vaishnavi.jha_ug2025@ashoka.edu.in',
    bio: 'Interdisciplinary major in Computer Science and Mathematics with a minor in Astronomy. Fascinated by the intersection of computational systems and celestial phenomena.',
    tags: ['Computer Science', 'Mathematics', 'Astronomy']
  }
]

export default function Instructors() {
  return (
    <section id="instructors" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-display font-bold mb-4 text-neon-cyan text-center tracking-wider"
          style={{ textShadow: '0 0 5px #00f0ff' }}
        >
          Meet Your Instructors
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg mb-16 font-sans"
        >
          Learn from passionate educators and makers.
        </motion.p>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {instructors.slice(0, 4).map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, transition: { duration: 0.15, ease: 'easeOut', delay: 0 } }}
              className="bg-cardBg border border-gray-800 rounded-xl p-6 flex flex-col sm:flex-row gap-6 hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-150 group"
            >
              {/* Avatar */}
<div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-neon-cyan/50 transition-colors overflow-hidden">
  <img 
    src={instructor.image} 
    alt={instructor.name}
    className="w-full h-full object-cover"
  />
</div>
              
              {/* Details */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-neon-cyan mb-2 font-display">
                  {instructor.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {instructor.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {instructor.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded text-neon-cyan text-xs font-mono">
                      [{tag}]
                    </span>
                  ))}
                </div>
                
                <a href={`mailto:${instructor.email}`} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-cyan transition-colors self-start mt-auto">
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 5th Instructor Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -12, transition: { duration: 0.15, ease: 'easeOut', delay: 0 } }}
          className="w-full md:w-1/2 mt-8 bg-cardBg border border-gray-800 rounded-xl p-6 flex flex-col sm:flex-row gap-6 hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-150 group"
        >
            {/* Avatar */}
<div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-neon-cyan/50 transition-colors overflow-hidden">
  <img 
    src={instructors[4].image} 
    alt={instructors[4].name}
    className="w-full h-full object-cover"
  />
</div>
            
            {/* Details */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-neon-cyan mb-2 font-display">
                {instructors[4].name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {instructors[4].bio}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {instructors[4].tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded text-neon-cyan text-xs font-mono">
                    [{tag}]
                  </span>
                ))}
              </div>
              
              <a href={`mailto:${instructors[4].email}`} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-cyan transition-colors self-start mt-auto">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
        </motion.div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-cardBg border border-neon-gold/30 rounded-xl p-6 text-center max-w-3xl hover:border-neon-gold hover:shadow-glow-gold transition-all duration-300"
        >
          <p className="text-neon-gold font-mono text-sm sm:text-base leading-relaxed">
            <span className="font-bold">Office Hours:</span> 15-30 minutes between 17:30 - 20:00 p.m. Please sign up for office hours on the respective instructor's Google Calendar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
