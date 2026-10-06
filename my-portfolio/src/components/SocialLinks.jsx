import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { socials } from '../data/portfolioData'

const all = { GitHub: [Github, socials.github], LinkedIn: [Linkedin, socials.linkedin], 'Twitter / X': [Twitter, socials.twitter], Instagram: [Instagram, socials.instagram], Email: [Mail, socials.email] }
export default function SocialLinks({ only }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {Object.entries(all).filter(([k]) => !only || only.includes(k)).map(([label, [Icon, href]]) => (
        <li key={label}>
          <motion.a whileHover={{ y: -3 }} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="glass flex h-11 w-11 items-center justify-center !rounded-full text-zinc-300 hover:text-white"><Icon size={18} /></motion.a>
        </li>
      ))}
    </ul>
  )
}
