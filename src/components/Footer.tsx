import { Link } from 'react-router-dom'
import { especialidades } from '../data/especialidades'

export default function Footer() {
  return (
    <footer style={{ background: '#0d0c0a', borderTop: '1px solid #1e1c18', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Cuerpo */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3.5rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>

        {/* Marca */}
        <div>
          <Link to="/" style={{ textDecoration: 'none', display: 'block', marginBottom: '1rem' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#f5ede0', lineHeight: 1.1 }}>
              CTP Dulce Nombre
            </p>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#f59e0b', marginTop: '4px' }}>
              Diurno · Cartago
            </p>
          </Link>
          <p style={{ fontSize: '0.78rem', color: '#5a5248', lineHeight: 1.7, maxWidth: '220px' }}>
            Formamos técnicos profesionales con las habilidades que el mercado laboral exige.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3a3530', marginBottom: '1.25rem', fontWeight: 500 }}>
            Navegación
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { to: '/', label: 'Inicio' },
              { to: '/acerca', label: 'Acerca del colegio' },
              { to: '/galeria', label: 'Galería' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} style={{ fontSize: '0.8rem', color: '#5a5248', textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Especialidades */}
        <div>
          <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3a3530', marginBottom: '1.25rem', fontWeight: 500 }}>
            Especialidades
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {especialidades.map(e => (
              <Link key={e.id} to={e.ruta} style={{ fontSize: '0.8rem', color: '#5a5248', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.9rem' }}>{e.icono}</span>
                {e.nombre}
              </Link>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3a3530', marginBottom: '1.25rem', fontWeight: 500 }}>
            Contacto
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Dirección', valor: 'Dulce Nombre de La Unión, Cartago' },
              { label: 'Modalidad', valor: 'Diurno' },
              { label: 'Asistente', valor: 'Disponible 24/7 en el chat' },
            ].map((item, i) => (
              <div key={i}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2a2620', display: 'block', marginBottom: '2px' }}>
                  {item.label}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#5a5248' }}>{item.valor}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1a1814', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.72rem', color: '#3a3530' }}>
          © {new Date().getFullYear()} CTP Dulce Nombre Diurno · Cartago, Costa Rica
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '4px', height: '4px', background: '#f59e0b', opacity: 0.6 }} />
          <p style={{ fontSize: '0.62rem', color: '#2a2620', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            MEP · Costa Rica
          </p>
        </div>
      </div>

    </footer>
  )
}