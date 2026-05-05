import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { especialidades } from '../data/especialidades'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [desplegableAbierto, setDesplegableAbierto] = useState(false)
  const location = useLocation()

  const activo = (ruta: string) =>
    location.pathname === ruta ? 'text-yellow-400 font-semibold' : 'text-white hover:text-yellow-300'

  return (
    <nav className="bg-blue-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <div>
            <p className="text-white font-bold text-sm leading-tight">CTP Dulce Nombre</p>
            <p className="text-yellow-400 text-xs">Diurno · Cartago</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className={activo('/')}>Inicio</Link>

          {/* Desplegable especialidades */}
          <div className="relative">
            <button
              onClick={() => setDesplegableAbierto(!desplegableAbierto)}
              className="text-white hover:text-yellow-300 flex items-center gap-1"
            >
              Especialidades <span className="text-xs">▾</span>
            </button>
            {desplegableAbierto && (
              <div className="absolute top-8 left-0 bg-white rounded-xl shadow-2xl w-64 py-2 z-50">
                {especialidades.map(e => (
                  <Link
                    key={e.id}
                    to={e.ruta}
                    onClick={() => setDesplegableAbierto(false)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 text-sm"
                  >
                    <span>{e.icono}</span> {e.nombre}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/galeria" className={activo('/galeria')}>Galería</Link>
          <Link to="/acerca" className={activo('/acerca')}>Acerca del Colegio</Link>
        </div>

        {/* Hamburger móvil */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuAbierto && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 flex flex-col gap-2 text-sm">
          <Link to="/" onClick={() => setMenuAbierto(false)} className="text-white py-2 border-b border-blue-700">Inicio</Link>
          {especialidades.map(e => (
            <Link key={e.id} to={e.ruta} onClick={() => setMenuAbierto(false)} className="text-white py-1 pl-2">
              {e.icono} {e.nombre}
            </Link>
          ))}
          <Link to="/galeria" onClick={() => setMenuAbierto(false)} className="text-white py-2 border-t border-blue-700">Galería</Link>
          <Link to="/acerca" onClick={() => setMenuAbierto(false)} className="text-white py-2">Acerca del Colegio</Link>
        </div>
      )}
    </nav>
  )
}