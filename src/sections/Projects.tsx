import { AnimatePresence, m } from 'motion/react'
import { Plus, Users } from 'lucide-react'
import { lazy, Suspense, useState, type KeyboardEvent } from 'react'
import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { GlowCard } from '@/components/GlowCard'
import { ProjectLinks } from '@/components/ProjectLinks'
import { ProjectVisual } from '@/components/ProjectVisual'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { projectFilters, projects } from '@/data/projects'
import type { Project, ProjectFilter } from '@/data/types'
import { cn } from '@/utils/cn'

const CaseStudyDialog = lazy(() => import('@/components/CaseStudyDialog'))

const pad = (n: number) => String(n).padStart(2, '0')
/** Número do projeto na ordem geral, independente do filtro ativo. */
const order = (project: Project) => pad(projects.indexOf(project) + 1)

type ListProps = { items: Project[]; onOpenCaseStudy: (p: Project) => void }

function TeamBadge({ project }: { project: Project }) {
  if (!project.note?.toLowerCase().includes('equipe')) return null
  return (
    <Badge tone="brand">
      <Users className="size-3.5" aria-hidden="true" />
      Projeto em equipe
    </Badge>
  )
}

/* -------------------------------------------------------------------------
   Desktop: galeria expansível
   ------------------------------------------------------------------------- */
