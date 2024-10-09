import React from 'react'
import { useSpring, animated } from 'react-spring'

const HeroSection = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 300,
  })

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center">
        <animated.h1 style={fadeIn} className="text-5xl md:text-7xl font-bold mb-4">
          Innovate. Create. Elevate.
        </animated.h1>
        <animated.p style={fadeIn} className="text-xl md:text-2xl mb-8">
          Transforming ideas into digital realities
        </animated.p>
        <animated.a
          href="#contact"
          style={fadeIn}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
        >
          Get Started
        </animated.a>
      </div>
    </section>
  )
}

export default HeroSection