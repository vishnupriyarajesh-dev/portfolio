import { useEffect, useRef, useState } from 'react'
import {
  FaReact,
  FaGithub,
  FaDatabase,
  FaServer,
  FaLayerGroup,
  FaMagic,
  FaPenNib,
} from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiPython } from 'react-icons/si'

const tools = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Python', icon: <SiPython />, color: '#3776AB' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8' },
  { name: 'REST APIs', icon: <FaServer />, color: '#f0c060' },
  { name: 'SQL', icon: <FaDatabase />, color: '#7dd3fc' },
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
]

const building = [
  {
    title: 'Responsive Interfaces',
    description: 'Creating clean and fluid layouts that feel seamless across devices.',
    icon: <FaLayerGroup />,
  },
  {
    title: 'Interactive Frontends',
    description: 'Building subtle interactions and animations that enhance user experience.',
    icon: <FaMagic />,
  },
  {
    title: 'Elegant Design Systems',
    description: 'Combining typography, spacing and consistency into polished interfaces.',
    icon: <FaPenNib />,
  },
]

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

const Skills = () => {
  const header = useInView()
  const toolsView = useInView()
  const cards = useInView()

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[650px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(240,192,96,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div
          ref={header.ref}
          className={[
            'transition duration-700',
            header.visible ? 'reveal-active translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          ].join(' ')}
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="section-line h-px bg-[#f0c060]" />
            <p className="whitespace-nowrap font-sans text-[10px] uppercase tracking-[0.24em] text-[#f0c060] sm:text-[11px] sm:tracking-[0.3em]">
              Creative Development
            </p>
            <span className="section-line h-px bg-[#f0c060]" />
          </div>

          <h2
            className="mb-20 text-center font-serif text-[clamp(34px,4vw,58px)] font-bold leading-tight tracking-normal text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What I Enjoy{' '}
            <span className="italic text-[#f0c060]">Building</span>
          </h2>
        </div>

        <div
          ref={toolsView.ref}
          className={[
            'mb-20 text-center transition duration-700',
            toolsView.visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          ].join(' ')}
        >
          <p className="mb-7 font-sans text-xs uppercase tracking-[0.24em] text-white/45">
            Currently Working With
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className={[
                  'group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3',
                  'shadow-[0_0_25px_rgba(240,192,96,0.02)] transition-all duration-300',
                  'hover:-translate-y-1 hover:border-[#f0c060]/35 hover:bg-[#f0c060]/[0.06] hover:shadow-[0_14px_40px_rgba(240,192,96,0.05)]',
                  toolsView.visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
                ].join(' ')}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span
                  className="flex items-center text-base transition duration-300 group-hover:scale-110"
                  style={{ color: tool.color }}
                >
                  {tool.icon}
                </span>

                <span className="font-sans text-xs font-semibold tracking-[0.08em] text-white">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div ref={cards.ref} className="grid gap-6 md:grid-cols-3">
          {building.map((item, index) => (
            <div
              key={item.title}
              className={[
                'group rounded-[20px] border border-[#f0c060]/10',
                'bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(240,192,96,0.025))]',
                'p-8 shadow-[0_0_25px_rgba(240,192,96,0.03)] transition-all duration-500',
                'hover:-translate-y-1.5 hover:border-[#f0c060]/30 hover:bg-[linear-gradient(135deg,rgba(240,192,96,0.055),rgba(255,255,255,0.03))] hover:shadow-[0_24px_80px_rgba(240,192,96,0.06)]',
                cards.visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
              ].join(' ')}
              style={{ transitionDelay: `${index * 130}ms` }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f0c060]/20 bg-[#f0c060]/10 text-xl text-[#f0c060] shadow-[0_0_20px_rgba(240,192,96,0.08)] transition duration-300 group-hover:scale-105 group-hover:border-[#f0c060]/35 group-hover:bg-[#f0c060]/15">
                {item.icon}
              </div>

              <h3
                className="mb-4 font-serif text-[25px] font-bold leading-tight tracking-normal text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>

              <p className="font-sans text-sm font-light leading-8 text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills