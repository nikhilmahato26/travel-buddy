import PageHeader from '../components/PageHeader'
import PackageCard from '../components/PackageCard'
import { Stagger } from '../components/Reveal'
import { TravelProcess, FAQ, CTABand } from '../components/sections'
import { packages } from '../data/content'

export default function Packages() {
  return (
    <>
      <PageHeader
        crumb="Tour Packages"
        title="Our Tour Packages"
        subtitle="Curated North-East journeys — wildlife, mountains, monasteries and crystal rivers, all in one place."
        image="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="section-pad bg-light-gray">
        <div className="container-max">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </Stagger>
        </div>
      </section>
      <TravelProcess />
      <FAQ />
      <CTABand />
    </>
  )
}
