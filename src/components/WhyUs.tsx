import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const WhyUs = () => {
  const ref = useRef(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Parallax for content container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  
  // Parallax for image - image scrolls down at same speed as user scrolls
  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"]
  })
  // Image moves down at 1:1 speed with scroll (larger range for same speed)
  const imageY = useTransform(imageScrollYProgress, [0, 1], [0, 300])

  const features = [
    'Fixed pricing',
    '10–12 day completion',
    'Licensed & insured',
    '1-year workmanship warranty',
  ]

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 pb-8 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
              Why Us
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              We specialize in standard bathroom remodels only.<br />
              That focus allows us to deliver faster, cleaner, and more predictable results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-action-blue text-2xl flex-shrink-0" />
                  <span className="text-lg text-gray-800">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image with Parallax */}
          <div
            ref={imageRef}
            className="relative overflow-hidden lg:col-span-1"
            style={{ height: '600px', marginTop: '40px' }}
          >
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0"
            >
              <img
                src="/images/bathroomremodel.jpg"
                alt="Modern bathroom remodel"
                className="w-full h-[100%] object-cover"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  willChange: 'transform',
                  display: 'block',
                  transform: 'scale(1.15)'
                }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
