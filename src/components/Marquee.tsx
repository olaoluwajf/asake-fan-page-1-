interface Props {
  items: string[]
  variant?: 'light' | 'dark'
}

export default function Marquee({ items, variant = 'light' }: Props) {
  const track = [...items, ...items]

  return (
    <div
      className={`group overflow-hidden border-y py-6 ${
        variant === 'dark' ? 'border-paper/15 bg-ink text-paper' : 'border-mist bg-paper text-ink'
      }`}
    >
      <div className="flex w-max animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {track.map((item, i) => (
          <span key={i} className="mx-6 shrink-0 text-2xl md:text-4xl font-medium tracking-tight whitespace-nowrap">
            {item}
            <span className={`ml-6 ${variant === 'dark' ? 'text-paper/30' : 'text-stone'}`}>&bull;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
