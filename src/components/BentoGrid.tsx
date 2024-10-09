import React from 'react'
import { Zap, Code, Palette, MessageSquare, Globe, Cpu, Shield, Headphones } from 'lucide-react'

const BentoGrid = () => {
  const items = [
    { icon: Zap, title: 'Fast Performance', description: 'Lightning-fast websites and applications' },
    { icon: Code, title: 'Clean Code', description: 'Maintainable and scalable solutions' },
    { icon: Palette, title: 'Creative Design', description: 'Stunning visuals that captivate' },
    { icon: MessageSquare, title: 'Clear Communication', description: 'We keep you in the loop, always' },
    { icon: Globe, title: 'Global Reach', description: 'Expand your digital presence worldwide' },
    { icon: Cpu, title: 'Cutting-edge Tech', description: 'Leveraging the latest technologies' },
    { icon: Shield, title: 'Robust Security', description: 'Protecting your digital assets' },
    { icon: Headphones, title: '24/7 Support', description: 'Always here when you need us' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <item.icon className="w-12 h-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BentoGrid