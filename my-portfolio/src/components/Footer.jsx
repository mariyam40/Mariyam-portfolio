import { Link } from 'react-router-dom'
import { person, navItems } from '../data/portfolioData'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div><p className="font-display text-lg font-bold text-white">{person.name}<span className="grad-text">.</span></p><p className="text-sm text-zinc-500">{person.tagline}</p></div>
        <nav aria-label="Footer"><ul className="flex gap-5 text-sm">{navItems.map(n => <li key={n.to}><Link to={n.to} className="text-zinc-400 hover:text-white">{n.label}</Link></li>)}</ul></nav>
        <SocialLinks only={['GitHub', 'LinkedIn', 'Email']} />
      </div>
      <p className="pb-8 text-center text-xs text-zinc-600">© {new Date().getFullYear()} {person.name}. All rights reserved.</p>
    </footer>
  )
}
