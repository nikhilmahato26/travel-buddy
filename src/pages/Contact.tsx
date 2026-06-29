import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { FAQ } from '../components/sections'
import { BRAND, waLink } from '../data/site'

interface FormValues {
  name: string
  phone: string
  destination: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (d: FormValues) => {
    const msg =
      `Hi Travel Buddy Tours,\n\n` +
      `Name: ${d.name || '-'}\n` +
      `Phone: ${d.phone || '-'}\n` +
      `Destination: ${d.destination || '-'}\n\n` +
      `${d.message || 'I would like to know more about your tours.'}`
    window.open(waLink(msg), '_blank')
  }

  const inputCls =
    'w-full rounded-xl border border-forest/10 bg-light-gray/60 px-4 py-3 text-sm text-dark-green outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20'

  const cards = [
    { Icon: Phone, label: 'Call Us', value: BRAND.phone, href: `tel:${BRAND.phoneRaw}` },
    { Icon: Mail, label: 'Email Us', value: BRAND.email, href: `mailto:${BRAND.email}` },
    { Icon: MapPin, label: 'Visit Us', value: 'Guwahati, Assam · North-East India', href: BRAND.maps },
  ]

  return (
    <>
      <PageHeader
        crumb="Contact"
        title="Let’s Plan Your Journey"
        subtitle="Reach out anytime — our team replies fast and plans even faster."
        image="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid gap-5 sm:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.1}>
                <a
                  href={c.href}
                  target={c.label === 'Visit Us' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex h-full flex-col items-center rounded-3xl border border-forest/5 bg-light-gray/50 p-8 text-center shadow-soft transition-all hover:-translate-y-1 hover:bg-white hover:shadow-luxury"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-forest transition-colors group-hover:bg-primary group-hover:text-white">
                    <c.Icon size={26} />
                  </span>
                  <p className="mt-4 font-heading text-base font-bold text-dark-green">{c.label}</p>
                  <p className="mt-1 break-words text-sm text-forest/65">{c.value}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <Reveal variant="left">
              <h2 className="font-heading text-2xl font-bold text-dark-green sm:text-3xl">
                Send Us A Message
              </h2>
              <p className="mt-2 text-forest/65">
                Fill in your details and we’ll continue the conversation on WhatsApp.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <input placeholder="Your Name" className={inputCls} {...register('name')} />
                <input placeholder="Phone Number" className={inputCls} {...register('phone')} />
                <input
                  placeholder="Preferred Destination (e.g. Meghalaya)"
                  className={inputCls}
                  {...register('destination')}
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream trip..."
                  className={inputCls}
                  {...register('message')}
                />
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-heading font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle size={18} /> Send on WhatsApp
                  </button>
                  <a href={`tel:${BRAND.phoneRaw}`} className="btn-primary">
                    <Phone size={18} /> Call Now
                  </a>
                </div>
              </form>
            </Reveal>

            <Reveal variant="right">
              <div className="h-full overflow-hidden rounded-3xl shadow-luxury">
                <iframe
                  title="Travel Buddy Tours Location"
                  src={BRAND.mapsEmbed}
                  className="h-full min-h-[26rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  )
}
