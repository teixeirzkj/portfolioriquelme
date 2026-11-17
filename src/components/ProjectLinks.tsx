import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Button, ButtonLink } from './Button'
import { GitHubIcon } from './BrandIcons'
import type { Project } from '@/data/types'

interface ProjectLinksProps {
  project: Project
  onOpenCaseStudy?: (project: Project) => void
  size?: 'sm' | 'md'
}

/** Somente os botões com destino real são exibidos. */
export function ProjectLinks({ project, onOpenCaseStudy, size = 'sm' }: ProjectLinksProps) {
  const hasCase = Boolean(project.caseStudy && onOpenCaseStudy)
  if (!project.liveUrl && !project.repositoryUrl && !hasCase) return null

  return (
    <div className="flex flex-wrap gap-2">
      {project.liveUrl && (
        <ButtonLink
          href={project.liveUrl}
          target="_blank"
          size={size}
          icon={<ArrowUpRight className="size-4" aria-hidden="true" />}
          aria-label={`Ver projeto ${project.title}`}
        >
          Ver projeto
        </ButtonLink>
      )}
      {project.repositoryUrl && (
        <ButtonLink
          href={project.repositoryUrl}
          target="_blank"
          variant="secondary"
          size={size}
          icon={<GitHubIcon className="size-4" />}
          aria-label={`Repositório do projeto ${project.title} no GitHub`}
        >
          GitHub
        </ButtonLink>
      )}
      {hasCase && (
        <Button
          variant="secondary"
          size={size}
          onClick={() => onOpenCaseStudy?.(project)}
          icon={<BookOpen className="size-4" aria-hidden="true" />}
          aria-label={`Abrir estudo de caso do projeto ${project.title}`}
        >
          Estudo de caso
        </Button>
      )}
    </div>
  )
}
