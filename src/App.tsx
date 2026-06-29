import './App.css'
import { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import StatsSection from './components/StatsSection'
import Products from './components/Products'
import Gallery from './components/Gallery'
import ExportsCarousel from './components/ExportsCarousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'

function AppContent() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <ScrollProgress />
          <Header />
          <main>
            <Hero />
            <About />
            <StatsSection />
            <Products />
            <Gallery />
            <ExportsCarousel />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
