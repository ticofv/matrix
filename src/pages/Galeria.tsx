const imagenes = [
  { titulo: 'Dibujo y Modelo de Edificaciones', src: '/dibujo.jpg', desc: 'Diseño arquitectónico y lectura de planos técnicos' },
  { titulo: 'Ciberseguridad', src: '/ciberseguridad.png', desc: 'Práctica de seguridad en redes y sistemas' },
  { titulo: 'Contabilidad', src: '/conta.jpg', desc: 'Gestión financiera y sistemas contables' },
  { titulo: 'Desarrollo de Aplicaciones Móviles', src: '/desarrollo.png', desc: 'Creación de apps para Android e iOS' },
  { titulo: 'Ejecutivo Comercial', src: '/ejecutivo.jpg', desc: 'Técnicas de ventas y atención al cliente' },
  { titulo: 'Electrónica', src: '/electronica.jpg', desc: 'Montaje y mantenimiento de circuitos electrónicos' },
]

export default function Galeria() {
  return (
    <main className="bg-white min-h-screen">

      {/* Header */}
      <section className="border-b border-zinc-100 px-6 py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-3">Nuestra institución</p>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Galería</h1>
          <div className="w-12 h-0.5 bg-amber-400 mb-6"></div>
          <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-2xl">
            Un vistazo a los espacios, laboratorios y actividades del CTP Dulce Nombre Diurno.
          </p>
        </div>
      </section>

      {/* Grid de imágenes */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {imagenes.map((img, i) => (
            <div
              key={i}
              className="group bg-white border border-zinc-100 hover:border-amber-200 hover:shadow-md hover:shadow-amber-50 rounded-sm overflow-hidden transition-all duration-300"
            >
              <div className="h-56 overflow-hidden bg-zinc-50">
                <img
                  src={img.src}
                  alt={img.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-zinc-900 font-semibold text-sm mb-1 group-hover:text-amber-500 transition-colors">
                  {img.titulo}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}