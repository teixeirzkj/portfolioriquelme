import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
  children: ReactNode
  className?: string
  tone?: 'default' | 'brand'
}

export function Badge({ children, className, tone = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors duration-300',
        tone === 'brand'
          ? 'border-brand/40 bg-brand/10 text-brand-2'
          : 'border-line bg-bg-2/80 text-muted hover:border-brand/40 hover:text-fg',
        className,
      )}
    >
      {children}
    </span>
  )
}
