import PageHeader from '../components/PageHeader'
import DestinationCard from '../components/DestinationCard'
import { Stagger } from '../components/Reveal'
import { FeaturedExperiences, CTABand } from '../components/sections'
import { destinations } from '../data/content'

export default function Destinations() {
  return (
    <>
      <PageHeader
        crumb="Destinations"
        title="Explore Our Destinations"
        subtitle="From the tea gardens of Assam to the cliffs of Bhutan — discover the soul of the North-East."
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-max">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <DestinationCard key={d.slug} dest={d} large={i % 5 === 0} />
            ))}
          </Stagger>
        </div>
      </section>
      <FeaturedExperiences />
      <CTABand />
    </>
  )
}
