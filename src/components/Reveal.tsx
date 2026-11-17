import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  /** Use 'li' quando o item estiver dentro de uma lista (<ul>/<ol>). */
  as?: 'div' | 'li'
}

const viewport = { once: true, margin: '0px 0px -10% 0px' } as const

/** Revela o conteúdo quando entra na tela. Respeita prefers-reduced-motion via MotionConfig. */
export function Reveal({ children, delay = 0, y = 24, className, as = 'div' }: RevealProps) {
  const Component = as === 'li' ? motion.li : motion.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
