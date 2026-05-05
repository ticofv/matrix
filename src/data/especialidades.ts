export interface Especialidad {
  id: string
  nombre: string
  descripcion: string
  habilidades: string[]
  perfilEgreso: string
  color: string
  icono: string
  ruta: string
}

export const especialidades: Especialidad[] = [
  {
    id: 'dibujo',
    nombre: 'Dibujo y Modelo de Edificaciones',
    descripcion: 'Formación en diseño arquitectónico, lectura de planos y modelado de estructuras utilizando herramientas digitales modernas.',
    habilidades: ['AutoCAD', 'SketchUp', 'Lectura de planos', 'Diseño arquitectónico', 'Normativa de construcción'],
    perfilEgreso: 'Técnico capaz de elaborar planos arquitectónicos, interpretar especificaciones técnicas y apoyar proyectos de construcción.',
    color: 'from-amber-500 to-orange-600',
    icono: '🏛️',
    ruta: '/especialidades/dibujo'
  },
  {
    id: 'ciberseguridad',
    nombre: 'Ciberseguridad',
    descripcion: 'Protección de sistemas, redes y datos ante amenazas digitales. Análisis de vulnerabilidades y respuesta a incidentes.',
    habilidades: ['Ethical Hacking', 'Redes TCP/IP', 'Criptografía', 'Análisis de malware', 'Normativa ISO 27001'],
    perfilEgreso: 'Técnico en seguridad informática capaz de identificar vulnerabilidades y proteger infraestructuras digitales.',
    color: 'from-red-500 to-rose-700',
    icono: '🔐',
    ruta: '/especialidades/ciberseguridad'
  },
  {
    id: 'contabilidad',
    nombre: 'Contabilidad',
    descripcion: 'Gestión financiera, registro contable y análisis de estados financieros para empresas públicas y privadas.',
    habilidades: ['Contabilidad general', 'Excel avanzado', 'NIIF', 'Declaraciones tributarias', 'Nóminas'],
    perfilEgreso: 'Técnico contable capaz de llevar registros financieros, elaborar estados de cuenta y cumplir obligaciones tributarias.',
    color: 'from-green-500 to-emerald-700',
    icono: '📊',
    ruta: '/especialidades/contabilidad'
  },
  {
    id: 'redes',
    nombre: 'Redes y Soporte de Sistemas Operativos',
    descripcion: 'Instalación, configuración y mantenimiento de redes de datos y sistemas operativos en entornos empresariales.',
    habilidades: ['Cisco Networking', 'Windows Server', 'Linux', 'Soporte técnico', 'Virtualización'],
    perfilEgreso: 'Técnico en redes capaz de instalar y mantener infraestructuras de red y brindar soporte a usuarios.',
    color: 'from-blue-500 to-cyan-700',
    icono: '🌐',
    ruta: '/especialidades/redes'
  },
  {
    id: 'logistica',
    nombre: 'Logística',
    descripcion: 'Gestión de cadenas de suministro, control de inventarios y coordinación de procesos de distribución y transporte.',
    habilidades: ['Gestión de inventarios', 'Supply Chain', 'Software logístico', 'Importación/Exportación', 'Almacenamiento'],
    perfilEgreso: 'Técnico logístico capaz de gestionar inventarios, coordinar proveedores y optimizar procesos de distribución.',
    color: 'from-yellow-500 to-amber-700',
    icono: '🚚',
    ruta: '/especialidades/logistica'
  },
  {
    id: 'movil',
    nombre: 'Desarrollo de Aplicaciones Móviles',
    descripcion: 'Diseño y programación de aplicaciones para Android e iOS usando tecnologías modernas de desarrollo móvil.',
    habilidades: ['Flutter', 'React Native', 'Kotlin', 'Firebase', 'UI/UX Mobile'],
    perfilEgreso: 'Técnico en desarrollo móvil capaz de crear, publicar y mantener aplicaciones para dispositivos móviles.',
    color: 'from-violet-500 to-purple-700',
    icono: '📱',
    ruta: '/especialidades/movil'
  },
  {
    id: 'comercial',
    nombre: 'Ejecutivo Comercial',
    descripcion: 'Técnicas de ventas, atención al cliente, marketing digital y gestión comercial para empresas modernas.',
    habilidades: ['Ventas consultivas', 'CRM', 'Marketing digital', 'Negociación', 'Servicio al cliente'],
    perfilEgreso: 'Técnico comercial capaz de gestionar clientes, ejecutar estrategias de venta y manejar herramientas de CRM.',
    color: 'from-pink-500 to-rose-600',
    icono: '💼',
    ruta: '/especialidades/comercial'
  }
]