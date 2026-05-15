import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { especialidades } from '../data/especialidades'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [desplegableAbierto, setDesplegableAbierto] = useState(false)
  const location = useLocation()

  const activo = (ruta: string) =>
    location.pathname === ruta
      ? 'text-amber-400'
      : 'text-zinc-300 hover:text-white transition-colors duration-200'

  return (
    <nav className="bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-amber-400 rounded-sm flex items-center justify-center">
            <span className="text-zinc-950 font-bold text-sm">C</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-none tracking-wide">CTP Dulce Nombre</p>
            <p className="text-amber-400 text-xs tracking-widest uppercase mt-0.5">Diurno · Cartago</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className={activo('/')}>Inicio</Link>

          <div className="relative">
            <button
              onClick={() => setDesplegableAbierto(!desplegableAbierto)}
              onBlur={() => setTimeout(() => setDesplegableAbierto(false), 150)}
              className="text-zinc-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
            >
              Especialidades
              <svg className={`w-3 h-3 transition-transform ${desplegableAbierto ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {desplegableAbierto && (
              <div className="absolute top-8 left-0 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl w-72 py-2 z-50">
                {especialidades.map(e => (
                  <Link
                    key={e.id}
                    to={e.ruta}
                    className="flex items-center gap-3 px-4 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors text-sm"
                  >
                    <span className="text-lg">{e.icono}</span>
                    <span>{e.nombre}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/galeria" className={activo('/galeria')}>Galería</Link>
          <Link to="/acerca" className={activo('/acerca')}>Acerca del Colegio</Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuAbierto
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile */}
      {menuAbierto && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex flex-col gap-1">
          <Link to="/" onClick={() => setMenuAbierto(false)} className="text-zinc-300 py-2 text-sm hover:text-white">Inicio</Link>
          <p className="text-zinc-600 text-xs uppercase tracking-widest mt-2 mb-1">Especialidades</p>
          {especialidades.map(e => (
            <Link key={e.id} to={e.ruta} onClick={() => setMenuAbierto(false)} className="text-zinc-400 py-1.5 text-sm pl-2 hover:text-white flex items-center gap-2">
              <span>{e.icono}</span> {e.nombre}
            </Link>
          ))}
          <Link to="/galeria" onClick={() => setMenuAbierto(false)} className="text-zinc-300 py-2 text-sm border-t border-zinc-800 mt-2 hover:text-white">Galería</Link>
          <Link to="/acerca" onClick={() => setMenuAbierto(false)} className="text-zinc-300 py-2 text-sm hover:text-white">Acerca del Colegio</Link>
        </div>
      )}
    </nav>
  )
}