// Mock submission. Swap the body for a real call later, e.g.:
//   Formspree: await fetch('https://formspree.io/f/YOUR_ID', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
//   EmailJS:   await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE, import.meta.env.VITE_EMAILJS_TEMPLATE, data, import.meta.env.VITE_EMAILJS_KEY)
// Keep keys in .env (git-ignored) as VITE_* variables.
export async function sendMessage(data) {
  await new Promise((r) => setTimeout(r, 1200))
  return { ok: true, data }
}
