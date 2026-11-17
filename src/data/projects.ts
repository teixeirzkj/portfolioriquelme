import type { Project, ProjectFilter } from './types'

/* -------------------------------------------------------------------------
   Screenshots reais (capturadas dos sites publicados ou dos repositórios)
   ------------------------------------------------------------------------- */
import clicouaiBuscaEventos from '@/assets/projects/clicouai/busca-eventos.webp'
import clicouaiEvento from '@/assets/projects/clicouai/evento.webp'
import clicouaiEventos from '@/assets/projects/clicouai/eventos.webp'
import clicouaiMobile from '@/assets/projects/clicouai/mobile.webp'

import burgerHome from '@/assets/projects/the-burger/home.webp'
import burgerCardapio from '@/assets/projects/the-burger/cardapio.webp'
import burgerMobile from '@/assets/projects/the-burger/mobile.webp'

import piriHome from '@/assets/projects/piri-coxinha/home.webp'
import piriCardapio from '@/assets/projects/piri-coxinha/cardapio.webp'
import piriMobile from '@/assets/projects/piri-coxinha/mobile.webp'

import orcamentosGerador from '@/assets/projects/fredy-orcamentos/gerador.webp'
import orcamentosMobile from '@/assets/projects/fredy-orcamentos/mobile.webp'

import gestaoRzDashboard from '@/assets/projects/gestao-rz/dashboard.webp'
import gestaoRzLogin from '@/assets/projects/gestao-rz/login.webp'

import escritorioHome from '@/assets/projects/escritorio-virtual/home.webp'
import escritorioRecursos from '@/assets/projects/escritorio-virtual/recursos.webp'
import escritorioMapa from '@/assets/projects/escritorio-virtual/mapa.webp'
import escritorioMobile from '@/assets/projects/escritorio-virtual/mobile.webp'

import plascotelDashboard from '@/assets/projects/plascotel/dashboard.webp'
import plascotelLogin from '@/assets/projects/plascotel/login.webp'
import plascotelMobile from '@/assets/projects/plascotel/mobile.webp'

import fredyGestaoDashboard from '@/assets/projects/fredy-gestao/dashboard.webp'
import fredyGestaoLogin from '@/assets/projects/fredy-gestao/login.webp'

import robertaoHome from '@/assets/projects/robertao/home.webp'
import robertaoCompra from '@/assets/projects/robertao/compra.webp'
import robertaoMobile from '@/assets/projects/robertao/mobile.webp'

import natalliHome from '@/assets/projects/studio-natalli/home.webp'
import natalliServicos from '@/assets/projects/studio-natalli/servicos.webp'
import natalliGaleria from '@/assets/projects/studio-natalli/galeria.webp'
import natalliAgendamento from '@/assets/projects/studio-natalli/agendamento.webp'
import natalliMobile from '@/assets/projects/studio-natalli/mobile.webp'

/** Imagens em /public são referenciadas pelo caminho absoluto. */
const clicouaiHome = '/projects/clicouai.webp'

export const projectFilters: { id: ProjectFilter | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Sites e e-commerce' },
  { id: 'sistemas', label: 'Sistemas e gestão' },
  { id: 'automacoes', label: 'Automações e IA' },
]

/**
 * COMO ADICIONAR UM PROJETO
 * 1. Salve as screenshots em src/assets/projects/<id>/ (de preferência .webp, 1440px de largura).
 * 2. Importe as imagens acima.
 * 3. Adicione um objeto ao array `projects`. A ordem do array é a ordem de exibição.
 * 4. `featured: true` coloca o projeto na galeria expansível; `false` o coloca na grade "Mais projetos".
 * 5. Omita qualquer campo que não tenha informação comprovada (links, imagem, estudo de caso).
 */
