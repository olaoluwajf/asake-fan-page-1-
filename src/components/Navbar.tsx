import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/music', label: 'Music' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled ? 'bg-paper/70 backdrop-blur-md border-b border-mist' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 h-20">
        <Link to="/" className="text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          Asake.
        </Link>

        <ul className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <li key={l.to} className="relative">
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `pb-1 border-b transition-colors duration-300 ${
                    isActive ? 'border-ink text-ink' : 'border-transparent text-graphite hover:text-ink'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-paper border-b border-mist px-6 pb-8 pt-2"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-2xl tracking-tight border-b border-mist ${
                        isActive ? 'text-ink' : 'text-stone'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
