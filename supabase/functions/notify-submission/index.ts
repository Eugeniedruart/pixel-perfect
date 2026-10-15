import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'

const RECIPIENT = 'eugenie.druart@womenequitylabel.fr'
const SENDER = { name: 'Site WEL', email: 'eugenie.druart@womenequitylabel.fr' }

const str = (max: number) => z.string().trim().max(max)

const ContactSchema = z.object({
  type: z.literal('contact'),
  firstName: str(200).min(1),
  lastName: str(200).min(1),
  email: z.string().trim().email().max(320),
  company: str(300).optional().default(''),
  message: str(5000).optional().default(''),
})

const EligibiliteSchema = z.object({
  type: z.literal('eligibilite'),
  companyName: str(200).min(1),
  employeeCount: str(50).optional().default(''),
  conventionCollective: str(300).optional().default(''),
  firstName: str(200).optional().default(''),
  lastName: str(200).optional().default(''),
  email: z.string().trim().email().max(320),
  fonction: str(200).optional().default(''),
  answers: z.record(str(1000)).optional().default({}),
})

const BodySchema = z.discriminatedUnion('type', [ContactSchema, EligibiliteSchema])

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
const clean = (s: string) => s.replace(/[\r\n]+/g, ' ')

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })

const row = (label: string, value: string) =>
  `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">${esc(label)}</td><td style="padding:6px 12px;white-space:pre-wrap">${esc(value || '—')}</td></tr>`

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const apiKey = Deno.env.get('BREVO_API_KEY')
  if (!apiKey) return json({ error: 'BREVO_API_KEY is not configured' }, 500)

  let raw: unknown
  try { raw = await req.json() } catch { return json({ error: 'Invalid JSON' }, 400) }
  const parsed = BodySchema.safeParse(raw)
  if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400)
  const d = parsed.data

  const date = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })
  let subject: string
  let rows: string

  if (d.type === 'contact') {
    subject = `Nouveau message via womenequitylabel.fr – ${d.firstName} ${d.lastName}${d.company ? ` (${d.company})` : ''}`
    rows = [
      row('Prénom', d.firstName), row('Nom', d.lastName), row('Entreprise', d.company),
      row('E-mail', d.email), row('Message', d.message), row('Date/heure', date),
    ].join('')
  } else {
    const name = `${d.firstName} ${d.lastName}`.trim()
    subject = `Nouveau test d'éligibilité via womenequitylabel.fr – ${name || d.email} (${d.companyName})`
    rows = [
      row('Prénom', d.firstName), row('Nom', d.lastName), row('Fonction', d.fonction),
      row('E-mail', d.email), row('Entreprise', d.companyName), row('Salariés', d.employeeCount),
      row('Convention collective', d.conventionCollective),
      ...Object.entries(d.answers).slice(0, 20).map(([k, v]) => row(k, v)),
      row('Date/heure', date),
    ].join('')
  }

  const htmlContent = `<div style="font-family:Arial,sans-serif;color:#27276D"><h2>${esc(clean(subject))}</h2><table style="border-collapse:collapse">${rows}</table></div>`

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      sender: SENDER,
      to: [{ email: RECIPIENT }],
      replyTo: { email: d.email },
      subject: clean(subject),
      htmlContent,
    }),
  })

  if (!res.ok) {
    const details = await res.text()
    console.error(`Brevo failed [${res.status}]: ${details}`)
    return json({ error: 'Email send failed', status: res.status, details }, 502)
  }
  return json({ ok: true })
})
