import SectionHeading from '../components/SectionHeading'
import AlbumCard from '../components/AlbumCard'
import SongList from '../components/SongList'
import { albums } from '../data/albums'
import { songs } from '../data/songs'

export default function Music() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="px-6 md:px-10">
        <SectionHeading eyebrow="Discography" title="Music" />
      </section>

      <section className="mt-12 md:mt-16">
        <div className="hidden gap-8 px-6 md:grid md:grid-cols-4 md:px-10">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 pb-2 snap-x snap-mandatory md:hidden">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>

      <section className="mt-24 px-6 pb-24 md:mt-32 md:px-10 md:pb-32">
        <SectionHeading eyebrow="Popular songs" title="Essential Asake" />
        <div className="mt-10">
          <SongList songs={songs} />
        </div>
      </section>
    </div>
  )
}
