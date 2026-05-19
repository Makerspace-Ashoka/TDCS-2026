import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const timelineData = [
  {
    day: 1,
    title: 'The World of Robotics + Introduction to CAD',
    desc: 'Systems, Mechanics, Electronics, CAD',
    bullets: [
      'State of robotics & where the field is going',
      'Sense, Think, Act & Component inspection',
      'What is CAD & OnShape intro',
      '8 DOF frame design logic',
      'Additive vs. subtractive manufacturing',
      'FDM printing (PLA, PETG, TPU)',
      'Tolerances & Trinket design brief'
    ]
  },
  {
    day: 2,
    title: 'Kinematics, Joints and The Servo Motor',
    desc: 'Understanding robotic movement and actuators',
    bullets: [
      'Joints, linkages, and Degrees of Freedom',
      'Torque, range of motion, and types of motors',
      'How servo motors work & Hip vs. ankle joints',
      'Which plane, which axis? Why legs are on the side',
      'Build one leg with a servo',
      'DeepMind: Locomotion from Pixels'
    ]
  },
  {
    day: 3,
    title: 'Electronics for Robotics',
    desc: 'Powering and controlling your robot',
    bullets: [
      'Voltage, current, resistance & Water tank analogy',
      'What is a microcontroller (ESP32-C3 vs. Pi)',
      'Anatomy of the ESP32-C3, GPIO and I2C',
      'The PCA9685 and why we need it',
      'I2C protocol & Circuit diagrams',
      'Soldering intro & LiPo / 18650 safety'
    ]
  },
  {
    day: 4,
    title: 'Sensors + Introduction to Coding',
    desc: 'Bringing perception and logic to hardware',
    bullets: [
      'How sensors work & Ultrasonic sensor basics',
      'Digital vs. analog signals',
      'What is a program & Wokwi simulator',
      'First code: blinking an LED',
      'Connecting ESP32 and PCA9685 with one leg',
      'Running code via USB'
    ]
  },
  {
    day: 5,
    title: 'Coding the Robot: Moving One Leg',
    desc: 'Code, Build, Move, and Think',
    bullets: [
      'VS Code and PlatformIO walkthrough',
      'Codebase structure: robot.h and animations',
      'What each function does & Channel mapping',
      'Writing your first frame',
      'Moving one leg to a target angle',
      'Serial monitor as a debugging tool',
      'Fastener and screwdriver safety'
    ]
  },
  {
    day: 6,
    title: 'Complex Movements + Full Build',
    desc: 'Assembling and programming complex motion',
    bullets: [
      'Complete physical assembly',
      'Servo calibration before horn attachment',
      'Wiring the full harness & Testing the full robot',
      'From single frames to sequences',
      'Diagonal gait and trot pattern',
      'Writing multi-frame animations',
      'Body joints vs. foot joints',
      'Debugging asymmetric movement'
    ]
  },
  {
    day: 7,
    title: 'Debugging, Recap and Intro to Machine Learning',
    desc: 'Refining movement and understanding AI',
    bullets: [
      'Full causal chain recap (Electricity to motion)',
      'Live debugging of movement issues',
      'Narrow AI vs. general AI',
      'What machine learning actually is',
      'Reinforcement learning: stick robot demo',
      'Where Ronnie sits on the intelligence spectrum'
    ]
  },
  {
    day: 8,
    title: 'AI Integration + Final Demonstration',
    desc: 'Applying ML to robotics and showcasing projects',
    bullets: [
      'ML for Kids classroom project',
      'Labelling leg images at various angles',
      'Building a training dataset',
      'Training and testing the model (Train vs. test split)',
      'What the model actually learned',
      'Final group presentations & Custom animation showcase',
      'Closing: RC toy to Boston Dynamics'
    ]
  }
]

export default function Timeline() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null)

  return (
    <section id="curriculum-timeline" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-mono font-bold mb-20 text-neon-green text-center tracking-wider"
          style={{ textShadow: '0 0 5px #39ff14' }}
        >
          8-Day Curriculum Timeline
        </motion.h2>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-neon-cyan/20 hidden md:block" />

          <div className="space-y-8">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0
              const isExpanded = expandedDay === item.day

              return (
                <div key={item.day} className={`flex flex-col md:flex-row w-full ${isLeft ? 'justify-start' : 'justify-end'} relative`}>
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 z-10 pt-6">
                    <div className="w-2 h-8 bg-neon-cyan rounded-full shadow-[0_0_10px_#00f0ff]" />
                  </div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`w-full md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div
                      onMouseEnter={() => setExpandedDay(item.day)}
                      onMouseLeave={() => setExpandedDay(null)}
                      className={`bg-cardBg rounded-xl p-6 cursor-pointer transition-all duration-150 border hover:-translate-y-3 ${
                        isExpanded ? 'border-neon-cyan shadow-glow-cyan' : 'border-gray-800 hover:border-gray-600'
                      }`}
                    >
                      <div className="font-mono text-neon-green text-sm mb-2">Day {item.day}</div>
                      <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                      
                      {item.bullets.length > 0 && (
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-gray-800">
                                <ul className="space-y-2">
                                  {item.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                      <span className="text-neon-purple mr-2 mt-1 flex-shrink-0">▶</span>
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                      
                      {item.bullets.length > 0 && (
                        <div className="flex justify-center mt-4">
                          <ChevronDown className={`w-5 h-5 text-neon-cyan transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
