import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const current = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)
        .findLast((section) => {
          const rect = section!.getBoundingClientRect()
          return rect.top <= 140
        })

      if (current?.id) setActive(`#${current.id}`)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={[
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
        scrolled || menuOpen
          ? 'border-[#f0c060]/15 bg-[#080808]/85 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif text-lg font-bold italic tracking-normal text-[#f0c060] transition hover:text-[#ffd577]"
          style={{ fontFamily: "'Playfair Display', serif" }}
          aria-label="Go to top"
        >
          Vishnupriya Rajesh
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => {
            const isActive = active === link.href

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'group relative py-2 font-sans text-xs uppercase tracking-[0.18em] transition-colors duration-300',
                    isActive ? 'text-[#f0c060]' : 'text-white/55 hover:text-[#f0c060]',
                  ].join(' ')}
                >
                  {link.label}
                  <span
                    className={[
                      'absolute bottom-0 left-0 h-px bg-[#f0c060] transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full',
                    ].join(' ')}
                  />
                </a>
              </li>
            )
          })}

          <li>
            <a
              href="mailto:vishnupriyarajesh7b@gmail.com"
              className="rounded-md bg-[#f0c060] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#080808] shadow-[0_0_30px_rgba(240,192,96,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffd577] hover:shadow-[0_0_40px_rgba(240,192,96,0.28)] focus:outline-none focus:ring-2 focus:ring-[#f0c060]/60 focus:ring-offset-2 focus:ring-offset-[#080808]"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f0c060]/20 text-[#f0c060] transition hover:border-[#f0c060]/50 hover:bg-[#f0c060]/10 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={[
          'md:hidden overflow-hidden border-t border-[#f0c060]/10 bg-[#080808]/95 backdrop-blur-xl transition-all duration-300',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="px-6 py-5">
          {links.map((link) => {
            const isActive = active === link.href

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={[
                  'flex items-center justify-between border-b border-white/5 py-4 text-xs uppercase tracking-[0.22em] transition',
                  isActive ? 'text-[#f0c060]' : 'text-white/60',
                ].join(' ')}
              >
                {link.label}
                <span className={isActive ? 'h-1.5 w-1.5 rounded-full bg-[#f0c060]' : 'h-1.5 w-1.5 rounded-full bg-white/15'} />
              </a>
            )
          })}

          <a
            href="mailto:vishnupriyarajesh7b@gmail.com"
            className="mt-5 inline-flex rounded-md bg-[#f0c060] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#080808]"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar