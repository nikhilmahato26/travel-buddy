import { Star, Quote } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { Stagger, StaggerItem } from '../components/Reveal'
import { StatsBar, CTABand } from '../components/sections'
import { testimonials } from '../data/content'

const extra = [
  {
    quote:
      'From the first call to the last drop-off, every detail was handled. Our Meghalaya trip felt truly premium.',
    name: 'Sneha Verma',
    location: 'Pune',
  },
  {
    quote:
      'The drivers were so friendly and knew every viewpoint. We felt safe the entire mountain journey.',
    name: 'Arjun Nair',
    location: 'Chennai',
  },
]

export default function Testimonials() {
  const all = [...testimonials, ...extra]
  return (
    <>
      <PageHeader
        crumb="Testimonials"
        title="Traveler Stories"
        subtitle="Genuine words from travelers who explored the North-East with Travel Buddy Tours."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section-pad bg-light-gray">
        <div className="container-max">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {all.map((t, i) => (
              <StaggerItem key={i}>
                <div className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft">
                  <div className="flex items-center justify-between">
                    <Quote size={34} className="text-primary/30" />
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={15} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-forest/80">“{t.quote}”</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-forest/10 pt-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 font-heading font-bold text-forest">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-dark-green">{t.name}</p>
                      <p className="text-xs text-forest/60">{t.location}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <StatsBar />
      <CTABand />
    </>
  )
}
