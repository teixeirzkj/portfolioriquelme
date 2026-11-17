import { Mail } from 'lucide-react'
import type { ReactNode } from 'react'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons'
import { profile } from '@/data/profile'
import { getSocialLinks, type SocialLink } from '@/utils/links'

const icons: Record<SocialLink['id'], ReactNode> = {
  github: <GitHubIcon className="size-4" />,
  linkedin: <LinkedInIcon className="size-4" />,
  email: <Mail className="size-4" aria-hidden="true" />,
  whatsapp: <WhatsAppIcon className="size-4" />,
}

export const socialLinks = getSocialLinks(profile.contact)

export function SocialIcon({ id }: { id: SocialLink['id'] }) {
  return <>{icons[id]}</>
}

/** Botões redondos com os perfis profissionais preenchidos em profile.ts. */
export function SocialLinks() {
  if (!socialLinks.length) return null
  return (
    <ul className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target={link.id === 'email' ? undefined : '_blank'}
            rel={link.id === 'email' ? undefined : 'noopener noreferrer'}
            aria-label={link.label}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-card/60 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:text-fg hover:shadow-glow-sm"
          >
            {icons[link.id]}
          </a>
        </li>
      ))}
    </ul>
  )
}
