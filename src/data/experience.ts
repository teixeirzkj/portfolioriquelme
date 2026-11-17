import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    kind: 'work',
    organization: 'Tete a Tete Marketing de Conversa',
    role: 'Profissional de Atendimento ao Cliente',
    period: 'Nov 2025 — Atual',
    area: 'Atendimento, suporte, CRM e automações',
    current: true,
    activities: [
      'Atendimento e suporte ao cliente.',
      'Configuração de sistemas CRM.',
      'Desenvolvimento de automações com n8n.',
      'Integrações utilizando APIs.',
      'Automação de follow-ups.',
      'Organização e movimentação de leads.',
      'Integração de ferramentas de inteligência artificial.',
      'Campanhas e anúncios na Meta.',
      'Suporte técnico.',
      'Documentação e melhorias de processos.',
      'Treinamento e orientação sobre ferramentas.',
    ],
  },
  {
    kind: 'education',
    organization: 'Uniasselvi',
    role: 'Análise e Desenvolvimento de Sistemas',
    period: 'Fev 2025 — Em andamento',
    description: 'Graduação tecnológica.',
    current: true,
  },
]
