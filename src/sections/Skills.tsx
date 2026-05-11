import {
  FaReact,
  FaFigma,
  FaGithub,
} from 'react-icons/fa'

import {
  SiJavascript,
  SiTailwindcss,
} from 'react-icons/si'

const tools = [
  {
    name: 'React',
    icon: <FaReact />,
    color: '#61DAFB',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: '#F7DF1E',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: '#38BDF8',
  },
  {
    name: 'Figma',
    icon: <FaFigma />,
    color: '#F24E1E',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    color: '#ffffff',
  },
]

const building = [
  {
    title: 'Responsive Interfaces',
    description:
      'Creating clean and fluid layouts that feel seamless across devices.',
  },
  {
    title: 'Interactive Frontends',
    description:
      'Building subtle interactions and animations that enhance user experience.',
  },
  {
    title: 'Elegant Design Systems',
    description:
      'Combining typography, spacing and consistency into polished interfaces.',
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* subtle gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '650px',
          height: '320px',
          background:
            'radial-gradient(ellipse at top, rgba(240,192,96,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* section label */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#f0c060',
            }}
          />

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#f0c060',
            }}
          >
            Creative Development
          </p>

          <div
            style={{
              width: '40px',
              height: '1px',
              background: '#f0c060',
            }}
          />
        </div>

        {/* heading */}
        <h2
          className="text-center mb-20"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}
        >
          What I Enjoy{' '}
          <span
            style={{
              color: '#f0c060',
              fontStyle: 'italic',
            }}
          >
            Building
          </span>
        </h2>

        {/* tools */}
        <div className="mb-20 text-center">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '28px',
            }}
          >
            Currently Working With
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map(tool => (
              <div
                key={tool.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 18px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.border =
                    '1px solid rgba(240,192,96,0.3)'
                  e.currentTarget.style.background =
                    'rgba(240,192,96,0.05)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border =
                    '1px solid rgba(255,255,255,0.08)'
                  e.currentTarget.style.background =
                    'rgba(255,255,255,0.03)'
                  e.currentTarget.style.transform = 'translateY(0px)'
                }}
              >
                <span
                  style={{
                    fontSize: '16px',
                    color: tool.color,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {tool.icon}
                </span>

                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                  }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {building.map(item => (
            <div
              key={item.title}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border =
                  '1px solid rgba(240,192,96,0.3)'
                e.currentTarget.style.background =
                  'linear-gradient(135deg, rgba(240,192,96,0.05) 0%, rgba(255,255,255,0.03) 100%)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow =
                  '0 0 30px rgba(240,192,96,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border =
                  '1px solid rgba(255,255,255,0.08)'
                e.currentTarget.style.background =
                  'rgba(255,255,255,0.03)'
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '24px',
                  color: '#ffffff',
                  marginBottom: '16px',
                  letterSpacing: '-0.01em',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 300,
                }}
              >
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