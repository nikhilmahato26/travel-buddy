import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mountain } from 'lucide-react'
import { BRAND, waLink, inquiryMsg } from '../data/site'

const links = [
  { to: '/', label: 'Home' },
  { to: '/packages', label: 'Tour Packages' },
  { to: '/destinations', label: 'Destinations' },
  // { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const solid = scrolled || pathname !== '/'

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'glass-nav py-3 shadow-soft' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className={`grid h-10 w-10 place-items-center rounded-xl transition-colors ${
              solid ? 'bg-dark-green text-primary' : 'bg-white/15 text-white backdrop-blur'
            }`}
          >
            <Mountain size={22} strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span
              className={`block font-heading text-lg font-bold tracking-tight ${
                solid ? 'text-dark-green' : 'text-white'
              }`}
            >
              Travel Buddy
            </span>
            <span
              className={`block text-[11px] font-medium uppercase tracking-[0.22em] ${
                solid ? 'text-primary' : 'text-primary'
              }`}
            >
              Tours
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors ${
                  solid ? 'text-dark-green/80 hover:text-primary' : 'text-white/90 hover:text-white'
                } ${isActive ? '!text-primary' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href={waLink(inquiryMsg())} target="_blank" rel="noreferrer" className="btn-primary text-sm">
            Book Tour
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${solid ? 'text-dark-green' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-nav mx-4 mt-3 overflow-hidden rounded-2xl lg:hidden"
          >
            <div className="flex flex-col p-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 font-heading text-sm font-medium transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-dark-green/80 hover:bg-primary/5'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={waLink(inquiryMsg())}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-3 text-sm"
              >
                Book Tour
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
