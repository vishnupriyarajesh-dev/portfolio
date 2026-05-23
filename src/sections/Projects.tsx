import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState, useEffect, useRef } from 'react'

const projects = [
  {
  title: "ISS Tracker",
  thumbnail: "/iss-tracker.png",
  description: "Real-time International Space Station tracker featuring live orbital positioning, interactive 2D/3D visualization, and dynamic day-night mapping.",
  tech: ["React", "React Globe", "Leaflet"],
  github: "https://github.com/vishnupriyarajesh-dev/isstracker",
  live: "https://v-isstracker.vercel.app"
},
  {
    title: "ScholarAI",
    thumbnail: "/aiss.png",
    description: "Interactive AI study platform featuring tutoring, flashcards, quizzes, note summarization, and study planning tools.",
    tech: ["React + Vite", "OpenRouter API", "Custom CSS"],
    github: "https://github.com/vishnupriyarajesh-dev/ScholarAI",
    live: "https://getscholarai.vercel.app"
  },

  {
    title: "AtmoSense",
    thumbnail: "/cli.png",
    description: "Modern climate intelligence dashboard with real-time weather analytics, forecasts, atmospheric metrics, and data visualization.",
    tech: ["React + Vite", "Tailwind CSS", "Open-Meteo API"],
    github: "https://github.com/vishnupriyarajesh-dev/AtmoSense",
    live: "https://atmosense-web.vercel.app"
  },
]

const TiltCard = ({ project, index, visible }: { project: typeof projects[0], index: number, visible: boolean }) => {
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
        transition: `transform 0.15s ease, border-color 0.3s, box-shadow 0.3s, opacity 0.7s ease ${index * 0.15}s, translate 0.7s ease ${index * 0.15}s`,
        opacity: visible ? 1 : 0,
        translate: visible ? '0 0' : '0 40px',
        background: hovered
          ? 'linear-gradient(135deg, rgba(240,192,96,0.08) 0%, rgba(255,255,255,0.03) 100%)'
          : 'rgba(255,255,255,0.03)',
        border: hovered
          ? '1px solid rgba(240,192,96,0.5)'
          : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: hovered ? '0 0 40px rgba(240,192,96,0.08)' : 'none',
      }}
    >
      {/* Thumbnail */}
      {project.thumbnail ? (
        <div style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative' }}>
          <img
            src={project.thumbnail}
            alt={project.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              transition: 'transform 0.4s ease',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px',
            background: 'linear-gradient(to bottom, transparent, rgba(10,10,10,0.9))',
          }}/>
        </div>
      ) : (
        <div style={{
          width: '100%', height: '120px',
          background: 'rgba(240,192,96,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '48px', fontWeight: 700,
            color: hovered ? 'rgba(240,192,96,0.2)' : 'rgba(255,255,255,0.04)',
            transition: 'color 0.3s',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {project.thumbnail && (
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px', letterSpacing: '0.2em',
              color: 'rgba(240,192,96,0.5)', display: 'block', marginBottom: '8px',
            }}>
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '20px', fontWeight: 700, color: '#ffffff',
            marginBottom: '10px', letterSpacing: '-0.01em',
          }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px', lineHeight: 1.7,
            color: 'rgba(255,255,255,0.5)', marginBottom: '16px', fontWeight: 300,
          }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px', letterSpacing: '0.08em',
                padding: '4px 12px', borderRadius: '999px',
                background: 'rgba(240,192,96,0.08)',
                border: '1px solid rgba(240,192,96,0.2)', color: '#f0c060',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex', gap: '24px',
          borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px',
        }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
              color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
              letterSpacing: '0.05em', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f0c060')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            GitHub →
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
                color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                letterSpacing: '0.05em', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0c060')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const ref = useScrollAnimation()
  const cardsRef = useRef<HTMLDivElement>(null)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCardsVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (cardsRef.current) observer.observe(cardsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse at top, rgba(240,192,96,0.07) 0%, transparent 70%)',
      }}/>

      <div ref={ref} className="fade-up max-w-6xl mx-auto relative">

        <div className="flex items-center justify-center gap-4 mb-4">
          <div style={{ width: '40px', height: '1px', background: '#f0c060' }}/>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f0c060',
          }}>
            My Work
          </p>
          <div style={{ width: '40px', height: '1px', background: '#f0c060' }}/>
        </div>

        <h2 className="text-center mb-16" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
          color: '#ffffff', letterSpacing: '-0.02em',
        }}>
          Selected{' '}
          <span style={{ color: '#f0c060', fontStyle: 'italic' }}>Projects</span>
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} visible={cardsVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects