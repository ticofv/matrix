const imagenes = [
  { titulo: 'Dibujo y Modelo de Edificaciones', src: '/dibujo.jpg', desc: 'Diseño arquitectónico y lectura de planos técnicos' },
  { titulo: 'Ciberseguridad', src: '/ciberseguridad.png', desc: 'Práctica de seguridad en redes y sistemas' },
  { titulo: 'Contabilidad', src: '/conta.jpg', desc: 'Gestión financiera y sistemas contables' },
  { titulo: 'Desarrollo de Aplicaciones Móviles', src: '/desarrollo.png', desc: 'Creación de apps para Android e iOS' },
  { titulo: 'Ejecutivo Comercial', src: '/ejecutivo.jpg', desc: 'Técnicas de ventas y atención al cliente' },
  { titulo: 'Electrónica', src: '/electronica.jpg', desc: 'Montaje y mantenimiento de circuitos electrónicos' },
  { titulo: 'Instalaciones del colegio', src: '/10.jpeg', desc: 'Espacios y laboratorios del CTP Dulce Nombre' },
  { titulo: 'Instalaciones del colegio', src: '/11.jpeg', desc: 'Espacios y laboratorios del CTP Dulce Nombre' },
  { titulo: 'Instalaciones del colegio', src: '/12.jpeg', desc: 'Espacios y laboratorios del CTP Dulce Nombre' },
  { titulo: 'Instalaciones del colegio', src: '/13.jpeg', desc: 'Espacios y laboratorios del CTP Dulce Nombre' },
  { titulo: 'Instalaciones del colegio', src: '/14.jpeg', desc: 'Espacios y laboratorios del CTP Dulce Nombre' },
  { titulo: 'Instalaciones del colegio', src: '/15.jpeg', desc: 'Espacios y laboratorios del CTP Dulce Nombre' },
  { titulo: 'Instalaciones del colegio', src: '/16.jpeg', desc: 'Espacios y laboratorios del CTP Dulce Nombre' },
  { titulo: 'Instalaciones del colegio', src: '/17.jpeg', desc: 'Espacios y laboratorios del CTP Dulce Nombre' },
]

export default function Galeria() {
  return (
    <main style={{ background: '#0f0e0c', color: '#e8e0d0', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid #1e1c18', padding: '5rem 1.5rem', background: '#0d0c0a' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#f59e0b', fontWeight: 500, marginBottom: '1rem' }}>
            Nuestra institución
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#f5ede0', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Galería
          </h1>
          <div style={{ width: '40px', height: '2px', background: '#f59e0b', marginBottom: '1.5rem', opacity: 0.8 }} />
          <p style={{ color: '#9d9080', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '520px' }}>
            Un vistazo a los espacios, laboratorios y actividades del CTP Dulce Nombre Diurno.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: '#1e1c18' }}>
          {imagenes.map((img, i) => (
            <GaleriaCard key={i} img={img} index={i} />
          ))}
        </div>
      </section>

    </main>
  )
}

function GaleriaCard({ img, index }: { img: { titulo: string; src: string; desc: string }; index: number }) {
  return (
    <div
      style={{ background: '#141210', overflow: 'hidden', position: 'relative', cursor: 'default' }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.background = '#1a1814'
        const overlay = el.querySelector('.img-overlay') as HTMLElement
        if (overlay) overlay.style.opacity = '0.5'
        const imgEl = el.querySelector('img') as HTMLElement
        if (imgEl) imgEl.style.transform = 'scale(1.05)'
        const line = el.querySelector('.top-line') as HTMLElement
        if (line) line.style.transform = 'scaleX(1)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.background = '#141210'
        const overlay = el.querySelector('.img-overlay') as HTMLElement
        if (overlay) overlay.style.opacity = '0.7'
        const imgEl = el.querySelector('img') as HTMLElement
        if (imgEl) imgEl.style.transform = 'scale(1)'
        const line = el.querySelector('.top-line') as HTMLElement
        if (line) line.style.transform = 'scaleX(0)'
      }}
    >
      {/* Línea top hover */}
      <div className="top-line" style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: '#f59e0b', transform: 'scaleX(0)', transformOrigin: 'left',
        transition: 'transform 0.3s', zIndex: 2,
      }} />

      {/* Número */}
      <span style={{
        position: 'absolute', top: '1rem', right: '1rem',
        fontSize: '0.65rem', color: '#2a2620', fontWeight: 600,
        fontFamily: "'Playfair Display', serif", zIndex: 2,
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Imagen */}
      <div style={{ height: '200px', overflow: 'hidden', background: '#1a1814', position: 'relative' }}>
        <img
          src={img.src}
          alt={img.titulo}
          className="img-overlay"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: 0.7, transition: 'transform 0.5s, opacity 0.3s',
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
        <h3 style={{ color: '#e8e0d0', fontSize: '0.82rem', fontWeight: 500, lineHeight: 1.35, marginBottom: '0.4rem' }}>
          {img.titulo}
        </h3>
        <p style={{ color: '#5a5248', fontSize: '0.72rem', lineHeight: 1.55 }}>{img.desc}</p>
      </div>
    </div>
  )
}