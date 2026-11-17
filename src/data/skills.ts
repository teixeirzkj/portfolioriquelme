import { CodeXml, LayoutDashboard, MessagesSquare, Workflow, Wrench } from 'lucide-react'
import type { SkillGroup } from './types'

/**
 * `level: 'iniciante'` mostra um selo discreto ao lado da tecnologia,
 * para não apresentar conhecimento inicial como experiência avançada.
 */
export const skillGroups: SkillGroup[] = [
  {
    icon: CodeXml,
    title: 'Desenvolvimento',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'React', level: 'iniciante' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    icon: Workflow,
    title: 'Automações',
    items: [
      { name: 'n8n' },
      { name: 'APIs REST' },
      { name: 'Webhooks' },
      { name: 'Integrações' },
      { name: 'Automações com IA' },
    ],
  },
  {
    icon: MessagesSquare,
    title: 'CRM e Atendimento',
    items: [
      { name: 'Kommo CRM' },
      { name: 'Automação de leads' },
      { name: 'Follow-ups comerciais' },
      { name: 'Atendimento digital' },
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'UX e Experiência Digital',
    items: [
      { name: 'Design responsivo' },
      { name: 'Usabilidade' },
      { name: 'Jornada do usuário' },
      { name: 'Fundamentos de CRO', level: 'iniciante' },
      { name: 'Organização de interfaces' },
    ],
  },
  {
    icon: Wrench,
    title: 'Ferramentas',
    items: [
      { name: 'VS Code' },
      { name: 'GitHub' },
      { name: 'Claude Code' },
      { name: 'Salesforce (desenvolvimento)', level: 'iniciante' },
    ],
  },
]
