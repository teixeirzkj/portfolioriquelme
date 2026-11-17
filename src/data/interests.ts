import { Bot, Cpu, Gauge, MonitorSmartphone, Rocket } from 'lucide-react'
import type { FeatureCard } from './types'

export const interests: FeatureCard[] = [
  {
    icon: MonitorSmartphone,
    title: 'Soluções digitais',
    description: 'Construir produtos web que resolvem problemas reais de quem usa.',
  },
  {
    icon: Bot,
    title: 'IA e automações',
    description: 'Combinar inteligência artificial e fluxos automatizados para ganhar tempo.',
  },
  {
    icon: Cpu,
    title: 'Experiência do usuário',
    description: 'Entender a jornada das pessoas e simplificar cada etapa da interface.',
  },
  {
    icon: Rocket,
    title: 'Novas tecnologias',
    description: 'Testar ferramentas e frameworks que elevam a qualidade do que entrego.',
  },
  {
    icon: Gauge,
    title: 'Otimização de processos',
    description: 'Encontrar gargalos operacionais e transformá-los em rotinas mais eficientes.',
  },
]
