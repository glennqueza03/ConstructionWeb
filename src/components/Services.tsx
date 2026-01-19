import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBath, FaShower, FaThLarge, FaSink, FaHome } from 'react-icons/fa'

const services = [
  {
    icon: FaBath,
    title: 'Full Bathroom Remodels',
  },
  {
    icon: FaShower,
    title: 'Shower Remodels',
  },
  {
    icon: FaThLarge,
    title: 'Tile Installation',
  },
  {
    icon: FaSink,
    title: 'Vanity Replacement',
  },
  {
    icon: FaHome,
    title: 'Custom Home Builds',
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

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
    <section id="services" ref={ref} className="py-12 sm:py-16 md:py-20 bg-soft-gray relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center mb-8 sm:mb-12 md:mb-16"
        >
          Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 sm:p-8 border-2 border-soft-gray hover:border-action-blue transition-all duration-300 shadow-md hover:shadow-xl text-center"
              >
                <div className="bg-action-blue bg-opacity-10 p-4 mb-4 inline-flex">
                  <Icon className="text-4xl text-action-blue" />
                </div>
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services
