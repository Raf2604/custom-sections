import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

const projects = [
  { id: 'kaleidoskop', label: 'Kaleidoskop', to: '/kaleidoskop', disabled: false },
  { id: 'booktour', label: 'Booktour', disabled: true },
  { id: 'edelweiss', label: 'Edelweiss', disabled: true },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="page-home">
      <motion.section
        className="home-panel"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="home-kicker">Projects</p>
        <h1 className="home-title">Choose a project</h1>
        <div className="project-buttons">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="project-btn"
              disabled={project.disabled}
              onClick={() => {
                if (!project.disabled && project.to) navigate(project.to)
              }}
            >
              {project.label}
            </button>
          ))}
        </div>
      </motion.section>
    </main>
  )
}
