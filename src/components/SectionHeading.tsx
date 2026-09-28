import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, align = 'left' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      {eyebrow && <p className="text-sm text-stone mb-3">{eyebrow}</p>}
      <h2 className="text-huge font-medium text-ink">{title}</h2>
    </motion.div>
  )
}
