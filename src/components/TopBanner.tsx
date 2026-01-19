import { motion } from 'framer-motion'

interface TopBannerProps {
  onNavigateToContact?: () => void
}

const TopBanner = ({ onNavigateToContact }: TopBannerProps) => {
  const handleContactClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact()
    } else {
      const element = document.getElementById('contact')
      if (element) {
        const headerHeight = 80
        const bannerHeight = 44
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight - bannerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-action-blue text-white py-2 px-4 shadow-md"
      style={{ backgroundColor: '#345DAE' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <p className="text-sm sm:text-base font-medium text-center">
            Click for a free estimate
          </p>
          <button
            onClick={handleContactClick}
            className="bg-white text-action-blue font-semibold px-4 sm:px-6 py-1.5 text-sm sm:text-base transition-all duration-300 hover:bg-opacity-90 shadow-sm hover:shadow-md min-h-[32px] touch-manipulation"
            style={{ color: '#345DAE' }}
            aria-label="Contact us for a free estimate"
          >
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default TopBanner
