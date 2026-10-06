import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import { Download } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import SkillGrid from '../components/SkillGrid'
import Timeline from '../components/Timeline'
import Reveal, { SectionHead } from '../components/Reveal'
import { person, about, journey, experience, stats } from '../data/portfolioData'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix } })
    return () => c.stop()
  }, [inView, value, suffix])
  return <span ref={ref}>0{suffix}</span>
}

export default function About() {
  return (
    <PageTransition>
      <section className="section">
        <Reveal className="mb-12"><p className="eyebrow">{about.subtitle}</p><h1 className="font-display text-4xl font-bold text-white sm:text-6xl">About <span className="grad-text">Me</span></h1></Reveal>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="mx-auto"><Avatar /></Reveal>
          <Reveal delay={0.15} className="space-y-4 text-zinc-400">
            {about.bio.map(p => <p key={p}>{p}</p>)}
            <div className="glass p-5"><h3 className="mb-1 font-display text-white">Career interests</h3><p className="text-sm">{about.interests}</p></div>
            <div className="glass p-5"><h3 className="mb-1 font-display text-white">Development philosophy</h3><p className="text-sm">{about.philosophy}</p></div>
          </Reveal>
        </div>
      </section>

      <section className="section !pt-0"><SectionHead eyebrow="My Journey" title="How I got here" /><Timeline items={journey} /></section>
      <section className="section !pt-0"><SectionHead eyebrow="Skills" title="What I work with" /><SkillGrid /></section>
      <section className="section !pt-0"><SectionHead eyebrow="Experience" title="Where I've worked" /><Timeline items={experience} /></section>

      <section className="section !pt-0">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="glass p-6 text-center">
              <p className="grad-text font-display text-4xl font-bold"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section !pt-0">
        <Reveal className="glass p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Want to know more about my experience?</h2>
          <Button href={`${import.meta.env.BASE_URL}${person.resume}`} download className="mt-6"><Download size={16} /> Download Resume</Button>
        </Reveal>
      </section>
    </PageTransition>
  )
}
