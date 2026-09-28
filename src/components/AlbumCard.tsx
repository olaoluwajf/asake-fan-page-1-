import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import type { Album } from '../data/albums'

export default function AlbumCard({ album }: { album: Album }) {
  return (
    <Link
      to={`/music/${album.id}`}
      className="group relative block w-[78vw] max-w-[340px] shrink-0 md:w-[320px] snap-start"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <img
          src={album.cover}
          alt={`${album.title} cover artwork`}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
        <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-400 ease-editorial group-hover:opacity-100 group-hover:scale-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90">
            <Play size={20} className="ml-0.5 fill-ink text-ink" />
          </span>
        </span>
      </div>
      <div className="mt-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-medium">{album.title}</h3>
          <span className="text-sm text-stone">{album.year}</span>
        </div>
        <p className="mt-1 text-sm text-stone">{album.trackCount} tracks</p>
      </div>
    </Link>
  )
}
