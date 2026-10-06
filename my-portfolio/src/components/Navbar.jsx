import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'
import { person, navItems } from '../data/portfolioData'

const resumeHref = `${import.meta.env.BASE_URL}${person.resume}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-colors ${scrolled || open ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-display text-lg font-bold text-white">{person.name}<span className="grad-text">.</span></Link>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end className={({ isActive }) => `relative block px-4 py-2 text-sm transition-colors ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
                {({ isActive }) => (<>{label}{isActive && <motion.span layoutId="nav-underline" className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-electric to-violet" />}</>)}
              </NavLink>
            </li>
          ))}
          <li><motion.a whileHover={{ scale: 1.05 }} href={resumeHref} download className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-5 py-2 text-sm font-medium text-white"><FileText size={14} /> Resume</motion.a></li>
        </ul>
        <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={open ? 'x' : 'm'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="block">
              {open ? <X /> : <Menu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 pb-4 md:hidden">
            {navItems.map(({ to, label }, i) => (
              <motion.li key={to} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                <NavLink to={to} end className={({ isActive }) => `my-1 block rounded-lg px-3 py-3 ${isActive ? 'border-l-2 border-electric bg-white/5 text-white' : 'text-zinc-300'}`}>{label}</NavLink>
              </motion.li>
            ))}
            <li className="mt-2"><a href={resumeHref} download className="block rounded-full bg-gradient-to-r from-electric to-violet py-3 text-center text-sm font-medium text-white">Resume</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
