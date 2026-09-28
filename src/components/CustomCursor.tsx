import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 })
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 })

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(canHover)
    if (!canHover) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 16)
      y.set(e.clientY - 16)
      const target = e.target as HTMLElement
      setActive(!!target.closest('a, button, [role="button"]'))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 1.8 : 1 }}
      transition={{ scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      className="pointer-events-none fixed left-0 top-0 z-[80] h-8 w-8 rounded-full bg-paper mix-blend-difference"
    />
  )
}
