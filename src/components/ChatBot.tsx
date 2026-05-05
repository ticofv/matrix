import { useState, useRef, useEffect } from 'react'

interface Mensaje {
  rol: 'user' | 'assistant'
  contenido: string
}

export default function ChatBot() {
  const [abierto, setAbierto] = useState(false)
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { rol: 'assistant', contenido: '¡Hola! Soy el asistente del CTP Dulce Nombre. ¿Tienes dudas sobre nuestras especialidades técnicas?' }
  ])
  const [input, setInput] = useState('')
  const [cargando, setCargando] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes])

  const enviar = async () => {
    if (!input.trim() || cargando) return

    const nuevosMensajes: Mensaje[] = [...mensajes, { rol: 'user', contenido: input }]
    setMensajes(nuevosMensajes)
    setInput('')
    setCargando(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1024,
          system: `Eres el asistente virtual del Colegio Técnico Profesional Dulce Nombre Diurno de Cartago, Costa Rica.
Tu función es responder dudas sobre las especialidades técnicas que ofrece el colegio:
- Dibujo y Modelo de Edificaciones
- Ciberseguridad
- Contabilidad
- Redes y Soporte de Sistemas Operativos
- Logística
- Desarrollo de Aplicaciones Móviles
- Ejecutivo Comercial

Responde siempre en español, de forma amable, clara y concisa. Si te preguntan algo fuera del colegio o sus especialidades, redirige amablemente la conversación al tema del colegio.`,
          messages: nuevosMensajes.map(m => ({
            role: m.rol,
            content: m.contenido
          }))
        })
      })

      const data = await response.json()
      const respuesta = data.content[0].text

      setMensajes(prev => [...prev, { rol: 'assistant', contenido: respuesta }])
    } catch (error) {
      setMensajes(prev => [...prev, { rol: 'assistant', contenido: 'Lo siento, hubo un error. Intenta de nuevo.' }])
    } finally {
      setCargando(false)
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setAbierto(!abierto)}
        className="fixed bottom-6 right-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full w-14 h-14 text-2xl shadow-xl z-50 transition-transform hover:scale-110"
      >
        {abierto ? '✕' : '💬'}
      </button>

      {/* Ventana del chat */}
      {abierto && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-blue-100">
          {/* Header */}
          <div className="bg-blue-800 text-white px-4 py-3 flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <div>
              <p className="font-semibold text-sm">Asistente CTP</p>
              <p className="text-xs text-blue-200">Dulce Nombre Diurno</p>
            </div>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-80 bg-gray-50">
            {mensajes.map((m, i) => (
              <div key={i} className={`flex ${m.rol === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  m.rol === 'user'
                    ? 'bg-blue-700 text-white rounded-br-sm'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm'
                }`}>
                  {m.contenido}
                </div>
              </div>
            ))}
            {cargando && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-2xl rounded-bl-sm text-gray-400 text-sm">
                  Escribiendo...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && enviar()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-400"
            />
            <button
              onClick={enviar}
              disabled={cargando}
              className="bg-blue-700 hover:bg-blue-800 text-white rounded-full w-9 h-9 flex items-center justify-center disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}