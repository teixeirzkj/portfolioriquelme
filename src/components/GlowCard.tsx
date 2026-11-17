import { useRef, type PointerEvent, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

/** Card com borda fina e brilho azul que acompanha o ponteiro. */
export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn(
        'group/card relative h-full overflow-hidden rounded-2xl border border-line bg-card/80 transition-all duration-500 hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background: 'radial-gradient(420px circle at var(--x, 50%) var(--y, 0%), rgb(0 102 255 / 0.14), transparent 60%)',
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}
