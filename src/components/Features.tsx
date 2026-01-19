import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaDollarSign, FaCalendarCheck, FaShieldAlt, FaAward } from 'react-icons/fa'

const features = [
  {
    icon: FaDollarSign,
    title: 'Fixed Pricing',
    description: 'No hidden costs or surprise charges. You know exactly what you\'re paying upfront.',
  },
  {
    icon: FaCalendarCheck,
    title: '10–12 Day Completion',
    description: 'We stick to our timeline. Your bathroom will be done in 10–12 days, guaranteed.',
  },
  {
    icon: FaShieldAlt,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind and protection.',
  },
  {
    icon: FaAward,
    title: '1-Year Workmanship Warranty',
    description: 'We stand behind our work with a comprehensive 1-year warranty.',
  },
]

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy text-center mb-16"
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 border-2 border-soft-gray hover:border-action-blue transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-action-blue bg-opacity-10 p-4 mb-4">
                    <Icon className="text-4xl text-action-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
