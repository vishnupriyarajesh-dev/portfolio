import { ArrowDown } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useTypingEffect } from '../hooks/useTypingEffect'

const roles = ['Frontend Developer', 'React Developer', 'UI Enthusiast', 'Problem Solver']

const fade = (delay = 0) => ({
  animationDelay: `${delay}ms`,
})

const Hero = () => {
  const typedText = useTypingEffect(roles)

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#050505]">
      <div
        className="absolute inset-0 scale-[1.03] bg-cover bg-center bg-no-repeat motion-safe:animate-heroDrift"
        style={{ backgroundImage: `url('/vish.jpg.jpeg')` }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(240,192,96,0.05),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.44)_45%,rgba(0,0,0,0.86))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.24),transparent_35%,rgba(0,0,0,0.72))]" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-8 pt-24 md:hidden">
        <div className="space-y-6">
          <div className="hero-reveal" style={fade(100)}>
            <p className="mb-2 font-sans text-[13px] font-light uppercase tracking-[0.28em] text-[#f0c060]">
              Hello, I'm
            </p>

            <h1
              className="font-serif text-[clamp(52px,14vw,78px)] font-bold leading-none tracking-normal text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Vishnu
              <span className="font-normal italic text-[#f0c060]">priya</span>
            </h1>
          </div>

          <a
            href="https://github.com/vishnupriyarajesh-dev"
            target="_blank"
            rel="noreferrer"
            className="hero-reveal inline-flex items-center gap-2 rounded-full border border-[#f0c060]/35 bg-white/[0.07] px-4 py-2 font-sans text-xs tracking-[0.08em] text-[#f0c060] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#f0c060]/60 hover:bg-[#f0c060]/10"
            style={fade(220)}
          >
            <FaGithub size={14} />
            @vishnupriyarajesh-dev
          </a>

          <div className="hero-reveal max-w-sm" style={fade(340)}>
            <p
              className="mb-2 font-serif text-[22px] italic leading-snug text-white drop-shadow-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Building interfaces that speak{' '}
              <span className="font-bold not-italic text-[#f0c060]">louder than code.</span>
            </p>

            <p className="font-sans text-sm font-light leading-7 text-white/55">
              Creating digital experiences with depth and intention.
            </p>
          </div>
        </div>

        <div className="hero-reveal space-y-4" style={fade(460)}>
          <div className="mx-auto w-fit rounded-full border border-[#f0c060]/35 bg-white/[0.07] px-5 py-3 backdrop-blur-xl">
            <span className="font-sans text-[13px] font-semibold tracking-[0.16em] text-[#f0c060]">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-[#f0c060] px-4 py-4 text-center font-sans text-[13px] font-semibold tracking-[0.08em] text-[#080808] shadow-[0_18px_50px_rgba(240,192,96,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffd577]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[#f0c060]/50 px-4 py-4 text-center font-sans text-[13px] font-semibold tracking-[0.08em] text-[#f0c060] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c060]/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 hidden min-h-screen flex-col justify-between px-12 pb-8 pt-24 md:flex">
        <div className="flex flex-1 items-center">
          <div>
            <p className="hero-reveal mb-3 font-sans text-[22px] font-light uppercase tracking-[0.28em] text-[#f0c060]" style={fade(120)}>
              Hello, I'm
            </p>

            <h1
              className="hero-reveal font-serif text-[clamp(64px,6.8vw,112px)] font-bold leading-none tracking-normal text-white drop-shadow-2xl"
              style={{ ...fade(240), fontFamily: "'Playfair Display', serif" }}
            >
              Vishnu
              <span className="font-normal italic text-[#f0c060]">priya</span>
            </h1>
          </div>
        </div>

        <div className="absolute right-12 top-1/2 flex max-w-[350px] -translate-y-1/2 flex-col items-end gap-6">
          <a
            href="https://github.com/vishnupriyarajesh-dev"
            target="_blank"
            rel="noreferrer"
            className="hero-reveal inline-flex items-center gap-2 rounded-full border border-[#f0c060]/40 bg-white/[0.07] px-5 py-2.5 font-sans text-xs tracking-[0.12em] text-[#f0c060] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#f0c060]/70 hover:bg-[#f0c060]/10"
            style={fade(360)}
          >
            <FaGithub size={14} />
            @vishnupriyarajesh-dev
          </a>

          <div className="hero-reveal text-right" style={fade(480)}>
            <p
              className="mb-3 font-serif text-2xl italic leading-snug text-white drop-shadow-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Building interfaces that speak{' '}
              <span className="font-bold not-italic text-[#f0c060]">louder than code.</span>
            </p>

            <p className="font-sans text-sm font-light leading-7 text-white/55">
              Creating digital experiences with depth and intention.
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="hero-reveal flex gap-3" style={fade(600)}>
            <a
              href="#projects"
              className="rounded-lg bg-[#f0c060] px-8 py-4 font-sans text-[13px] font-semibold tracking-[0.08em] text-[#080808] shadow-[0_20px_60px_rgba(240,192,96,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffd577] hover:shadow-[0_24px_70px_rgba(240,192,96,0.24)]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[#f0c060]/55 px-8 py-4 font-sans text-[13px] font-semibold tracking-[0.08em] text-[#f0c060] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c060]/10"
            >
              Contact Me
            </a>
          </div>

          <div className="hero-reveal absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-[#f0c060]/35 bg-white/[0.07] px-7 py-3 backdrop-blur-xl" style={fade(720)}>
            <span className="font-sans text-[13px] font-semibold tracking-[0.18em] text-[#f0c060]">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <a
            href="#about"
            className="hero-reveal flex items-center gap-2 font-sans text-xs uppercase tracking-[0.18em] text-[#f0c060]/65 transition hover:text-[#f0c060]"
            style={fade(840)}
          >
            Scroll
            <ArrowDown size={15} className="animate-bounce" />
          </a>
        </div>
      </div>

      <style>{`
        .hero-reveal {
          opacity: 0;
          transform: translateY(26px);
          animation: heroReveal 900ms cubic-bezier(.2,.8,.2,1) forwards;
        }

        @keyframes heroReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroDrift {
          0%, 100% {
            transform: scale(1.03) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.065) translate3d(-8px, -6px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero