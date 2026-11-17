import { Container } from '@/components/Container'
import { GlowCard } from '@/components/GlowCard'
import { IconTile } from '@/components/IconTile'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { interests } from '@/data/interests'

export function Interests() {
  return (
    <section id="interesses" aria-labelledby="interesses-title" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          id="interesses-title"
          eyebrow="Interesses profissionais"
          title="Além do"
          highlight="Código."
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {interests.map((item, i) => (
            <Reveal as="li" key={item.title} delay={0.06 * i} className="h-full">
                <GlowCard className="p-4 sm:p-6">
                  <IconTile icon={item.icon} />
                  <h3 className="mt-4 text-sm font-semibold sm:mt-5 sm:text-base">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">{item.description}</p>
                </GlowCard>
              </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
