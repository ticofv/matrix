import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { especialidades } from '../data/especialidades'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [desplegableAbierto, setDesplegableAbierto] = useState(false)
  const location = useLocation()

  const esActivo = (ruta: string) => location.pathname === ruta

  const linkStyle = (ruta: string): React.CSSProperties => ({
    fontSize: '0.72rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    fontWeight: 500,
    color: esActivo(ruta) ? '#f59e0b' : '#9d9080',
    textDecoration: 'none',
    transition: 'color 0.2s',
    fontFamily: "'DM Sans', sans-serif",
  })

  return (
    <nav style={{
      background: '#0d0c0a',
      borderBottom: '1px solid #1e1c18',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img
            src="/public/footer-widget-logo.png"
            alt="Logo CTP Dulce Nombre"
            style={{ height: '36px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
          />
          <div>
            <p style={{ color: '#f5ede0', fontWeight: 600, fontSize: '0.8rem', lineHeight: 1, letterSpacing: '0.02em', fontFamily: "'DM Sans', sans-serif" }}>
              CTP Dulce Nombre
            </p>
            <p style={{ color: '#f59e0b', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '3px', fontFamily: "'DM Sans', sans-serif" }}>
              Diurno · Cartago
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2.5rem' }}>
          <Link to="/" style={linkStyle('/')}
            onMouseEnter={e => { if (!esActivo('/')) (e.target as HTMLElement).style.color = '#e8e0d0' }}
            onMouseLeave={e => { if (!esActivo('/')) (e.target as HTMLElement).style.color = '#9d9080' }}
          >Inicio</Link>

          {/* Dropdown especialidades */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDesplegableAbierto(!desplegableAbierto)}
              onBlur={() => setTimeout(() => setDesplegableAbierto(false), 150)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: location.pathname.startsWith('/especialidades') ? '#f59e0b' : '#9d9080',
                fontFamily: "'DM Sans', sans-serif",
                padding: 0,
              }}
            >
              Especialidades
              <svg
                style={{ width: '10px', height: '10px', transition: 'transform 0.2s', transform: desplegableAbierto ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {desplegableAbierto && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 16px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#141210',
                border: '1px solid #2a2620',
                width: '260px',
                padding: '8px 0',
                zIndex: 100,
              }}>
                {/* Triángulo */}
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '8px',
                  height: '8px',
                  background: '#141210',
                  borderLeft: '1px solid #2a2620',
                  borderTop: '1px solid #2a2620',
                  rotate: '45deg',
                }} />

                {especialidades.map(e => (
                  <Link
                    key={e.id}
                    to={e.ruta}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 20px',
                      textDecoration: 'none',
                      color: '#9d9080',
                      fontSize: '0.78rem',
                      fontFamily: "'DM Sans', sans-serif",
                      transition: 'color 0.15s, background 0.15s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = '#f5ede0';
                      (e.currentTarget as HTMLElement).style.background = '#1a1814';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = '#9d9080';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }}
                  >
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>{e.icono}</span>
                    <span>{e.nombre}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/galeria" style={linkStyle('/galeria')}
            onMouseEnter={e => { if (!esActivo('/galeria')) (e.target as HTMLElement).style.color = '#e8e0d0' }}
            onMouseLeave={e => { if (!esActivo('/galeria')) (e.target as HTMLElement).style.color = '#9d9080' }}
          >Galería</Link>

          <Link to="/acerca" style={linkStyle('/acerca')}
            onMouseEnter={e => { if (!esActivo('/acerca')) (e.target as HTMLElement).style.color = '#e8e0d0' }}
            onMouseLeave={e => { if (!esActivo('/acerca')) (e.target as HTMLElement).style.color = '#9d9080' }}
          >Acerca del colegio</Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuAbierto(!menuAbierto)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9d9080', padding: '4px' }}
        >
          <svg style={{ width: '22px', height: '22px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuAbierto
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuAbierto && (
        <div style={{
          background: '#0d0c0a',
          borderTop: '1px solid #1e1c18',
          padding: '1rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}>
          {[{ ruta: '/', label: 'Inicio' }, { ruta: '/galeria', label: 'Galería' }, { ruta: '/acerca', label: 'Acerca del colegio' }].map(({ ruta, label }) => (
            <Link
              key={ruta}
              to={ruta}
              onClick={() => setMenuAbierto(false)}
              style={{
                color: esActivo(ruta) ? '#f59e0b' : '#9d9080',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid #1a1814',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              {label}
            </Link>
          ))}

          <p style={{
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#3a3530',
            marginTop: '1rem',
            marginBottom: '0.5rem',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Especialidades
          </p>

          {especialidades.map(e => (
            <Link
              key={e.id}
              to={e.ruta}
              onClick={() => setMenuAbierto(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#5a5248',
                fontSize: '0.78rem',
                textDecoration: 'none',
                padding: '8px 0',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span style={{ fontSize: '1rem' }}>{e.icono}</span>
              {e.nombre}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}