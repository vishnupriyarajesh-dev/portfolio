import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

  const handleLink = (href: string) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled || menuOpen ? 'rgba(8,8,8,0.95)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(240,192,96,0.12)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '18px',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#f0c060',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            Vishnupriya Rajesh
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleLink(link.href)}
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
                  {active === link.href && (
                    <span style={{
                      position: 'absolute', bottom: 0, left: 0,
                      width: '100%', height: '1px', background: '#f0c060',
                    }} />
                  )}
                </a>
              </li>
            ))}
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
                  boxShadow: '0 0 16px rgba(240,192,96,0.2)',
                  transition: 'background 0.25s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#e0b050'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#f0c060'}
              >
                Hire Me
              </a>
            </li>
          </ul>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: '#f0c060',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: '#f0c060',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s',
            }} />
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: '#f0c060',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
            }} />
          </button>

        </div>

        {/* Mobile dropdown menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? '320px' : '0px' }}
        >
          <div style={{ borderTop: '1px solid rgba(240,192,96,0.1)', padding: '16px 24px 24px' }}>
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleLink(link.href)}
                style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: active === link.href ? '#f0c060' : 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'color 0.25s',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:vishnupriyarajesh7b@gmail.com"
              style={{
                display: 'inline-block',
                marginTop: '16px',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0c0c0c',
                background: '#f0c060',
                padding: '10px 24px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar