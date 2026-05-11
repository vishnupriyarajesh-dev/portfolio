import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const useCounter = (target: number, duration = 1500, start: boolean) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

const stats = [
  { label: 'Projects Built', value: 5, suffix: '+' },
  { label: 'Years Learning', value: 2, suffix: '+' },
  { label: 'Technologies', value: 8, suffix: '+' },
]

const About = () => {
  const ref = useScrollAnimation()
  const statsRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const count0 = useCounter(stats[0].value, 1500, started)
  const count1 = useCounter(stats[1].value, 1500, started)
  const count2 = useCounter(stats[2].value, 1500, started)
  const counts = [count0, count1, count2]

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: '#0e0e0e' }}
    >
      {/* Subtle gold glow top left */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(240,192,96,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Section label — editorial style */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-4">
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
            About Me
          </p>
        </div>
      </div>

      <div ref={ref} className="fade-up max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — Large editorial quote + photo placeholder */}
        <div className="flex flex-col gap-10">

          {/* Big decorative quote */}
          <div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              "Crafting the web,{' '}
              <span style={{ color: '#f0c060' }}>one pixel</span>{' '}
              at a time."
            </p>
          </div>

          {/* Photo box */}
          <div
            className="w-56 h-56 rounded-2xl flex items-center justify-center text-5xl"
            style={{
              background: 'rgba(240,192,96,0.06)',
              border: '1px solid rgba(240,192,96,0.2)',
            }}
          >
            👤
          </div>
        </div>

        {/* RIGHT — Bio + Stats */}
        <div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}
          >
            Who I Am
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '16px',
              fontWeight: 300,
            }}
          >
            Hi! I'm Vishnupriya, a frontend developer based in Ponnani, Kerala.
            I specialize in building responsive, user-friendly web applications with React.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '40px',
              fontWeight: 300,
            }}
          >
            I'm currently pursuing my degree and focusing on modern web technologies.
            When I'm not coding, I enjoy exploring new frameworks and contributing to open source.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="flex gap-10">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                {/* Thin gold line above number */}
                <div style={{ width: '24px', height: '2px', background: '#f0c060', marginBottom: '10px' }} />
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '42px',
                    fontWeight: 700,
                    color: '#f0c060',
                    lineHeight: 1,
                  }}
                >
                  {counts[i]}{stat.suffix}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: '6px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About