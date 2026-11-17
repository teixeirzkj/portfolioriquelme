import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  onClick?: () => void
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <a
      href="#inicio"
      onClick={onClick}
      aria-label="Riquelme Teixeira, voltar ao início"
      className={cn('group inline-flex items-baseline font-display text-2xl font-bold tracking-tight', className)}
    >
      <span className="transition-colors duration-300 group-hover:text-brand-2">RT</span>
      <span
        aria-hidden="true"
        className="inline-block text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125"
      >
        .
      </span>
    </a>
  )
}
