import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ScrollProgress } from '@/components/ScrollProgress'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Hero } from '@/sections/Hero'
import { Interests } from '@/sections/Interests'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
    </LazyMotion>
  )
}
