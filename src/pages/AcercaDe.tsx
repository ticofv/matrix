export default function AcercaDe() {
  const valores = [
    { icono: '🎯', valor: 'Excelencia', desc: 'Compromiso con la calidad educativa' },
    { icono: '🤝', valor: 'Respeto', desc: 'Trato digno a toda la comunidad' },
    { icono: '💡', valor: 'Innovación', desc: 'Adaptación al mundo moderno' },
    { icono: '🌱', valor: 'Integridad', desc: 'Honestidad y ética profesional' },
  ]

  const info = [
    { label: 'Ubicación', valor: 'Dulce Nombre de La Unión, Cartago' },
    { label: 'Modalidad', valor: 'Diurno' },
    { label: 'Tipo', valor: 'Colegio Técnico Profesional' },
    { label: 'País', valor: 'Costa Rica' },
    { label: 'Especialidades', valor: '7 carreras técnicas' },
    { label: 'Nivel', valor: 'Técnico de nivel medio' },
  ]

  return (
    <main style={{ background: '#0f0e0c', color: '#e8e0d0', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid #1e1c18', padding: '5rem 1.5rem', background: '#0d0c0a' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#f59e0b', fontWeight: 500, marginBottom: '1rem' }}>
            La institución
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#f5ede0', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Acerca del Colegio
          </h1>
          <div style={{ width: '40px', height: '2px', background: '#f59e0b', marginBottom: '1.5rem', opacity: 0.8 }} />
          <p style={{ color: '#9d9080', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, maxWidth: '520px' }}>
            Más de dos décadas formando técnicos profesionales en el corazón de Cartago, Costa Rica.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1px' }}>

        {/* Historia */}
        <Block label="Historia">
          <p style={{ color: '#9d9080', lineHeight: 1.85, fontSize: '0.9rem', fontWeight: 300 }}>
            El Colegio Técnico Profesional Dulce Nombre Diurno es una institución educativa pública
            ubicada en Dulce Nombre, Cartago. Fundado con el propósito de brindar educación
            técnica de calidad a la comunidad cartaginesa, ha formado generaciones de profesionales
            capacitados para insertarse exitosamente en el mercado laboral nacional e internacional.
          </p>
        </Block>

        {/* Misión y Visión */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: '#1e1c18' }}>
          <Block label="Misión">
            <p style={{ color: '#9d9080', fontSize: '0.88rem', lineHeight: 1.85, fontWeight: 300 }}>
              Formar personas integrales con sólidos conocimientos técnicos y valores humanos, capaces
              de insertarse exitosamente en el mercado laboral o continuar estudios superiores,
              contribuyendo al desarrollo social y económico del país.
            </p>
          </Block>
          <Block label="Visión">
            <p style={{ color: '#9d9080', fontSize: '0.88rem', lineHeight: 1.85, fontWeight: 300 }}>
              Ser una institución técnica de excelencia reconocida a nivel regional por la calidad
              de sus egresados, la innovación en sus programas y el impacto positivo en la comunidad
              de Dulce Nombre y la región de Cartago.
            </p>
          </Block>
        </div>

        {/* Valores */}
        <Block label="Valores institucionales">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1px', background: '#1e1c18', margin: '0 -2rem -2rem' }}>
            {valores.map((v, i) => (
              <div key={i} style={{ background: '#0f0e0c', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.75rem' }}>{v.icono}</span>
                <p style={{ color: '#f5ede0', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.4rem' }}>{v.valor}</p>
                <p style={{ color: '#5a5248', fontSize: '0.72rem', lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Información */}
        <Block label="Información">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0' }}>
            {info.map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid #1e1c18', padding: '1rem 1rem 1rem 0' }}>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3a3530', display: 'block', marginBottom: '4px' }}>
                  {item.label}
                </span>
                <span style={{ color: '#e8e0d0', fontSize: '0.88rem', fontWeight: 500 }}>{item.valor}</span>
              </div>
            ))}
          </div>
        </Block>

      </section>
    </main>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#141210', padding: '2rem' }}>
      <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f59e0b', fontWeight: 500, marginBottom: '1.25rem' }}>
        {label}
      </p>
      {children}
    </div>
  )
}