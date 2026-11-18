import { AnimatePresence, m } from 'motion/react'
import { FileText, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Logo } from './Logo'
import { ButtonLink } from './Button'
import { navItems } from '@/data/navigation'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/utils/cn'

const sectionIds = navItems.map((item) => item.id)

export function Header() {
  const active = useActiveSection(sectionIds)
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  // Menu mobile: trava a rolagem, fecha com Esc e devolve o foco ao botão.
  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      menuButtonRef.current?.focus()
    }
  }, [open])

  // Fecha o menu se a tela passar para o layout desktop.
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mql.matches && setOpen(false)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open ? 'border-b border-line/70 bg-bg/75 backdrop-blur-xl' : 'border-b border-transparent bg-transparent',
      )}
    >
      <a
        href="#conteudo"
        className="sr-only z-[70] rounded-full bg-brand px-4 py-2 text-sm font-semibold focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo onClick={close} />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-line/80 bg-card/50 p-1 backdrop-blur">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative block rounded-full px-4 py-2 font-display text-[0.8rem] font-medium tracking-wide uppercase transition-colors duration-300',
                      isActive ? 'bg-brand/15 text-fg ring-1 ring-brand/50' : 'text-muted hover:text-fg',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {profile.resumeUrl && (
            <ButtonLink
              href={profile.resumeUrl}
              target="_blank"
              variant="secondary"
              size="sm"
              icon={<FileText className="size-4" aria-hidden="true" />}
              className="hidden sm:inline-flex"
            >
              Currículo
            </ButtonLink>
          )}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-card/60 text-fg transition-colors hover:border-brand/60 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="menu-mobile"
            aria-label="Navegação principal"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line/70 bg-bg/95 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pt-6 sm:px-6">
              {navItems.map((item, index) => (
                <m.li
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1 }}
                >
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={`#${item.id}`}
                    onClick={close}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-3 py-4 font-display text-3xl font-bold tracking-tight uppercase transition-colors',
                      active === item.id ? 'text-fg' : 'text-muted hover:text-fg',
                    )}
                  >
                    {item.label}
                    <span className="font-sans text-xs font-medium text-brand-2">0{index + 1}</span>
                  </a>
                </m.li>
              ))}
            </ul>
            {profile.resumeUrl && (
              <div className="px-4 pt-6 sm:px-6">
                <ButtonLink href={profile.resumeUrl} target="_blank" variant="secondary" className="w-full">
                  Currículo
                </ButtonLink>
              </div>
            )}
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
