import { profile } from '@/data/profile'
import { cn } from '@/utils/cn'

interface ProfilePhotoProps {
  variant: 'hero' | 'about'
  className?: string
  priority?: boolean
}

/**
 * Foto profissional recortada (fundo transparente), integrada ao fundo escuro
 * com brilho azul e esmaecimento na base.
 * Sem foto, mostra uma composição abstrata com o monograma RT — nunca uma pessoa fictícia.
 */
export function ProfilePhoto({ variant, className, priority = false }: ProfilePhotoProps) {
  const src = profile.photos[variant]

  if (src) {
    return (
      <div className={cn('relative isolate', className)}>
        {/* Brilho e detalhes geométricos atrás do recorte */}
        {/* Gradiente radial em vez de blur: o blur era recortado no retângulo da camada animada */}
        <div
          aria-hidden="true"
          className="absolute -inset-x-[20%] -top-[5%] bottom-[5%] -z-10 bg-[radial-gradient(closest-side,rgb(0_102_255/0.32),rgb(0_102_255/0.12)_55%,transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute top-[6%] left-1/2 -z-10 aspect-square w-[88%] -translate-x-1/2 rounded-full border border-line-2/70"
        />
        <div
          aria-hidden="true"
          className="absolute top-[14%] left-1/2 -z-10 aspect-square w-[70%] -translate-x-1/2 rounded-full border border-dashed border-brand/25"
        />
        <img
          src={src}
          alt={profile.photoAlt ?? profile.name}
          width={900}
          height={1200}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          className="h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_72%,transparent_98%)]"
        />
      </div>
    )
  }

  return (
    <div
      className={cn('relative flex items-center justify-center', className)}
      role="img"
      aria-label="Composição gráfica provisória com o monograma RT"
    >
      <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-brand/20 blur-3xl" />
      <svg aria-hidden="true" viewBox="0 0 400 480" className="relative h-full w-full">
        <defs>
          <linearGradient id={`rt-stroke-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1479FF" />
            <stop offset="1" stopColor="#0066FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect x="40" y="40" width="320" height="400" rx="160" fill="none" stroke="#1E2430" />
        <text
          x="200"
          y="290"
          textAnchor="middle"
          fontFamily="Space Grotesk Variable, sans-serif"
          fontWeight="700"
          fontSize="150"
          letterSpacing="-6"
          fill="none"
          stroke={`url(#rt-stroke-${variant})`}
          strokeWidth="1.5"
        >
          RT
        </text>
        <circle cx="318" cy="282" r="11" fill="#0066FF" />
      </svg>
    </div>
  )
}
