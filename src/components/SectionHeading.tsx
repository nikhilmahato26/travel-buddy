import Reveal from './Reveal'

interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  align?: 'center' | 'left'
}

export default function SectionHeading({ eyebrow, title, subtitle, light, align = 'center' }: Props) {
  return (
    <Reveal className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? 'bg-white/15 text-white' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className={`mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${
          light ? 'text-white' : 'text-dark-green'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/80' : 'text-forest/70'
          } ${align === 'center' ? '' : 'mx-0'}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
