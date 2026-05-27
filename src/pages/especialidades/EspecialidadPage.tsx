import { Link } from 'react-router-dom'
import type { Especialidad } from '../../data/especialidades'

const BROCHURES: Record<string, string> = {
  contabilidad: 'Brochure 2026 Contabilidad.pdf',
  movil: 'Desarrollo de APP.pdf',
}

const s: Record<string, React.CSSProperties> = {
  main: { background: '#0f0e0c', color: '#e8e0d0', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" },
  eyebrow: { fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase' as const, color: '#f59e0b', fontWeight: 500 },
  divider: { width: '40px', height: '2px', background: '#f59e0b', opacity: 0.8 },
  block: { background: '#141210', padding: '2rem' },
  blockLabel: { fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#f59e0b', fontWeight: 500, marginBottom: '1.25rem' },
  separator: { gap: '1px', background: '#1e1c18' },
}

export default function EspecialidadPage({ esp }: { esp: Especialidad }) {
  const brochure = BROCHURES[esp.id]

  return (
    <main style={s.main}>

      {/* Imagen banner */}
      {esp.imagen && (
        <div style={{ width: '100%', height: '280px', overflow: 'hidden', position: 'relative' }}>
          <img
            src={esp.imagen}
            alt={esp.nombre}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #0f0e0c 0%, rgba(15,14,12,0.4) 60%, transparent 100%)'
          }} />
        </div>
      )}

      {/* Header */}
      <section style={{
        borderBottom: '1px solid #1e1c18',
        padding: esp.imagen ? '2.5rem 1.5rem 3rem' : '5rem 1.5rem 3rem',
        background: '#0d0c0a',
        marginTop: esp.imagen ? '-80px' : 0,
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2.5rem' }}>
            <Link to="/" style={{ fontSize: '0.72rem', color: '#5a5248', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Inicio
            </Link>
            <span style={{ color: '#2a2620' }}>›</span>
            <span style={{ fontSize: '0.72rem', color: '#5a5248', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Especialidades
            </span>
            <span style={{ color: '#2a2620' }}>›</span>
            <span style={{ fontSize: '0.72rem', color: '#f59e0b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {esp.nombre}
            </span>
          </div>

          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{esp.icono}</span>

          <p style={{ ...s.eyebrow, marginBottom: '0.75rem' }}>
            Especialidad Técnica · MEP Costa Rica
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900,
            color: '#f5ede0',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}>
            {esp.nombre}
          </h1>

          <div style={{ ...s.divider, marginBottom: '1.5rem' }} />

          <p style={{ color: '#9d9080', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '580px', marginBottom: '2rem' }}>
            {esp.descripcion}
          </p>

          {/* Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#141210', border: '1px solid #2a2620',
              padding: '0.6rem 1.25rem',
            }}>
              <span style={{ color: '#f59e0b', fontSize: '0.85rem' }}>⏱</span>
              <span style={{ color: '#9d9080', fontSize: '0.78rem' }}>{esp.duracion}</span>
            </div>

            {brochure && (
              <a
                href={`/brochures/${brochure}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#f59e0b', color: '#1a1208',
                  padding: '0.6rem 1.5rem',
                  fontSize: '0.72rem', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Descargar brochure
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1px' }}>

        {/* Subáreas */}
        <div style={s.block}>
          <p style={s.blockLabel}>Programa de estudio · Subáreas</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: '#1e1c18' }}>
            {esp.subareas.map((sub, i) => (
              <div key={i} style={{ background: '#0f0e0c', padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ color: '#f59e0b', flexShrink: 0, fontSize: '0.6rem', marginTop: '4px' }}>▸</span>
                <span style={{ color: '#9d9080', fontSize: '0.82rem', lineHeight: 1.55 }}>{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades + Perfil */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: '#1e1c18' }}>

          {/* Habilidades */}
          <div style={s.block}>
            <p style={s.blockLabel}>Lo que aprendés</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {esp.habilidades.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0, marginTop: '6px' }} />
                  <span style={{ color: '#9d9080', fontSize: '0.82rem', lineHeight: 1.5 }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Perfil de egreso */}
          <div style={s.block}>
            <p style={s.blockLabel}>Perfil de egreso</p>
            <p style={{ color: '#9d9080', fontSize: '0.85rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
              {esp.perfilEgreso}
            </p>
            <div style={{ borderTop: '1px solid #1e1c18', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Institución', valor: 'CTP Dulce Nombre Diurno' },
                { label: 'Título que otorga', valor: 'Técnico de Nivel Medio · MEP' },
                { label: 'Duración', valor: esp.duracion },
              ].map((item, i) => (
                <div key={i}>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#3a3530', display: 'block', marginBottom: '3px' }}>
                    {item.label}
                  </span>
                  <span style={{ color: '#e8e0d0', fontSize: '0.82rem', fontWeight: 500 }}>{item.valor}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Salidas laborales */}
        <div style={s.block}>
          <p style={s.blockLabel}>¿Dónde podés trabajar?</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', background: '#1e1c18', margin: '0 -2rem -2rem' }}>
            {esp.salidaLaboral.map((sal, i) => (
              <div key={i} style={{ background: '#0f0e0c', padding: '1.25rem' }}>
                <span style={{ fontSize: '0.62rem', color: '#f59e0b', fontWeight: 600, display: 'block', marginBottom: '5px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ color: '#9d9080', fontSize: '0.8rem', lineHeight: 1.5 }}>{sal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Volver */}
        <div style={{ paddingTop: '2.5rem' }}>
          <Link
            to="/"
            style={{
              fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#9d9080', textDecoration: 'none',
              border: '1px solid #2a2620', padding: '0.75rem 1.75rem',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
            }}
          >
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>

      </section>
    </main>
  )
}