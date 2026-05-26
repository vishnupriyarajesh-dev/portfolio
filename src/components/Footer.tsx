import type React from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

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
    { label: 'Resume', href: '/VishnupriyaRajesh-Resume.pdf' },
    { label: 'Email', href: 'mailto:vishnupriyarajesh7b@gmail.com' },
  ]

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="w-full border-t border-[#f0c060]/15 bg-[#0a0a0a]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:py-12">
        <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1">
            <a
              href="#"
              onClick={scrollToTop}
              className="inline-block text-[22px] font-bold italic tracking-normal text-[#f0c060] transition hover:text-[#ffd577] focus:outline-none focus:ring-2 focus:ring-[#f0c060]/50 focus:ring-offset-4 focus:ring-offset-[#0a0a0a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Vishnupriya Rajesh
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Building clean interfaces with clarity, intent and precision.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#f0c060]/20 bg-[#f0c060]/5 px-3.5 py-1.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f0c060] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f0c060]" />
              </span>
              <span className="whitespace-nowrap text-xs text-white/70">
                Open to new opportunities
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c060]">
              Navigation
            </h4>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex max-w-[200px] items-center justify-between text-sm text-white/65 transition-colors hover:text-white focus:outline-none focus:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      size={15}
                      className="ml-4 shrink-0 text-white/35 transition duration-300 group-hover:translate-x-1 group-hover:text-[#f0c060]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c060]">
              Profiles
            </h4>

            <ul className="space-y-3">
              {resourceLinks.map((link) => {
                const isExternal = link.href.startsWith('http')

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="group flex max-w-[200px] items-center justify-between text-sm text-white/65 transition-colors hover:text-white focus:outline-none focus:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={15}
                        className="ml-4 shrink-0 text-white/35 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f0c060]"
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f0c060]">
              Let's Connect
            </h4>

            <p className="text-sm leading-relaxed text-white/70">
              I'm currently available for freelance projects and full-time
              opportunities.
            </p>

            <a
              href="mailto:vishnupriyarajesh7b@gmail.com"
              className="group mt-5 inline-flex items-center gap-2 rounded-lg border border-[#f0c060]/30 px-5 py-2.5 text-sm font-medium text-[#f0c060] transition-all hover:-translate-y-0.5 hover:border-[#f0c060]/50 hover:bg-[#f0c060]/10 focus:outline-none focus:ring-2 focus:ring-[#f0c060]/40 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            >
              Get in touch
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Vishnupriya Rajesh. All rights reserved.</p>
          <p>Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer