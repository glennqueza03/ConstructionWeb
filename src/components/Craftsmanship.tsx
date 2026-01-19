import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const craftsmanshipItems = [
  {
    title: 'New Construction',
    description: 'Creating new homes with care and expertise.',
  },
  {
    title: 'Quality Renovations',
    description: 'Revitalizing spaces with dedication.',
  },
  {
    title: 'Attention to Detail',
    description: 'Focusing on precision in every project.',
  },
]

const Craftsmanship = () => {
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
    <section id="about" ref={ref} className="py-20 bg-white relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6 md:mb-0"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy">
              Our<br />Craftsmanship
            </h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border-2 border-navy flex items-center justify-center hover:bg-navy hover:text-white transition-colors"
            >
              <FaArrowRight className="text-navy group-hover:text-white" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Where We Excel
            </h3>
            <p className="text-lg text-gray-600">
              Excelling in crafting exceptional spaces.
            </p>
          </motion.div>
        </div>

        {/* Cards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {craftsmanshipItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800 p-8"
              style={{ backgroundColor: '#474B57' }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                {item.title.split(' ').map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < item.title.split(' ').length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <p className="text-gray-300 text-lg">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Craftsmanship
