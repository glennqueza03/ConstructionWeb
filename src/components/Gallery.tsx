import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaImage } from 'react-icons/fa'

// Placeholder images - replace with actual images later
// Using construction/bathroom themed placeholder images
const placeholderImages = [
  {
    id: 1,
    src: `https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&auto=format&q=80`,
    alt: `Modern bathroom remodel project`,
  },
  {
    id: 2,
    src: `https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop&auto=format&q=80`,
    alt: `Bathroom tile installation`,
  },
  {
    id: 3,
    src: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format&q=80`,
    alt: `Bathroom vanity replacement`,
  },
  {
    id: 4,
    src: `https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&auto=format&q=80`,
    alt: `Shower remodel project`,
  },
  {
    id: 5,
    src: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&auto=format&q=80`,
    alt: `Full bathroom renovation`,
  },
  {
    id: 6,
    src: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop&auto=format&q=80`,
    alt: `Bathroom design transformation`,
  },
]

const Gallery = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy text-center mb-16"
        >
          Our Work
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {placeholderImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative overflow-hidden shadow-lg cursor-pointer group"
            >
              <div className="aspect-[4/3] bg-soft-gray relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <FaImage className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-gray-600 mt-12 text-lg"
        >
          Ready to see your bathroom transformed? Get in touch for a free estimate.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Gallery
