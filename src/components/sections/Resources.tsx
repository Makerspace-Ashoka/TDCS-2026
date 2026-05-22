import { motion } from 'framer-motion'
import { Github, FileText, Code2, BookOpen, Cpu, Link as LinkIcon, ChevronDown } from 'lucide-react'

const resources: any[] = [
  {
    title: 'Curriculum Guide',
    description: 'Complete 8-day curriculum with detailed lesson plans',
    icon: FileText,
    links: [{ name: 'View Curriculum', url: '#curriculum-timeline' }]
  },
  {
    title: 'Code Repository',
    description: 'All source code and requesites',
    icon: Code2,
    links: [{ name: 'GitHub Repository', url: 'https://github.com/Makerspace-Ashoka/ronnie_robot' }]
  },
  {
    title: 'Learning Materials',
    description: 'Comprehensive study guides and references',
    icon: BookOpen,
    links: [
      { name: 'UAI_bot', url: 'https://drive.google.com/file/d/1QzRz8WyZhc1UKotEhGQLPlFU8Nwl7QcO/view?usp=sharing' },
      { name: 'Arduino Docs', url: 'https://docs.arduino.cc' },
      { name: 'ESP-IDF Docs', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/' },
      { name: 'ROS Docs', url: 'https://docs.ros.org/en/rolling/index.html' },
      { name: 'MIT Robotics', url: 'https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/' },
      { name: 'Stanford Robotics', url: 'https://see.stanford.edu/Course/CS223A' },
      { name: 'SpotMicroAI', url: 'https://spotmicroai.readthedocs.io/en/latest/' },
      { name: 'Open Dynamic Robot', url: 'https://open-dynamic-robot-initiative.github.io' },
      { name: 'Kinematics Paper', url: 'https://arxiv.org/abs/1804.10332' },
      { name: 'Inverse Kinematics', url: 'https://en.wikipedia.org/wiki/Inverse_kinematics' },
      { name: 'Google ML Course', url: 'https://developers.google.com/machine-learning/crash-course' },
      { name: 'DeepLearning.AI', url: 'https://www.deeplearning.ai' },
      { name: 'PyTorch Docs', url: 'https://pytorch.org/docs/stable/index.html' },
      { name: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials' },
      { name: 'OpenCV Docs', url: 'https://docs.opencv.org' },
      { name: 'Ultralytics Docs', url: 'https://docs.ultralytics.com' },
      { name: 'OpenMV Docs', url: 'https://docs.openmv.io' },
      { name: 'Unreal Engine', url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine' },
      { name: 'Gazebo Sim', url: 'https://gazebosim.org/docs' },
      { name: 'Coppelia Robotics', url: 'https://www.coppeliarobotics.com/helpFiles/index.html' },
      { name: 'Adafruit PWM', url: 'https://learn.adafruit.com/16-channel-pwm-servo-driver' },
      { name: 'SparkFun Tutorials', url: 'https://learn.sparkfun.com/tutorials' },
      { name: 'Pololu Docs', url: 'https://www.pololu.com/docs' },
      { name: 'C++ Reference', url: 'https://en.cppreference.com/w/' },
      { name: 'PlatformIO Docs', url: 'https://docs.platformio.org/en/latest/' },
      { name: 'FreeRTOS Docs', url: 'https://www.freertos.org/Documentation/RTOS_book.html' },
      {
        group: 'Wokwi Simulations',
        items: [
          { name: 'ESPControlledServo', url: 'https://wokwi.com/projects/464661076283804673' },
          { name: 'ESPControlled2Servo', url: 'https://wokwi.com/projects/464661599286311937' },
          { name: 'ESPControlledUltrasonic', url: 'https://wokwi.com/projects/464662026465739777' },
          { name: 'UltrasonicControlledLED', url: 'https://wokwi.com/projects/464704654307222529' }
        ]
      }
    ]
  },
  {
    title: 'Hardware Setup',
    description: 'Component list and wiring diagrams',
    icon: Cpu,
    links: [
      { name: 'Adafruit PWM Driver', url: 'https://learn.adafruit.com/16-channel-pwm-servo-driver' },
      { name: 'PWM Driver PDF', url: 'https://cdn-learn.adafruit.com/downloads/pdf/16-channel-pwm-servo-driver.pdf' },
      { name: 'LastMinuteEng. Tutorial', url: 'https://lastminuteengineers.com/pca9685-esp32-tutorial/' },
      { name: 'RandomNerd Tutorial', url: 'https://randomnerdtutorials.com/esp32-pca9685-servo-driver-arduino/' },
      { name: 'DroneBot Tutorial', url: 'https://dronebotworkshop.com/esp32-servo/' },
      { name: 'Arduino ESP32 Docs', url: 'https://docs.espressif.com/projects/arduino-esp32/en/latest/' },
      { name: 'Pololu Docs 1', url: 'https://www.pololu.com/docs/0J40/all' },
      { name: 'Pololu Docs 2', url: 'https://www.pololu.com/docs/0J71/all' },
      { name: 'SpotMicroAI', url: 'https://spotmicroai.readthedocs.io/en/latest/' },
      { name: 'SpotMicro GitHub', url: 'https://github.com/mike4192/spotMicro' },
      { name: 'CircuitDigest PCA9685', url: 'https://circuitdigest.com/microcontroller-projects/interface-pca9685-servo-driver-with-esp32' },
      { name: 'Mechatronics Servo', url: 'https://howtomechatronics.com/tutorials/arduino/how-to-control-servo-motors-with-arduino-pca9685-driver/' },
      { name: 'SparkFun Servo', url: 'https://learn.sparkfun.com/tutorials/hobby-servo-tutorial/all' },
      { name: 'SparkFun I2C', url: 'https://learn.sparkfun.com/tutorials/i2c/all' },
      { name: 'Arduino Servo Docs', url: 'https://docs.arduino.cc/learn/electronics/servo-motors/' },
      { name: 'Arduino Servo Lib', url: 'https://docs.arduino.cc/libraries/servo/' },
      { name: 'Wiring Diagram Basics', url: 'https://www.autodesk.com/products/fusion-360/blog/wiring-diagram-basics/' },
      { name: 'Wiring Icons', url: 'https://www.flaticon.com/free-icons/wiring-diagram' }
    ]
  },
]

export default function Resources() {
  return (
    <section id="resources" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-display font-bold mb-16 text-neon-gold text-center tracking-wider"
          style={{ textShadow: '0 0 5px #ffd700' }}
        >
          Resources
        </motion.h2>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, transition: { duration: 0.15, ease: 'easeOut', delay: 0 } }}
                className="bg-cardBg border border-gray-800 rounded-xl p-6 flex flex-col h-full hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-150 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
                  <Icon className="w-8 h-8 text-white group-hover:text-neon-cyan transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-neon-cyan mb-2 font-display">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-400 mb-8 flex-grow">
                  {resource.description}
                </p>
                {resource.links.length === 1 ? (
                  <a 
                    href={resource.links[0].url} 
                    target={resource.links[0].url.startsWith('#') ? '_self' : '_blank'} 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-cyan transition-colors mt-auto"
                  >
                    <LinkIcon className="w-4 h-4" />
                    {resource.links[0].name}
                  </a>
                ) : (
                  <div className="relative mt-auto w-full group/select">
                    <select 
                      className="w-full bg-black/40 border border-gray-700 text-gray-300 text-sm rounded-lg focus:ring-neon-cyan focus:border-neon-cyan block p-2.5 appearance-none cursor-pointer outline-none hover:border-neon-cyan transition-colors"
                      onChange={(e) => {
                        if(e.target.value) {
                          window.open(e.target.value, '_blank', 'noopener,noreferrer');
                          e.target.value = '';
                        }
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a Link...</option>
                      {resource.links.map((link: any, i: number) => {
                        if (link.group) {
                          return (
                            <optgroup key={i} label={link.group} className="bg-gray-800 text-neon-cyan font-semibold">
                              {link.items.map((item: any, j: number) => (
                                <option key={`${i}-${j}`} value={item.url} className="bg-gray-900 text-white py-2 font-normal">
                                  {item.name}
                                </option>
                              ))}
                            </optgroup>
                          );
                        }
                        return (
                          <option key={i} value={link.url} className="bg-gray-900 text-white py-2">
                            {link.name}
                          </option>
                        );
                      })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 group-hover/select:text-neon-cyan transition-colors">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* GitHub Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-cardBg p-10 rounded-xl border border-gray-800 hover:border-neon-cyan hover:shadow-glow-cyan transition-all duration-300 flex flex-col items-center text-center group">
            <Github className="w-12 h-12 text-white mb-6 group-hover:text-neon-cyan transition-colors" />
            <h3 className="text-2xl font-bold text-white mb-3 font-mono group-hover:text-neon-cyan transition-colors">
              Open Source Repository
            </h3>
            <p className="text-gray-400 text-sm mb-8">
              Access all code, documentation, and project files on our GitHub repository
            </p>
            <a
              href="https://github.com/Makerspace-Ashoka/ronnie_robot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-gray-600 hover:border-neon-cyan text-white hover:text-neon-cyan rounded font-mono transition-all duration-300"
            >
              Visit GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
