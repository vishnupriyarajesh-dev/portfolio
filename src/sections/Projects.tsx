import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'

const projects = [
  { title: "ISS Tracker", description: "A real-time International Space Station tracker showing its live location on an interactive globe.", tech: ["React", "JavaScript", "CSS"], github: "https://github.com/yourusername/iss-tracker", live: "https://your-netlify-link.netlify.app" },
  { title: "Project Two", description: "A brief description of what this project does and the problem it solves.", tech: ["JavaScript", "HTML", "CSS"], github: "https://github.com/yourusername/project-two", live: "" },
  { title: "Project Three", description: "A brief description of what this project does and the problem it solves.", tech: ["Python", "Node.js"], github: "https://github.com/yourusername/project-three", live: "" },
]

const TiltCard = ({ project }: { project: typeof projects[0] }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -15
    setTilt({ x, y })
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transition: 'transform 0.1s ease' }}
      className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-cyan-400 transition-shadow"
    >
      <div>
        <h3 className="text-gray-900 text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="bg-cyan-50 text-cyan-700 text-xs px-3 py-1 rounded-full border border-cyan-200">{t}</span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-cyan-600 transition-colors font-medium">GitHub →</a>
        {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-cyan-600 transition-colors font-medium">Live →</a>}
      </div>
    </div>
  )
}

const Projects = () => {
  const ref = useScrollAnimation()
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div ref={ref} className="fade-up max-w-6xl mx-auto">
        <p className="text-cyan-600 uppercase tracking-widest text-sm mb-3 text-center">My Work</p>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => <TiltCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  )
}
export default Projects