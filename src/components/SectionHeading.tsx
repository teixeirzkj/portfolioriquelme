import { Reveal } from './Reveal'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  id?: string
  eyebrow: string
  title: string
  highlight: string
  description?: string
  className?: string
}

/** Título de seção no padrão "TEXTO DESTAQUE." com o destaque em azul. */
export function SectionHeading({ id, eyebrow, title, highlight, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('max-w-3xl', className)}>
      <p className="eyebrow">
        <span aria-hidden="true" className="h-px w-8 bg-brand" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-4xl leading-[0.95] font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
        {title} <span className="text-gradient-brand">{highlight}</span>
      </h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </Reveal>
  )
}
