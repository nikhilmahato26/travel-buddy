import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowLeft, MessageCircle, Calendar, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import PackageCard from '../components/PackageCard'
import { Stagger } from '../components/Reveal'
import { CTABand } from '../components/sections'
import { destinations, packages } from '../data/content'
import { waLink } from '../data/site'

export default function DestinationDetail() {
  const { slug } = useParams()
  const dest = destinations.find((d) => d.slug === slug)
  if (!dest) return <Navigate to="/destinations" replace />

  const related = packages.filter(
    (p) => p.destination.toLowerCase().includes(dest.name.toLowerCase()) || dest.name === 'Assam',
  )
  const msg = `Hi Travel Buddy Tours,\n\nI'm interested in a ${dest.name} tour. Please share package details and pricing.`

  return (
    <>
      <PageHeader
        crumb={dest.name}
        title={dest.name}
        subtitle={dest.tagline}
        image={dest.image.replace('w=1200', 'w=2000')}
      />

      <section className="section-pad bg-white">
        <div className="container-max grid items-start gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <img
              src={dest.image}
              alt={dest.name}
              className="h-[30rem] w-full rounded-[2rem] object-cover shadow-luxury"
            />
          </Reveal>
          <Reveal variant="right">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest/60 hover:text-primary"
            >
              <ArrowLeft size={16} /> All Destinations
            </Link>
            <h2 className="mt-4 font-heading text-3xl font-bold text-dark-green sm:text-4xl">
              Discover {dest.name}
            </h2>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/12 px-4 py-1.5 text-sm font-medium text-forest">
              <Calendar size={15} className="text-primary" /> Best Time to Visit: {dest.bestTime}
            </span>
            <p className="mt-5 leading-relaxed text-forest/75">{dest.blurb}</p>

            <h3 className="mt-8 font-heading text-lg font-bold text-dark-green">Top Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {dest.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm font-medium text-dark-green">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-forest">
                    <Check size={14} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <motion.a
              href={waLink(msg)}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-heading font-semibold text-white shadow-soft"
            >
              <MessageCircle size={18} /> Enquire on WhatsApp
            </motion.a>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-light-gray">
          <div className="container-max">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <span className="eyebrow">Related Tours</span>
                <h2 className="mt-3 font-heading text-2xl font-bold text-dark-green sm:text-3xl">
                  Popular {dest.name} Packages
                </h2>
              </div>
              <Link to="/packages" className="hidden items-center gap-1 text-sm font-semibold text-primary sm:flex">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
            </Stagger>
          </div>
        </section>
      )}

      <CTABand />
    </>
  )
}
