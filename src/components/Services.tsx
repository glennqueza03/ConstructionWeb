import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Full Bathroom Remodels',
    description: 'Complete bathroom transformations with fixed pricing and predictable timelines.',
    image: '/images/bathroomremodel.jpg',
  },
  {
    title: 'Shower Remodels',
    description: 'Modern shower installations completed in 10-12 days with quality materials.',
    image: '/images/showerremodel.jpg',
  },
  {
    title: 'Tile Installation',
    description: 'Professional tile work for floors, walls, and backsplashes.',
    image: '/images/bathroomtile.jpg',
  },
  {
    title: 'Vanity Replacement',
    description: 'Update your bathroom with new vanities and fixtures.',
    image: '/images/vanity.jpg',
  },
]

const customHomeBuild = {
  title: 'Custom Home Builds',
  description: 'Quality construction with attention to detail and predictable timelines.',
  image: '/images/homeconstruction.jpg',
}

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-2 sm:mb-3">
            Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            A commitment to excellence in every project.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 max-w-5xl mx-auto mb-4 md:mb-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden group"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Text Block - Top-left, covers 40-50% of card */}
              <div 
                className="absolute top-0 left-0 z-10 p-4 sm:p-6 md:p-8 lg:p-10 w-[50%] h-[45%] flex flex-col justify-between"
                style={{ backgroundColor: '#345DAE' }}
              >
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white text-opacity-90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Home Builds - Centered below */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative aspect-[4/5] md:aspect-[3/2] max-w-3xl mx-auto overflow-hidden group"
        >
          {/* Full Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={customHomeBuild.image}
              alt={customHomeBuild.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          
          {/* Text Block - Top-left, covers 40-50% of card */}
          <div 
            className="absolute top-0 left-0 z-10 p-4 sm:p-6 md:p-8 lg:p-10 w-[50%] h-[45%] flex flex-col justify-between"
            style={{ backgroundColor: '#345DAE' }}
          >
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                {customHomeBuild.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white text-opacity-90 leading-relaxed">
                {customHomeBuild.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services
