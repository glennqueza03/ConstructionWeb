import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaTools, FaLinkedin, FaFacebook, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer" className="bg-navy text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Call or message us today
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
            <div className="flex items-center gap-2 text-action-blue">
              <FaPhone />
              <span className="text-lg font-semibold">123-456-7890</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <FaMapMarkerAlt />
              <span className="text-lg">Brownsville, TX</span>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <FaTools />
              <span className="text-sm">Limited monthly availability</span>
            </div>
          </div>
        </motion.div>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Contractor Company</h3>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6 mb-6 md:mb-0"
          >
            <a href="#" className="hover:text-action-blue transition-colors">
              Accessibility Statement
            </a>
            <a href="#" className="hover:text-action-blue transition-colors">
              Privacy Policy
            </a>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:justify-end gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <span>123-456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <span>info@contractorcompany.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Brownsville, TX</span>
            </div>
          </div>
        </motion.div>

        {/* Social Media and Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-action-blue border-opacity-30"
        >
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
            >
              <FaGlobe className="text-white" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
            >
              <FaLinkedin className="text-white" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
            >
              <FaFacebook className="text-white" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-accent">
            <p>© {new Date().getFullYear()} by Contractor Company.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
