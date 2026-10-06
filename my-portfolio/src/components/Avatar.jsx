import { person } from '../data/portfolioData'
export default function Avatar({ className = 'h-64 w-64 sm:h-72 sm:w-72' }) {
  const initials = person.name.split(' ').map(w => w[0]).join('').slice(0, 2)
  return (
    <div className="rounded-full bg-gradient-to-br from-electric to-violet p-1 shadow-2xl shadow-violet/30">
      <div className={`flex items-center justify-center overflow-hidden rounded-full bg-panel ${className}`}>
        {person.avatar ? <img src={person.avatar} alt={person.name} className="h-full w-full object-cover" />
          : <span className="grad-text font-display text-6xl font-bold" role="img" aria-label="Profile image placeholder">{initials}</span>}
      </div>
    </div>
  )
}
