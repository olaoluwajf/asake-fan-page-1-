import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

interface Props {
  children: ReactNode
  className?: string
  as?: 'a' | 'button'
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  ariaLabel?: string
}

export default function MagneticButton({
  children,
  className = '',
  as = 'button',
  href,
  target,
  rel,
  onClick,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.3 })

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * 0.35)
    y.set(relY * 0.35)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const shared = {
    style: { x: springX, y: springY },
    className,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    onClick,
    'aria-label': ariaLabel,
    children,
  }

  if (as === 'a') {
    return <motion.a ref={ref} href={href} target={target} rel={rel} {...shared} />
  }

  return <motion.button ref={ref} type="button" {...shared} />
}
