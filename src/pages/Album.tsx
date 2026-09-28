import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { albums } from '../data/albums'
import { songs } from '../data/songs'
import SongList from '../components/SongList'

export default function Album() {
  const { albumId } = useParams()
  const album = albums.find((a) => a.id === albumId)

  if (!album) return <Navigate to="/music" replace />

  const tracklist = songs.filter((s) => s.project === album.title)

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-32">
      <Link to="/music" className="inline-flex items-center gap-2 text-sm text-graphite hover:text-ink">
        <ArrowLeft size={16} /> Back to music
      </Link>

      <div className="mt-10 grid gap-10 md:grid-cols-[380px_1fr] md:gap-16">
        <img
          src={album.cover}
          alt={`${album.title} cover artwork`}
          className="aspect-square w-full max-w-sm object-cover grayscale"
        />
        <div>
          <p className="text-sm text-stone">
            {album.year} · {album.trackCount} tracks
          </p>
          <h1 className="mt-2 text-huge font-medium tracking-tight">{album.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">{album.description}</p>

          {tracklist.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-4 text-sm text-stone">Featured tracks</h2>
              <SongList songs={tracklist} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
