import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.75])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink">
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1600&auto=format&fit=crop&sat=-100"
          alt="Asake performing on stage, monochrome"
          className="h-full w-full object-cover grayscale contrast-125"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10"
      />


      <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-20 md:px-10 md:pb-28">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-colossal font-semibold text-paper"
          >
            Asake
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-4 text-base md:text-lg text-mist"
        >
          Unofficial fan site
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-2 text-paper/70"
      >
        <span className="text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
