import { Link } from 'react-router-dom'
import { Mountain, Phone, Mail, MapPin, Instagram, Facebook, Send, MessageCircle } from 'lucide-react'
import { BRAND, waLink, inquiryMsg } from '../data/site'

const quickLinks = [
  { to: '/packages', label: 'Tour Packages' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-green text-white">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="container-max relative px-5 pb-8 pt-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="Travel Buddy Tours"
                className="h-20 w-20 rounded-full object-cover shadow-sm border border-white/20"
              />
              <span className="leading-tight">
                <span className="block font-heading text-lg font-bold">Travel Buddy</span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
                  Tours
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Curated North-East India experiences blending nature, culture, adventure and authentic
              hospitality.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Send, href: '#' },
                { Icon: MessageCircle, href: waLink(inquiryMsg()) },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-dark-green"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold">Destinations</h4>
            <ul className="mt-5 space-y-3">
              {['Assam', 'Meghalaya', 'Arunachal Pradesh', 'Tawang', 'Sikkim & Darjeeling', 'Bhutan'].map((d) => (
                <li key={d}>
                  <Link
                    to="/destinations"
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base font-semibold">Get In Touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-primary">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                <a href={`mailto:${BRAND.email}`} className="break-all hover:text-primary">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <a href={BRAND.maps} target="_blank" rel="noreferrer" className="hover:text-primary">
                  North-East India · Guwahati, Assam
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Travel Buddy Tours. All rights reserved.</p>
          <p>Crafted with care for unforgettable North-East journeys.</p>
        </div>
      </div>
    </footer>
  )
}
