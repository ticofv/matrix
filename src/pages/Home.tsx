import { Link } from 'react-router-dom'
import { especialidades } from '../data/especialidades'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-6 text-center">
        <p className="text-yellow-400 font-semibold tracking-widest text-sm mb-3 uppercase">Cartago, Costa Rica</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          CTP Dulce Nombre <br />
          <span className="text-yellow-400">Diurno</span>
        </h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto mb-8">
          Formamos técnicos profesionales con las habilidades que el mercado laboral necesita.
        </p>
        <Link
          to="/acerca"
          className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
        >
          Conoce el colegio
        </Link>
      </section>

      {/* Especialidades */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-2">Nuestras Especialidades</h2>
        <p className="text-gray-500 text-center mb-10">Elegí tu camino técnico profesional</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {especialidades.map(e => (
            <Link
              key={e.id}
              to={e.ruta}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${e.color} p-6 text-white`}>
                <span className="text-4xl">{e.icono}</span>
                <h3 className="font-bold mt-3 text-lg leading-tight">{e.nombre}</h3>
              </div>
              <div className="bg-white p-4">
                <p className="text-gray-600 text-sm line-clamp-2">{e.descripcion}</p>
                <span className="text-blue-700 text-sm font-semibold mt-2 block group-hover:underline">Ver más →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-14 px-6 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">¿Tenés dudas sobre las especialidades?</h2>
        <p className="text-blue-800 mb-6">Usá el asistente virtual en la esquina inferior derecha 💬</p>
        <Link to="/galeria" className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition">
          Ver galería
        </Link>
      </section>
    </main>
  )
}