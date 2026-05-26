import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const useCounter = (target: number, duration = 1500, start: boolean) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime = 0
    let frame = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(eased * target))

      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)

    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])

  return count
}

const stats = [
  { label: 'Projects Built', value: 3, suffix: '+' },
  { label: 'Years Learning', value: 2, suffix: '+' },
  { label: 'Technologies', value: 5, suffix: '+' },
]

const About = () => {
  const labelRef = useScrollAnimation()
  const ref = useScrollAnimation()
  const statsRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [])

  const counts = [
    useCounter(stats[0].value, 1500, started),
    useCounter(stats[1].value, 1500, started),
    useCounter(stats[2].value, 1500, started),
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0e0e0e] px-6 py-28"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 bg-[radial-gradient(ellipse_at_top_left,rgba(240,192,96,0.08),transparent_70%)]" />

      <div ref={labelRef} className="fade-up mx-auto mb-16 max-w-6xl">
        <div className="flex items-center justify-center gap-4">
          <span className="section-line h-px bg-[#f0c060]" />
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#f0c060]">
            Behind the interface
          </p>
          <span className="section-line h-px bg-[#f0c060]" />
        </div>
      </div>

      <div
        ref={ref}
        className="fade-up mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 md:gap-20"
      >
        <div className="flex flex-col gap-10">
          <p
            className="font-serif text-[clamp(36px,4vw,56px)] font-bold italic leading-[1.2] tracking-normal text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Thoughtfully designed.{' '}
            <span className="text-[#f0c060]">Carefully built."</span>
          </p>

          <img
            src="/v-about.png"
            alt="Vishnupriya Rajesh"
            className="h-56 w-56 rounded-2xl border border-[#f0c060]/20 object-cover object-top shadow-[0_24px_70px_rgba(0,0,0,0.32)] transition duration-500 hover:-translate-y-1 hover:border-[#f0c060]/35"
          />
        </div>

        <div>
          <h2
            className="mb-6 font-serif text-[clamp(32px,3.5vw,48px)] font-bold leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About me
          </h2>

          <p className="mb-4 font-sans text-base font-light leading-8 text-white/65">
            Hi! I'm Vishnupriya, a frontend-focused student developer based in
            Thrissur, Kerala. I enjoy building interfaces that feel clean,
            intuitive and visually intentional.
          </p>

          <p className="mb-10 font-sans text-base font-light leading-8 text-white/65">
            I'm currently exploring modern web
            technologies, interaction design and digital experiences that feel
            immersive yet effortless to use.
          </p>

          <div ref={statsRef} className="grid grid-cols-3 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="min-w-0">
                <div className="mb-3 h-0.5 w-6 bg-[#f0c060]" />

                <p
                  className="font-serif text-[40px] font-bold leading-none text-[#f0c060] md:text-[42px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {counts[index]}
                  {stat.suffix}
                </p>

                <p className="mt-2 break-words font-sans text-[11px] uppercase tracking-[0.12em] text-white/40 md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About