import { FolderGit2 } from 'lucide-react'
import type { Project } from '@/data/types'
import { cn } from '@/utils/cn'

interface ProjectVisualProps {
  project: Project
  className?: string
  imgClassName?: string
  eager?: boolean
  /** Ocupa todo o elemento pai (position: absolute; inset: 0) */
  fill?: boolean
}

/**
 * Capa do projeto: screenshot real quando existe; caso contrário, uma composição
 * abstrata com o ícone do projeto (não finge ser uma captura de tela).
 */
export function ProjectVisual({ project, className, imgClassName, eager = false, fill = false }: ProjectVisualProps) {
  if (project.image) {
    return (
      <div className={cn('overflow-hidden bg-bg-2', fill ? 'absolute inset-0' : 'relative', className)}>
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={1440}
          height={900}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={cn('h-full w-full object-cover object-top', imgClassName)}
        />
      </div>
    )
  }

  const Icon = project.icon ?? FolderGit2
  return (
    <div
      className={cn('flex items-center justify-center overflow-hidden bg-bg-2', fill ? 'absolute inset-0' : 'relative', className)}
      role="img"
      aria-label={`Composição visual do projeto ${project.title}`}
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="absolute size-80 bg-[radial-gradient(closest-side,rgb(0_102_255/0.22),transparent)]" />
      <div aria-hidden="true" className="absolute size-56 rounded-full border border-line" />
      <div aria-hidden="true" className="absolute size-40 rounded-full border border-dashed border-line-2" />
      <span className="relative inline-flex size-20 items-center justify-center rounded-2xl border border-brand/40 bg-card text-brand-2 shadow-glow">
        <Icon className="size-9" aria-hidden="true" />
      </span>
    </div>
  )
}
