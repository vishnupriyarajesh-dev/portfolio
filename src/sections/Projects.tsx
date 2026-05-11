import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'

const projects = [
  { title: "ISS Tracker", description: "A real-time International Space Station tracker showing its live location on an interactive globe.", tech: ["React", "JavaScript", "CSS"], github: "https://github.com/yourusername/iss-tracker", live: "https://your-netlify-link.netlify.app" },
  { title: "Project Two", description: "A brief description of what this project does and the problem it solves.", tech: ["JavaScript", "HTML", "CSS"], github: "https://github.com/yourusername/project-two", live: "" },
  { title: "Project Three", description: "A brief description of what this project does and the problem it solves.", tech: ["Python", "Node.js"], github: "https://github.com/yourusername/project-three", live: "" },
]

const TiltCard = ({ project }: { project: typeof projects[0] }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -12
    setTilt({ x, y })
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      onMouseEnter={() => setHovered(true)}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease, border-color 0.3s, box-shadow 0.3s',
        background: hovered
          ? 'linear-gradient(135deg, rgba(240,192,96,0.08) 0%, rgba(255,255,255,0.03) 100%)'
          : 'rgba(255,255,255,0.03)',
        border: hovered
          ? '1px solid rgba(240,192,96,0.5)'
          : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: hovered ? '0 0 40px rgba(240,192,96,0.08)' : 'none',
      }}
    >
      {/* Number */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '48px',
          fontWeight: 700,
          color: hovered ? 'rgba(240,192,96,0.25)' : 'rgba(255,255,255,0.05)',
          lineHeight: 1,
          marginBottom: '16px',
          transition: 'color 0.3s',
        }}
      >
        {String(projects.indexOf(project) + 1).padStart(2, '0')}
      </div>

      <div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '12px',
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '20px',
            fontWeight: 300,
          }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span
              key={t}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                letterSpacing: '0.08em',
                padding: '4px 12px',
                borderRadius: '999px',
                background: 'rgba(240,192,96,0.08)',
                border: '1px solid rgba(240,192,96,0.2)',
                color: '#f0c060',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '20px',
        }}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.4)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f0c060')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
        >
          GitHub →
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0c060')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            Live →
          </a>
        )}
      </div>
    </div>
  )
}

const Projects = () => {
  const ref = useScrollAnimation()

  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Gold glow center top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse at top, rgba(240,192,96,0.07) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="fade-up max-w-6xl mx-auto relative">

        {/* Section label */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div style={{ width: '40px', height: '1px', background: '#f0c060' }} />
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#f0c060',
            }}
          >
            My Work
          </p>
          <div style={{ width: '40px', height: '1px', background: '#f0c060' }} />
        </div>

        <h2
          className="text-center mb-16"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          Selected{' '}
          <span style={{ color: '#f0c060', fontStyle: 'italic' }}>Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(project => (
            <TiltCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects