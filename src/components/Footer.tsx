import { Instagram, Youtube, Music2, Twitter } from 'lucide-react'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/mrmoney/', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCU9R50wyBPKpdbcIScAyZig', icon: Youtube },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/3a1tBryiczPAZpgoZN9Rzg?si=zG_dY3WGQKa4I18uVD-yVQ', icon: Music2 }
]

export default function Footer() {
  return (
    <footer className="border-t border-mist bg-paper px-6 py-16 md:px-10 md:py-20">
      <p className="text-huge font-medium tracking-tight">Asake</p>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-graphite transition-colors hover:text-ink"
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-1 border-t border-mist pt-6 text-sm text-stone md:flex-row md:items-center md:justify-between">
        <p>Unofficial fan website. Not affiliated with Asake or his management.</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
