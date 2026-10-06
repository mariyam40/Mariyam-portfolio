// ⚠️ PLACEHOLDER DATA — replace everything marked PLACEHOLDER / TODO with your own details.
export const person = {
  name: 'Mariyam',                                  // TODO
  headline: 'Frontend Developer & Creative Problem Solver',
  intro: 'I build modern, responsive, and user-friendly web experiences using React and modern web technologies.',
  tagline: 'Building clean, performant interfaces.',
  email: 'your.email@example.com',                    // TODO
  phone: '+91 XXXXX XXXXX',                           // TODO
  location: 'Mangalore, India',                       // TODO
  avatar: '',                                         // TODO: e.g. '/images/me.jpg' (file in public/images). Empty = initials
  resume: 'resume.pdf',                               // file lives in public/resume.pdf
}
export const socials = {
  github: 'https://github.com/YOUR_USERNAME',        // TODO
  linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
  twitter: 'https://x.com/YOUR_USERNAME',
  instagram: 'https://instagram.com/YOUR_USERNAME',
  email: `mailto:${person.email}`,
}
export const navItems = [{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/contact', label: 'Contact' }]
export const projects = [   // PLACEHOLDER. image: '' = generated gradient cover; or '/images/x.png'
  { title: 'E-Commerce Website', description: 'Full-featured store with cart, checkout and an admin dashboard.', tech: ['React', 'Node.js', 'MongoDB'], image: '', github: '#', demo: '#' },
  { title: 'Task Management App', description: 'Kanban boards with drag-and-drop, labels and due dates.', tech: ['React', 'Tailwind', 'Express'], image: '', github: '#', demo: '#' },
  { title: 'AI Dashboard', description: 'Analytics dashboard with interactive charts and AI-generated insights.', tech: ['React', 'TypeScript', 'REST API'], image: '', github: '#', demo: '#' },
  { title: 'Social Media Platform', description: 'Posts, likes, comments and real-time notifications.', tech: ['React', 'PostgreSQL', 'Docker'], image: '', github: '#', demo: '#' },
]
export const skills = [
  { category: 'Frontend', icon: 'Layout', items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend', icon: 'Server', items: ['Node.js', 'Express', 'REST APIs'] },
  { category: 'Database', icon: 'Database', items: ['MongoDB', 'PostgreSQL'] },
  { category: 'Tools', icon: 'Wrench', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker'] },
]
export const about = {
  subtitle: 'Developer. Problem Solver. Lifelong Learner.',
  bio: [
    'PLACEHOLDER: Hi! I am a frontend developer who loves turning ideas into polished, accessible interfaces.',
    'PLACEHOLDER: I got into programming through curiosity and never stopped learning. Today I focus on React and the modern web.',
  ],
  interests: 'PLACEHOLDER career interests: frontend engineering, design systems, performance, and developer experience.',
  philosophy: 'PLACEHOLDER philosophy: build simple, accessible, maintainable things — and keep improving them.',
}
export const journey = [   // PLACEHOLDER
  { title: 'Started my degree', subtitle: 'B.Tech / B.Sc. in Computer Science, University Name', date: '2022', points: ['Learned programming fundamentals and data structures.'] },
  { title: 'First line of code', subtitle: 'HTML, CSS & JavaScript', date: '2022', points: ['Built my first static website and fell in love with the web.'] },
  { title: 'Important projects', subtitle: 'React apps & full-stack builds', date: '2023', points: ['Shipped e-commerce and task-manager apps.'] },
  { title: 'Internship', subtitle: 'Startup Name', date: '2024', points: ['Worked with a team on production React code.'] },
  { title: 'Current goals', subtitle: 'Full-time frontend role', date: 'Now', points: ['Deepen TypeScript, testing and system design skills.'] },
]
export const experience = [   // PLACEHOLDER
  { title: 'Frontend Developer', subtitle: 'Company Name', date: '2024 — Present', points: ['Built reusable UI components used across products.', 'Improved Lighthouse performance from 62 to 95.'], tech: ['React', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Frontend Intern', subtitle: 'Startup Name', date: '2023 — 2024', points: ['Shipped responsive pages and dashboards.', 'Collaborated with designers in Figma.'], tech: ['JavaScript', 'React', 'Git'] },
]
export const stats = [
  { value: 10, suffix: '+', label: 'Projects' }, { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Technologies' }, { value: 100, suffix: '%', label: 'Passion' },
]
