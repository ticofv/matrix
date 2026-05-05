import { Link } from 'react-router-dom'
import type { Especialidad } from '../../data/especialidades'
export default function EspecialidadPage({ esp }: { esp: Especialidad }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/" className="text-blue-600 hover:underline text-sm">← Volver al inicio</Link>

      <div className={`bg-gradient-to-br ${esp.color} rounded-3xl p-10 text-white mt-6 mb-10`}>
        <span className="text-6xl">{esp.icono}</span>
        <h1 className="text-4xl font-bold mt-4">{esp.nombre}</h1>
        <p className="text-white/80 mt-2 text-lg">{esp.descripcion}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">🛠️ Habilidades que vas a aprender</h2>
          <ul className="space-y-2">
            {esp.habilidades.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-blue-900 mb-4">🎓 Perfil de Egreso</h2>
          <p className="text-gray-600 leading-relaxed">{esp.perfilEgreso}</p>
        </div>
      </div>
    </main>
  )
}