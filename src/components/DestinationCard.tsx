import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar } from 'lucide-react'
import type { Destination } from '../data/content'

export default function DestinationCard({ dest, large }: { dest: Destination; large?: boolean }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl shadow-soft ${
        large ? 'min-h-[26rem]' : 'min-h-[20rem]'
      }`}
    >
      <Link to={`/destinations/${dest.slug}`} className="block h-full">
        <img
          src={dest.image}
          alt={dest.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent" />

        <div className="relative flex h-full flex-col justify-end p-6">
          <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
            <Calendar size={12} className="text-accent" /> Best: {dest.bestTime}
          </span>
          <h3 className="font-heading text-2xl font-bold text-white">{dest.name}</h3>
          <p className="mt-1 max-w-xs text-sm text-white/80">{dest.tagline}</p>

          <div className="mt-4 flex translate-y-2 items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Explore Destination
            <ArrowUpRight size={16} />
          </div>
        </div>

        <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-primary group-hover:text-dark-green">
          <ArrowUpRight size={20} />
        </span>
      </Link>
    </motion.div>
  )
}
