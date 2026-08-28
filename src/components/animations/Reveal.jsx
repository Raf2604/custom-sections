import { motion } from 'motion/react'

const directions = {
  up: { y: 64 },
  down: { y: -64 },
  left: { x: 48 },
  right: { x: -48 },
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
