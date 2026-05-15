import { Link } from 'react-router-dom'
import type { Especialidad } from '../../data/especialidades'

const BROCHURES: Record<string, string> = {
  contabilidad: 'Brochure 2026 Contabilidad.pdf',
  movil: 'Desarrollo de APP.pdf',
}

export default function EspecialidadPage({ esp }: { esp: Especialidad }) {
  const brochure = BROCHURES[esp.id]
  return (
    <main className="bg-white min-h-screen">

      {/* Banner imagen */}
      {esp.imagen && (
        <div className="w-full h-64 md:h-80 overflow-hidden relative">
          <img
            src={esp.imagen}
            alt={esp.nombre}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
        </div>
      )}

      {/* Header */}
      <section className="border-b border-zinc-100 px-6 py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-zinc-400 hover:text-amber-500 text-sm transition-colors flex items-center gap-2 mb-10">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>

          <span className="text-4xl mb-4 block">{esp.icono}</span>
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-3">Especialidad Técnica · MEP Costa Rica</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">{esp.nombre}</h1>
          <div className="w-12 h-0.5 bg-amber-400 mb-6"></div>
          <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-2xl">{esp.descripcion}</p>

          {/* Duración y brochure */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-sm px-4 py-2 shadow-sm">
              <span className="text-amber-400 text-xs">⏱</span>
              <span className="text-zinc-500 text-sm">{esp.duracion}</span>
            </div>

            {brochure && (
              <a
                href={`/brochures/${brochure}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-white rounded-sm px-4 py-2 text-sm font-medium transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Descargar brochure
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">

        {/* Subáreas */}
        <div className="bg-white border border-zinc-100 rounded-sm p-8 shadow-sm">
          <p className="text-amber-500 text-xs tracking-widest uppercase mb-6">Programa de estudio · Subáreas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {esp.subareas.map((s, i) => (
              <div key={i} className="flex items-start gap-3 text-zinc-600 text-sm bg-zinc-50 rounded-sm px-4 py-3 border border-zinc-100">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">▸</span>
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Habilidades */}
          <div className="bg-amber-50 border border-amber-100 rounded-sm p-8">
            <p className="text-amber-500 text-xs tracking-widest uppercase mb-6">Lo que aprendés</p>
            <ul className="space-y-3">
              {esp.habilidades.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-600 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Perfil de egreso */}
          <div className="bg-white border border-zinc-100 rounded-sm p-8 shadow-sm">
            <p className="text-amber-500 text-xs tracking-widest uppercase mb-6">Perfil de Egreso</p>
            <p className="text-zinc-600 text-sm leading-relaxed">{esp.perfilEgreso}</p>

            <div className="mt-6 pt-6 border-t border-zinc-100 space-y-3">
              <div>
                <p className="text-zinc-300 text-xs uppercase tracking-widest mb-1">Institución</p>
                <p className="text-zinc-600 text-sm">CTP Dulce Nombre Diurno</p>
              </div>
              <div>
                <p className="text-zinc-300 text-xs uppercase tracking-widest mb-1">Título que otorga</p>
                <p className="text-zinc-600 text-sm">Técnico de Nivel Medio · MEP</p>
              </div>
              <div>
                <p className="text-zinc-300 text-xs uppercase tracking-widest mb-1">Duración</p>
                <p className="text-zinc-600 text-sm">{esp.duracion}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Salidas laborales */}
        <div className="bg-white border border-zinc-100 rounded-sm p-8 shadow-sm">
          <p className="text-amber-500 text-xs tracking-widest uppercase mb-6">¿Dónde podés trabajar?</p>
          <div className="flex flex-wrap gap-3">
            {esp.salidaLaboral.map((s, i) => (
              <span
                key={i}
                className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs px-4 py-2 rounded-sm hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

      </section>
    </main>
  )
}