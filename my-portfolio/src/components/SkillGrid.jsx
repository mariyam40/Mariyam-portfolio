import { motion } from 'framer-motion'
import { Layout, Server, Database, Wrench, Check } from 'lucide-react'
import { skills } from '../data/portfolioData'

const icons = { Layout, Server, Database, Wrench }
export default function SkillGrid() {
  return (
    <motion.div className="grid gap-5 sm:grid-cols-2" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
      {skills.map(({ category, icon, items }) => {
        const Icon = icons[icon]
        return (
          <motion.article key={category} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -6 }} className="glass p-6 transition-colors hover:border-electric/40">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric/30 to-violet/30 text-white"><Icon size={20} /></span>
              <h3 className="font-display text-lg text-white">{category}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">{items.map(i => <li key={i} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm"><Check size={12} className="text-electric" />{i}</li>)}</ul>
          </motion.article>
        )
      })}
    </motion.div>
  )
}
