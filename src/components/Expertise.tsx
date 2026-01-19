import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaHome, FaHammer, FaTools, FaAward, FaCheckCircle } from 'react-icons/fa'

const expertiseItems = [
  {
    icon: FaHome,
    title: 'Customized Builds',
    description: 'Crafting unique spaces with attention to detail.',
  },
  {
    icon: FaHammer,
    title: 'New Builds',
    description: 'Creating new spaces with quality materials.',
  },
  {
    icon: FaTools,
    title: 'Restorations',
    description: 'Preserving heritage with expert care.',
  },
  {
    icon: FaAward,
    title: 'Quality Materials',
    description: 'Using the finest resources for lasting results.',
  },
  {
    icon: FaCheckCircle,
    title: 'Meticulous Attention',
    description: 'Ensuring perfection in every aspect.',
  },
]

const Expertise = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="services" ref={ref} className="py-20 bg-white relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600">Licensed & Insured</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {expertiseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800 p-8 relative overflow-hidden group"
                style={{ backgroundColor: '#374151' }}
              >
                {/* Red Hexagonal Icon */}
                <div className="absolute top-4 left-4 w-8 h-8">
                  <div 
                    className="w-full h-full transform rotate-45"
                    style={{ backgroundColor: '#DC2626' }}
                  ></div>
                </div>
                
                <div className="mt-8">
                  <Icon className="text-4xl text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Expertise
