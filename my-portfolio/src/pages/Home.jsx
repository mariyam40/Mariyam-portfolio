import { motion } from 'framer-motion'
import { ArrowRight, Download, Code2, Sparkles } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Button from '../components/Button'
import SocialLinks from '../components/SocialLinks'
import Avatar from '../components/Avatar'
import ProjectCard from '../components/ProjectCard'
import SkillGrid from '../components/SkillGrid'
import Reveal, { SectionHead } from '../components/Reveal'
import { person, projects } from '../data/portfolioData'

const up = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d } })

export default function Home() {
  return (
    <PageTransition>
      <section id="hero" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <motion.div animate={{ x: [0, 60, 0], y: [0, 40, 0] }} transition={{ duration: 16, repeat: Infinity }} className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-electric/25 blur-[120px]" />
          <motion.div animate={{ x: [0, -50, 0], y: [0, -40, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet/25 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.p {...up(0.1)} className="eyebrow">Hi, I'm {person.name}</motion.p>
            <motion.h1 {...up(0.2)} className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">Frontend Developer &amp; <span className="grad-text">Creative Problem Solver</span></motion.h1>
            <motion.p {...up(0.35)} className="mt-5 max-w-xl text-zinc-400">{person.intro}</motion.p>
            <motion.div {...up(0.5)} className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">View My Work <ArrowRight size={16} /></Button>
              <Button to="/contact" variant="ghost">Contact Me</Button>
              <Button href={`${import.meta.env.BASE_URL}${person.resume}`} variant="ghost" download><Download size={16} /> Download Resume</Button>
            </motion.div>
            <motion.div {...up(0.65)} className="mt-8"><SocialLinks /></motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative mx-auto">
            <Avatar />
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="glass absolute -left-4 top-6 flex items-center gap-2 px-3 py-2 text-xs text-white"><Code2 size={14} className="text-electric" /> React</motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="glass absolute -right-4 bottom-10 flex items-center gap-2 px-3 py-2 text-xs text-white"><Sparkles size={14} className="text-violet" /> Tailwind</motion.div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHead eyebrow="Featured Projects" title="Things I've built" />
        <motion.div className="grid gap-6 md:grid-cols-2" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </motion.div>
      </section>

      <section id="skills" className="section !pt-0">
        <SectionHead eyebrow="Skills" title="My toolkit" />
        <SkillGrid />
      </section>

      <section className="section !pt-0">
        <Reveal className="glass relative overflow-hidden p-10 text-center sm:p-16">
          <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-violet/30 blur-[90px]" />
          <h2 className="relative font-display text-3xl font-bold text-white sm:text-5xl">Have a project in mind?</h2>
          <p className="relative mt-3 text-lg text-zinc-300 sm:text-xl"><span className="grad-text">Let's build something amazing together.</span></p>
          <Button to="/contact" className="relative mt-8">Get In Touch <ArrowRight size={16} /></Button>
        </Reveal>
      </section>
    </PageTransition>
  )
}
