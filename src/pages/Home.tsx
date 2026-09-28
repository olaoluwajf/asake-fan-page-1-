import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import AlbumCard from '../components/AlbumCard'
import SongList from '../components/SongList'
import Marquee from '../components/Marquee'
import MagneticButton from '../components/MagneticButton'
import { albums } from '../data/albums'
import { songs } from '../data/songs'

const tickerItems = albums.map((a) => a.title)

const moments = [
  {
    quote: 'The energy he brings on stage is unlike anything else in Afrobeats right now.',
    source: 'Fan clip, Lagos show',
  },
  {
    quote: 'Work Of Art was the soundtrack to my entire final year.',
    source: 'Fan post',
  },
  {
    quote: 'First time I heard Sungba I knew this was a different kind of star.',
    source: 'Fan comment',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <SectionHeading eyebrow="The sound" title="A sound that doesn't stay in one place." />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-lg leading-relaxed text-graphite"
          >
            <p>
              Rooted in Yoruba Fuji chants and raised on the street corners of Lagos, Asake's music moves between
              genres the way a conversation moves between languages. Amapiano log drums sit under call-and-response
              hooks; talking drums answer synth pads; a single verse can carry gospel weight and street bravado in
              the same breath.
            </p>
            <p className="mt-5">
              It's a catalogue built for communal singing as much as close listening, one that has carried
              contemporary Afrobeats into rooms it hadn't reached before, without losing the corner it came from.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Music preview */}
      <section className="py-24 md:py-32">
        <div className="flex items-end justify-between px-6 md:px-10">
          <SectionHeading eyebrow="Discography" title="Music" />
          <Link
            to="/music"
            className="hidden shrink-0 items-center gap-1 text-sm text-graphite hover:text-ink md:flex"
          >
            View all <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="mt-10 flex gap-5 overflow-x-auto no-scrollbar px-6 pb-2 snap-x snap-mandatory md:px-10">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        <Link to="/music" className="mt-8 flex items-center gap-1 px-6 text-sm text-graphite md:hidden">
          View all <ArrowUpRight size={16} />
        </Link>
      </section>

      <Marquee items={tickerItems} />

      {/* Essential Asake */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="Popular songs" title="Essential Asake" />
        <div className="mt-10">
          <SongList songs={songs.slice(0, 5)} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticButton
            as="a"
            href="https://open.spotify.com/artist/3a1tBryiczPAZpgoZN9Rzg?si=zG_dY3WGQKa4I18uVD-yVQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-ink px-5 py-2.5 text-sm transition-colors hover:bg-ink hover:text-paper"
          >
            Listen on Spotify
          </MagneticButton>
          <MagneticButton
            as="a"
            href="https://music.apple.com/ng/artist/asake/1436064480"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-ink px-5 py-2.5 text-sm transition-colors hover:bg-ink hover:text-paper"
          >
            Listen on Apple Music
          </MagneticButton>
        </div>
      </section>

      {/* Fan moments */}
      <section className="bg-ink px-6 py-24 text-paper md:px-10 md:py-32">
        <SectionHeading title="The Movement" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {moments.map((m, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border border-paper/15 p-7"
            >
              <blockquote className="text-lg leading-snug text-mist">&ldquo;{m.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm text-stone">{m.source}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  )
}
