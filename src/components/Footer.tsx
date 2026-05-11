const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden px-6 py-10"
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* subtle gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '220px',
          background:
            'radial-gradient(ellipse at top, rgba(240,192,96,0.05) 0%, transparent 70%)',
        }}
      />

      {/* subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.35) 0.5px, transparent 0.5px)',
          backgroundSize: '7px 7px',
        }}
      />

      <div className="max-w-6xl mx-auto relative">

        {/* divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'rgba(255,255,255,0.05)',
            marginBottom: '32px',
          }}
        />

        {/* footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* left */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Vishnupriya Rajesh — 2026
          </p>

          {/* center */}
          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '999px',
                background: '#f0c060',
                boxShadow: '0 0 12px rgba(240,192,96,0.4)',
              }}
            />

            <span>Open to opportunities</span>
          </div>

          {/* right */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '12px',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Built with{' '}
            <span
              style={{
                color: '#f0c060',
                fontStyle: 'italic',
              }}
            >
              React
            </span>{' '}
            &{' '}
            <span
              style={{
                color: '#f0c060',
                fontStyle: 'italic',
              }}
            >
              Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer