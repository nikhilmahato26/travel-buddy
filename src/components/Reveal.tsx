import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  },
}

interface RevealProps {
  children: ReactNode
  variant?: keyof typeof variants
  delay?: number
  className?: string
}

export default function Reveal({ children, variant = 'up', delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, variant = 'up' }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
