import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const styles = {
  primary: 'bg-gradient-to-r from-electric to-violet text-white shadow-lg shadow-electric/25',
  ghost: 'border border-white/15 text-white hover:bg-white/10',
}
// to = internal route, href = external/file/anchor, otherwise a <button>
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles[variant]} ${className}`
  const motionProps = { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 } }
  if (to) { const M = motion(Link); return <M to={to} className={cls} {...motionProps} {...rest}>{children}</M> }
  if (href) return <motion.a href={href} className={cls} {...motionProps} {...rest}>{children}</motion.a>
  return <motion.button className={cls} {...motionProps} {...rest}>{children}</motion.button>
}
