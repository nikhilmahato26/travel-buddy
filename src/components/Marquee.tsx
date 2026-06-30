const items = [
  'Kaziranga National Park',
  'Living Root Bridges',
  'Tawang Monastery',
  'Dawki Crystal River',
  'Majuli River Island',
  'Tea Gardens of Assam',
  'Tiger’s Nest Bhutan',
  'Cherrapunji Falls',
  'Tiger Hill Darjeeling',
]

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-forest/10 bg-dark-green py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-heading text-lg font-semibold text-white/80">
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
