import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SocialLinks from '../components/SocialLinks'
import Reveal from '../components/Reveal'
import { person } from '../data/portfolioData'
import { sendMessage } from '../utils/sendMessage'

const empty = { name: '', email: '', subject: '', message: '' }
const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Full name is required.'
  if (!v.email.trim()) e.email = 'Email is required.'
  else if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!v.subject.trim()) e.subject = 'Subject is required.'
  if (!v.message.trim()) e.message = 'Message is required.'
  else if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const change = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (errors[k]) setErrors({ ...errors, [k]: undefined }) }

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate(v); setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('loading')
    try { await sendMessage(v); setStatus('success'); setV(empty) } catch { setStatus('error') }
  }

  const field = (k, label, props = {}) => (
    <div>
      <label htmlFor={k} className="mb-1.5 block text-sm text-zinc-300">{label} <span aria-hidden className="text-red-400">*</span></label>
      {k === 'message'
        ? <textarea id={k} rows={5} value={v[k]} onChange={change(k)} aria-required="true" aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} className="input" />
        : <input id={k} value={v[k]} onChange={change(k)} aria-required="true" aria-invalid={!!errors[k]} aria-describedby={`${k}-err`} className="input" {...props} />}
      <p id={`${k}-err`} role="alert" className="mt-1 min-h-[1rem] text-xs text-red-400">{errors[k]}</p>
    </div>
  )
  const info = [[Mail, 'Email', person.email, `mailto:${person.email}`], [Phone, 'Phone', person.phone, `tel:${person.phone.replace(/\s/g, '')}`], [MapPin, 'Location', person.location]]

  return (
    <PageTransition>
      <section className="section">
        <Reveal className="mb-12"><p className="eyebrow">Contact</p>
          <h1 className="font-display text-4xl font-bold text-white sm:text-6xl">Let's Work <span className="grad-text">Together</span></h1>
          <p className="mt-4 max-w-xl text-zinc-400">Have an idea, project, or opportunity? I'd love to hear from you.</p></Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-4">
            {info.map(([Icon, label, text, href]) => (
              <div key={label} className="glass flex items-center gap-4 p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric/30 to-violet/30 text-white"><Icon size={18} /></span>
                <div><p className="text-xs text-zinc-500">{label}</p>{href ? <a href={href} className="text-white hover:underline">{text}</a> : <p className="text-white">{text}</p>}</div>
              </div>
            ))}
            <div className="pt-2"><p className="mb-3 text-sm text-zinc-500">Find me online</p><SocialLinks /></div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={submit} noValidate className="glass p-6 sm:p-8">
              <div className="grid gap-x-4 sm:grid-cols-2">{field('name', 'Full Name', { autoComplete: 'name' })}{field('email', 'Email', { type: 'email', autoComplete: 'email' })}</div>
              {field('subject', 'Subject')}{field('message', 'Message')}
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} disabled={status === 'loading'}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-medium text-white shadow-lg shadow-electric/25 disabled:opacity-60">
                {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <>Send Message <Send size={16} /></>}
              </motion.button>
              <AnimatePresence>
                {status === 'success' && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status" className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-300"><CheckCircle2 size={18} /> Message sent — I'll get back to you soon!</motion.p>}
                {status === 'error' && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="mt-4 flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-300"><AlertCircle size={18} /> Something went wrong. Please try again.</motion.p>}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
