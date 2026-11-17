/**
 * Envio do formulário de contato pelo FormSubmit (https://formsubmit.co).
 * Funciona em qualquer hospedagem estática, sem backend nem chave de API.
 *
 * Na PRIMEIRA mensagem, o FormSubmit manda um e-mail de ativação para o endereço
 * de destino. Até você clicar em "Activate Form", nenhuma mensagem é entregue.
 * Só resolvemos com sucesso quando o serviço confirma o envio ({ success: "true" }).
 */
export interface ContactMessage {
  name: string
  email: string
  message: string
}

/** to: código do FormSubmit (recomendado) ou o e-mail de destino. */
export async function sendContactMessage(to: string, data: ContactMessage): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...data,
      _replyto: data.email,
      _subject: `Portfólio: nova mensagem de ${data.name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  const result: { success?: string | boolean; message?: string } = await response.json().catch(() => ({}))
  if (!response.ok || String(result.success) !== 'true') {
    throw new Error(result.message || `Falha no envio (HTTP ${response.status})`)
  }
}
