import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = '404 — Vishnupriya Rajesh'
  }, [])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(240,192,96,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Big faded 404 */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(160px, 30vw, 360px)',
          fontWeight: 700,
          color: 'rgba(240,192,96,0.03)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
        }}
      >
        404
      </div>

      {/* Content */}
      <div className="relative text-center px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div style={{ width: '40px', height: '1px', background: '#f0c060' }} />
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#f0c060',
          }}>
            Page Not Found
          </p>
          <div style={{ width: '40px', height: '1px', background: '#f0c060' }} />
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '16px',
        }}>
          Lost in the{' '}
          <span style={{ color: '#f0c060', fontStyle: 'italic' }}>void.</span>
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '16px',
          color: 'rgba(255,255,255,0.4)',
          fontWeight: 300,
          lineHeight: 1.8,
          maxWidth: '400px',
          margin: '0 auto 40px',
        }}>
          This page doesn't exist — but my portfolio does. Let's get you back.
        </p>

        <button
          onClick={() => navigate('/')}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            background: '#f0c060',
            color: '#0a0a0a',
            padding: '14px 36px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.08em',
            boxShadow: '0 0 32px rgba(240,192,96,0.2)',
            transition: 'background 0.25s, box-shadow 0.25s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = '#e0b050'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 48px rgba(240,192,96,0.35)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = '#f0c060'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 32px rgba(240,192,96,0.2)'
          }}
        >
          Back to Home ✦
        </button>
      </div>
    </div>
  )
}

export default NotFound