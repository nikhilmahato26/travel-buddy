import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ArrowUp, MessageCircle } from 'lucide-react'
import { BRAND, waLink, inquiryMsg } from '../data/site'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid h-12 w-12 place-items-center rounded-full bg-dark-green text-white shadow-luxury transition-transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`tel:${BRAND.phoneRaw}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-accent text-dark-green shadow-luxury transition-transform hover:-translate-y-1"
        aria-label="Call us"
      >
        <Phone size={22} />
      </a>

      <a
        href={waLink(inquiryMsg())}
        target="_blank"
        rel="noreferrer"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform hover:-translate-y-1"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
        <MessageCircle size={26} className="relative" />
      </a>
    </div>
  )
}
