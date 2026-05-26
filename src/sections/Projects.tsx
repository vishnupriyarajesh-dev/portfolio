import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    title: 'ISS Tracker',
    thumbnail: '/iss-tracker.png',
    imagePosition: 'center top',
    description:
      'Real-time International Space Station tracker featuring live orbital positioning, interactive 2D/3D visualization, and dynamic day-night mapping.',
    tech: ['React', 'React Globe', 'Leaflet'],
    github: 'https://github.com/vishnupriyarajesh-dev/isstracker',
    live: 'https://v-isstracker.vercel.app',
  },
  {
    title: 'ScholarAI',
    thumbnail: '/aiss.png',
    imagePosition: 'center top',
    description:
      'Interactive AI study platform featuring tutoring, flashcards, quizzes, note summarization, and study planning tools.',
    tech: ['React + Vite', 'OpenRouter API', 'Custom CSS'],
    github: 'https://github.com/vishnupriyarajesh-dev/ScholarAI',
    live: 'https://getscholarai.vercel.app',
  },
  {
    title: 'AtmoSense',
    thumbnail: '/cli.png',
    imagePosition: 'center top',
    description:
      'Modern climate intelligence dashboard with real-time weather analytics, forecasts, atmospheric metrics, and data visualization.',
    tech: ['React + Vite', 'Tailwind CSS', 'Open-Meteo API'],
    github: 'https://github.com/vishnupriyarajesh-dev/AtmoSense',
    live: 'https://atmosense-web.vercel.app',
  },
]

type Project = (typeof projects)[number]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <article className="group relative flex w-[245px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[#f0c060]/20 bg-[#11100f] shadow-[0_24px_80px_rgba(0,0,0,0.32)] transition duration-500 hover:-translate-y-1.5 hover:border-[#f0c060]/45 hover:shadow-[0_24px_80px_rgba(240,192,96,0.10)] sm:w-[305px] lg:w-[340px]">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#f0c060]/35 to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(240,192,96,0.055),transparent_48%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative aspect-[16/9] overflow-hidden bg-[#11100f]">
        <img
          src={project.thumbnail}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          style={{
            objectPosition: project.imagePosition,
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_38%,rgba(240,192,96,0.035))] opacity-45" />

        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-1000 group-hover:translate-x-full group-hover:opacity-60 group-active:translate-x-full group-active:opacity-60" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_48%,rgba(240,192,96,0.035))] opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative flex min-h-[275px] flex-1 flex-col bg-[#11100f] p-5 sm:min-h-[290px]">
        <span className="mb-2 font-sans text-[10px] uppercase tracking-[0.22em] text-[#f0c060]/70">
          {String(index + 1).padStart(2, '0')}
        </span>

        <h3
          className="mb-3 font-serif text-[22px] font-bold leading-tight text-white sm:text-[24px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>

        <p className="mb-5 font-sans text-[12px] font-light leading-6 text-[#d8d1c4] sm:text-[13px]">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#f0c060]/25 bg-[#f0c060]/10 px-2.5 py-1 font-sans text-[10px] font-semibold tracking-[0.07em] text-[#f0c060]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2 border-t border-[#f0c060]/10 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#f0c060]/15 px-3 py-2 font-sans text-[11px] font-semibold tracking-[0.08em] text-white/70 transition hover:border-[#f0c060]/40 hover:bg-[#f0c060]/5 hover:text-[#f0c060] focus:outline-none"
          >
            <FaGithub size={12} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#f0c060]/35 bg-[#f0c060]/10 px-3 py-2 font-sans text-[11px] font-semibold tracking-[0.08em] text-[#f0c060] transition hover:border-[#f0c060]/60 hover:bg-[#f0c060]/15 focus:outline-none"
          >
            Live
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const ref = useScrollAnimation()
  const scrollingProjects = [...projects, ...projects, ...projects]

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-[#0a0a0a] px-0 pb-24 pt-36 sm:pb-28 sm:pt-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[620px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(240,192,96,0.08),transparent_70%)]" />

      <div ref={ref} className="fade-up relative mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center justify-center gap-4">
          <span className="section-line h-px bg-[#f0c060]" />
          <p className="whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.3em] text-[#f0c060]">
            My Work
          </p>
          <span className="section-line h-px bg-[#f0c060]" />
        </div>

        <h2
          className="mb-14 text-center font-serif text-[clamp(32px,10vw,58px)] font-bold leading-tight text-white sm:mb-20"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Crafted <span className="italic text-[#f0c060]">Projects</span>
        </h2>
      </div>

      <div className="relative mx-auto max-w-[1500px] overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent sm:w-32" />

        <div className="project-track flex w-max gap-5 py-4 sm:gap-6">
          {scrollingProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index % projects.length}
            />
          ))}
        </div>
      </div>

      <style>{`
        .project-track {
          animation: projectMarquee 54s linear infinite;
          will-change: transform;
        }

        .project-track:hover {
          animation-play-state: paused;
        }

        .project-track,
        .project-track *,
        .project-track *:focus,
        .project-track *:focus-visible,
        .project-track *:active {
          outline: none !important;
          -webkit-tap-highlight-color: transparent;
        }

        @keyframes projectMarquee {
          from {
            transform: translateX(-18%);
          }

          to {
            transform: translateX(-51.333%);
          }
        }

        @media (min-width: 768px) {
          .project-track {
            animation-duration: 42s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-track {
            animation: none !important;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Projects