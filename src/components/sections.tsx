import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus, ArrowRight, MessageCircle } from 'lucide-react'
import Reveal, { Stagger, StaggerItem } from './Reveal'
import SectionHeading from './SectionHeading'
import AnimatedCounter from './AnimatedCounter'
import { iconMap } from './icons'
import { whyChooseUs, processSteps, faqs, experiences, stats } from '../data/content'
import { waLink, inquiryMsg } from '../data/site'

export function StatsBar() {
  return (
    <section className="bg-white">
      <div className="container-max grid grid-cols-2 gap-6 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:px-12">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.1} className="text-center">
            <p className="font-numbers text-4xl font-extrabold text-primary sm:text-5xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
            </p>
            <p className="mt-1 text-sm font-medium text-forest/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-light-gray">
      <div className="container-max">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Travel With People Who Know The North-East"
          subtitle="Local expertise, honest pricing and genuine care at every step of your journey."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w) => {
            const Icon = iconMap[w.icon] ?? iconMap.Compass
            return (
              <StaggerItem key={w.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full rounded-3xl border border-forest/5 bg-white p-7 shadow-soft transition-shadow hover:shadow-luxury"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-forest transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-dark-green">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest/65">{w.desc}</p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

export function FeaturedExperiences() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <SectionHeading
          eyebrow="Featured Experiences"
          title="Unforgettable Things To Do"
          subtitle="From rhino safaris to monastery mornings — handcrafted experiences across the North-East."
        />
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {experiences.map((e) => {
            const Icon = iconMap[e.icon] ?? iconMap.Compass
            return (
              <StaggerItem key={e.title} variant="zoom">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-56 overflow-hidden rounded-3xl shadow-soft sm:h-64"
                >
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/85 via-dark-green/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-dark-green">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-3 font-heading text-base font-bold text-white">{e.title}</h3>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

export function TravelProcess() {
  return (
    <section className="section-pad bg-light-gray">
      <div className="container-max">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Journey In 5 Simple Steps"
          subtitle="Booking your dream North-East getaway is effortless from start to finish."
        />
        <div className="relative grid gap-6 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {processSteps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.12} className="relative text-center">
              <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-dark-green font-numbers text-2xl font-extrabold text-primary shadow-luxury">
                  {s.num}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-dark-green">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/65">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="section-pad bg-white">
      <div className="container-max max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before your North-East adventure."
        />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i}>
              <div className="overflow-hidden rounded-2xl border border-forest/8 bg-light-gray/50">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-base font-semibold text-dark-green">{f.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 text-forest"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-forest/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTABand() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-dark-green px-6 py-16 text-center shadow-luxury sm:px-12">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <span className="eyebrow bg-white/10 text-white">Ready When You Are</span>
              <h2 className="mx-auto mt-4 max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
                Let’s Plan Your Dream North-East Escape
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/75">
                Tell us where you want to go — our local experts will craft a personalized itinerary just
                for you. No pressure, just great travel.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={waLink(inquiryMsg())}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-heading font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
                <Link to="/packages" className="btn-primary">
                  Browse Packages <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
