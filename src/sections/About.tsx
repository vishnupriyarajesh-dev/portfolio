import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const useCounter = (target: number, duration = 1500, start: boolean) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

const stats = [
  { label: 'Projects Built', value: 5, suffix: '+' },
  { label: 'Years Learning', value: 2, suffix: '+' },
  { label: 'Technologies', value: 8, suffix: '+' },
]

const About = () => {
  const ref = useScrollAnimation()
  const statsRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
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
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="fade-up max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-6xl shadow-sm">
            👤
          </div>
        </div>

        <div>
          <p className="text-cyan-600 uppercase tracking-widest text-sm mb-3">About Me</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who I Am</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Hi! I'm [Your Name], a passionate frontend developer based in [Your City].
            I love turning ideas into real, beautiful web experiences.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            I'm currently pursuing [Your Degree] at [Your College]. When I'm not coding,
            I enjoy [your hobbies].
          </p>

          <div ref={statsRef} className="flex gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-cyan-600">
                  {counts[i]}{stat.suffix}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About