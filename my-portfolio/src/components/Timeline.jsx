import { motion } from 'framer-motion'

export default function Timeline({ items }) {
  return (
    <ol className="relative ml-3 border-l border-white/10">
      {items.map((e, i) => (
        <motion.li key={e.title + e.date} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.05 * (i % 3) }} className="relative mb-8 pl-8 last:mb-0">
          <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-electric to-violet ring-4 ring-ink" />
          <div className="glass p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg text-white">{e.title}</h3><time className="text-sm text-zinc-500">{e.date}</time>
            </div>
            <p className="grad-text text-sm font-medium">{e.subtitle}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-400">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
            {e.tech && <ul className="mt-3 flex flex-wrap gap-2">{e.tech.map(t => <li key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs">{t}</li>)}</ul>}
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
