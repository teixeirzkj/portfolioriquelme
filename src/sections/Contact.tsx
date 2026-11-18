import { CircleCheck, Info, LoaderCircle, MapPin, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { SocialIcon, socialLinks } from '@/components/SocialLinks'
import { profile } from '@/data/profile'
import { cn } from '@/utils/cn'
import { sendContactMessage } from '@/utils/contactForm'

type Status = 'idle' | 'sending' | 'success' | 'error'


const fieldClass =
  'peer w-full rounded-xl border border-line bg-bg/70 px-4 pt-6 pb-2.5 text-[0.95rem] text-fg placeholder-transparent transition-all duration-300 outline-none hover:border-line-2 focus:border-brand focus:bg-bg focus:shadow-[0_0_0_4px_rgb(0_102_255/0.15)] aria-[invalid=true]:border-red-500/70'

const labelClass =
  'pointer-events-none absolute top-2 left-4 text-xs font-medium text-muted transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.95rem] peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-2'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    // Honeypot: robôs preenchem o campo escondido; pessoas não.
    if (data._honey) return

    setStatus('sending')
    try {
      const destination = profile.contactFormId ?? profile.contact.email
      if (!destination) throw new Error('Destino do formulário não configurado em profile.ts')
      await sendContactMessage(destination, {
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
      })
      setStatus('success')
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute -right-40 -bottom-40 size-[44rem] bg-[radial-gradient(closest-side,rgb(0_102_255/0.12),transparent)]" />
      <Container className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contato-title"
            eyebrow="Contato"
            title="Vamos"
            highlight="Conversar?"
            description="Tem uma oportunidade, projeto ou ideia? Vamos conversar."
          />

          {(socialLinks.length > 0 || profile.location) && (
            <Reveal delay={0.1}>
              <ul className="mt-10 grid gap-3">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target={link.id === 'email' ? undefined : '_blank'}
                      rel={link.id === 'email' ? undefined : 'noopener noreferrer'}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-card/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-glow-sm"
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-2 transition-colors group-hover:bg-brand group-hover:text-white">
                        <SocialIcon id={link.id} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium tracking-[0.18em] text-subtle uppercase">{link.label}</span>
                        <span className="block truncate text-sm font-medium text-fg">{link.display}</span>
                      </span>
                    </a>
                  </li>
                ))}
                {profile.location && (
                  <li className="flex items-center gap-4 rounded-2xl border border-line bg-card/60 p-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand-2">
                      <MapPin className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium tracking-[0.18em] text-subtle uppercase">Localização</span>
                      <span className="block text-sm font-medium text-fg">{profile.location}</span>
                    </span>
                  </li>
                )}
              </ul>
            </Reveal>
          )}

          {import.meta.env.DEV && !profile.contact.email && !profile.contact.linkedin && (
            <p className="mt-8 rounded-xl border border-dashed border-line-2 p-4 text-xs text-subtle">
              Aviso visível só em desenvolvimento: preencha e-mail, LinkedIn e WhatsApp em src/data/profile.ts.
            </p>
          )}
        </div>

        <Reveal delay={0.15}>
          <div className="relative rounded-3xl border border-line bg-card/70 p-6 shadow-[0_30px_80px_-40px_rgb(0_102_255/0.5)] backdrop-blur sm:p-8">
            <div aria-hidden="true" className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

            <form
              name="contato"
              onSubmit={handleSubmit}
              noValidate
              aria-describedby="form-status"
              className="grid gap-4"
            >
              <p className="hidden" aria-hidden="true">
                <label>
                  Não preencha este campo: <input name="_honey" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Nome" className={fieldClass} />
                  <label htmlFor="name" className={labelClass}>
                    Nome
                  </label>
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" required maxLength={150} autoComplete="email" placeholder="E-mail" className={fieldClass} />
                  <label htmlFor="email" className={labelClass}>
                    E-mail
                  </label>
                </div>
              </div>
              <div className="relative">
                <textarea id="message" name="message" required minLength={10} maxLength={3000} rows={6} placeholder="Mensagem" className={cn(fieldClass, 'resize-y')} />
                <label htmlFor="message" className={labelClass}>
                  Mensagem
                </label>
              </div>

              <Button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 w-full sm:w-auto sm:justify-self-start"
                icon={
                  status === 'sending' ? (
                    <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="size-4" aria-hidden="true" />
                  )
                }
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
              </Button>

              <div id="form-status" role="status" aria-live="polite" className="min-h-6 text-sm">
                {status === 'success' && (
                  <p className="flex items-start gap-2 text-emerald-300">
                    <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    Mensagem enviada com sucesso. Obrigado pelo contato, responderei em breve.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-start gap-2 text-red-300">
                    <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                      Não foi possível enviar a mensagem agora. Tente novamente em instantes
                      {profile.contact.email ? (
                        <>
                          {' '}ou escreva para{' '}
                          <a href={`mailto:${profile.contact.email}`} className="underline underline-offset-2">
                            {profile.contact.email}
                          </a>
                        </>
                      ) : null}
                      .
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
