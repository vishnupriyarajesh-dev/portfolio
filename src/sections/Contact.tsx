import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/vishnupriyarajesh-dev' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vishnupriya-rajesh' },
]

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  const reveal =
    'transition duration-700 ' +
    (visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0c0c0c] px-6 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(240,192,96,0.09),transparent_70%)]" />

      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-serif text-[clamp(96px,18vw,240px)] font-bold tracking-normal text-[#f0c060]/[0.03]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Hello
      </div>

      <div
        ref={contentRef}
        className={[
          'relative mx-auto max-w-2xl text-center',
          visible ? 'reveal-active' : '',
        ].join(' ')}
      >
        <div className={reveal} style={{ transitionDelay: '0ms' }}>
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="section-line h-px bg-[#f0c060]" />
            <p className="whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.3em] text-[#f0c060]">
              Get In Touch
            </p>
            <span className="section-line h-px bg-[#f0c060]" />
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
          <span style={{ color: '#f0c060', fontStyle: 'italic' }}>
            Connect
          </span>
        </h2>

        <p
          className={`${reveal} mx-auto mb-12 max-w-[500px] font-sans text-base font-light leading-8 text-white/60`}
          style={{ transitionDelay: '220ms' }}
        >
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is always open.
        </p>

        <div
          className={`${reveal} mb-16 inline-block`}
          style={{ transitionDelay: '320ms' }}
        >
          <a
            href="mailto:vishnupriyarajesh7b@gmail.com"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#f0c060] px-10 py-4 font-sans text-sm font-semibold tracking-[0.08em] text-[#0c0c0c] shadow-[0_0_34px_rgba(240,192,96,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd577] hover:shadow-[0_0_54px_rgba(240,192,96,0.34)] focus:outline-none focus:ring-2 focus:ring-[#f0c060]/60 focus:ring-offset-2 focus:ring-offset-[#0c0c0c]"
          >
            <Mail size={17} />
            Say Hello
            <ArrowUpRight
              size={16}
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div
          className={`${reveal} mx-auto mb-10 flex max-w-xs items-center gap-4`}
          style={{ transitionDelay: '420ms' }}
        >
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-white/25">
            or find me on
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div
          className={`${reveal} flex justify-center gap-10`}
          style={{ transitionDelay: '520ms' }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.14em] text-white/40 transition duration-300 hover:text-[#f0c060]"
            >
              {link.label}
              <ArrowUpRight
                size={13}
                className="opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact