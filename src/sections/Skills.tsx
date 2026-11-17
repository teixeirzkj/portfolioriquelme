import { Container } from '@/components/Container'
import { GlowCard } from '@/components/GlowCard'
import { IconTile } from '@/components/IconTile'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups } from '@/data/skills'

export function Skills() {
  return (
    <section id="tecnologias" aria-labelledby="tecnologias-title" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute top-1/3 -left-40 size-96 rounded-full bg-brand/10 blur-[110px]" />
      <Container className="relative">
        <SectionHeading
          id="tecnologias-title"
          eyebrow="Conhecimentos"
          title="Skills &"
          highlight="Technologies."
          description="Ferramentas e tecnologias que uso no dia a dia. Itens marcados como “em evolução” são conhecimentos iniciais que estou aprofundando."
        />

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal as="li" key={group.title} delay={0.06 * i} className="h-full">
                <GlowCard className="p-6 sm:p-7">
                  <div className="flex items-center gap-4">
                    <IconTile icon={group.icon} />
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-2/80 px-3 py-1.5 text-sm text-fg/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50"
                      >
                        {item.name}
                        {item.level === 'iniciante' && (
                          <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-brand-2 uppercase">
                            em evolução
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
