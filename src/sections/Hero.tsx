import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { ButtonLink } from '@/components/Button'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { profile } from '@/data/profile'

const ease = [0.22, 1, 0.36, 1] as const

/** Anima as letras de uma palavra em sequência. */
function AnimatedWord({ text, delay, className }: { text: string; delay: number; className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: '0.6em', rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.035, ease }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

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
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-24 lg:pt-28"
    >
      {/* Fundo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute top-1/4 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 size-96 rounded-full bg-brand-2/10 blur-[100px]" />
      </div>
      <motion.p
        aria-hidden="true"
        style={{ y: wordY }}
        className="bg-word absolute inset-x-0 top-[18%] -z-10 text-center text-[24vw] lg:top-[14%] lg:text-[19vw]"
      >
        PORTFOLIO
      </motion.p>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:px-8">
        {/* Texto */}
        <div className="relative z-10">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span aria-hidden="true" className="h-px w-8 bg-brand" />
            Olá, eu sou
          </motion.p>

          <h1
            id="hero-title"
            className="mt-5 text-[clamp(3rem,11vw,7.25rem)] leading-[0.88] font-bold tracking-[-0.04em]"
          >
            <span className="sr-only">{profile.name}.</span>
            <AnimatedWord text={profile.firstName} delay={0.15} className="block text-gradient-brand" />
            <AnimatedWord text={`${profile.lastName}.`} delay={0.45} className="block" />
          </h1>

          <motion.p
            className="mt-6 font-display text-lg font-semibold text-fg sm:text-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease }}
          >
            <ButtonLink href="#projetos" icon={<ArrowDownRight className="size-4" aria-hidden="true" />}>
              Explorar projetos
            </ButtonLink>
            <ButtonLink href="#contato" variant="secondary" icon={<ArrowRight className="size-4" aria-hidden="true" />}>
              Entrar em contato
            </ButtonLink>
          </motion.div>
        </div>

        {/* Foto + informações complementares */}
        <motion.div
          style={{ y: photoY }}
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-none"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
        >
          <ProfilePhoto variant="hero" priority className="aspect-[3/4] w-full" />

          <motion.ul
            aria-label="Áreas de atuação"
            className="absolute -bottom-6 left-1/2 flex w-[94%] -translate-x-1/2 flex-wrap justify-center gap-x-2 gap-y-1 rounded-2xl sm:w-max sm:gap-x-3 sm:rounded-full border border-line bg-bg/80 px-4 py-2.5 font-display text-[0.62rem] font-medium tracking-[0.14em] sm:px-5 sm:text-xs sm:tracking-[0.2em] text-muted uppercase backdrop-blur sm:text-xs lg:right-0 lg:left-auto lg:translate-x-0"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3, ease }}
          >
            {profile.areas.map((area, i) => (
              <li key={area} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-brand">•</span>}
                {area}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Indicador de rolagem */}
      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] font-medium tracking-[0.3em] text-subtle uppercase transition-colors hover:text-fg md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-line-2 pt-1.5">
          <span className="size-1 animate-scroll-dot rounded-full bg-brand-2" />
        </span>
        Scroll to explore
      </motion.a>
    </section>
  )
}
