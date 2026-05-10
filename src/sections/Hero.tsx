import { useTypingEffect } from '../hooks/useTypingEffect'
import { useEffect, useRef } from 'react'

const roles = ['Frontend Developer', 'React Developer', 'UI Enthusiast', 'Problem Solver']

const Hero = () => {
  const typedText = useTypingEffect(roles)

  // Refs for each animated element
  const nameRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const typingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Playfair Display font
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Trigger fade-up animations with staggered delays on mount
    const elements = [
      { ref: nameRef, delay: 100 },
      { ref: bioRef, delay: 300 },
      { ref: buttonsRef, delay: 500 },
      { ref: typingRef, delay: 700 },
    ]

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('animate-in')
        }, delay)
      }
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
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(0,0,0,0.4)' }} />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-12 py-8">

        {/* LEFT CENTER — Hello I'm + Name */}
        <div className="flex-1 flex items-center">
          <div ref={nameRef} className="fade-up">
            <p
              className="uppercase tracking-[0.4em] mb-5 font-medium"
              style={{
                color: '#f0c060',
                fontSize: '22px',
                fontFamily: 'DM Sans, sans-serif',
                textShadow: '0 0 30px rgba(240,192,96,0.5)',
              }}
            >
              Hello, I'm
            </p>
            <h1
              className="font-bold leading-none text-white"
              style={{
                fontSize: 'clamp(48px, 6vw, 90px)',
                letterSpacing: '-0.02em',
                fontFamily: 'Playfair Display, serif',
                textShadow: '0 2px 40px rgba(0,0,0,0.5)',
              }}
            >
              Vishnu
              <span className="italic font-normal" style={{ color: '#f0c060' }}>
                priya
              </span>
            </h1>
          </div>
        </div>

        {/* RIGHT — Floating bio text + GitHub badge */}
        <div
          ref={bioRef}
          className="fade-up absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6 max-w-xs text-right"
        >
          {/* GitHub badge */}
          <a
            href="https://github.com/vishnupriyarajesh-dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest transition-colors"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(240,192,96,0.4)',
              color: '#f0c060',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(240,192,96,0.15)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            @vishnupriyarajesh-dev
          </a>

          {/* Floating bio text — no card */}
          <div>
            <p
              className="leading-snug mb-3"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '22px',
                fontStyle: 'italic',
                color: '#ffffff',
                textShadow: '0 2px 20px rgba(0,0,0,0.8)',
              }}
            >
              Building interfaces that speak{' '}
              <span style={{ color: '#f0c060' }}>louder than code.</span>
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: 'rgba(255,255,255,0.55)',
                textShadow: '0 1px 10px rgba(0,0,0,0.6)',
              }}
            >
              I build clean, responsive, and user-friendly web experiences with a focus on clarity and intent.
            </p>
          </div>
        </div>

        {/* BOTTOM — Buttons + Typing + Scroll */}
        <div className="flex items-end justify-between pb-2">

          {/* Buttons */}
          <div ref={buttonsRef} className="fade-up flex gap-3">
            <a
              href="#projects"
              className="px-6 py-2.5 text-sm font-medium rounded-lg transition-colors"
              style={{ background: '#f0c060', color: '#1a1a1a', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e0b050')}
              onMouseLeave={e => (e.currentTarget.style.background = '#f0c060')}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm font-medium rounded-lg transition-colors"
              style={{
                border: '1px solid rgba(240,192,96,0.6)',
                color: '#f0c060',
                background: 'transparent',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(240,192,96,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              Contact Me
            </a>
          </div>

          {/* Typing animation — bottom center */}
          <div
            ref={typingRef}
            className="fade-up absolute left-1/2 -translate-x-1/2 bottom-8 px-6 py-3 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(240,192,96,0.3)',
            }}
          >
            <span
              className="text-sm font-medium tracking-widest"
              style={{ color: '#f0c060', fontFamily: 'DM Sans, sans-serif' }}
            >
              {typedText}<span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Scroll hint */}
          <div
            className="flex items-center gap-2 text-xs tracking-widest uppercase"
            style={{ color: 'rgba(240,192,96,0.6)', fontFamily: 'DM Sans, sans-serif' }}
          >
            <span>Scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero