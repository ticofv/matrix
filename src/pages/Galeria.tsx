const imagenes = [
  { titulo: 'Taller de Dibujo Técnico', emoji: '📐', desc: 'Estudiantes trabajando en proyectos de edificaciones' },
  { titulo: 'Laboratorio de Ciberseguridad', emoji: '🔐', desc: 'Práctica de seguridad en redes y sistemas' },
  { titulo: 'Aula de Contabilidad', emoji: '📊', desc: 'Gestión financiera y sistemas contables' },
  { titulo: 'Lab de Redes', emoji: '🌐', desc: 'Configuración de routers, switches y servidores' },
  { titulo: 'Centro Logístico', emoji: '🚚', desc: 'Simulación de procesos de distribución' },
  { titulo: 'Desarrollo Móvil', emoji: '📱', desc: 'Creación de apps para Android e iOS' },
  { titulo: 'Área Comercial', emoji: '💼', desc: 'Técnicas de ventas y atención al cliente' },
  { titulo: 'Graduación', emoji: '🎓', desc: 'Ceremonia de graduación de técnicos profesionales' },
  { titulo: 'Actividades Institucionales', emoji: '🏫', desc: 'Eventos y actividades del colegio' },
]

export default function Galeria() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">Galería</h1>
      <div className="w-16 h-1 bg-yellow-400 mb-10 rounded"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagenes.map((img, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="bg-gradient-to-br from-blue-800 to-blue-600 h-48 flex items-center justify-center text-7xl">
              {img.emoji}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-blue-900">{img.titulo}</h3>
              <p className="text-gray-500 text-sm mt-1">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm mt-10">
        * Las imágenes reales del colegio pueden agregarse reemplazando los emojis con etiquetas &lt;img&gt;
      </p>
    </main>
  )
}