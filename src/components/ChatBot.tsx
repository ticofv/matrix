import { useState, useRef, useEffect } from 'react'

interface Mensaje {
  rol: 'user' | 'assistant' | 'system'
  contenido: string
}

const SYSTEM_PROMPT = 'Eres el asistente virtual oficial del Colegio Técnico Profesional Dulce Nombre Diurno, ubicado en Dulce Nombre de La Unión, Cartago, Costa Rica.\n\n' +
'CONTACTO Y UBICACIÓN:\n' +
'- Dirección: 50 metros oeste y 50 metros sur del cementerio de Dulce Nombre, Cartago\n' +
'- Teléfono: 2553-6190\n' +
'- Correo: ctp.dulcenombre@mep.go.cr\n' +
'- Web admisión: admision.ctpdulcenombre.com\n' +
'- Facebook: CTP Dulce Nombre Oficial\n\n' +
'PROCESO DE ADMISIÓN:\n' +
'- Requisito: estar cursando noveno año\n' +
'- Incluye: inscripción, entrega de documentos, prueba de admisión y entrevista\n' +
'- Pruebas: generalmente entre octubre y noviembre\n' +
'- Es colegio público (MEP), sin costo de matrícula ni mensualidad\n' +
'- Para fechas exactas: admision.ctpdulcenombre.com o llamar al 2553-6190\n\n' +
'ESPECIALIDADES (todas 3 años, título Técnico de Nivel Medio MEP):\n' +
'1. Dibujo y Modelo de Edificaciones: AutoCAD, SketchUp, modelado 3D, planos arquitectónicos. Trabaja en: estudios de arquitectura, constructoras, municipalidades.\n' +
'2. Ciberseguridad: seguridad de sistemas, operaciones ciberseguras, programación segura. Trabaja en: empresas tecnología, bancos, gobierno, zonas francas.\n' +
'3. Contabilidad: contabilidad financiera, costos, tributación costarricense, NIIF. Trabaja en: empresas privadas, Hacienda, auditoría, cooperativas.\n' +
'4. Redes y Soporte de Sistemas Operativos: Cisco, Windows Server, Linux, virtualización, ciberseguridad. Trabaja en: empresas TI, ISPs, soporte institucional, zonas francas.\n' +
'5. Desarrollo de Aplicaciones Móviles: apps nativas Android/iOS, React Native, Flutter, Firebase. Trabaja en: software, startups, zonas francas, emprendimiento.\n' +
'6. Ejecutivo Comercial: ventas, servicio al cliente bilingüe (español-inglés), CRM, marketing digital. Trabaja en: zonas francas, bancos, hoteles, call centers.\n' +
'7. Electrónica Industrial: automatización, PLC, robótica, electrónica analógica y digital, instalaciones eléctricas. Trabaja en: manufactura, dispositivos médicos, zonas francas.\n\n' +
'INFORMACIÓN GENERAL:\n' +
'- Colegio público MEP, modalidad diurna\n' +
'- Otorga bachillerato + título técnico de nivel medio\n' +
'- Todas las especialidades incluyen inglés técnico y emprendimiento\n' +
'- Se requiere práctica profesional para graduarse\n\n' +
'INSTRUCCIONES:\n' +
'- Responde siempre en español, amable y conciso\n' +
'- Para fechas exactas de admisión, remitir a admision.ctpdulcenombre.com o 2553-6190\n' +
'- Ayuda a los estudiantes a elegir especialidad según sus intereses\n' +
'- Si preguntan algo fuera del colegio, redirige la conversación'

export default function ChatBot() {
  const [abierto, setAbierto] = useState(false)
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { rol: 'assistant', contenido: '¡Hola! Soy el asistente del CTP Dulce Nombre Diurno 👋 Puedo ayudarte con información sobre especialidades, admisión y contactos. ¿En qué te puedo ayudar?' }
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
      // 1. Cambiamos la URL a la de Groq
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 2. Usamos el formato Bearer Token estándar
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}` 
        },
        body: JSON.stringify({
          // 3. Usamos un modelo válido de Groq
          model: 'llama-3.3-70b-versatile',
          // 4. En Groq, el system prompt va como el primer mensaje del arreglo
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...nuevosMensajes.map(m => ({ role: m.rol, content: m.contenido }))
          ]
        })
      })

      const data = await response.json()
      console.log('API response:', data)

      // 5. La estructura de respuesta de Groq es diferente (compatible con OpenAI)
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setMensajes(prev => [...prev, { rol: 'assistant', contenido: data.choices[0].message.content }])
      } else if (data.error) {
        setMensajes(prev => [...prev, { rol: 'assistant', contenido: 'Error: ' + data.error.message }])
      } else {
        setMensajes(prev => [...prev, { rol: 'assistant', contenido: 'No se pudo obtener respuesta. Intenta de nuevo.' }])
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
      <button
        onClick={() => setAbierto(!abierto)}
        className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-sm w-12 h-12 flex items-center justify-center shadow-2xl z-50 transition-all hover:scale-105"
      >
        {abierto
          ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        }
      </button>

      {abierto && (
        <div className="fixed bottom-24 right-6 w-80 bg-zinc-900 border border-zinc-700 rounded-sm shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center gap-3">
            <div className="w-6 h-6 bg-amber-400 rounded-sm flex items-center justify-center">
              <span className="text-zinc-950 font-bold text-xs">C</span>
            </div>
            <div>
              <p className="text-white text-sm font-medium">Asistente CTP</p>
              <p className="text-zinc-500 text-xs">Dulce Nombre Diurno · Cartago</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80 bg-zinc-900">
            {mensajes.map((m, i) => (
              <div key={i} className={`flex ${m.rol === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed rounded-sm ${
                  m.rol === 'user'
                    ? 'bg-amber-400 text-zinc-950 font-medium'
                    : 'bg-zinc-800 text-zinc-200 border border-zinc-700'
                }`}>
                  {m.contenido}
                </div>
              </div>
            ))}
            {cargando && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-sm text-zinc-500 text-sm">
                  Escribiendo...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-3 pt-3 pb-1 flex gap-2 flex-wrap bg-zinc-950 border-t border-zinc-800">
            {['¿Cómo es la admisión?', '¿Qué especialidades hay?', 'Contacto'].map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="text-xs text-zinc-400 hover:text-amber-400 border border-zinc-700 hover:border-amber-400/40 rounded-sm px-2 py-1 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-zinc-800 flex gap-2 bg-zinc-950">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && enviar()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-zinc-800 border border-zinc-700 text-zinc-200 placeholder-zinc-600 rounded-sm px-3 py-2 text-sm outline-none focus:border-amber-400/50"
            />
            <button
              onClick={enviar}
              disabled={cargando}
              className="bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-sm w-9 h-9 flex items-center justify-center disabled:opacity-40 transition-colors"
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