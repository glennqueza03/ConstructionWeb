import { useState, useEffect } from 'react'
import TopBanner from './components/TopBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Services from './components/Services'
import ServicesPage from './components/ServicesPage'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home')
  const [scrollToSection, setScrollToSection] = useState<string | null>(null)

  useEffect(() => {
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        if (hash.startsWith('service-')) {
          setCurrentPage('services')
          setTimeout(() => {
            const element = document.getElementById(hash.replace('service-', ''))
            if (element) {
              const headerHeight = 80
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
              const offsetPosition = elementPosition - headerHeight
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
          }, 100)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (scrollToSection) {
      setTimeout(() => {
        const element = document.getElementById(scrollToSection)
        if (element) {
          const headerHeight = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
        setScrollToSection(null)
      }, 100)
    }
  }, [scrollToSection, currentPage])

  const navigateToServices = (sectionId?: string) => {
    setCurrentPage('services')
    if (sectionId) {
      setScrollToSection(sectionId)
    }
    window.history.pushState({}, '', sectionId ? `/services#service-${sectionId}` : '/services')
  }

  const navigateToHome = () => {
    setCurrentPage('home')
    window.history.pushState({}, '', '/')
  }

  const navigateToContact = () => {
    if (currentPage === 'services') {
      // If on services page, navigate to home first
      setCurrentPage('home')
      window.history.pushState({}, '', '/')
      // Then scroll to contact form after page switches
      setTimeout(() => {
        setScrollToSection('contact')
      }, 100)
    } else {
      // If already on home page, just scroll to contact form
      setScrollToSection('contact')
    }
  }

  if (currentPage === 'services') {
    return (
      <div className="min-h-screen" style={{ minHeight: '100vh', width: '100%' }}>
        <TopBanner onNavigateToContact={navigateToContact} />
        <Header 
          onNavigateToServices={navigateToServices} 
          onNavigateToHome={navigateToHome}
          onNavigateToContact={navigateToContact}
        />
        <ServicesPage />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ minHeight: '100vh', width: '100%' }}>
      <TopBanner onNavigateToContact={navigateToContact} />
      <Header 
        onNavigateToServices={navigateToServices} 
        onNavigateToHome={navigateToHome}
        onNavigateToContact={navigateToContact}
      />
      <Hero />
      <WhyUs />
      <Process />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
