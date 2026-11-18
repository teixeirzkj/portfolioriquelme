import { m } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  /** Use 'li' quando o item estiver dentro de uma lista (<ul>/<ol>). */
  as?: 'div' | 'li'
}

/* A margem positiva dispara a animação ~15% antes do elemento entrar na tela,
   para o conteúdo nunca aparecer "preto" ao rolar rápido no celular. */
const viewport = { once: true, margin: '0px 0px 15% 0px' } as const

/** Revela o conteúdo quando se aproxima da tela. Respeita prefers-reduced-motion via MotionConfig. */
export function Reveal({ children, delay = 0, y = 16, className, as = 'div' }: RevealProps) {
  const Component = as === 'li' ? m.li : m.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.15), ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
