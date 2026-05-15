import { useState, useRef, useEffect } from 'react'

interface Mensaje {
  rol: 'user' | 'assistant' | 'system'
  contenido: string
  opciones?: string[]
}

const SYSTEM_PROMPT = `Eres el asistente virtual oficial del Colegio Técnico Profesional Dulce Nombre Diurno, ubicado en Dulce Nombre de La Unión, Cartago, Costa Rica.

CONTACTO Y UBICACIÓN:
- Dirección: 50 metros oeste y 50 metros sur del cementerio de Dulce Nombre, Cartago
- Teléfono: 2553-6190
- Correo: ctp.dulcenombre@mep.go.cr
- Web admisión: admision.ctpdulcenombre.com
- Facebook: CTP Dulce Nombre Oficial

PROCESO DE ADMISIÓN:
- Requisito: estar cursando noveno año
- Incluye: inscripción, entrega de documentos, prueba de admisión y entrevista
- Pruebas: generalmente entre octubre y noviembre
- Es colegio público (MEP), sin costo de matrícula ni mensualidad
- Para fechas exactas: admision.ctpdulcenombre.com o llamar al 2553-6190

ESPECIALIDADES (todas 3 años, título Técnico de Nivel Medio MEP):
1. Dibujo y Modelo de Edificaciones: AutoCAD, SketchUp, modelado 3D, planos arquitectónicos. Trabaja en: estudios de arquitectura, constructoras, municipalidades.
2. Ciberseguridad: seguridad de sistemas, operaciones ciberseguras, programación segura. Trabaja en: empresas tecnología, bancos, gobierno, zonas francas.
3. Contabilidad: contabilidad financiera, costos, tributación costarricense, NIIF. Trabaja en: empresas privadas, Hacienda, auditoría, cooperativas.
4. Redes y Soporte de Sistemas Operativos: Cisco, Windows Server, Linux, virtualización, ciberseguridad. Trabaja en: empresas TI, ISPs, soporte institucional, zonas francas.
5. Desarrollo de Aplicaciones Móviles: apps nativas Android/iOS, React Native, Flutter, Firebase. Trabaja en: software, startups, zonas francas, emprendimiento.
6. Ejecutivo Comercial: ventas, servicio al cliente bilingüe (español-inglés), CRM, marketing digital. Trabaja en: zonas francas, bancos, hoteles, call centers.
7. Electrónica Industrial: automatización, PLC, robótica, electrónica analógica y digital, instalaciones eléctricas. Trabaja en: manufactura, dispositivos médicos, zonas francas.

INSTRUCCIONES IMPORTANTES:
- Responde siempre en español, de forma amable y concisa
- Cuando el usuario exprese intereses, gustos o habilidades, recomiéndale 1 o 2 especialidades con explicación de por qué encajan
- Si preguntan qué especialidad elegir, hacé preguntas para entender sus intereses primero
- Al recomendar, mencioná el nombre exacto de la especialidad y la razón
- Recordá lo que el usuario mencionó antes en la conversación y usalo para personalizar tus respuestas
- Para fechas exactas de admisión: admision.ctpdulcenombre.com o 2553-6190
- Si preguntan algo fuera del colegio, redirigí amablemente`

const OPCIONES_INICIALES = [
  '¿Qué especialidades tienen?',
  'Ayudame a elegir una especialidad',
  '¿Cómo es la admisión?',
  '¿Cuánto cuesta?',
]

const OPCIONES_INTERESES = [
  'Me gustan las computadoras 💻',
  'Me interesa el diseño y arte 🎨',
  'Me gustan los números y finanzas 📊',
  'Me interesan los negocios 💼',
  'Me gustan los circuitos y electrónica ⚡',
  'Me gustan las construcciones 🏛️',
]

