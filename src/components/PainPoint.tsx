import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PainPoint = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
            Tired of contractors that disappear or drag projects for months?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
            We specialize in standard bathroom remodels only, ensuring a{' '}
            <span className="font-semibold text-action-blue">10–12 day completion</span> with no surprises.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PainPoint
