import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Props {
  title: string
  subtitle: string
  image: string
  crumb: string
}

export default function PageHeader({ title, subtitle, image, crumb }: Props) {
  return (
    <section className="relative flex h-[52vh] min-h-[380px] items-center justify-center overflow-hidden">
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-green/70 via-dark-green/50 to-dark-green/80" />

      <div className="container-max relative z-10 px-5 text-center">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 flex items-center justify-center gap-1.5 text-sm text-white/70"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-primary">{crumb}</span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-heading text-4xl font-extrabold text-white text-shadow-lg sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
