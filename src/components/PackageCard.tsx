import { motion } from 'framer-motion'
import { Clock, Users, Star, ArrowRight, MapPin } from 'lucide-react'
import type { Package } from '../data/content'
import { waLink, bookPackageMsg } from '../data/site'

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow duration-300 hover:shadow-luxury"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-numbers text-xs font-bold text-dark-green backdrop-blur">
          {pkg.duration}
        </span>
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-medium text-white text-shadow-lg">
          <MapPin size={15} className="text-primary" />
          {pkg.destination}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5 text-accent">
            {Array.from({ length: pkg.rating }).map((_, i) => (
              <Star key={i} size={15} fill="currentColor" />
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-forest/60">
            <span className="flex items-center gap-1">
              <Clock size={13} /> {pkg.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users size={13} /> {pkg.travelers}
            </span>
          </div>
        </div>

        <h3 className="mt-3 font-heading text-xl font-bold text-dark-green">{pkg.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-forest/70">{pkg.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-light-gray pt-5">
          <div>
            <span className="block text-[11px] uppercase tracking-wide text-forest/50">Starting</span>
            <span className="font-numbers text-2xl font-extrabold text-dark-green">{pkg.price}</span>
          </div>
          <a
            href={waLink(bookPackageMsg(pkg.name))}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-semibold text-dark-green transition-all hover:bg-primary-dark hover:shadow-glow"
          >
            Book Now
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
