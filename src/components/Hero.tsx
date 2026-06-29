import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Compass, MessageCircle, ChevronDown, Instagram, Send, Phone } from 'lucide-react'
import { waLink, inquiryMsg } from '../data/site'

const HERO_IMG =
  'https://images.pexels.com/photos/38232180/pexels-photo-38232180.jpeg'

function Particles() {
  const dots = Array.from({ length: 18 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 4 + (i % 4) * 3
        const left = (i * 37) % 100
        const delay = (i % 6) * 0.8
        const duration = 8 + (i % 5) * 2
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/40 blur-[1px]"
            style={{ width: size, height: size, left: `${left}%`, top: `${(i * 53) % 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        )
      })}
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '120%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={HERO_IMG} alt="North-East India mountains" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-dark-green/25" />
      </motion.div>

      <Particles />

      {/* Side social rail (desktop) */}
      <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 lg:flex">
        <span className="h-16 w-px bg-white/40" />
        {[Instagram, Send, Phone].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="text-white/70 transition-colors hover:text-primary"
            aria-label="social"
          >
            <Icon size={18} />
          </a>
        ))}
        <span className="h-16 w-px bg-white/40" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="container-max relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-heading text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur"
        >
          <Compass size={14} className="text-primary" /> North-East India Specialists
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] text-white text-shadow-lg sm:text-6xl lg:text-7xl"
        >
          Explore North-East India
          <span className="block text-primary">Like Never Before</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          Discover breathtaking landscapes, wildlife adventures, monasteries, crystal-clear rivers and
          unforgettable journeys across Assam, Meghalaya, Arunachal Pradesh, Tawang, Bhutan & beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link to="/packages" className="btn-primary">
            <Compass size={18} /> Explore Packages
          </Link>
          <a href={waLink(inquiryMsg())} target="_blank" rel="noreferrer" className="btn-outline">
            <MessageCircle size={18} /> Book on WhatsApp
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
