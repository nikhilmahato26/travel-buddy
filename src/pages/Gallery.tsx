import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { CTABand } from '../components/sections'
import { gallery } from '../data/content'

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const prev = () => setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
  const next = () => setActive((i) => (i === null ? i : (i + 1) % gallery.length))

  return (
    <>
      <PageHeader
        crumb="Gallery"
        title="Moments From The North-East"
        subtitle="A glimpse into the landscapes, wildlife and culture that await you."
        image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {gallery.map((g, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                onClick={() => setActive(i)}
                className={`group relative block w-full overflow-hidden rounded-2xl shadow-soft ${
                  g.tall ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark-green/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="p-4 font-heading text-sm font-semibold text-white">{g.caption}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-dark-green/95 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button className="absolute right-5 top-5 text-white/80 hover:text-white" onClick={close}>
              <X size={32} />
            </button>
            <button
              className="absolute left-4 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
            >
              <ChevronLeft size={40} />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[active].src.replace('w=1200', 'w=1600')}
                alt={gallery[active].caption}
                className="max-h-[80vh] rounded-2xl object-contain"
              />
              <figcaption className="mt-3 text-center font-heading text-white">
                {gallery[active].caption}
              </figcaption>
            </motion.figure>
            <button
              className="absolute right-4 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand />
    </>
  )
}
