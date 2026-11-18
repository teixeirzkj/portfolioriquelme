import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { useRef, type CSSProperties } from 'react'
import { ButtonLink } from '@/components/Button'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { profile } from '@/data/profile'

/** Atraso da animação de entrada (CSS), em segundos. */
const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` })

/**
 * Entrada do hero feita em CSS (classe .enter em globals.css): começa assim que a
 * página renderiza e termina rápido, sem depender da biblioteca de animação.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const wordY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '30%'])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '8%'])

  return (
    <section
      ref={ref}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex items-start overflow-hidden pt-28 pb-20 lg:min-h-[100svh] lg:items-center lg:pt-28 lg:pb-24"
    >
      {/* Fundo (gradientes em vez de blur: bem mais leves no celular) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute top-0 left-1/2 size-[60rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(0_102_255/0.16),transparent)]" />
        <div className="absolute -right-48 -bottom-48 size-[40rem] bg-[radial-gradient(closest-side,rgb(20_121_255/0.1),transparent)]" />
      </div>
      <m.p
        aria-hidden="true"
        style={{ y: wordY }}
        className="bg-word absolute inset-x-0 top-[18%] -z-10 text-center text-[24vw] lg:top-[14%] lg:text-[19vw]"
      >
        PORTFOLIO
      </m.p>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:px-8">
        {/* Texto */}
        <div className="relative z-10">
          <p className="eyebrow enter">
            <span aria-hidden="true" className="h-px w-8 bg-brand" />
            Olá, eu sou
          </p>

          <h1
            id="hero-title"
            className="mt-5 pr-[40%] text-[clamp(2.75rem,11vw,7.25rem)] leading-[0.88] font-bold tracking-[-0.04em] sm:pr-[36%] lg:pr-0"
          >
            <span className="enter block text-gradient-brand" style={delay(0.05)}>
              {profile.firstName}
            </span>
            <span className="enter block" style={delay(0.12)}>
              {profile.lastName}.
            </span>
          </h1>

          <p
            className="enter mt-6 pr-[40%] font-display text-lg font-semibold text-fg sm:pr-[36%] sm:text-2xl lg:pr-0"
            style={delay(0.2)}
          >
            {profile.role}
          </p>

          <p className="enter mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={delay(0.26)}>
            {profile.tagline}
          </p>

          <div className="enter mt-9 flex flex-col gap-3 sm:flex-row" style={delay(0.32)}>
            <ButtonLink href="#projetos" icon={<ArrowDownRight className="size-4" aria-hidden="true" />}>
              Explorar projetos
            </ButtonLink>
            <ButtonLink href="#contato" variant="secondary" icon={<ArrowRight className="size-4" aria-hidden="true" />}>
              Entrar em contato
            </ButtonLink>
          </div>

          {/* No celular, as áreas de atuação aparecem como texto abaixo dos botões */}
          <p
            className="enter mt-8 font-display text-[0.7rem] font-medium tracking-[0.18em] text-subtle uppercase lg:hidden"
            style={delay(0.4)}
          >
            {profile.areas.join(' • ')}
          </p>
        </div>

        {/* Foto + informações complementares */}
        <m.div
          style={{ y: photoY }}
          className="pointer-events-none absolute top-[5.5rem] -right-[4%] z-0 w-[46%] max-w-[17rem] sm:top-24 sm:right-0 sm:w-[38%] lg:pointer-events-auto lg:relative lg:top-auto lg:right-auto lg:z-auto lg:mx-auto lg:w-full lg:max-w-none"
        >
          <div className="enter-fade" style={delay(0.05)}>
            <ProfilePhoto variant="hero" priority className="aspect-[3/4] w-full" />
          </div>

          <ul
            aria-label="Áreas de atuação"
            className="enter absolute right-0 -bottom-6 hidden w-max gap-x-3 rounded-full border border-line bg-bg/80 px-5 py-2.5 font-display text-xs font-medium tracking-[0.2em] text-muted uppercase backdrop-blur lg:flex"
            style={delay(0.45)}
          >
            {profile.areas.map((area, i) => (
              <li key={area} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-brand">•</span>}
                {area}
              </li>
            ))}
          </ul>
        </m.div>
      </div>

      {/* Indicador de rolagem */}
      <a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="enter-fade absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] font-medium tracking-[0.3em] text-subtle uppercase transition-colors hover:text-fg md:flex"
        style={delay(0.7)}
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-line-2 pt-1.5">
          <span className="size-1 animate-scroll-dot rounded-full bg-brand-2" />
        </span>
        Scroll to explore
      </a>
    </section>
  )
}
