import { useTypingEffect } from '../hooks/useTypingEffect'
import ParticleBackground from '../components/ParticleBackground'

const roles = ['Frontend Developer', 'React Developer', 'UI Enthusiast', 'Problem Solver']

const Hero = () => {
  const typedText = useTypingEffect(roles)

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-sky-50 via-cyan-50 to-white relative overflow-hidden">
      <ParticleBackground />
      <div className="text-center max-w-3xl relative z-10">
        <p className="text-cyan-600 text-lg mb-3 tracking-widest uppercase">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Your Name</h1>
        <h2 className="text-2xl md:text-3xl text-cyan-600 font-light mb-6 h-10">
          {typedText}<span className="animate-pulse">|</span>
        </h2>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          I build clean, responsive, and user-friendly web experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md">View My Work</a>
          <a href="#contact" className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 rounded-lg font-medium transition-colors">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
export default Hero