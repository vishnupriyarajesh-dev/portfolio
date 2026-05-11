import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(240,192,96,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '20px',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#f0c060',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          Vishnupriya Rajesh
        </a>

        {/* Links */}
        <ul className="flex items-center gap-10" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: active === link.href ? '#f0c060' : 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f0c060')}
                onMouseLeave={e => {
                  if (active !== link.href) e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                }}
              >
                {link.label}
                {/* underline on active */}
                {active === link.href && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '1px',
                      background: '#f0c060',
                    }}
                  />
                )}
              </a>
            </li>
          ))}

          {/* CTA */}
          <li>
            <a
              href="mailto:vishnupriyarajesh7b@gmail.com"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0c0c0c',
                background: '#f0c060',
                padding: '8px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'background 0.25s, box-shadow 0.25s',
                boxShadow: '0 0 16px rgba(240,192,96,0.2)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#e0b050'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(240,192,96,0.35)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#f0c060'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 16px rgba(240,192,96,0.2)'
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar