import type { Profile } from './types'

/**
 * Dados pessoais e de contato.
 *
 * Preencha somente com informações verdadeiras. Campos vazios ficam ocultos
 * no site automaticamente (nenhum link falso é exibido).
 *
 * FOTOS: recortes com fundo transparente em public/images/ (riquelme-hero-*.webp e riquelme-sobre-*.webp).
 *
 * CURRÍCULO: coloque o PDF em /public (ex.: public/curriculo-riquelme-teixeira.pdf)
 * e defina resumeUrl: '/curriculo-riquelme-teixeira.pdf'. O botão "Currículo"
 * aparece no header somente quando esse campo existir.
 */
export const profile: Profile = {
  name: 'Riquelme Teixeira',
  firstName: 'Riquelme',
  lastName: 'Teixeira',
  role: 'Desenvolvedor Web & Especialista em Automações',
  tagline:
    'Desenvolvo experiências digitais, sites e automações que conectam tecnologia, funcionalidade e eficiência.',
  areas: ['Desenvolvimento Web', 'CRM', 'Automações', 'UX'],
  // Base do nome em /public/images: existem as versões -400, -600 e -900.webp de cada foto.
  photos: { hero: '/images/riquelme-hero', about: '/images/riquelme-sobre' },
  photoAlt: 'Fotografia profissional de Riquelme Teixeira',
  resumeUrl: '/curriculo-riquelme-teixeira.pdf',
  location: 'Miguel Calmon, BA',
  contactFormId: '8af7e996b7a457132ea03e25fcad701e',
  contact: {
    email: 'riquelmetat@gmail.com',
    linkedin: 'https://www.linkedin.com/in/riquelmeeteixeiirz/',
    github: 'https://github.com/teixeirzkj',
    whatsapp: '5574999188851',
  },
}
