import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Enhanced parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const scrollToContact = () => {
    const footer = document.getElementById('footer')
    footer?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/heroimage.jpg"
          alt="Construction worker crafting with tools and safety equipment"
          className="w-full h-[130%] object-cover"
          style={{ 
            objectPosition: 'center',
            willChange: 'transform'
          }}
          loading="eager"
        />
      </motion.div>
      
      {/* Dark overlay with gradient - fixed, does not move with parallax */}
      <div 
        style={{ 
          backgroundColor: 'rgba(11, 34, 64, 0.75)',
          background: 'linear-gradient(to bottom, rgba(11, 34, 64, 0.85) 0%, rgba(11, 34, 64, 0.7) 50%, rgba(11, 34, 64, 0.6) 100%)'
        }}
        className="absolute inset-0 z-[1]"
      ></div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white"
          style={{ color: '#ffffff' }}
        >
          Remodeling Done Right
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Fixed price. Clear scope. No surprises.<br />
          Serving Brownsville, TX.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="bg-white text-navy font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto group min-h-[48px] touch-manipulation"
          style={{ backgroundColor: '#ffffff', color: '#0B2240' }}
          aria-label="Contact us for a free estimate"
        >
          Contact
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
