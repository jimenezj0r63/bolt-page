import React from 'react'
import { useSpring, animated } from 'react-spring'

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  })
  return <animated.div style={props}>{children}</animated.div>
}

export default AnimatedSection