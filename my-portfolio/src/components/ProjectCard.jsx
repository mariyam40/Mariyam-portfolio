import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Button from './Button'

const hues = [[220, 270], [190, 240], [270, 320], [150, 220]]
export default function ProjectCard({ project: p, index = 0 }) {
  const [a, b] = hues[index % hues.length]
  return (
    <motion.article variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -6 }}
      className="group rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-px transition hover:from-electric hover:to-violet">
      <div className="h-full overflow-hidden rounded-2xl bg-panel">
        <div className="aspect-video overflow-hidden">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
            {p.image ? <img src={p.image} alt={`${p.title} screenshot`} className="h-full w-full object-cover" />
              : <div role="img" aria-label={`${p.title} placeholder cover`} className="flex h-full items-center justify-center px-4 text-center font-display text-2xl font-bold text-white/80"
                  style={{ background: `linear-gradient(135deg, hsl(${a} 80% 45%), hsl(${b} 80% 30%))` }}>{p.title}</div>}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-zinc-400">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <li key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300">{t}</li>)}</ul>
          <div className="mt-5 flex gap-3">
            <Button href={p.github} variant="ghost" className="!px-4 !py-2" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</Button>
            <Button href={p.demo} className="!px-4 !py-2" target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live Demo</Button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
