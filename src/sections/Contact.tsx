import { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (contentRef.current) observer.observe(contentRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: '#0c0c0c' }}
    >
      {/* Gold glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(240,192,96,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Large faded background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(100px, 18vw, 240px)',
          fontWeight: 700,
          color: 'rgba(240,192,96,0.03)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
        }}
      >
        Hello
      </div>

      <div ref={contentRef} className="relative max-w-2xl mx-auto text-center">

        {/* Section label */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ width: '40px', height: '1px', background: '#f0c060' }} />
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#f0c060',
            }}>
              Get In Touch
            </p>
            <div style={{ width: '40px', height: '1px', background: '#f0c060' }} />
          </div>
        </div>

        <h2
          className="mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
          }}
        >
          Let's{' '}
          <span style={{ color: '#f0c060', fontStyle: 'italic' }}>Connect</span>
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 300,
            maxWidth: '480px',
            margin: '0 auto 48px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s',
          }}
        >
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is always open!
        </p>

        {/* CTA Button */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s',
            marginBottom: '64px',
            display: 'inline-block',
          }}
        >
          <a
            href="mailto:vishnupriyarajesh7b@gmail.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              fontWeight: 500,
              background: '#f0c060',
              color: '#0c0c0c',
              padding: '16px 48px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              boxShadow: '0 0 32px rgba(240,192,96,0.2)',
              transition: 'background 0.25s, box-shadow 0.25s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#e0b050'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 48px rgba(240,192,96,0.35)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#f0c060'
              ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 32px rgba(240,192,96,0.2)'
            }}
          >
            Say Hello ✦
          </a>
        </div>

        {/* Divider */}
        <div
          className="flex items-center gap-4"
          style={{
            maxWidth: '320px',
            margin: '0 auto 40px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.2)',
            textTransform: 'uppercase',
          }}>
            or find me on
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* Social links */}
        <div
          className="flex justify-center gap-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s',
          }}
        >
          {[
            { label: 'GitHub', href: 'https://github.com/vishnupriyarajesh-dev' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/vishnupriya-rajesh' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.25s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0c060')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact