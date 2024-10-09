import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BentoGrid from './components/BentoGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <Footer />
    </div>
  )
}

export default App