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

  const count0 = useCounter(stats[0].value, 1500, started)
  const count1 = useCounter(stats[1].value, 1500, started)
  const count2 = useCounter(stats[2].value, 1500, started)
  const counts = [count0, count1, count2]

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div ref={ref} className="fade-up max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 flex items-center justify-center text-6xl shadow-lg">
            👤
          </div>
        </div>

        <div>
          <p className="text-amber-600 uppercase tracking-widest text-sm mb-3 font-semibold">About Me</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who I Am</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Hi! I'm Vishnupriya, a frontend developer based in Ponnani, Kerala.
            I specialize in building responsive, user-friendly web applications with React.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            I'm currently pursuing my degree and focusing on modern web technologies.
            When I'm not coding, I enjoy exploring new frameworks and contributing to open source.
          </p>

          <div ref={statsRef} className="flex gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-amber-600">
                  {counts[i]}{stat.suffix}
                </p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About