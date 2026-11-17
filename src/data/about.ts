import { CodeXml, MousePointerClick, Users, Workflow } from 'lucide-react'
import type { FeatureCard } from './types'

export const aboutParagraphs: string[] = [
  'Sou estudante de Análise e Desenvolvimento de Sistemas na Uniasselvi, com experiência em desenvolvimento web, atendimento ao cliente, CRM e automações.',
  'Ao longo da minha trajetória, trabalhei com criação de sites, integração de sistemas, desenvolvimento de fluxos automatizados e melhorias em processos comerciais.',
  'Gosto de transformar problemas em soluções práticas, explorando tecnologias que tornam processos mais eficientes e experiências digitais mais intuitivas.',
  'Também tenho interesse em UX e otimização de conversão (CRO), buscando evoluir na criação de soluções que ofereçam uma boa experiência aos usuários.',
]

export const aboutCards: FeatureCard[] = [
  {
    icon: CodeXml,
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e interfaces responsivas.',
  },
  {
    icon: Workflow,
    title: 'Automações',
    description: 'Desenvolvimento de fluxos e integrações entre sistemas.',
  },
  {
    icon: Users,
    title: 'CRM e Atendimento',
    description: 'Organização de processos comerciais e relacionamento com clientes.',
  },
  {
    icon: MousePointerClick,
    title: 'UX e CRO',
    description: 'Usabilidade, jornada do usuário e fundamentos de conversão.',
  },
]
