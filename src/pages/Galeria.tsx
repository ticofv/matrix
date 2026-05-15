const imagenes = [
  { titulo: 'Dibujo y Modelo de Edificaciones', src: '/dibujo.jpg', desc: 'Diseño arquitectónico y lectura de planos técnicos' },
  { titulo: 'Ciberseguridad', src: '/ciberseguridad.png', desc: 'Práctica de seguridad en redes y sistemas' },
  { titulo: 'Contabilidad', src: '/conta.jpg', desc: 'Gestión financiera y sistemas contables' },
  { titulo: 'Logística', src: '/logistica.jpg', desc: 'Simulación de procesos de distribución' },
  { titulo: 'Desarrollo de Aplicaciones Móviles', src: '/desarrollo.png', desc: 'Creación de apps para Android e iOS' },
  { titulo: 'Ejecutivo Comercial', src: '/ejecutivo.jpg', desc: 'Técnicas de ventas y atención al cliente' },
  { titulo: 'Electrónica', src: '/electronica.jpg', desc: 'Montaje y mantenimiento de circuitos electrónicos' },
]

export default function Galeria() {
  return (
    <main className="bg-zinc-950 min-h-screen">

      <section className="border-b border-zinc-800 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3">Nuestra institución</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Galería</h1>
          <div className="w-12 h-px bg-amber-400 mb-6"></div>
          <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-2xl">
            Un vistazo a los espacios, laboratorios y actividades del CTP Dulce Nombre Diurno.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {imagenes.map((img, i) => (
            <div
              key={i}
              className="group bg-zinc-900 border border-zinc-800 hover:border-amber-400/40 rounded-sm overflow-hidden transition-all duration-300"
            >
              <div className="h-56 overflow-hidden bg-zinc-800">
                <img
                  src={img.src}
                  alt={img.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-amber-400 transition-colors">
                  {img.titulo}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}