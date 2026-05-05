import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-yellow-400 mb-2">🎓 CTP Dulce Nombre Diurno</h3>
          <p className="text-blue-200 text-sm">Formando técnicos profesionales en Cartago, Costa Rica.</p>
        </div>
        <div>
          <h3 className="font-bold text-yellow-400 mb-2">Navegación</h3>
          <ul className="text-blue-200 text-sm space-y-1">
            <li><Link to="/" className="hover:text-white">Inicio</Link></li>
            <li><Link to="/galeria" className="hover:text-white">Galería</Link></li>
            <li><Link to="/acerca" className="hover:text-white">Acerca del Colegio</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-yellow-400 mb-2">Contacto</h3>
          <p className="text-blue-200 text-sm">Dulce Nombre de La Unión, Cartago</p>
          <p className="text-blue-200 text-sm">Costa Rica</p>
        </div>
      </div>
      <div className="border-t border-blue-800 text-center py-4 text-blue-400 text-xs">
        © {new Date().getFullYear()} CTP Dulce Nombre Diurno · Todos los derechos reservados
      </div>
    </footer>
  )
}