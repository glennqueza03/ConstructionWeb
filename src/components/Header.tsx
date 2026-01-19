import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'

interface HeaderProps {
  onNavigateToServices?: (sectionId?: string) => void
  onNavigateToHome?: () => void
  onNavigateToContact?: () => void
}

const Header = ({ onNavigateToServices, onNavigateToHome, onNavigateToContact }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    if (onNavigateToServices) {
      // Navigate to services page and scroll to section
      onNavigateToServices(id)
    } else {
      // Fallback to scrolling on current page
      const element = document.getElementById(id)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
    setIsServicesOpen(false)
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }
  
  const handleServicesClick = () => {
    if (onNavigateToServices) {
      onNavigateToServices()
    }
    setIsServicesOpen(false)
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }

  const handleMobileContact = () => {
    if (onNavigateToContact) {
      onNavigateToContact()
    } else {
      scrollToSection('contact')
    }
    setIsMobileMenuOpen(false)
  }

  const services = [
    { id: 'full-bathroom-remodels', name: 'Full Bathroom Remodels' },
    { id: 'shower-remodels', name: 'Shower Remodels' },
    { id: 'tile-installation', name: 'Tile Installation' },
    { id: 'vanity-replacement', name: 'Vanity Replacement' },
    { id: 'custom-home-builds', name: 'Custom Home Builds' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-lg' : 'bg-navy bg-opacity-95'
      }`}
      style={{ backgroundColor: '#0B2240', top: '44px' }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white font-bold text-xl sm:text-2xl cursor-pointer"
            onClick={() => {
              if (onNavigateToHome) {
                onNavigateToHome()
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            Contractor Company
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white hover:text-action-blue transition-colors flex items-center gap-2"
              >
                Services
                <FaChevronDown 
                  className={`text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 bg-navy border border-action-blue border-opacity-30 min-w-[220px] shadow-xl"
                >
                  <button
                    onClick={handleServicesClick}
                    className="w-full text-left px-4 py-3 text-white hover:bg-action-blue hover:bg-opacity-20 transition-colors border-b border-action-blue border-opacity-10 font-semibold"
                  >
                    All Services
                  </button>
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className="w-full text-left px-4 py-3 text-white hover:bg-action-blue hover:bg-opacity-20 transition-colors border-b border-action-blue border-opacity-10 last:border-b-0"
                    >
                      {service.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-action-blue transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => {
                if (onNavigateToContact) {
                  onNavigateToContact()
                } else {
                  scrollToSection('contact')
                }
              }}
              className="text-white hover:text-action-blue transition-colors"
            >
              Contact
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block text-white text-sm"
          >
            Call Us Anytime <span className="text-action-blue font-semibold">123-456-7890</span>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-action-blue rounded"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              ref={mobileMenuRef}
            >
              <div className="pt-4 pb-6 space-y-4 border-t border-action-blue border-opacity-30">
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full text-left text-white hover:text-action-blue transition-colors flex items-center justify-between py-3 px-4 text-lg font-semibold"
                  >
                    Services
                    <FaChevronDown 
                      className={`text-sm transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6 space-y-2 mt-2"
                      >
                        <button
                          onClick={handleServicesClick}
                          className="w-full text-left text-white hover:text-action-blue transition-colors py-2 px-4 text-base"
                        >
                          All Services
                        </button>
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => scrollToSection(service.id)}
                            className="w-full text-left text-white hover:text-action-blue transition-colors py-2 px-4 text-base"
                          >
                            {service.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => scrollToSection('about')}
                  className="w-full text-left text-white hover:text-action-blue transition-colors py-3 px-4 text-lg font-semibold"
                >
                  About Us
                </button>
                <button
                  onClick={handleMobileContact}
                  className="w-full text-left text-white hover:text-action-blue transition-colors py-3 px-4 text-lg font-semibold"
                >
                  Contact
                </button>
                <div className="pt-4 border-t border-action-blue border-opacity-30 px-4">
                  <div className="text-white text-sm">
                    Call Us: <span className="text-action-blue font-semibold">123-456-7890</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
