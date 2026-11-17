import { Container } from '@/components/Container'
import { GlowCard } from '@/components/GlowCard'
import { IconTile } from '@/components/IconTile'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { aboutCards, aboutParagraphs } from '@/data/about'

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden py-24 sm:py-32">
      <p aria-hidden="true" className="bg-word absolute -right-8 top-10 text-[22vw] lg:text-[14rem]">
        ABOUT
      </p>

      <Container className="relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:sticky lg:block lg:top-28 lg:max-w-none lg:self-start">
          <ProfilePhoto variant="about" className="relative aspect-[3/4] w-full" />
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 -z-10 size-24 rounded-2xl border border-brand/40 bg-brand/5"
          />
          <div aria-hidden="true" className="absolute -top-4 -right-4 -z-10 size-16 rounded-full border border-line-2" />
        </Reveal>

        <div>
          <SectionHeading id="sobre-title" eyebrow="Quem sou" title="Sobre" highlight="Mim." />

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {aboutParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card, i) => (
              <Reveal as="li" key={card.title} delay={0.08 * i} className="h-full">
                  <GlowCard className="p-6">
                    <IconTile icon={card.icon} />
                    <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                  </GlowCard>
                </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
