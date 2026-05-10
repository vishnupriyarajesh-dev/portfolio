import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'TypeScript', level: 65 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Python', level: 70 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Node.js', level: 60 },
]

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6 bg-amber-50">
      <div ref={ref} className="fade-up max-w-4xl mx-auto">
        <p className="text-amber-600 uppercase tracking-widest text-sm mb-3 text-center font-semibold">What I Know</p>
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white border border-amber-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-amber-600 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                  style={{
                    width: animated? `${skill.level}%` : '0%',
                    transition: 'width 1.2s ease-out',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills