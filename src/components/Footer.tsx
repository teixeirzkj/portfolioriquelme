import { ArrowUpRight } from 'lucide-react'
import { Container } from './Container'
import { Logo } from './Logo'
import { SocialLinks } from './SocialLinks'
import { navItems } from '@/data/navigation'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-line/70 bg-bg">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-24 flex justify-center">
        <div className="h-64 w-[56rem] max-w-full bg-[radial-gradient(closest-side,rgb(0_102_255/0.12),transparent)]" />
      </div>

      <Container className="relative py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo className="text-3xl" />
            <p className="mt-4 font-display text-lg font-semibold">{profile.name}.</p>
            <p className="mt-1 text-sm text-muted">Desenvolvimento Web • Automações • Experiência Digital</p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                    <ArrowUpRight
                      className="size-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line/70 pt-6 text-xs text-subtle sm:flex-row sm:justify-between">
          <p>
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
          <a href="#inicio" className="transition-colors hover:text-fg">
            Voltar ao topo ↑
          </a>
        </div>
      </Container>
    </footer>
  )
}
