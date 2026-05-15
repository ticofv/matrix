export default function AcercaDe() {
  return (
    <main className="bg-zinc-950 min-h-screen">

      {/* Header */}
      <section className="border-b border-zinc-800 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3">La institución</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Acerca del Colegio</h1>
          <div className="w-12 h-px bg-amber-400 mb-6"></div>
          <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-2xl">
            Más de dos décadas formando técnicos profesionales en el corazón de Cartago, Costa Rica.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">

        {/* Historia */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8">
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-5">Historia</p>
          <p className="text-zinc-300 leading-relaxed">
            El Colegio Técnico Profesional Dulce Nombre Diurno es una institución educativa pública
            ubicada en Dulce Nombre de La Unión, Cartago. Fundado con el propósito de brindar educación
            técnica de calidad a la comunidad cartaginesa, ha formado generaciones de profesionales
            capacitados para insertarse exitosamente en el mercado laboral nacional e internacional.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8">
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-5">Misión</p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Formar personas integrales con sólidos conocimientos técnicos y valores humanos, capaces
              de insertarse exitosamente en el mercado laboral o continuar estudios superiores,
              contribuyendo al desarrollo social y económico del país.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8">
            <p className="text-amber-400 text-xs tracking-widest uppercase mb-5">Visión</p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Ser una institución técnica de excelencia reconocida a nivel regional por la calidad
              de sus egresados, la innovación en sus programas y el impacto positivo en la comunidad
              de Dulce Nombre y la región de Cartago.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8">
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-6">Valores institucionales</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icono: '🎯', valor: 'Excelencia', desc: 'Compromiso con la calidad educativa' },
              { icono: '🤝', valor: 'Respeto', desc: 'Trato digno a toda la comunidad' },
              { icono: '💡', valor: 'Innovación', desc: 'Adaptación al mundo moderno' },
              { icono: '🌱', valor: 'Integridad', desc: 'Honestidad y ética profesional' },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <span className="text-3xl block mb-3">{v.icono}</span>
                <p className="text-white text-sm font-semibold mb-1">{v.valor}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Datos y contacto */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-8">
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-6">Información</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Ubicación', valor: 'Dulce Nombre de La Unión, Cartago' },
              { label: 'Modalidad', valor: 'Diurno' },
              { label: 'Tipo', valor: 'Colegio Técnico Profesional' },
              { label: 'País', valor: 'Costa Rica' },
              { label: 'Especialidades', valor: '8 carreras técnicas' },
              { label: 'Nivel', valor: 'Técnico de nivel medio' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 border-b border-zinc-800 pb-4">
                <span className="text-zinc-600 text-xs uppercase tracking-widest">{item.label}</span>
                <span className="text-zinc-200 text-sm">{item.valor}</span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  )
}