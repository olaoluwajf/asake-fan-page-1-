import { Play } from 'lucide-react'
import type { VideoItem } from '../data/videos'

const spanClasses: Record<VideoItem['size'], string> = {
  lg: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
  md: 'md:col-span-1 md:row-span-2 aspect-[3/4]',
  sm: 'aspect-video',
}

export default function VideoCard({ video }: { video: VideoItem }) {
  return (
    <div className={`group relative overflow-hidden bg-ink ${spanClasses[video.size]}`}>
      <img
        src={video.thumbnail}
        alt={`${video.title} video thumbnail`}
        loading="lazy"
        className="h-full w-full object-cover grayscale transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40" />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <span className="self-start flex h-11 w-11 items-center justify-center rounded-full bg-paper/0 border border-paper/40 text-paper opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:bg-paper/90 group-hover:text-ink">
          <Play size={16} className="ml-0.5" />
        </span>
        <div className="text-paper">
          <p className="text-lg font-medium">{video.title}</p>
          <p className="text-sm text-mist/80">
            {video.project} · {video.year}
          </p>
        </div>
      </div>
    </div>
  )
}
