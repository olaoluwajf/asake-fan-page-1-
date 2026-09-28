import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { timeline } from '../data/timeline'

export default function About() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="grid gap-10 px-6 pb-24 md:grid-cols-[1fr_1.3fr] md:gap-16 md:px-10 md:pb-32">
        <motion.img
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          src="https://i0.wp.com/thenollywoodreporter.com/wp-content/uploads/2025/08/Asake-e1754298623681.webp"
          alt="Portrait of Asake, monochrome"
          className="aspect-[3/4] w-full object-cover grayscale"
        />
        <div>
          <SectionHeading eyebrow="Biography" title="About Asake" />
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-graphite">
            <p>
              Ahmed Ololade, known professionally as Asake, is a Nigerian singer and songwriter from Lagos with
              Yoruba roots and a background steeped in Fuji music, choral singing and street culture.
            </p>
            <p>
              He signed to YBNL Nation in 2022 and released his debut album, Mr. Money With The Vibe, later that
              year, driven by tracks including "Sungba" and "Peace Be Unto You." The record introduced a sound built
              on Amapiano log drums, gospel-adjacent vocal layering and call-and-response hooks drawn from Lagos
              street parades.
            </p>
            <p>
              His second album, Work Of Art, followed in 2023 and debuted inside the UK Top 5, while his 2024
              record, Lungu Boy, widened the palette further with Amapiano and Bollywood-influenced production.
            </p>
            <p>
              Beyond the numbers, Asake is regarded as one of the artists who helped push a distinctly street-rooted
              strain of Afrobeats into the international mainstream, without smoothing over its Yoruba and Fuji
              foundations.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-mist px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="Career" title="Timeline" />
        <div className="mt-14">
          <Timeline entries={timeline} />
        </div>
      </section>
    </div>
  )
}
