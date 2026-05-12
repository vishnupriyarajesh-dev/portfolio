import { useTypingEffect } from '../hooks/useTypingEffect'
import { useEffect, useRef } from 'react'

const roles = ['Frontend Developer', 'React Developer', 'UI Enthusiast', 'Problem Solver']

const Hero = () => {
  const typedText = useTypingEffect(roles)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Staggered fade-in on mount
    const elements = contentRef.current?.querySelectorAll('.hero-animate')
    elements?.forEach((el, i) => {
      const elem = el as HTMLElement
      elem.style.opacity = '0'
      elem.style.transform = 'translateY(28px)'
      setTimeout(() => {
        elem.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        elem.style.opacity = '1'
        elem.style.transform = 'translateY(0)'
      }, 200 + i * 150)
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── FULL BACKGROUND IMAGE ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('vish.jpg.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* ── DARK OVERLAY ── */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(0,0,0,0.52)' }} />

      {/* ── MOBILE LAYOUT ── */}
      <div ref={contentRef} className="relative z-10 flex flex-col justify-between min-h-screen px-6 py-8 md:hidden">

        <div style={{ height: '64px' }} />

        <div className="flex flex-col gap-6">
          {/* Hello I'm + Name */}
          <div className="hero-animate">
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#f0c060',
              marginBottom: '8px',
              fontWeight: 300,
            }}>
              Hello, I'm
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(48px, 12vw, 72px)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
            }}>
              Vishnu
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#f0c060' }}>
                priya
              </span>
            </h1>
          </div>

          {/* GitHub badge */}
          <div className="hero-animate">
            <a
              href="https://github.com/vishnupriyarajesh-dev"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(240,192,96,0.3)',
                color: '#f0c060',
                textDecoration: 'none',
                fontSize: '12px',
                letterSpacing: '0.08em',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              @vishnupriyarajesh-dev
            </a>
          </div>

          {/* Bio text */}
          <div className="hero-animate">
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '20px',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.4,
              textShadow: '0 2px 16px rgba(0,0,0,0.7)',
              marginBottom: '8px',
            }}>
              Building interfaces that speak{' '}
              <span style={{ color: '#f0c060', fontWeight: 700, fontStyle: 'normal' }}>
                louder than code.
              </span>
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              fontWeight: 300,
            }}>
             Creating digital experiences with depth and intention.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 pb-4 hero-animate">
          <div style={{
            alignSelf: 'center',
            padding: '10px 20px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(240,192,96,0.3)',
          }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#f0c060',
            }}>
              {typedText}<span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex gap-3">
            <a href="#projects" style={{
              flex: 1, textAlign: 'center', padding: '14px',
              borderRadius: '8px', background: '#f0c060', color: '#0c0c0c',
              fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
              fontWeight: 500, letterSpacing: '0.08em', textDecoration: 'none',
            }}>
              View My Work
            </a>
            <a href="#contact" style={{
              flex: 1, textAlign: 'center', padding: '14px',
              borderRadius: '8px', border: '1px solid rgba(240,192,96,0.5)',
              color: '#f0c060', fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', textDecoration: 'none',
            }}>
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="relative z-10 flex-1 flex-col justify-between px-12 py-8 hidden md:flex">

        <div className="flex-1 flex items-center">
          <div ref={contentRef}>
            <p className="hero-animate" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '22px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#f0c060',
              marginBottom: '12px',
              fontWeight: 300,
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}>
              Hello, I'm
            </p>
            <h1 className="hero-animate" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(48px, 6vw, 90px)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.01em',
              color: '#ffffff',
              textShadow: '0 4px 24px rgba(0,0,0,0.6)',
            }}>
              Vishnu
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#f0c060' }}>
                priya
              </span>
            </h1>
          </div>
        </div>

        {/* RIGHT */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6" style={{ maxWidth: '320px' }}>
          <a
            href="https://github.com/vishnupriyarajesh-dev"
            target="_blank"
            rel="noreferrer"
            className="hero-animate"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '8px 18px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(240,192,96,0.4)', color: '#f0c060',
              textDecoration: 'none', fontSize: '12px', letterSpacing: '0.1em',
              fontFamily: "'DM Sans', sans-serif", transition: 'background 0.25s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(240,192,96,0.15)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            @vishnupriyarajesh-dev
          </a>

          <div className="hero-animate text-right">
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '22px', fontStyle: 'italic', fontWeight: 400,
              color: '#ffffff', lineHeight: 1.4,
              textShadow: '0 2px 16px rgba(0,0,0,0.7)', marginBottom: '10px',
            }}>
              Building interfaces that speak{' '}
              <span style={{ color: '#f0c060', fontWeight: 700, fontStyle: 'normal' }}>
                louder than code.
              </span>
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
              color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontWeight: 300,
            }}>
              Creating digital experiences with depth and intention.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex items-end justify-between pb-2">
          <div className="flex gap-3 hero-animate">
            <a href="#projects" style={{
              padding: '12px 28px', borderRadius: '8px',
              background: '#f0c060', color: '#0c0c0c',
              fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
              fontWeight: 500, letterSpacing: '0.05em', textDecoration: 'none',
              transition: 'background 0.25s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#e0b050'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#f0c060'}
            >
              View My Work
            </a>
            <a href="#contact" style={{
              padding: '12px 28px', borderRadius: '8px',
              border: '1px solid rgba(240,192,96,0.6)', color: '#f0c060',
              fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
              fontWeight: 500, letterSpacing: '0.05em', textDecoration: 'none',
              transition: 'background 0.25s',
            }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(240,192,96,0.1)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
            >
              Contact Me
            </a>
          </div>

          {/* Typing animation */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 px-6 py-3 rounded-full hero-animate" style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(240,192,96,0.3)',
          }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
              fontWeight: 500, letterSpacing: '0.15em', color: '#f0c060',
            }}>
              {typedText}<span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex items-center gap-2 hero-animate" style={{
            color: 'rgba(240,192,96,0.6)',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>
            <span>Scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes goldPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}

export default Hero