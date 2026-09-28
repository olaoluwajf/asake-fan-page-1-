import { useState } from 'react'
import { Play } from 'lucide-react'
import type { Song } from '../data/songs'

function Waveform({ active }: { active: boolean }) {
  const bars = [4, 10, 6, 14, 8, 5, 11]
  return (
    <div className="flex items-end gap-[3px] h-4">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[2px] bg-ink transition-all duration-300"
          style={{
            height: active ? `${h}px` : '3px',
            transitionDelay: `${i * 30}ms`,
          }}
        />
      ))}
    </div>
  )
}

export default function SongList({ songs }: { songs: Song[] }) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <ul>
      {songs.map((song, i) => (
        <li
          key={song.id}
          onMouseEnter={() => setHovered(song.id)}
          onMouseLeave={() => setHovered(null)}
          className="group flex items-center gap-4 md:gap-6 border-b border-mist py-4 md:py-5 transition-colors duration-300 hover:bg-bone/60"
        >
          <span className="w-6 text-sm text-stone tabular-nums">{String(i + 1).padStart(2, '0')}</span>
          <div className="flex-1 min-w-0">
            <p className="truncate text-base md:text-lg">{song.title}</p>
            <p className="truncate text-sm text-stone">{song.project}</p>
          </div>
          <div className="hidden sm:block">
            <Waveform active={hovered === song.id} />
          </div>
          <span className="text-sm text-stone tabular-nums w-12 text-right">{song.duration}</span>
          <button
            aria-label={`Play ${song.title}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-mist text-graphite transition-colors duration-300 group-hover:border-ink group-hover:text-ink"
          >
            <Play size={14} className="ml-0.5" />
          </button>
        </li>
      ))}
    </ul>
  )
}
