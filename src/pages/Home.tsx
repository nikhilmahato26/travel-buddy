import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Hero from '../components/Hero'
import BookingForm from '../components/BookingForm'
import Marquee from '../components/Marquee'
import SectionHeading from '../components/SectionHeading'
import Reveal, { Stagger } from '../components/Reveal'
import DestinationCard from '../components/DestinationCard'
import PackageCard from '../components/PackageCard'
import TestimonialSlider from '../components/TestimonialSlider'
import {
  StatsBar,
  WhyChooseUs,
  FeaturedExperiences,
  TravelProcess,
  FAQ,
  CTABand,
} from '../components/sections'
import { destinations, packages } from '../data/content'

const aboutImg =
  'https://images.pexels.com/photos/38232180/pexels-photo-38232180.jpeg'
const aboutImg2 =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Floating booking form overlapping hero & next section */}
      <div className="relative z-30 -mt-24 px-5 sm:-mt-20 sm:px-8 lg:px-12">
        <BookingForm />
      </div>

      <div className="mt-16">
        <Marquee />
      </div>

      {/* About */}
      <section className="section-pad bg-white">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left" className="relative">
            <div className="relative">
              <img
                src={aboutImg}
                alt="North-East landscape"
                className="h-[28rem] w-full rounded-[2rem] object-cover shadow-luxury"
              />
              <motion.img
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                src={aboutImg2}
                alt="Monastery"
                className="absolute -bottom-8 -right-4 hidden h-44 w-40 rounded-2xl border-4 border-white object-cover shadow-luxury sm:block"
              />
              <div className="absolute -left-4 top-8 rounded-2xl bg-dark-green px-5 py-4 text-white shadow-luxury">
                <p className="font-numbers text-2xl font-extrabold text-primary">10+</p>
                <p className="text-xs text-white/80">Years of Local Expertise</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <span className="eyebrow">About Travel Buddy Tours</span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
              Curated North-East Journeys, Crafted With Heart
            </h2>
            <p className="mt-5 leading-relaxed text-forest/75">
              Travel Buddy Tours specializes in curated North-East India experiences that combine nature,
              culture, adventure and authentic hospitality. Whether you’re planning a romantic getaway,
              family vacation, wildlife safari, spiritual journey or group expedition, our experienced
              team ensures a seamless and memorable trip.
            </p>
            <p className="mt-4 leading-relaxed text-forest/75">
              Our local expertise lets travelers explore hidden gems while enjoying reliable
              transportation, comfortable stays and fully personalized itineraries.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Personalized Itineraries',
                'Reliable Transportation',
                'Comfortable Hand-picked Stays',
                'Authentic Local Hospitality',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-dark-green">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-forest">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/destinations" className="btn-primary mt-8">
              Discover Destinations <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <StatsBar />
      <WhyChooseUs />

      {/* Popular Destinations */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Popular Destinations"
            title="Where Will Your Story Begin?"
            subtitle="Six unforgettable North-East destinations, each with its own magic."
          />
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <DestinationCard key={d.slug} dest={d} large={i === 0} />
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link to="/destinations" className="btn-outline !border-forest/20 !bg-transparent !text-dark-green hover:!bg-dark-green hover:!text-white">
              View All Destinations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="section-pad bg-light-gray">
        <div className="container-max">
          <SectionHeading
            eyebrow="Tour Packages"
            title="Handcrafted Tours, Honest Prices"
            subtitle="Best-selling North-East packages — fully customizable to your dates and style."
          />
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 6).map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link to="/packages" className="btn-primary">
              View All Packages <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <FeaturedExperiences />
      <TravelProcess />

      {/* Testimonials */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved By Travelers Across India"
            subtitle="Real stories from travelers who explored the North-East with us."
          />
          <TestimonialSlider />
        </div>
      </section>

      <FAQ />
      <CTABand />
    </>
  )
}