export const projects: Project[] = [
  /* 01 ------------------------------------------------------------------ */
  {
    id: 'clicouai',
    title: 'ClicouAí',
    category: 'Marketplace / E-commerce',
    filters: ['web', 'sistemas'],
    note: 'Projeto desenvolvido em equipe',
    description:
      'Plataforma digital que conecta fotógrafos e participantes de eventos, facilitando a publicação, descoberta e comercialização de fotografias e vídeos online.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod', 'Sharp', 'Mercado Pago'],
    image: { src: clicouaiHome, alt: 'Página inicial do ClicouAí com busca de eventos e categorias' },
    gallery: [
      { src: clicouaiHome, alt: 'Página inicial do ClicouAí' },
      { src: clicouaiBuscaEventos, alt: 'Busca de eventos por nome, cidade ou fotógrafo, com filtros de categoria, cidade e data' },
      { src: clicouaiEvento, alt: 'Página de um evento com a busca pelas próprias fotos' },
      { src: clicouaiEventos, alt: 'Eventos em destaque e eventos recentes' },
      { src: clicouaiMobile, alt: 'ClicouAí no celular', variant: 'mobile' },
    ],
    liveUrl: 'https://www.clicouai.com/',
    repositoryUrl: 'https://github.com/gamaral203/ClickAI',
    featured: true,
    caseStudy: {
      overview:
        'Marketplace brasileiro de fotos e vídeos de eventos (corridas, festas, formaturas, vaquejadas e esportes), desenvolvido em equipe e publicado em produção.',
      problem:
        'Depois de um evento, encontrar as próprias fotos entre milhares de imagens é demorado, e os fotógrafos precisam de um jeito simples de publicar, proteger e vender esse material.',
      solution: [
        'Busca de eventos por nome, cidade ou fotógrafo, com filtros por categoria, cidade e data.',
        'Busca das próprias fotos dentro do evento por selfie (reconhecimento facial com Amazon Rekognition, sem gravar a selfie) e por número de peito, quando a opção está ativa no evento.',
        'Galerias com prévias protegidas por marca d’água aplicada nos pixels; o original só é liberado após o pagamento ser conferido no servidor.',
        'Carrinho e checkout com Pix e cartão via Mercado Pago, sem exigir cadastro do comprador.',
        'Painel do fotógrafo com eventos, pastas, envio direto ao armazenamento, preços, cupons, pacotes, colaboradores com divisão automática das vendas e financeiro com saque por Pix.',
        'Área de gestão para a equipe com eventos, finanças, saques, denúncias, usuários e painel de uso.',
      ],
      ux: [
        'Fluxo de compra direto: encontrar o evento, achar as fotos e pagar em poucos passos.',
        'Busca por selfie e por número de peito para reduzir o esforço de procurar imagem por imagem.',
        'Interface responsiva, com navegação, busca e carrinho adaptados ao celular.',
      ],
      inProgress: [
        'A entrega por WhatsApp ainda é simulada, segundo a documentação do projeto.',
        'Os vídeos dentro da galeria do evento estão listados como pendentes.',
      ],
    },
  },
  /* 02 ------------------------------------------------------------------ */
  {
    id: 'the-burger',
    title: 'The Burger Lanches',
    category: 'Cardápio digital · Delivery',
    filters: ['web'],
    description:
      'Site de delivery de hamburgueria com cardápio por categorias, mais pedidos, busca, adicionais e carrinho, com acompanhamento do pedido pelo WhatsApp.',
    technologies: ['React', 'Supabase', 'JavaScript'],
    image: { src: burgerHome, alt: 'Página inicial da The Burger Lanches' },
    gallery: [
      { src: burgerHome, alt: 'Página inicial da The Burger Lanches' },
      { src: burgerCardapio, alt: 'Cardápio com categorias e mais pedidos' },
      { src: burgerMobile, alt: 'The Burger Lanches no celular', variant: 'mobile' },
    ],
    liveUrl: 'https://theburgelanches.com/',
    featured: true,
    caseStudy: {
      overview: 'Site de pedidos para uma hamburgueria artesanal, publicado em domínio próprio.',
      problem:
        'A lanchonete precisava receber pedidos pelo site, apresentar o cardápio de forma atrativa e manter o cliente informado sobre o andamento do pedido.',
      solution: [
        'Cardápio dividido por categorias (hambúrgueres, artesanais, combos e bebidas), com destaque para os mais pedidos e preços promocionais.',
        'Busca por lanche ou ingrediente e personalização com adicionais.',
        'Carrinho com finalização em poucos toques e acompanhamento do pedido pelo WhatsApp.',
        'Indicação de loja aberta ou fechada, bloqueando pedidos fora do horário.',
      ],
      ux: [
        'Hero com tipografia grande e foto do produto em destaque.',
        'Filtros por categoria em formato de chips, fáceis de tocar no celular.',
        'Carrinho sempre acessível no topo da página.',
      ],
    },
  },
  /* 03 ------------------------------------------------------------------ */
  {
    id: 'piri-coxinha',
    title: 'Piri Coxinha',
    category: 'Cardápio digital · Delivery',
    filters: ['web', 'sistemas'],
    description:
      'Cardápio digital com carrinho e pedidos, acompanhado de um painel do dono para gerenciar cardápio, combos, pedidos, vendas e relatórios.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'PWA'],
    image: { src: piriHome, alt: 'Cardápio digital da Piri Coxinha' },
    gallery: [
      { src: piriHome, alt: 'Topo do cardápio digital da Piri Coxinha' },
      { src: piriCardapio, alt: 'Lista de produtos do cardápio' },
      { src: piriMobile, alt: 'Cardápio da Piri Coxinha no celular', variant: 'mobile' },
    ],
    liveUrl: 'https://www.piricoxinha.com/',
    repositoryUrl: 'https://github.com/teixeirzkj/piri',
    featured: true,
    caseStudy: {
      overview: 'Site público de cardápio e painel administrativo com login, publicados em domínio próprio.',
      problem:
        'A loja precisava receber pedidos pelo celular e, ao mesmo tempo, atualizar o cardápio e acompanhar as vendas sem depender de terceiros.',
      solution: [
        'Cardápio com destaques, combos, carrinho e envio de pedidos.',
        'Painel do dono com dashboard, edição do cardápio e dos combos, pedidos, nova venda, vendas, relatório e configurações.',
        'Supabase como backend (banco, autenticação e mídia), com modo de demonstração local quando não configurado.',
        'Instalável como aplicativo (PWA, com manifest e service worker).',
      ],
      ux: [
        'Layout pensado para o celular, com carrinho flutuante sempre acessível.',
        'Status da loja (aberta ou fechada) e informações de entrega no topo.',
        'Produtos mais pedidos em destaque para agilizar a escolha.',
      ],
    },
  },
  /* 04 ------------------------------------------------------------------ */
  {
    id: 'fredy-orcamentos',
    title: 'Frédy Orçamentos',
    category: 'Automação com IA',
    filters: ['automacoes', 'sistemas'],
    description:
      'Gerador de orçamentos de viagem: o atendente envia o print da cotação, a IA extrai os dados, ele revisa em quatro passos e gera um link de proposta para o cliente.',
    technologies: ['Node.js', 'Express', 'API da Anthropic', 'Zod', 'JavaScript', 'Vercel Blob'],
    image: { src: orcamentosGerador, alt: 'Primeiro passo do gerador de orçamentos: envio do print da cotação' },
    gallery: [
      { src: orcamentosGerador, alt: 'Gerador de orçamentos, passo de envio do print' },
      { src: orcamentosMobile, alt: 'Gerador de orçamentos no celular', variant: 'mobile' },
    ],
    liveUrl: 'https://or-amentofredy.vercel.app/',
    repositoryUrl: 'https://github.com/teixeirzkj/or-amentofredy',
    featured: true,
    caseStudy: {
      overview:
        'Ferramenta interna que transforma o print de uma cotação de viagem em uma proposta online pronta para enviar ao cliente.',
      problem:
        'Montar orçamentos de viagem a partir de cotações de operadoras exige copiar manualmente voos, hotéis, valores e condições de pagamento, um processo lento e sujeito a erros.',
      solution: [
        'Leitura do print ou PDF da cotação com a API da Anthropic, com saída estruturada validada por Zod.',
        'Assistente em quatro passos: print, revisão dos dados, valores e formas de pagamento, e revisão final com prévia.',
        'Página pública da proposta com opções para comparar, voos, hotel com galeria, mapa e botão que abre o WhatsApp do atendente e registra a escolha.',
        'Busca automática de fotos do hotel e do destino, com opção de trocar ou enviar as próprias.',
        'Servidor Express com sessão por cookie, rate limit e headers de segurança; armazenamento local ou no Vercel Blob.',
      ],
      ux: [
        'Colar o print com Ctrl+V em qualquer ponto da tela ou arrastar o arquivo.',
        'Prévia ao vivo do valor e das parcelas enquanto o atendente configura o pagamento.',
        'Mensagem pronta para o WhatsApp e link fixo da proposta ao final do fluxo.',
      ],
    },
  },
  /* 05 ------------------------------------------------------------------ */
  {
    id: 'gestao-rz',
    title: 'Gestão Financeira RZ',
    category: 'CRM e finanças',
    filters: ['sistemas'],
    description:
      'CRM pessoal com quadro kanban, controle de vendas, gestão financeira com lançamentos recorrentes e dashboard com gráficos.',
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Recharts', 'Framer Motion'],
    image: { src: gestaoRzDashboard, alt: 'Dashboard da Gestão Financeira RZ com indicadores e gráficos' },
    gallery: [
      { src: gestaoRzDashboard, alt: 'Dashboard com indicadores, vendas dos últimos meses, ganhos x gastos e cards por coluna do CRM' },
      { src: gestaoRzLogin, alt: 'Tela de acesso da Gestão Financeira RZ' },
    ],
    liveUrl: 'https://gestaofinanceirarz.vercel.app/',
    repositoryUrl: 'https://github.com/teixeirzkj/gestaorz',
    featured: true,
    note: 'Sistema com acesso restrito',
    caseStudy: {
      overview: 'Aplicação para organizar clientes, vendas e finanças em um só lugar, com login e banco de dados.',
      problem:
        'Controlar oportunidades, vendas e o financeiro em planilhas separadas dificulta enxergar a situação real do negócio.',
      solution: [
        'Quadro kanban para acompanhar oportunidades por etapa.',
        'Controle de vendas e gestão financeira com lançamentos recorrentes, pagamentos e saldo inicial.',
        'Dashboard com gráficos (Recharts).',
        'Supabase com Row Level Security: cada usuário só acessa os próprios dados; cadastro público desativado.',
        'Modo local sem login, com dados salvos só no navegador, quando o Supabase não está configurado.',
      ],
      ux: [
        'Navegação entre CRM, vendas, financeiro e dashboard por âncoras na mesma página.',
        'Animações com Framer Motion para dar retorno visual às ações.',
      ],
    },
  },
  /* 06 ------------------------------------------------------------------ */
  {
    id: 'escritorio-virtual',
    title: 'Frédy Escritório Virtual',
    category: 'Aplicação em tempo real',
    filters: ['sistemas'],
    description:
      'Escritório 2D em pixel art onde a equipe se movimenta e conversa por voz e vídeo por proximidade, com salas de reunião, chat, agenda e quadro branco.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Phaser 3', 'Supabase', 'Ably', 'LiveKit'],
    image: { src: escritorioHome, alt: 'Página inicial do escritório virtual com prévia do mapa' },
    gallery: [
      { src: escritorioHome, alt: 'Página inicial do escritório virtual' },
      { src: escritorioMapa, alt: 'Mapa do escritório em pixel art' },
      { src: escritorioRecursos, alt: 'Recursos e passos para começar no escritório virtual' },
      { src: escritorioMobile, alt: 'Escritório virtual no celular', variant: 'mobile' },
    ],
    liveUrl: 'https://fredyescritorio.vercel.app/',
    repositoryUrl: 'https://github.com/teixeirzkj/escritoriocall',
    featured: true,
    caseStudy: {
      overview:
        'Escritório virtual para equipes remotas: um mapa top-down com área de trabalho, salas de reunião, copa e área de lazer, onde a conversa começa ao se aproximar de alguém.',
      problem:
        'Em equipes remotas, conversas rápidas dependem de agendar chamadas, e a sensação de “corredor do escritório” se perde.',
      solution: [
        'Mapa em Phaser 3 com movimento, colisão, zoom e controles para teclado e celular (joystick e gestos).',
        'Áudio e vídeo por proximidade com LiveKit (WebRTC), com paredes que isolam o som das salas.',
        'Reuniões em tela cheia com compartilhamento de tela, quadro branco colaborativo e salas trancáveis.',
        'Presença, movimento, chat e avisos em tempo real com Ably; autenticação e banco com Supabase (RLS).',
        'Agenda de salas com bloqueio de horários sobrepostos e painel administrativo de uso e custos.',
      ],
      ux: [
        'Entrar em uma reunião é só clicar numa cadeira da sala.',
        'Status de disponibilidade e um botão para silenciar tudo.',
        'Versão para celular com joystick, pinça para zoom e instalação como PWA.',
      ],
    },
  },
  /* 07 ------------------------------------------------------------------ */
  {
    id: 'plascotel',
    title: 'PLASCOTEL Gestão',
    category: 'Sistema de gestão · Mobile first',
    filters: ['sistemas'],
    description:
      'Sistema de gestão comercial e cobranças para venda parcelada porta a porta, com clientes, vendas, parcelas, agenda de visitas, caixa, relatórios e auditoria.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Zod', 'Recharts', 'PWA'],
    image: { src: plascotelDashboard, alt: 'Dashboard do PLASCOTEL Gestão com cobranças e resumo financeiro' },
    gallery: [
      { src: plascotelDashboard, alt: 'Dashboard com valores a receber, atenção do dia, recebimentos mensais e ações rápidas (nome de usuário desfocado)' },
      { src: plascotelLogin, alt: 'Tela de acesso do PLASCOTEL Gestão' },
      { src: plascotelMobile, alt: 'Tela de acesso no celular', variant: 'mobile' },
    ],
    liveUrl: 'https://gestaoplascotel.vercel.app/',
    repositoryUrl: 'https://github.com/teixeirzkj/gestaoplascotel',
    featured: false,
    note: 'Sistema com acesso restrito à equipe',
    caseStudy: {
      overview:
        'Sistema de gestão comercial usado principalmente no celular, na rua, com interface em português e tema escuro.',
      problem:
        'Na venda parcelada porta a porta, controlar parcelas, cobranças, visitas às cidades e o caixa do dia no papel gera atrasos e perda de informação.',
      solution: [
        'Painel com valores a receber, em atraso e recebidos, gráfico dos últimos meses e cobranças do dia.',
        'Clientes com situação financeira calculada, linha do tempo e atalhos para ligar ou chamar no WhatsApp.',
        'Vendas com parcelas editáveis, cobranças com recebimento total ou parcial, adiamentos e promessas de pagamento.',
        'Agenda de visitas por cidade, caixa diário, relatórios com exportação CSV e histórico de auditoria imutável.',
        'Permissões de proprietário e funcionário garantidas no banco (RLS e RPCs do Supabase).',
      ],
      ux: [
        'Interface mobile first, pensada para uso em campo.',
        'Instalável na tela inicial do celular (PWA).',
      ],
    },
  },
  /* 08 ------------------------------------------------------------------ */
  {
    id: 'fredy-gestao',
    title: 'Frédy Gestão',
    category: 'Sistema de gestão · SaaS',
    filters: ['sistemas', 'automacoes'],
    description:
      'Módulo de gestão comercial e financeira para agências de turismo: a venda é lançada uma vez e o sistema gera parcelas, contas a pagar, comissões, contrato e eventos para integrações.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Zod', 'Vitest'],
    image: { src: fredyGestaoDashboard, alt: 'Dashboard do Frédy Gestão com resultado do período, caixa e vendas' },
    gallery: [
      { src: fredyGestaoDashboard, alt: 'Dashboard com resultado do período, caixa, vendas e receita (dados da agência desfocados)' },
      { src: fredyGestaoLogin, alt: 'Tela de acesso do Frédy Gestão' },
    ],
    liveUrl: 'https://painelgestaofredy.vercel.app/',
    repositoryUrl: 'https://github.com/teixeirzkj/painelgestaofredy',
    featured: false,
    note: 'Sistema com acesso restrito',
    caseStudy: {
      overview:
        'Sistema multiempresa (multi-tenant) para agências de turismo, com dashboards, vendas, viagens, excursões, clientes, fornecedores, financeiro, contratos, relatórios e automações.',
      problem:
        'Em uma agência, cada venda gera várias tarefas manuais e repetidas: parcelas a receber, pagamentos a fornecedores, comissão do vendedor, reservas e contrato.',
      solution: [
        'Lançamento único da venda, que prepara automaticamente o financeiro, as comissões, a prévia de contrato e os eventos para integrações.',
        'Arquitetura multiempresa com dados isolados por agência e acesso por perfil (administrador, gestor, vendedor e financeiro).',
        'Valores monetários em centavos inteiros e datas de calendário em texto para evitar erros de arredondamento e de fuso.',
        'Testes automatizados das regras financeiras, da integração venda → financeiro, das permissões e do isolamento entre empresas.',
        'Integrações com o ecossistema Frédy, assinatura eletrônica de documentos e importação de dados de outro sistema de gestão.',
      ],
      ux: [
        'Painéis separados para a visão geral e para o vendedor, com o que cada perfil precisa ver.',
        'Personalização da marca de cada agência (logo e dados da empresa).',
        'Menus por módulo para organizar um sistema extenso sem sobrecarregar a navegação.',
      ],
    },
  },
  /* 09 ------------------------------------------------------------------ */
  {
    id: 'robertao-premiacoes',
    title: 'Robertão Premiações',
    category: 'Plataforma com pagamentos',
    filters: ['web', 'automacoes'],
    description:
      'Site de rifa com painel administrativo: o pedido reserva as cotas, o pagamento é feito por checkout com Pix e os números só são sorteados após a confirmação.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Webhooks', 'InfinitePay'],
    image: { src: robertaoHome, alt: 'Página da rifa com prêmio principal e seleção de cotas' },
    gallery: [
      { src: robertaoHome, alt: 'Página principal da rifa' },
      { src: robertaoCompra, alt: 'Seleção de quantidade e títulos premiados' },
      { src: robertaoMobile, alt: 'Robertão Premiações no celular', variant: 'mobile' },
    ],
    liveUrl: 'https://robertaopremiacoes.com.br/',
    repositoryUrl: 'https://github.com/teixeirzkj/robertao',
    featured: false,
    caseStudy: {
      overview:
        'Plataforma de rifa única com fluxo de compra, pagamento, sorteio de números e painel completo de administração.',
      problem:
        'Era preciso vender cotas com segurança: evitar números atribuídos antes do pagamento, confirmar pagamentos automaticamente e dar ao organizador controle sobre pedidos e prêmios.',
      solution: [
        'Pedido criado como pendente, reservando a quantidade por um período configurável; as cotas só são sorteadas após o pagamento.',
        'Checkout da InfinitePay com confirmação por webhook e por redirect.',
        'Webhook idempotente e compatível com integrações externas como o n8n: reenvios devolvem as mesmas cotas.',
        'Validação dos dados do comprador no cliente e no servidor.',
        'Painel administrativo com visão geral, edição da rifa, cotas premiadas, pedidos, consultas por período e registro do ganhador.',
      ],
      ux: [
        'Página de pedido que acompanha a confirmação sozinha, com contagem regressiva da reserva.',
        'Animação do sorteio das cotas após o pagamento.',
        'Consulta de números por CPF, telefone ou código do pedido; menu lateral no celular.',
      ],
    },
  },
  /* Outros ------------------------------------------------------------- */
  {
    id: 'studio-natalli',
    title: 'Studio Natalli Anjos',
    category: 'Site institucional',
    filters: ['web'],
    description:
      'Site de um estúdio de estética com serviços por categoria, preços e duração, galeria filtrável, agendamento pelo WhatsApp e FAQ.',
    technologies: ['React', 'Vite'],
    image: { src: natalliHome, alt: 'Página inicial do Studio Natalli Anjos' },
    gallery: [
      { src: natalliHome, alt: 'Página inicial do Studio Natalli Anjos' },
      { src: natalliServicos, alt: 'Serviços com preço, duração e botão de agendar' },
      { src: natalliGaleria, alt: 'Galeria com filtros por procedimento' },
      { src: natalliAgendamento, alt: 'Passo a passo do agendamento' },
      { src: natalliMobile, alt: 'Studio Natalli Anjos no celular', variant: 'mobile' },
    ],
    liveUrl: 'https://studionat.vercel.app/',
    featured: false,
    caseStudy: {
      overview:
        'Site institucional para um estúdio de design de sobrancelhas, epilação e micropigmentação, com foco em apresentar os serviços e levar ao agendamento.',
      problem:
        'O estúdio precisava de uma presença online que mostrasse serviços, preços e resultados e facilitasse o contato para agendar.',
      solution: [
        'Serviços organizados por categoria, com preço, duração e botão de agendamento em cada item.',
        'Agendamento por mensagem pré-preenchida no WhatsApp com o nome do procedimento.',
        'Galeria com filtros por tipo de procedimento.',
        'Seção explicando o agendamento em três passos, FAQ, endereço com mapa e horários.',
        'SEO com meta description, Open Graph e página de política de privacidade.',
      ],
      ux: [
        'Botão de agendar sempre visível no header e atalho flutuante para o WhatsApp.',
        'Menu adaptado para celular e botões de largura total em telas pequenas.',
        'Link para pular para o conteúdo, ajudando a navegação por teclado.',
      ],
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)
