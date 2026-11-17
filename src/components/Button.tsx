import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.97]'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-[0_8px_30px_-8px_rgb(0_102_255/0.7)] hover:-translate-y-0.5 hover:bg-brand-2 hover:shadow-[0_10px_40px_-6px_rgb(20_121_255/0.85)]',
  secondary:
    'border border-line-2 bg-card/60 text-fg backdrop-blur hover:-translate-y-0.5 hover:border-brand/60 hover:bg-card hover:shadow-glow-sm',
  ghost: 'text-muted hover:text-fg',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[0.95rem]',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = props.target === '_blank'
  return (
    <a
      {...props}
      rel={external ? 'noopener noreferrer' : props.rel}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
          {icon}
        </span>
      )}
      {external && <span className="sr-only">(abre em nova aba)</span>}
    </a>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  type = 'button',
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} {...props} className={cn(base, variants[variant], sizes[size], className)}>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">{icon}</span>}
    </button>
  )
}
