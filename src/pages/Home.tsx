import { Link } from 'react-router-dom'
import { especialidades } from '../data/especialidades'

export default function Home() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: '#0f0e0c', color: '#e8e0d0', minHeight: '100vh' }}>

      {/* Hero */}
      <section className="relative flex items-center justify-center text-center overflow-hidden" style={{ minHeight: '90vh', background: '#0f0e0c' }}>

        {/* Grid decorativo */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(251,191,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {/* Glow ámbar */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle at 80% 20%, rgba(251,191,36,0.07) 0%, transparent 60%)'
        }} />

        {/* Decoración lateral */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-30">
          <div style={{ width: '1px', height: '48px', background: '#f59e0b' }} />
          <span style={{ fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f59e0b', writingMode: 'vertical-rl' }}>Cartago</span>
          <div style={{ width: '1px', height: '48px', background: '#f59e0b' }} />
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div style={{ width: '24px', height: '1px', background: '#f59e0b', opacity: 0.5 }} />
            <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#f59e0b', fontWeight: 500 }}>
              Colegio Técnico Profesional · Costa Rica
            </p>
            <div style={{ width: '24px', height: '1px', background: '#f59e0b', opacity: 0.5 }} />
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, color: '#f5ede0', marginBottom: '0.5rem' }}>
            Dulce Nombre<br />
            <span style={{ color: '#f59e0b' }}>Diurno</span>
          </h1>

          <div style={{ width: '40px', height: '2px', background: '#f59e0b', margin: '1.5rem auto', opacity: 0.8 }} />

          <p style={{ color: '#9d9080', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.75, maxWidth: '420px', margin: '0 auto 2.5rem' }}>
            Formamos técnicos profesionales con las habilidades que el mercado laboral exige.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/acerca"
              style={{
                background: '#f59e0b', color: '#1a1208', fontWeight: 600,
                fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '0.85rem 2.25rem', textDecoration: 'none', display: 'inline-block'
              }}
            >
              Conoce el colegio
            </Link>
            <Link
              to="/galeria"
              style={{
                background: 'transparent', color: '#9d9080',
                fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '0.85rem 2.25rem', border: '1px solid #2a2620',
                textDecoration: 'none', display: 'inline-block'
              }}
            >
              Ver galería
            </Link>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="px-6 py-24" style={{ background: '#0f0e0c' }}>
        <div className="max-w-7xl mx-auto">

          {/* Header sección */}
          <div className="flex items-end justify-between mb-14 gap-6">
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f59e0b', fontWeight: 500, marginBottom: '0.6rem' }}>
                Lo que ofrecemos
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 700, color: '#f5ede0', lineHeight: 1.1 }}>
                Especialidades<br />Técnicas
              </h2>
            </div>
            <p className="hidden md:block text-right" style={{ fontSize: '0.8rem', color: '#5a5248', maxWidth: '200px', lineHeight: 1.7 }}>
              Siete carreras técnicas diseñadas para insertarte al mercado laboral desde el colegio.
            </p>
          </div>

          {/* Grid de cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: '#1e1c18' }}>
            {especialidades.map((e, i) => (
              <Link
                key={e.id}
                to={e.ruta}
                className="group"
                style={{ background: '#141210', padding: '1.75rem 1.5rem', textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', transition: 'background 0.2s' }}
                onMouseEnter={ev => ev.currentTarget.style.background = '#1a1814'}
                onMouseLeave={ev => ev.currentTarget.style.background = '#141210'}
              >
                {/* Número */}
                <span style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.65rem', color: '#2a2620', fontWeight: 600, fontFamily: "'Playfair Display', serif" }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Línea top hover */}
                <TopLine />

                {/* Imagen o ícono */}
                <div style={{ height: '100px', marginBottom: '1rem', overflow: 'hidden', background: '#1a1814' }}>
                  {e.imagen ? (
                    <img src={e.imagen} alt={e.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                      {e.icono}
                    </div>
                  )}
                </div>

                <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.6rem' }}>{e.icono}</span>
                <h3 style={{ fontSize: '0.82rem', fontWeight: 500, color: '#e8e0d0', lineHeight: 1.35, marginBottom: '0.5rem' }}>
                  {e.nombre}
                </h3>
                <p style={{ fontSize: '0.72rem', color: '#5a5248', lineHeight: 1.55 }}>
                  {e.descripcion}
                </p>
                <div style={{ marginTop: '1rem', fontSize: '0.65rem', color: '#f59e0b', letterSpacing: '0.08em', fontWeight: 500 }}>
                  VER →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="text-center px-6 py-20" style={{ background: '#141210', borderTop: '1px solid #1e1c18' }}>
        <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '1rem', fontWeight: 500 }}>
          Asistente virtual
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#f5ede0', marginBottom: '0.75rem' }}>
          ¿Tenés dudas?
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#5a5248', lineHeight: 1.7 }}>
          Usá el chat en la esquina inferior derecha.<br />
          Disponible 24/7 para responder sobre nuestras especialidades.
        </p>
      </section>

    </main>
  )
}

// Línea ámbar top que aparece en hover — componente separado para evitar inline con estados
function TopLine() {
  return (
    <style>{`
      .group:hover .top-line { transform: scaleX(1) !important; }
    `}</style>
  )
}