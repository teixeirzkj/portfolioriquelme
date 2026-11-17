# Portfólio — Riquelme Teixeira

Portfólio pessoal em uma única página: apresentação, trajetória, tecnologias, projetos com estudos de caso e formulário de contato.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS 4 · Motion · Lucide · FormSubmit · Vercel

## Rodando localmente

Requisitos: Node.js 20 ou mais novo.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Comando             | O que faz                                           |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento                         |
| `npm run build`     | Checagem de tipos + build de produção em `dist/`    |
| `npm run preview`   | Serve o build de produção localmente                |
| `npm run typecheck` | Só a checagem de tipos                              |

## Estrutura

```
public/                 favicon, imagem Open Graph, robots.txt, projects/ (capa do ClicouAí)
src/
  assets/
    profile/            sua foto profissional (ver LEIA-ME.md)
    projects/<id>/      screenshots reais de cada projeto (.webp)
  components/           Header, Footer, botões, cards, modal de estudo de caso...
  sections/             Hero, About, Experience, Skills, Projects, Interests, Contact
  data/                 TODO o conteúdo do site (textos, projetos, contatos)
  hooks/                seção ativa, media query, rolagem
  styles/globals.css    tokens de cor, fontes e estilos globais
  utils/                envio do formulário, links, helpers
```

O conteúdo fica separado dos componentes: para mudar textos, você só edita `src/data/`.

## Personalizando

### Foto, currículo e contatos — `src/data/profile.ts`

- **Foto:** salve em `src/assets/profile/` e siga o `LEIA-ME.md` da pasta. Sem foto, o site mostra uma composição abstrata com o monograma RT.
- **Currículo:** coloque o PDF em `public/` e preencha `resumeUrl`. O botão "Currículo" só aparece no header quando esse campo existe.
- **Contatos:** `email`, `linkedin`, `whatsapp` (só dígitos, com DDI e DDD). Campos vazios não aparecem no site.

### Adicionando um projeto — `src/data/projects.ts`

1. Salve as screenshots em `src/assets/projects/<id-do-projeto>/` (WebP, 1440 px de largura de preferência).
2. Importe as imagens no topo de `projects.ts`.
3. Adicione um objeto ao array `projects`. **A ordem do array é a ordem no site.**

```ts
{
  id: 'meu-projeto',
  title: 'Meu Projeto',
  category: 'Site institucional',
  filters: ['web'],                    // 'web' | 'sistemas' | 'automacoes'
  description: 'Uma ou duas frases sobre o projeto.',
  technologies: ['React', 'Vite'],
  image: { src: capa, alt: 'Descrição da imagem' },
  gallery: [{ src: capa, alt: '...' }, { src: celular, alt: '...', variant: 'mobile' }],
  liveUrl: 'https://...',              // opcional
  repositoryUrl: 'https://github.com/...', // opcional
  featured: true,                      // true = galeria expansível; false = "Mais projetos"
  caseStudy: { overview, problem, solution: [...], ux: [...], inProgress: [...] }, // opcional
}
```

Omita qualquer campo sem informação comprovada: nenhum botão é exibido sem um link real.

A galeria expansível do desktop funciona melhor com até 6 projetos `featured`.

## Formulário de contato (FormSubmit)

O formulário envia as mensagens direto para o e-mail definido em `profile.contact.email`, usando o [FormSubmit](https://formsubmit.co). Não precisa de backend, conta ou chave de API, e funciona na Vercel.

- `src/utils/contactForm.ts` envia por `fetch` e **só mostra sucesso quando o FormSubmit confirma o envio**. Se algo falhar, o visitante vê uma mensagem de erro com o seu e-mail como alternativa.
- Há um campo *honeypot* (`_honey`) contra spam.

**Ativação (uma vez só):** na primeira mensagem enviada pelo site, o FormSubmit manda um e-mail de confirmação para o endereço de destino. Abra esse e-mail e clique em **Activate Form**. Antes disso, nenhuma mensagem é entregue.

## Deploy na Vercel

O `vercel.json` já define o framework (Vite), o comando de build, a pasta publicada e os headers de cache e segurança.

- **Pelo Git:** com o repositório conectado ao projeto na Vercel, cada `git push` na branch `main` publica uma nova versão automaticamente.
- **Pela CLI:** `npx vercel --prod`.

Se mudar o domínio, atualize as URLs de `og:image` e `og:url` no `index.html`.

## Acessibilidade e desempenho

- HTML semântico, link "Pular para o conteúdo", foco visível, navegação por teclado (incluindo as setas na galeria de projetos) e estudo de caso em `<dialog>` nativo (Esc fecha, foco preso no modal).
- `prefers-reduced-motion` respeitado em todas as animações.
- Fontes auto-hospedadas (Fontsource), imagens WebP com `loading="lazy"` e dimensões declaradas, modal de estudo de caso carregado sob demanda.
