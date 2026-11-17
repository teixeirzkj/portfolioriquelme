import { Briefcase, GraduationCap } from 'lucide-react'
import { Container } from '@/components/Container'
import { GlowCard } from '@/components/GlowCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="relative bg-bg-2/60 py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-2 to-transparent" />
      <Container>
        <SectionHeading
          id="experiencia-title"
          eyebrow="Experiência e formação"
          title="Minha"
          highlight="Trajetória."
        />

        <ol className="relative mt-14 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[1.35rem] before:w-px before:bg-gradient-to-b before:from-brand before:via-line-2 before:to-transparent sm:before:left-[1.6rem]">
          {experience.map((item, index) => {
            const Icon = item.kind === 'work' ? Briefcase : GraduationCap
            return (
              <li key={item.organization} className="relative pl-14 sm:pl-20">
                <Reveal delay={index * 0.1}>
                  <span className="absolute top-6 left-0 inline-flex size-11 items-center justify-center rounded-full border border-brand/50 bg-bg text-brand-2 shadow-glow-sm sm:size-[3.25rem]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <GlowCard className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-xs font-semibold tracking-[0.2em] text-brand-2 uppercase">
                        {item.kind === 'work' ? 'Experiência profissional' : 'Formação'}
                      </span>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-emerald-300">
                          <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                          {item.kind === 'work' ? 'Atual' : 'Cursando'}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <h3 className="text-2xl font-bold tracking-tight">{item.organization}</h3>
                      <p className="font-display text-sm text-muted">{item.period}</p>
                    </div>
                    {item.role && <p className="mt-1 text-base font-medium text-fg/90">{item.role}</p>}
                    {item.area && <p className="mt-1 text-base text-muted">{item.area}</p>}
                    {item.description && <p className="mt-3 text-sm text-muted">{item.description}</p>}

                    {item.activities && (
                      <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                        {item.activities.map((activity) => (
                          <li key={activity} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlowCard>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