export default function ChatBot() {
  const [abierto, setAbierto] = useState(false)
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      rol: 'assistant',
      contenido: '¡Hola! Soy el asistente del CTP Dulce Nombre Diurno 👋 ¿En qué te puedo ayudar hoy?',
      opciones: OPCIONES_INICIALES,
    }
  ])
  const [input, setInput] = useState('')
  const [cargando, setCargando] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes])

  const detectarOpciones = (contenido: string): string[] | undefined => {
    const lower = contenido.toLowerCase()
    if (
      lower.includes('qué te gusta') ||
      lower.includes('cuáles son tus intereses') ||
      lower.includes('qué área') ||
      lower.includes('qué te interesa') ||
      lower.includes('contame') ||
      lower.includes('cuéntame') ||
      lower.includes('háblame de vos')
    ) {
      return OPCIONES_INTERESES
    }
    if (
      lower.includes('algo más') ||
      lower.includes('más preguntas') ||
      lower.includes('puedo ayudarte') ||
      lower.includes('más información')
    ) {
      return OPCIONES_INICIALES
    }
    return undefined
  }

  const enviar = async (textoOverride?: string) => {
    const texto = textoOverride ?? input
    if (!texto.trim() || cargando) return

    const nuevosMensajes: Mensaje[] = [...mensajes, { rol: 'user', contenido: texto }]
    setMensajes(nuevosMensajes)
    setInput('')
    setCargando(true)

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          max_tokens: 600,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...nuevosMensajes.map(m => ({ role: m.rol, content: m.contenido }))
          ]
        })
      })

      const data = await response.json()

      if (data.choices?.[0]?.message) {
        const contenido = data.choices[0].message.content
        const opciones = detectarOpciones(contenido)
        setMensajes(prev => [...prev, { rol: 'assistant', contenido, opciones }])
      } else if (data.error) {
        setMensajes(prev => [...prev, { rol: 'assistant', contenido: 'Error: ' + data.error.message }])
      } else {
        setMensajes(prev => [...prev, { rol: 'assistant', contenido: 'No se pudo obtener respuesta. Intentá de nuevo.' }])
      }
    } catch (err) {
      console.error('Error:', err)
      setMensajes(prev => [...prev, { rol: 'assistant', contenido: 'Error de conexión. Intentá de nuevo o llamá al 2553-6190.' }])
    } finally {
      setCargando(false)
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setAbierto(!abierto)}
        aria-label="Abrir asistente"
        className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-amber-200 z-50 transition-all hover:scale-105"
        style={{ width: '52px', height: '52px' }}
      >
        {abierto
          ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        }
      </button>

      {/* Panel de chat */}
      {abierto && (
        <div
          className="fixed bottom-24 right-6 w-80 bg-white border border-zinc-100 rounded-2xl shadow-xl shadow-zinc-100/80 z-50 flex flex-col overflow-hidden"
          style={{ maxHeight: '560px' }}
        >
          {/* Header */}
          <div className="bg-white border-b border-zinc-100 px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xs">C</span>
            </div>
            <div>
              <p className="text-zinc-900 text-sm font-semibold">Asistente CTP</p>
              <p className="text-zinc-400 text-xs">Dulce Nombre Diurno</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-zinc-400 text-xs">En línea</span>
            </div>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {mensajes.map((m, i) => (
              <div key={i}>
                {/* Burbuja */}
                <div className={`flex ${m.rol === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2`}>
                  {m.rol === 'assistant' && (
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                  )}
                  <div className={`max-w-[75%] px-3 py-2 text-sm leading-relaxed rounded-xl ${
                    m.rol === 'user'
                      ? 'bg-amber-400 text-white rounded-br-sm'
                      : 'bg-white text-zinc-700 border border-zinc-100 shadow-sm rounded-bl-sm'
                  }`}>
                    {m.contenido}
                  </div>
                </div>

                {/* Opciones de respuesta rápida — solo en el último mensaje del asistente */}
                {m.rol === 'assistant' && m.opciones && i === mensajes.length - 1 && !cargando && (
                  <div className="mt-2 ml-8 flex flex-wrap gap-1.5">
                    {m.opciones.map((op, j) => (
                      <button
                        key={j}
                        onClick={() => enviar(op)}
                        className="text-xs text-zinc-600 hover:text-amber-700 bg-white hover:bg-amber-50 border border-zinc-200 hover:border-amber-300 rounded-full px-3 py-1.5 transition-all text-left"
                      >
                        {op}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Indicador de escritura animado */}
            {cargando && (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <div className="bg-white border border-zinc-100 shadow-sm px-4 py-2.5 rounded-xl rounded-bl-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-zinc-100 flex gap-2 bg-white flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && enviar()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-zinc-50 border border-zinc-200 text-zinc-800 placeholder-zinc-400 rounded-full px-4 py-2 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
            />
            <button
              onClick={() => enviar()}
              disabled={cargando || !input.trim()}
              className="bg-amber-400 hover:bg-amber-500 text-white rounded-full flex items-center justify-center disabled:opacity-40 transition-colors shadow-sm flex-shrink-0"
              style={{ width: '36px', height: '36px' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}