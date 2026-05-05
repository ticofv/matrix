export default function AcercaDe() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">Acerca del Colegio</h1>
      <div className="w-16 h-1 bg-yellow-400 mb-10 rounded"></div>

      <div className="space-y-10">
        <div className="bg-white rounded-2xl shadow p-8 border-l-4 border-blue-700">
          <h2 className="text-xl font-bold text-blue-800 mb-3">📜 Historia</h2>
          <p className="text-gray-600 leading-relaxed">
            El Colegio Técnico Profesional Dulce Nombre Diurno es una institución educativa pública ubicada en
            Dulce Nombre de La Unión, Cartago, Costa Rica. Fue fundado con el propósito de brindar educación
            técnica de calidad a la comunidad cartaginesa, formando profesionales capacitados para el mercado
            laboral nacional e internacional.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8 border-l-4 border-yellow-400">
          <h2 className="text-xl font-bold text-blue-800 mb-3">🎯 Misión</h2>
          <p className="text-gray-600 leading-relaxed">
            Formar personas integrales con sólidos conocimientos técnicos y valores humanos, capaces de
            insertarse exitosamente en el mercado laboral o continuar estudios superiores, contribuyendo
            al desarrollo social y económico del país.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8 border-l-4 border-green-500">
          <h2 className="text-xl font-bold text-blue-800 mb-3">🌟 Visión</h2>
          <p className="text-gray-600 leading-relaxed">
            Ser una institución educativa técnica de excelencia, reconocida a nivel regional por la calidad
            de sus egresados, la innovación en sus programas y el impacto positivo en la comunidad de
            Dulce Nombre y la región de Cartago.
          </p>
        </div>

        <div className="bg-blue-900 rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">📍 Información de Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-200">
            <div>
              <p className="font-semibold text-white">Ubicación</p>
              <p>Dulce Nombre de La Unión, Cartago</p>
            </div>
            <div>
              <p className="font-semibold text-white">Modalidad</p>
              <p>Diurno</p>
            </div>
            <div>
              <p className="font-semibold text-white">Tipo</p>
              <p>Colegio Técnico Profesional</p>
            </div>
            <div>
              <p className="font-semibold text-white">País</p>
              <p>Costa Rica</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}