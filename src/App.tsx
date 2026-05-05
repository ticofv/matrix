import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Galeria from './pages/Galeria'
import DibujoEdificaciones from './pages/especialidades/DibujoEdificaciones'
import Ciberseguridad from './pages/especialidades/Ciberseguridad'
import Contabilidad from './pages/especialidades/Contabilidad'
import RedesSoporte from './pages/especialidades/RedesSoporte'
import Logistica from './pages/especialidades/Logistica'
import DesarrolloMovil from './pages/especialidades/DesarrolloMovil'
import EjecutivoComercial from './pages/especialidades/EjecutivoComercial'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<AcercaDe />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/especialidades/dibujo" element={<DibujoEdificaciones />} />
        <Route path="/especialidades/ciberseguridad" element={<Ciberseguridad />} />
        <Route path="/especialidades/contabilidad" element={<Contabilidad />} />
        <Route path="/especialidades/redes" element={<RedesSoporte />} />
        <Route path="/especialidades/logistica" element={<Logistica />} />
        <Route path="/especialidades/movil" element={<DesarrolloMovil />} />
        <Route path="/especialidades/comercial" element={<EjecutivoComercial />} />
      </Routes>
      <ChatBot />
      <Footer />
    </BrowserRouter>
  )
}

export default App