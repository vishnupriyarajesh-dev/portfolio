import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const resourceLinks = [
    { label: 'GitHub', href: 'https://github.com/vishnupriyarajesh-dev' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/vishnupriya-rajesh' },
    { label: 'Resume', href: 'Vishnupriya Rajesh - Resume.pdf' },
    { label: 'Email', href: 'mailto:vishnupriyarajesh7b@gmail.com' },
  ]

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
        className="w-full border-t border-white/10"
        style={{
        background: '#0a0a0a',
        borderColor: 'rgba(240,192,96,0.12)',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">

        {/* Fixed grid - 1 col mobile, 4 col desktop. No weird spanning */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">

          {/* 1. Branding */}
          <div className="md:col-span-2 lg:col-span-1">
            <a
              href="#"
              onClick={scrollToTop}
              className="inline-block"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '22px',
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#f0c060',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Vishnupriya Rajesh
            </a>
            <p className="text-white/60 text-sm mt-4 leading-relaxed max-w-xs">
              Building clean interfaces with clarity, intent and precision.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f0c060]/20 bg-[#f0c060]/5">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0c060] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f0c060]"></span>
              </span>
              <span className="text-white/70 text-xs whitespace-nowrap">Open to new opportunities</span>
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="text-[#f0c060] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between text-white/70 hover:text-white transition-colors text-sm max-w-[200px]"
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white/40 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-4"
                    >
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Resources */}
          <div>
            <h4 className="text-[#f0c060] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              profiles
            </h4>
            <ul className="space-y-3.5">
              {resourceLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http')? '_blank' : undefined}
                    rel={link.href.startsWith('http')? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between text-white/70 hover:text-white transition-colors text-sm max-w-[200px]"
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0 ml-4"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Let's Connect */}
          <div>
            <h4 className="text-[#f0c060] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Let's Connect
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mt-3">
              Let's create something amazing together!
            </p>

            <a
              href="mailto:vishnupriyarajesh7b@gmail.com"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#f0c060]/30 text-[#f0c060] text-sm font-medium hover:bg-[#f0c060]/10 hover:border-[#f0c060]/50 transition-all group"
            >
              Get in touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Fixed bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-xs text-white/40"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p>
            © {currentYear} Vishnupriya Rajesh. All rights reserved.
          </p>
          <p>
            Built with React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer