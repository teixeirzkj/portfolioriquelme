import type { LucideIcon } from 'lucide-react'

export function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-2 transition-all duration-500 group-hover/card:scale-110 group-hover/card:bg-brand group-hover/card:text-white group-hover/card:shadow-glow-sm">
      <Icon className="size-5" aria-hidden="true" />
    </span>
  )
}
