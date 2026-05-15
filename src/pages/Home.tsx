import { Link } from 'react-router-dom'
import { especialidades } from '../data/especialidades'

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">

      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden"
        style={{
          backgroundImage: 'url(/imagenes/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-zinc-950/75"></div>

        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <div className="w-px h-20 bg-amber-400/40"></div>
          <span className="text-amber-400/60 text-xs tracking-widest uppercase rotate-90 my-4">Cartago</span>
          <div className="w-px h-20 bg-amber-400/40"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-6 font-medium">
            Colegio Técnico Profesional · Costa Rica
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Dulce Nombre<br />
            <span className="text-amber-400">Diurno</span>
          </h1>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-6"></div>
          <p className="text-zinc-300 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Formamos técnicos profesionales con las habilidades que el mercado laboral exige.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/acerca"
              className="bg-amber-400 text-zinc-950 font-semibold px-8 py-3 rounded-sm hover:bg-amber-300 transition-colors tracking-wide text-sm"
            >
              Conoce el colegio
            </Link>
            <Link
              to="/galeria"
              className="border border-zinc-600 text-zinc-300 font-medium px-8 py-3 rounded-sm hover:border-zinc-400 hover:text-white transition-colors text-sm"
            >
              Ver galería
            </Link>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3">Lo que ofrecemos</p>
            <h2 className="text-4xl font-bold text-white">Especialidades<br />Técnicas</h2>
          </div>
          <div className="hidden md:block w-px h-16 bg-zinc-700"></div>
          <p className="hidden md:block text-zinc-500 text-sm max-w-xs text-right leading-relaxed">
            Ocho carreras técnicas diseñadas para insertarte al mercado laboral desde el colegio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {especialidades.map((e) => (
            <Link
              key={e.id}
              to={e.ruta}
              className="group bg-zinc-900 border border-zinc-800 hover:border-amber-400/50 rounded-sm overflow-hidden transition-all duration-300"
            >
              {/* Imagen */}
              <div className="h-40 overflow-hidden bg-zinc-800">
                {e.imagen ? (
                  <img
                    src={e.imagen}
                    alt={e.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    {e.icono}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xl mb-2 block">{e.icono}</span>
                <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-amber-400 transition-colors">
                  {e.nombre}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{e.descripcion}</p>
                <div className="mt-4 flex items-center gap-2 text-amber-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver especialidad
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="border-t border-zinc-800 py-20 px-6 text-center">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">Asistente virtual</p>
        <h2 className="text-3xl font-bold text-white mb-3">¿Tenés dudas?</h2>
        <p className="text-zinc-500 mb-2">Usá el chat en la esquina inferior derecha.</p>
        <p className="text-zinc-600 text-sm">Disponible 24/7 para responder sobre nuestras especialidades.</p>
      </section>

    </main>
  )
}