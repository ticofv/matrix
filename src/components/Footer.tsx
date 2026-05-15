import { Link } from 'react-router-dom'
import { especialidades } from '../data/especialidades'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-amber-400 rounded-sm flex items-center justify-center">
              <span className="text-zinc-950 font-bold text-sm">C</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">CTP Dulce Nombre</p>
              <p className="text-amber-400 text-xs tracking-widest uppercase">Diurno · Cartago</p>
            </div>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Formando técnicos profesionales para el mercado laboral de Costa Rica y el mundo.
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">Especialidades</p>
          <ul className="space-y-2">
            {especialidades.slice(0, 5).map(e => (
              <li key={e.id}>
                <Link to={e.ruta} className="text-zinc-500 text-sm hover:text-amber-400 transition-colors">
                  {e.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-zinc-400 text-xs tracking-widest uppercase mb-4">Institución</p>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li><Link to="/acerca" className="hover:text-amber-400 transition-colors">Acerca del Colegio</Link></li>
            <li><Link to="/galeria" className="hover:text-amber-400 transition-colors">Galería</Link></li>
            <li className="pt-2 text-zinc-600">Dulce Nombre de La Unión</li>
            <li className="text-zinc-600">Cartago, Costa Rica</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-5 px-6 flex items-center justify-between text-zinc-700 text-xs">
        <span>© {new Date().getFullYear()} CTP Dulce Nombre Diurno</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  )
}