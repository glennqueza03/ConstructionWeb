import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const steps = [
  {
    number: '1',
    title: 'Free estimate',
  },
  {
    number: '2',
    title: 'Fixed-price proposal',
  },
  {
    number: '3',
    title: '50% deposit',
  },
  {
    number: '4',
    title: 'Build in 10–12 days',
  },
  {
    number: '5',
    title: 'Final walk-through',
  },
]

const Process = () => {
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
        staggerChildren: 0.15,
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
    <section ref={ref} className="pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 bg-white relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy text-center mb-8 sm:mb-12 md:mb-16"
        >
          Our Process
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Desktop: Horizontal layout */}
          <div className="hidden md:flex items-start justify-between gap-4 lg:gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex-1 text-center relative z-10 flex flex-col items-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-action-blue mb-4 lg:mb-6 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-action-blue bg-opacity-10 flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-navy mb-2">{step.title}</h3>
                {index < steps.length - 1 && (
                  <FaArrowRight className="hidden lg:block absolute top-7 lg:top-8 right-[-24px] lg:right-[-28px] text-action-blue text-xl lg:text-2xl" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical layout */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <div className="text-2xl font-bold text-action-blue w-10 h-10 flex items-center justify-center bg-action-blue bg-opacity-10 flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                {index < steps.length - 1 && (
                  <FaArrowRight className="ml-auto text-action-blue text-lg transform rotate-90" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Process