function ProjectAccordion({ items, onOpenCaseStudy }: ListProps) {
  const [active, setActive] = useState(0)

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = items.length
    let next = -1
    if (e.key === 'ArrowRight') next = (index + 1) % total
    if (e.key === 'ArrowLeft') next = (index - 1 + total) % total
    if (next < 0) return
    e.preventDefault()
    setActive(next)
    requestAnimationFrame(() => document.getElementById(`project-trigger-${next}`)?.focus())
  }

  return (
    <div className="hidden lg:block">
      <div className="mb-5 flex items-center justify-between text-sm text-muted">
        <p className="font-display">
          <span className="text-fg">{pad(active + 1)}</span> / {pad(items.length)}
        </p>
        <p className="text-xs text-subtle">Clique em um card ou use as setas ← → para navegar</p>
      </div>

      <div className="flex h-[36rem] gap-3">
        {items.map((project, index) => {
          const isActive = index === active
          return (
            <div
              key={project.id}
              className={cn(
                'group/panel relative min-w-0 overflow-hidden rounded-3xl border transition-[flex-grow,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isActive ? 'grow-[7] border-brand/50 shadow-glow' : 'grow border-line hover:border-line-2',
              )}
              style={{ flexBasis: 0 }}
            >
              <ProjectVisual
                project={project}
                fill
                imgClassName={cn(
                  'transition-all duration-700',
                  isActive ? 'scale-100 opacity-90' : 'scale-110 object-center opacity-70 grayscale-[50%] group-hover/panel:opacity-90 group-hover/panel:grayscale-0',
                )}
              />
              <div
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 transition-opacity duration-700',
                  isActive
                    ? 'bg-gradient-to-r from-bg via-bg/90 via-35% to-bg/0'
                    : 'bg-gradient-to-t from-bg via-bg/50 to-bg/10',
                )}
              />

              {/* Gatilho do card recolhido */}
              <button
                id={`project-trigger-${index}`}
                type="button"
                onClick={() => setActive(index)}
                onKeyDown={(e) => onKeyDown(e, index)}
                aria-expanded={isActive}
                aria-controls={`project-panel-${project.id}`}
                aria-label={`${project.title}: ${isActive ? 'projeto aberto' : 'abrir detalhes do projeto'}`}
                className={cn(
                  'absolute inset-0 z-10 flex flex-col items-center justify-between py-6 text-left',
                  isActive && 'pointer-events-none',
                )}
              >
                <span
                  className={cn(
                    'font-display text-xs font-semibold text-brand-2 transition-opacity duration-300',
                    isActive && 'opacity-0',
                  )}
                >
                  {order(project)}
                </span>
                <span
                  className={cn(
                    'font-display text-lg font-semibold tracking-tight whitespace-nowrap text-fg transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180',
                    isActive && 'opacity-0',
                  )}
                >
                  {project.title}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex size-8 items-center justify-center rounded-full border border-line-2 bg-bg/60 text-muted transition-all duration-300 group-hover/panel:border-brand group-hover/panel:text-brand-2',
                    isActive && 'opacity-0',
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>

              {/* Conteúdo do card expandido */}
              <AnimatePresence>
                {isActive && (
                  <m.div
                    id={`project-panel-${project.id}`}
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    className="absolute inset-y-0 left-0 z-20 flex w-full max-w-md flex-col justify-end p-8 xl:max-w-lg xl:p-10"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-xs font-semibold tracking-[0.2em] text-brand-2 uppercase">
                        {order(project)} · {project.category}
                      </span>
                      <TeamBadge project={project} />
                    </div>
                    <h3 className="mt-3 text-4xl font-bold tracking-tight xl:text-5xl">{project.title}</h3>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
                      {project.technologies.slice(0, 8).map((tech) => (
                        <li key={tech}>
                          <Badge>{tech}</Badge>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7">
                      <ProjectLinks project={project} onOpenCaseStudy={onOpenCaseStudy} />
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------
   Mobile e tablet: cards empilhados
   ------------------------------------------------------------------------- */
function ProjectStack({ items, onOpenCaseStudy }: ListProps) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:hidden">
      {items.map((project, index) => (
        <Reveal as="li" key={project.id} delay={0.05 * (index % 2)} className="h-full">
          <GlowCard className="flex flex-col">
            <ProjectVisual project={project} className="aspect-[16/10] border-b border-line" />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-brand-2 uppercase">
                  {order(project)} · {project.category}
                </span>
                <TeamBadge project={project} />
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
                {project.technologies.slice(0, 5).map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <ProjectLinks project={project} onOpenCaseStudy={onOpenCaseStudy} size="md" />
              </div>
            </div>
          </GlowCard>
        </Reveal>
      ))}
    </ul>
  )
}

/* -------------------------------------------------------------------------
   Demais projetos
   ------------------------------------------------------------------------- */
function MoreProjects({ items, onOpenCaseStudy }: ListProps) {
  if (!items.length) return null
  return (
    <div className="mt-20 first:mt-0">
      <Reveal>
        <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Mais projetos<span className="text-brand">.</span>
        </h3>
        <p className="mt-2 text-muted">Outros sistemas, sites e automações desenvolvidos.</p>
      </Reveal>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, index) => (
          <Reveal as="li" key={project.id} delay={0.05 * (index % 3)} className="h-full">
            <GlowCard className="flex flex-col">
              <ProjectVisual
                project={project}
                className="aspect-[16/10] border-b border-line"
                imgClassName="transition-transform duration-700 group-hover/card:scale-105"
              />
              <div className="flex flex-1 flex-col p-5">
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-brand-2 uppercase">
                  {order(project)} · {project.category}
                </span>
                <h4 className="mt-2 font-display text-xl font-bold tracking-tight">{project.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
                {project.note && <p className="mt-3 text-xs text-subtle">{project.note}.</p>}
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <li key={tech}>
                      <Badge className="px-2.5 text-[0.7rem]">{tech}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <ProjectLinks project={project} onOpenCaseStudy={onOpenCaseStudy} />
                </div>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}

export function Projects() {
  const [caseStudy, setCaseStudy] = useState<Project | null>(null)
  const [filter, setFilter] = useState<ProjectFilter | 'todos'>('todos')

  const visible = filter === 'todos' ? projects : projects.filter((p) => p.filters.includes(filter))
  const featured = visible.filter((p) => p.featured)
  const others = visible.filter((p) => !p.featured)

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="relative overflow-hidden bg-bg-2/60 py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />
      <p aria-hidden="true" className="bg-word absolute -left-6 top-12 text-[22vw] lg:text-[13rem]">
        WORKS
      </p>
      <Container className="relative">
        <SectionHeading
          id="projetos-title"
          eyebrow="Trabalhos selecionados"
          title="Projetos em"
          highlight="Destaque."
          description="Produtos e sistemas publicados, com foco em desenvolvimento web, experiência do usuário, automações e integrações."
          className="mb-10"
        />

        <Reveal>
          <div role="group" aria-label="Filtrar projetos" className="scrollbar-none -mx-4 mb-10 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
            {projectFilters.map((item) => {
              const count =
                item.id === 'todos' ? projects.length : projects.filter((p) => p.filters.includes(item.id as ProjectFilter)).length
              const selected = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={selected}
                  className={cn(
                    'inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 font-display text-sm font-medium transition-all duration-300',
                    selected
                      ? 'border-brand bg-brand text-white shadow-glow-sm'
                      : 'border-line bg-card/60 text-muted hover:border-brand/50 hover:text-fg',
                  )}
                >
                  {item.label}
                  <span className={cn('text-xs', selected ? 'text-white/80' : 'text-subtle')}>{count}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {featured.length > 0 && (
          <>
            <Reveal>
              <ProjectAccordion key={filter} items={featured} onOpenCaseStudy={setCaseStudy} />
            </Reveal>
            <ProjectStack items={featured} onOpenCaseStudy={setCaseStudy} />
          </>
        )}
        <MoreProjects items={others} onOpenCaseStudy={setCaseStudy} />
      </Container>

      {caseStudy && (
        <Suspense fallback={null}>
          <CaseStudyDialog project={caseStudy} onClose={() => setCaseStudy(null)} />
        </Suspense>
      )}
    </section>
  )
}
