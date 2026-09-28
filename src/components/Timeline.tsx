import { motion } from 'framer-motion'
import type { TimelineEntry } from '../data/timeline'

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative pl-8 md:pl-10">
      <div className="absolute left-[3px] md:left-1 top-2 bottom-2 w-px bg-mist" />
      <ul className="flex flex-col gap-12 md:gap-16">
        {entries.map((entry) => (
          <motion.li
            key={entry.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="absolute -left-8 md:-left-10 top-1.5 h-2 w-2 rounded-full bg-ink" />
            <p className="text-sm text-stone">{entry.year}</p>
            <h3 className="mt-1 text-2xl md:text-3xl font-medium tracking-tight">{entry.title}</h3>
            <p className="mt-2 max-w-md text-graphite">{entry.description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
