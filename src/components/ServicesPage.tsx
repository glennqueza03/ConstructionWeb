import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBath, FaShower, FaThLarge, FaSink, FaHome } from 'react-icons/fa'
import ContactForm from './ContactForm'

const services = [
  {
    id: 'full-bathroom-remodels',
    icon: FaBath,
    title: 'Full Bathroom Remodels',
    description: 'We specialize in standard bathrooms only, which keeps pricing predictable and timelines short. Our bathrooms typically run between $13,500 and $15,000, depending on finishes. We\'re not the cheapest—we\'re the fastest and most controlled, ensuring problems are avoided.',
    price: '$13,500 - $15,000',
    timeline: '10-12 days',
  },
  {
    id: 'shower-remodels',
    icon: FaShower,
    title: 'Shower Remodels',
    description: 'Transform your shower with our standard layout system. We focus on predictable pricing and fast completion. Our shower remodels are part of our standard bathroom system, ensuring quality and speed.',
    price: 'Included in full remodels',
    timeline: '10-12 days',
  },
  {
    id: 'tile-installation',
    icon: FaThLarge,
    title: 'Tile Installation',
    description: 'Professional tile work for floors, walls, and backsplashes. We only work with standard layouts to maintain our fast turnaround and predictable pricing structure.',
    price: 'Varies by project',
    timeline: '10-12 days',
  },
  {
    id: 'vanity-replacement',
    icon: FaSink,
    title: 'Vanity Replacement',
    description: 'Update your bathroom with a new vanity and fixtures. As part of our standard bathroom system, we ensure quick installation and fixed pricing.',
    price: 'Included in full remodels',
    timeline: '10-12 days',
  },
  {
    id: 'custom-home-builds',
    icon: FaHome,
    title: 'Custom Home Builds',
    description: 'Creating new spaces with quality materials. We bring the same attention to detail and predictable timelines to custom home construction projects.',
    price: 'Custom quote',
    timeline: 'Varies by project',
  },
]

const ServicesPage = () => {
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
    <section id="services-page" ref={ref} className="pt-12 sm:pt-16 md:pt-20 pb-8 bg-white relative overflow-hidden">
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            We specialize in standard bathrooms only, which keeps pricing predictable and timelines short.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12 max-w-5xl mx-auto"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={itemVariants}
                className="bg-white p-6 sm:p-8 border-2 border-soft-gray hover:border-action-blue transition-all duration-300 shadow-md hover:shadow-xl"
                style={{ scrollMarginTop: '100px' }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-action-blue bg-opacity-10 p-6 flex-shrink-0">
                    <Icon className="text-5xl text-action-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {service.price && (
                        <span className="text-action-blue font-semibold">
                          {service.price}
                        </span>
                      )}
                      {service.timeline && (
                        <span className="text-gray-600">
                          {service.timeline}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-soft-gray p-8 max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-800 mb-4">
            <strong>Important:</strong> We only take 4 bathrooms per month to ensure quality and timely completion.
          </p>
          <p className="text-gray-700">
            If this fits your budget, we can schedule you within the next 2–3 weeks.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

const ServicesPageWithContact = () => {
  return (
    <>
      <ServicesPage />
      <div className="-mt-8">
        <ContactForm />
      </div>
    </>
  )
}

export default ServicesPageWithContact
