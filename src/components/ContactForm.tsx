import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaTools } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      service: '',
      message: '',
    })
  }

  const services = [
    'Full Bathroom Remodels',
    'Shower Remodels',
    'Tile Installation',
    'Vanity Replacement',
    'Custom Home Builds',
  ]

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy text-center mb-4">
            Contact us for a free estimate
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-action-blue">
              <FaPhone />
              <span className="text-lg font-semibold">123-456-7890</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt />
              <span className="text-lg">Brownsville, TX</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaTools />
              <span className="text-sm">Limited monthly availability</span>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-soft-gray p-4 sm:p-6 md:p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-soft-gray focus:border-action-blue focus:outline-none transition-colors text-base min-h-[48px] touch-manipulation"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-soft-gray focus:border-action-blue focus:outline-none transition-colors text-base min-h-[48px] touch-manipulation"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-soft-gray focus:border-action-blue focus:outline-none transition-colors text-base min-h-[48px] touch-manipulation"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-soft-gray focus:border-action-blue focus:outline-none transition-colors bg-white text-base min-h-[48px] touch-manipulation"
              >
                <option value="">Select a service...</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-soft-gray focus:border-action-blue focus:outline-none transition-colors resize-none text-base min-h-[120px] touch-manipulation"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-action-blue hover:bg-opacity-90 text-white font-semibold px-8 py-4 text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl min-h-[48px] touch-manipulation"
            >
              Submit Request
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
