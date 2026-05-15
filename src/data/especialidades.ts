export interface Especialidad {
  id: string
  nombre: string
  descripcion: string
  habilidades: string[]
  perfilEgreso: string
  subareas: string[]
  salidaLaboral: string[]
  duracion: string
  color: string
  icono: string
  ruta: string
  imagen: string
}

export const especialidades: Especialidad[] = [
  {
    id: 'dibujo',
    nombre: 'Dibujo y Modelo de Edificaciones',
    descripcion: 'Formación en diseño arquitectónico, modelado 3D y lectura de planos. Programa aprobado por el Consejo Superior de Educación en sesión 44-2021.',
    habilidades: ['AutoCAD', 'SketchUp', 'Modelado 3D y renderizado', 'Dibujo técnico arquitectónico', 'Instalaciones eléctricas y mecánicas', 'Normativa de construcción', 'Inglés técnico (ESP)'],
    subareas: ['Modelado arquitectónico asistido por computadora', 'Técnicas de presentación y modelos', 'Dibujo y diseño arquitectónico y urbanístico', 'Emprendimiento e innovación', 'English Oriented to Drawing and Modeling of Buildings'],
    perfilEgreso: 'Técnico Medio capaz de elaborar planos arquitectónicos, realizar modelado 3D, interpretar especificaciones técnicas, crear maquetas y apoyar proyectos de construcción según la normativa vigente en Costa Rica.',
    salidaLaboral: ['Estudios de arquitectura e ingeniería', 'Empresas constructoras', 'Municipalidades', 'Sector inmobiliario', 'Empresas de diseño y planificación urbana'],
    duracion: '3 años (décimo, undécimo y duodécimo)',
    color: 'from-amber-500 to-orange-600',
    icono: '🏛️',
    ruta: '/especialidades/dibujo',
    imagen: '/dibujo.jpg'
  },
  {
    id: 'ciberseguridad',
    nombre: 'Ciberseguridad',
    descripcion: 'Especialidad nueva implementada desde 2021. Forma técnicos capaces de incrementar medidas de seguridad y proteger infraestructuras digitales de forma preventiva y correctiva.',
    habilidades: ['Operaciones ciberseguras', 'Seguridad de la información', 'Programación y prueba de software seguro', 'Gestión de riesgos', 'Inglés técnico (ESP)', 'Emprendimiento tecnológico'],
    subareas: ['Tecnologías de la Información', 'Emprendimiento e innovación aplicada a la ciberseguridad', 'Programación y prueba de la seguridad del software', 'Operaciones ciberseguras', 'Seguridad de la información y gestión administrativa'],
    perfilEgreso: 'Técnico Medio en Ciberseguridad capaz de identificar vulnerabilidades, implementar medidas de seguridad preventivas y correctivas, y proteger sistemas, redes y datos de organizaciones públicas y privadas.',
    salidaLaboral: ['Empresas de tecnología', 'Sector financiero y bancario', 'Instituciones del gobierno', 'Zonas francas', 'Empresas de telecomunicaciones'],
    duracion: '3 años (décimo, undécimo y duodécimo)',
    color: 'from-red-500 to-rose-700',
    icono: '🔐',
    ruta: '/especialidades/ciberseguridad',
    imagen: '/ciberseguridad.png'
  },
  {
    id: 'contabilidad',
    nombre: 'Contabilidad',
    descripcion: 'Programa renovado en 2021 por el MEP. Prepara técnicos con sólidos conocimientos contables, financieros y tributarios alineados a las NIIF y normativa costarricense.',
    habilidades: ['Contabilidad general y de costos', 'Declaraciones tributarias (Hacienda)', 'NIIF (Normas Internacionales)', 'Excel avanzado', 'Nóminas y planillas', 'Auditoría básica', 'Inglés contable (ESP)'],
    subareas: ['Tecnologías de información aplicadas a la contabilidad', 'Contabilidad financiera', 'Contabilidad de costos', 'Tributación y legislación', 'Emprendimiento e innovación'],
    perfilEgreso: 'Técnico Medio en Contabilidad capaz de llevar registros financieros, elaborar estados contables, gestionar nóminas, realizar declaraciones tributarias y aplicar las NIIF en empresas públicas y privadas de Costa Rica.',
    salidaLaboral: ['Empresas privadas (contabilidad y finanzas)', 'Ministerio de Hacienda', 'Firmas de auditoría', 'Cooperativas', 'Emprendimiento propio'],
    duracion: '3 años (décimo, undécimo y duodécimo)',
    color: 'from-green-500 to-emerald-700',
    icono: '📊',
    ruta: '/especialidades/contabilidad',
    imagen: '/conta.jpg'
  },
  {
    id: 'redes',
    nombre: 'Redes y Soporte de Sistemas Operativos',
    descripcion: 'Programa aprobado en sesión 37-2020 del CSE. Forma técnicos en instalación, configuración y mantenimiento de redes de comunicación y sistemas operativos con énfasis en ciberseguridad.',
    habilidades: ['Configuración de redes (Cisco)', 'Windows Server y Linux', 'Cableado estructurado', 'Virtualización', 'Fundamentos de ciberseguridad', 'Bases de datos', 'Inglés técnico (ESP)'],
    subareas: ['Tecnologías de información aplicadas a redes y SO', 'Administración y soporte de computadoras', 'Fundamentos de programación en redes', 'Enrutamiento y conmutación', 'Operaciones de ciberseguridad', 'Emprendimiento e innovación'],
    perfilEgreso: 'Técnico Medio capaz de instalar, configurar y mantener infraestructuras de red y sistemas operativos, aplicando normativa y políticas de seguridad vigentes, con autonomía y ética en sus tareas.',
    salidaLaboral: ['Empresas de tecnología e informática', 'Proveedores de internet (ISPs)', 'Instituciones públicas (soporte TI)', 'Zonas francas', 'Empresas de telecomunicaciones'],
    duracion: '3 años (décimo, undécimo y duodécimo)',
    color: 'from-blue-500 to-cyan-700',
    icono: '🌐',
    ruta: '/especialidades/redes',
    imagen: ''
  },
  {
    id: 'movil',
    nombre: 'Desarrollo de Aplicaciones Móviles',
    descripcion: 'Programa aprobado en sesión 13-2023 del CSE. Responde a la alta demanda del sector tecnológico en apps nativas, WebApps e híbridas para Android e iOS.',
    habilidades: ['Apps nativas (Android/iOS)', 'React Native y Flutter', 'Firebase y bases de datos móviles', 'UI/UX para móviles', 'Eficiencia energética en apps', 'Emprendimiento digital', 'Inglés técnico (ESP)'],
    subareas: ['Tecnologías de información aplicadas al desarrollo móvil', 'Desarrollo de aplicaciones nativas', 'Desarrollo de WebApps e híbridas', 'Configuración y soporte de aplicaciones', 'Emprendimiento e innovación', 'English Oriented to Mobile Development'],
    perfilEgreso: 'Técnico Medio capaz de crear, publicar y mantener aplicaciones móviles nativas e híbridas para Android e iOS, aplicando principios de ciberseguridad, eficiencia energética y estándares de la industria 4.0.',
    salidaLaboral: ['Empresas de software y tecnología', 'Startups tecnológicas', 'Zonas francas', 'Agencias digitales', 'Emprendimiento propio (app development)'],
    duracion: '3 años (décimo, undécimo y duodécimo)',
    color: 'from-violet-500 to-purple-700',
    icono: '📱',
    ruta: '/especialidades/movil',
    imagen: '/desarrollo.png'
  },
  {
    id: 'comercial',
    nombre: 'Ejecutivo Comercial',
    descripcion: 'Programa renovado por el MEP como "Ejecutivo Comercial y de Servicio al Cliente". Forma técnicos bilingües para plataformas de servicios bancarios, hoteleros, financieros y zonas francas.',
    habilidades: ['Ventas consultivas y negociación', 'Atención al cliente bilingüe (español-inglés)', 'CRM y herramientas digitales', 'Marketing digital', 'Plataformas bancarias y financieras', 'Emprendimiento comercial'],
    subareas: ['Tecnologías de información aplicadas al área comercial', 'Servicio al cliente y relaciones públicas', 'Técnicas de ventas y negociación', 'Inglés conversacional y comercial (ESP)', 'Emprendimiento e innovación'],
    perfilEgreso: 'Técnico Medio bilingüe capaz de gestionar clientes, ejecutar estrategias de venta, manejar plataformas de servicios bancarios y hoteleros, y desenvolverse con calidad en empresas públicas y privadas o crear su propio negocio.',
    salidaLaboral: ['Zonas francas (call centers)', 'Sector bancario y financiero', 'Sector hotelero y turismo', 'Empresas de ventas y mercadeo', 'Emprendimiento propio'],
    duracion: '3 años (décimo, undécimo y duodécimo)',
    color: 'from-pink-500 to-rose-600',
    icono: '💼',
    ruta: '/especialidades/comercial',
    imagen: '/ejecutivo.jpg'
  },
  {
    id: 'electronica',
    nombre: 'Electrónica Industrial',
    descripcion: 'Programa aprobado en sesión 46-2021 del CSE. Orienta al estudiante hacia la Cuarta Revolución Industrial con formación en automatización, robótica y sistemas de control electrónico.',
    habilidades: ['Automatismo y control industrial', 'PLC y robótica', 'Electrónica analógica y digital', 'Electroneumática e hidráulica', 'Instalaciones eléctricas', 'Energías verdes', 'Inglés técnico (ESP)'],
    subareas: ['Tecnologías de información aplicada a la Electrónica industrial', 'Instalaciones eléctricas', 'Semiconductores', 'Electrónica analógica y digital', 'Automatismo industrial', 'Control industrial', 'English Oriented to Industrial Electronics'],
    perfilEgreso: 'Técnico Medio en Electrónica Industrial capaz de instalar, mantener y reparar sistemas de automatización y control electrónico, sistemas de potencia industrial, electroneumática, hidráulica y robótica en entornos industriales.',
    salidaLaboral: ['Industria manufacturera', 'Empresas de dispositivos médicos', 'Sector alimentario y bebidas', 'Empresas de telecomunicaciones', 'Plantas industriales y zonas francas'],
    duracion: '3 años (décimo, undécimo y duodécimo)',
    color: 'from-teal-500 to-cyan-700',
    icono: '⚡',
    ruta: '/especialidades/electronica',
    imagen: '/electronica.jpg'
  }
]