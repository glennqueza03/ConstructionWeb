import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const SplitSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50])

  const scrollToContact = () => {
    const footer = document.getElementById('footer')
    footer?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Left Side - Red Background */}
      <motion.div
        style={{ y: textY, backgroundColor: '#DC2626' }}
        className="lg:w-2/3 flex items-center justify-center p-12 lg:p-20 relative z-10"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-lg mb-4"
          >
            Building Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Serving Clients in the Region
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-white text-red-600 font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            style={{ backgroundColor: '#ffffff', color: '#DC2626' }}
          >
            Contact
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side - Construction Tools Image */}
      <motion.div
        style={{ y: imageY }}
        className="lg:w-1/3 relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=1200&fit=crop&auto=format&q=80"
          alt="Construction tools"
          className="w-full h-full object-cover"
          style={{ minHeight: '100vh' }}
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900 opacity-30"></div>
      </motion.div>
    </section>
  )
}

export default SplitSection
