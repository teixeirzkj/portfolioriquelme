import { Check, Hourglass, Images, Layers, Lightbulb, Link2, MousePointerClick, Target, X } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Badge } from './Badge'
import { ProjectLinks } from './ProjectLinks'
import type { Project, ProjectImage } from '@/data/types'
import { cn } from '@/utils/cn'

interface CaseStudyDialogProps {
  project: Project
  onClose: () => void
}

function Block({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line/70 pt-6">
      <h3 className="flex items-center gap-2 font-display text-sm font-semibold tracking-[0.2em] text-brand-2 uppercase">
        {icon}
        {title}
      </h3>
      <div className="mt-3 text-[0.95rem] leading-relaxed text-muted">{children}</div>
    </section>
  )
}

function Shot({ image }: { image: ProjectImage }) {
  if (image.variant === 'mobile') {
    return (
      <div className="flex h-full items-center justify-center bg-bg-2 py-4">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="h-full max-h-[28rem] w-auto rounded-[1.75rem] border-4 border-line-2 object-contain object-top"
        />
      </div>
    )
  }
  return <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-full w-full object-contain" />
}

/**
 * Estudo de caso em um <dialog> nativo: foco preso no modal, Esc fecha
 * e o restante da página fica inerte para leitores de tela.
 */
export default function CaseStudyDialog({ project, onClose }: CaseStudyDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const gallery = project.gallery ?? (project.image ? [project.image] : [])
  const [current, setCurrent] = useState(0)
  const study = project.caseStudy

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
    }
  }, [])

  if (!study) return null

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
      aria-labelledby="case-title"
      className="m-auto h-[100dvh] max-h-[100dvh] w-full max-w-none animate-[case-in_0.45s_cubic-bezier(0.22,1,0.36,1)] bg-transparent p-0 text-fg backdrop:bg-bg/80 sm:h-auto sm:max-h-[90dvh] sm:max-w-4xl sm:p-4"
    >
      <div className="relative flex h-full flex-col overflow-hidden border-line bg-bg-2 sm:max-h-[calc(90dvh-2rem)] sm:rounded-3xl sm:border">
        <header className="flex items-start justify-between gap-4 border-b border-line/70 px-5 py-4 sm:px-8 sm:py-5">
          <div>
            <p className="eyebrow">Estudo de caso · {project.category}</p>
            <h2 id="case-title" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar estudo de caso"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:border-brand/60 hover:text-fg"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        <div className="overflow-y-auto overscroll-contain px-5 pb-8 sm:px-8">
          {gallery.length > 0 && (
            <section aria-label="Demonstração" className="pt-6">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-bg">
                <Shot image={gallery[current]} />
              </div>
              {gallery.length > 1 && (
                <ul className="scrollbar-none mt-3 flex gap-2 overflow-x-auto" aria-label="Escolher captura de tela">
                  {gallery.map((image, index) => (
                    <li key={image.src + index} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setCurrent(index)}
                        aria-label={`Ver captura ${index + 1}: ${image.alt}`}
                        aria-pressed={current === index}
                        className={cn(
                          'h-16 w-24 overflow-hidden rounded-lg border-2 transition-all',
                          current === index ? 'border-brand' : 'border-line opacity-60 hover:opacity-100',
                        )}
                      >
                        <img src={image.src} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-2 flex items-center gap-1.5 text-xs text-subtle">
                <Images className="size-3.5" aria-hidden="true" />
                Capturas de tela reais do projeto publicado.
              </p>
            </section>
          )}

          <div className="mt-6 grid gap-6">
            <Block icon={<Lightbulb className="size-4" aria-hidden="true" />} title="Visão geral">
              <p>{study.overview}</p>
              {project.note && <p className="mt-2 text-sm text-brand-2">{project.note}.</p>}
            </Block>

            <Block icon={<Target className="size-4" aria-hidden="true" />} title="Problema">
              <p>{study.problem}</p>
            </Block>

            <Block icon={<Check className="size-4" aria-hidden="true" />} title="Solução">
              <ul className="grid gap-2.5">
                {study.solution.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={<Layers className="size-4" aria-hidden="true" />} title="Tecnologias">
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon={<MousePointerClick className="size-4" aria-hidden="true" />} title="Experiência do usuário">
              <ul className="grid gap-2.5">
                {study.ux.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>

            {study.inProgress && study.inProgress.length > 0 && (
              <Block icon={<Hourglass className="size-4" aria-hidden="true" />} title="Em desenvolvimento">
                <ul className="grid gap-2.5">
                  {study.inProgress.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full border border-subtle" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {(project.liveUrl || project.repositoryUrl) && (
              <Block icon={<Link2 className="size-4" aria-hidden="true" />} title="Links">
                <ProjectLinks project={project} size="md" />
              </Block>
            )}
          </div>
        </div>
      </div>
    </dialog>
  )
}
