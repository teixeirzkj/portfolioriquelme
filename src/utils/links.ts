import type { Profile } from '@/data/types'

export function whatsappUrl(number: string, text?: string): string {
  const digits = number.replace(/\D/g, '')
  return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ''}`
}

export interface SocialLink {
  id: 'github' | 'linkedin' | 'email' | 'whatsapp'
  label: string
  href: string
  display: string
}

/** Monta somente os links que foram preenchidos em profile.ts. */
export function getSocialLinks(contact: Profile['contact']): SocialLink[] {
  const links: SocialLink[] = []
  if (contact.github)
    links.push({ id: 'github', label: 'GitHub', href: contact.github, display: contact.github.replace(/^https?:\/\/(www\.)?/, '') })
  if (contact.linkedin)
    links.push({ id: 'linkedin', label: 'LinkedIn', href: contact.linkedin, display: contact.linkedin.replace(/^https?:\/\/(www\.)?/, '') })
  if (contact.email)
    links.push({ id: 'email', label: 'E-mail', href: `mailto:${contact.email}`, display: contact.email })
  if (contact.whatsapp)
    links.push({ id: 'whatsapp', label: 'WhatsApp', href: whatsappUrl(contact.whatsapp, 'Olá, Riquelme! Vi seu portfólio.'), display: 'Conversar no WhatsApp' })
  return links
}
