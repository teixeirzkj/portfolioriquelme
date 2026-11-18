import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  id: string
  label: string
}

export interface Profile {
  name: string
  firstName: string
  lastName: string
  role: string
  tagline: string
  areas: string[]
  /** Base do caminho das fotos em /public/images (sem -400/-600/-900.webp). Ausentes = composição provisória. */
  photos: {
    hero?: string
    about?: string
  }
  photoAlt?: string
  /** URL do currículo em PDF (ex.: '/curriculo-riquelme-teixeira.pdf' dentro de /public). */
  resumeUrl?: string
  location?: string
  contact: {
    email?: string
    /** URL completa do perfil, ex.: https://www.linkedin.com/in/usuario */
    linkedin?: string
    /** URL completa do perfil, ex.: https://github.com/usuario */
    github?: string
    /** Somente dígitos com DDI e DDD, ex.: 5574999999999 */
    whatsapp?: string
  }
  /** Código do FormSubmit (vem no e-mail de ativação); substitui o e-mail no envio do formulário */
  contactFormId?: string
}

export interface FeatureCard {
  icon: LucideIcon
  title: string
  description: string
}

export interface ExperienceItem {
  kind: 'work' | 'education'
  organization: string
  role?: string
  period: string
  area?: string
  description?: string
  activities?: string[]
  current?: boolean
}

export interface SkillGroup {
  icon: LucideIcon
  title: string
  items: { name: string; level?: 'iniciante' }[]
}

export interface ProjectImage {
  src: string
  alt: string
  /** 'mobile' exibe a imagem em formato de celular dentro do estudo de caso */
  variant?: 'desktop' | 'mobile'
}

export interface CaseStudy {
  overview: string
  problem: string
  solution: string[]
  ux: string[]
  /** Recursos que o próprio projeto documenta como simulados, pendentes ou planejados */
  inProgress?: string[]
}

/** Filtros exibidos na seção de projetos (ver projectFilters em projects.ts) */
export type ProjectFilter = 'web' | 'sistemas' | 'automacoes'

export interface Project {
  id: string
  title: string
  category: string
  filters: ProjectFilter[]
  /** Descrição curta exibida no card */
  description: string
  technologies: string[]
  /** Capa do card. Ausente = composição visual abstrata (sem fingir ser screenshot). */
  image?: ProjectImage
  /** Screenshots reais exibidas no estudo de caso */
  gallery?: ProjectImage[]
  repositoryUrl?: string
  liveUrl?: string
  featured: boolean
  /** Ícone usado na composição abstrata quando não há imagem */
  icon?: LucideIcon
  challenge?: string
  solution?: string
  outcome?: string
  caseStudy?: CaseStudy
  /** Observação curta exibida no card (ex.: trabalho confidencial) */
  note?: string
}
