import { ProgramDetail, StrategicPillar, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  brandName: 'E² SQUARE',
  brandDisplay: 'E2 SQUARE',
  brandSub: 'Soluciones Globales • Potenciamos la Educación',
  groupName: 'Grupo Estudiantes Embajadores',
  year: '2026',
  headquarters: {
    address: 'Calzada del Valle #245 local 207, Col. Del Valle',
    city: 'San Pedro Garza García, N.L. C.P. 66220',
    country: 'México',
    phone: '(81) 8335.2711',
    phoneFormatted: '+52 (81) 8335-2711',
    whatsappNumber: '528183352711',
    email: 'info@e2-square.com',
    secondaryEmail: 'rherrera@estudiantesembajadores.com',
    website: 'https://e2-square.com/',
    catalogUrl: 'https://estudiantes.aflip.in/'
  },
  stats: [
    { value: '37+', label: 'Años de Experiencia', sub: 'Líderes en educación internacional y movilidad' },
    { value: '36', label: 'Países con Programas', sub: 'Presencia, convenios y destinos globales' },
    { value: '+150', label: 'Organizaciones Mundiales', sub: 'Alianzas educativas oficiales y certificaciones' },
    { value: '35,000+', label: 'Alumnos en Movilidad', sub: 'Experiencias de vida y formación internacional' },
    { value: '+10,000', label: 'Alumnos Formados / Año', sub: 'Competencias digitales, idiomas y STEAM' },
    { value: '9 Años', label: 'Mejor Agencia en México', sub: 'Reconocimiento y nominación mundial del sector' },
  ],
  accreditations: [
    { name: 'Cognia USA', desc: 'Acreditación oficial internacional para Doble Diploma Mex-USA' },
    { name: 'Red Oficial TOEFL', desc: 'Centro evaluador y certificador de validez mundial' },
    { name: 'RVOE SEP', desc: 'Asesoría y reconocimiento de validez oficial de estudios universitarios' },
    { name: 'AMPEI', desc: 'Asociación Mexicana para la Educación Internacional' },
    { name: 'AMTE', desc: 'Asociación Mexicana de Turismo Educativo' },
    { name: 'WYSE Travel', desc: 'World Youth Student and Educational Travel Confederation' },
    { name: 'Arukay AI', desc: '3er Lugar Mejor Tecnología Educativa del Mundo 2025' }
  ]
};

export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    number: '01',
    title: 'Internacionalización Real',
    description: 'Transformamos a tu institución en un auténtico International School mediante programas oficiales con validez global.',
    impact: 'Estatus internacional inmediato y proyección de prestigio institucional.'
  },
  {
    number: '02',
    title: 'Ventajas Competitivas Únicas',
    description: 'Diferenciadores pedagógicos que posicionan al colegio muy por encima de la oferta educativa tradicional de la región.',
    impact: 'Propuesta de valor inigualable para padres de familia exigentes.'
  },
  {
    number: '03',
    title: 'Generación de Ingresos Adicionales',
    description: 'Modelos financieros sustentables y revenue-share institucional que crean nuevas fuentes de flujo para el colegio.',
    impact: 'Retorno de inversión medible y reinversión en infraestructura.'
  },
  {
    number: '04',
    title: 'Tecnología e Inteligencia Artificial',
    description: 'Integración pedagógica real de IA, STEAM y entornos digitales, no solo herramientas accesorias.',
    impact: 'Alineación con la economía digital y desarrollo docente certificado.'
  },
  {
    number: '05',
    title: 'Captación y Retención de Matrícula',
    description: 'Programas de alto impacto que fidelizan a las familias desde secundaria hasta su pase a universidades top.',
    impact: 'Incremento sostenido en la tasa de permanencia y nuevo ingreso.'
  }
];

export const HOLISTIC_SOLUTION = [
  {
    title: 'Planeación y Ejecución',
    desc: 'Diseño integral de proyectos a corto, mediano y largo plazo con acompañamiento directivo cercano y personalizado.',
    icon: 'CalendarCheck'
  },
  {
    title: 'Visión Estratégica',
    desc: 'Ruta de crecimiento hacia la internacionalización formal y vanguardia académica para los próximos 5 años.',
    icon: 'Compass'
  },
  {
    title: 'Control y Seguimiento',
    desc: 'Dashboards analíticos para directores y coordinadores con métricas individuales por alumno, grupo y campus.',
    icon: 'BarChart3'
  },
  {
    title: 'Retorno de Inversión',
    desc: 'Impacto económico directo por retención de estudiantes y esquemas de co-creación de valor financiero.',
    icon: 'TrendingUp'
  }
];

export const PROGRAMS: ProgramDetail[] = [
  {
    id: 'doble-diploma',
    number: 1,
    title: 'Internacionalización Real con Doble Diploma Mex-USA',
    subtitle: 'Título oficial de High School estadounidense sin salir de México',
    category: 'internacionalizacion',
    tagline: 'Convierte de inmediato a tu colegio en un auténtico "International School"',
    description: 'Los alumnos obtienen el diploma oficial de Bachillerato de EE. UU. respaldado y acreditado por Cognia, combinando su currículo mexicano oficial con solo 5 materias especializadas online.',
    badge: 'Acreditado Cognia',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Validez oficial simultánea: Certificado SEP Mexicano + High School Diploma USA',
      'Modelo flexible sustitutivo y complementario de solo 5 materias clave',
      'Acceso desde 8vo a 12vo grado con más de 150 materias electivas y cursos Advanced Placement (AP)',
      'Convenios de admisión directa y becas preferenciales en más de 30 universidades de primer nivel en EE. UU.',
      'Acompañamiento docente y tutoría bilingüe continua'
    ],
    keyStats: [
      { label: 'Materias requeridas', value: 'Solo 5' },
      { label: 'Acreditación', value: 'Cognia USA' },
      { label: 'Convenios Univ. EE.UU.', value: '+30 directos' },
      { label: 'Catálogo de materias', value: '+150 & AP' }
    ],
    institutionalBenefit: 'Diferenciador supremo en admisiones que justifica colegiaturas de élite e incrementa drásticamente la retención de secundaria a preparatoria.'
  },
  {
    id: 'arukay-ai',
    number: 2,
    title: 'Arukay AI Campus: Escuela en la Era de la Inteligencia Artificial',
    subtitle: 'Galardonado como 3er Lugar a la Mejor Tecnología Educativa del Mundo 2025',
    category: 'tecnologia_ia',
    tagline: 'Currículo K-12 de Inteligencia Artificial, Certificación Docente y Ciudadanía Digital',
    description: 'Ecosistema de aprendizaje integral para transformar colegios tradicionales en campus pioneros de Inteligencia Artificial, con acompañamiento metodológico y Teoría de Cambio cuantificable.',
    badge: 'Premio Mundial 2025',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Arukay AI Curriculum K-12: Contenidos graduados por edad con agentes de IA pedagógicos, evaluaciones y métricas de progreso',
      'Arukay AI Teacher Certification: Ruta estructurada para capacitar y certificar a la plantilla docente en el uso e integración pedagógica de la IA',
      'Arukay Digital Citizenship: Formación ética, privacidad, huella digital, pensamiento crítico y toma de decisiones responsables con IA',
      'Teoría del Cambio integrada para medir científicamente el impacto en el aprendizaje institucional'
    ],
    keyStats: [
      { label: 'Reconocimiento', value: 'Top 3 Global 2025' },
      { label: 'Alcance', value: 'K-12 Completo' },
      { label: 'Docentes', value: 'Certificación Oficial' },
      { label: 'Metodología', value: 'Teoría de Cambio' }
    ],
    institutionalBenefit: 'Garantiza que el colegio lidere la conversación tecnológica regional con un programa formal de IA avalado internacionalmente.'
  },
  {
    id: 'viajes-academicos',
    number: 3,
    title: 'Viajes Académicos y de Graduación de Alto Nivel',
    subtitle: 'Experiencias de inmersión global que trascienden el aula convencional',
    category: 'experiencias',
    tagline: 'Silicon Valley, NASA, ONU, Boston, Europa y programas de liderazgo en España y China',
    description: 'Itinerarios curriculares especializados donde los estudiantes visitan centros neurálgicos de ciencia, diplomacia y tecnología mundial, con logística prémium integral y respaldo de 37 años.',
    badge: 'Experiencias Globales',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Rutas académicas élite: Silicon Valley, Disney STEAM, NASA Space Center, Harvard/MIT Boston, ONU Nueva York y Washington D.C.',
      'Inmersión en Liderazgo y Emprendimiento Escolar: Misiones en España y China enfocadas en mentalidad global',
      'Viajes de Graduación Personalizados: Flexibilidad total en fechas, destinos, presupuesto y actividades con valor curricular',
      'Facilidades institucionales: Gratuidades completas y viáticos especiales para directivos y maestros acompañantes',
      'Catálogo interactivo digital con itinerarios paso a paso (https://estudiantes.aflip.in/)'
    ],
    keyStats: [
      { label: 'Países destino', value: '36 países' },
      { label: 'Alumnos viajeros', value: '+35,000' },
      { label: 'Gratuidades', value: 'Para profesores' },
      { label: 'Seguridad', value: 'Póliza integral 360°' }
    ],
    institutionalBenefit: 'Fortalece el orgullo de pertenencia institucional, la fidelización de padres de familia y posiciona al colegio como una ventana al mundo.'
  },
  {
    id: 'esports-academy',
    number: 4,
    title: 'E-Sports Academy & STEAM: Habilidades en la Economía Digital',
    subtitle: 'De la pantalla aislada en casa a una disciplina académica colegial supervisada',
    category: 'tecnologia_ia',
    tagline: 'Transformación de pasiones juveniles en habilidades STEAM de alta demanda',
    description: 'Implementación de academias y ligas competitivas colegiales reguladas, combinadas con aprendizaje de programación, producción audiovisual, mercadotecnia interactiva y trabajo colaborativo.',
    badge: 'Vanguardia Juvenil',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Entorno seguro y supervisado con mentores y psicólogos especializados',
      'Organización de Ligas Colegiales intraescolares e interescolares con identidad de campus',
      'Currículo STEAM K-12: Gamificación aplicada a la ciencia de datos, coding y animación 3D',
      'Formación en carreras digitales: Broadcast, diseño de torneos, marketing digital y analítica'
    ],
    keyStats: [
      { label: 'Enfoque', value: 'STEAM & Trabajo Equipo' },
      { label: 'Niveles', value: 'Secundaria & Prepa' },
      { label: 'Competición', value: 'Liga Colegial' },
      { label: 'Habilidades', value: 'Economía Digital' }
    ],
    institutionalBenefit: 'Engancha a los alumnos en un espacio institucional controlado y atrae a nuevas generaciones interesadas en industrias creativas tecnológicas.'
  },
  {
    id: 'centro-idiomas',
    number: 5,
    title: 'Centro de Idiomas Digital & Marca Blanca Institucional',
    subtitle: 'Plataforma multilingüe 24/7 personalizada con el escudo y colores de tu colegio',
    category: 'internacionalizacion',
    tagline: 'Licencias anuales de hasta 10 idiomas con panel de control directivo',
    description: 'Infraestructura tecnológica que permite a la institución ofrecer su propio centro virtual de idiomas (Inglés, Alemán, Francés, Coreano, Japonés, Ruso, Italiano, etc.) en modalidad Whitelabel.',
    badge: 'Whitelabel Institucional',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      '10 idiomas disponibles con contenidos estructurados en niveles A1 a C2',
      'Marca Blanca 100% personalizada con identidad gráfica y logotipo institucional',
      'Panel administrativo para directores: analíticas por campus, grado y avance individual en tiempo real',
      'Formación equilibrada en las 4 competencias: comprensión auditiva, lectora, expresión oral y escrita',
      'Articulación directa con certificaciones oficiales internacionales'
    ],
    keyStats: [
      { label: 'Idiomas', value: 'Hasta 10 idiomas' },
      { label: 'Acceso', value: '24/7 Multiplataforma' },
      { label: 'Personalización', value: 'Marca Blanca' },
      { label: 'Administración', value: 'Panel por Campus' }
    ],
    institutionalBenefit: 'Crea una nueva línea de ingresos directos para la institución y amplía la oferta curricular sin incrementar nómina docente fija.'
  },
  {
    id: 'evaluaciones-alumno',
    number: 6,
    title: 'Sistema Integral de 9 Evaluaciones para el Alumno',
    subtitle: 'Psicometría, vocación y desarrollo socioemocional impulsados por IA y algoritmos',
    category: 'evaluacion',
    tagline: 'Reportes directivos personalizados para potenciar talentos y prevenir deserción',
    description: 'Plataforma gamificada y multiplataforma que evalúa de forma individual o en bloque las 9 dimensiones críticas del estudiante durante cada ciclo escolar de preparatoria y secundaria.',
    badge: 'Algoritmos & IA',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      '9 Evaluaciones especializadas: Orientación Vocacional, Talento Futuro, Habilidades, Liderazgo, Emprendimiento, Inteligencia Emocional, Socioemocional, Factores de Riesgo / Adicciones, Global Success',
      'Aplicación flexible en bloque o individual con interfaz intuitiva y atractiva para jóvenes',
      'Panel de control institucional para psicopedagogos, tutores y directores académicos',
      'Planes de acción recomendados automáticos para maximizar las fortalezas de cada estudiante'
    ],
    keyStats: [
      { label: 'Evaluaciones', value: '9 Dimensiones' },
      { label: 'Tecnología', value: 'IA & Gamificación' },
      { label: 'Reportes', value: 'Individual & Institucional' },
      { label: 'Frecuencia', value: 'Anual estructurada' }
    ],
    institutionalBenefit: 'Brinda a los padres de familia una radiografía científica del crecimiento de sus hijos y dota a la escuela de un departamento de orientación vocacional de vanguardia.'
  },
  {
    id: 'certificacion-toefl',
    number: 7,
    title: 'Certificación Internacional Oficial del Nivel de Inglés (TOEFL)',
    subtitle: 'Integra a tu colegio a la red mundial de evaluación TOEFL con precios preferenciales',
    category: 'internacionalizacion',
    tagline: 'Validez internacional para secundaria, preparatoria y universidad',
    description: 'Alianza formal para que la institución evalúe y certifique el estándar de inglés de sus alumnos con la prueba de mayor reconocimiento en el planeta, contando con seguimiento comercial dedicado.',
    badge: 'Red Oficial TOEFL',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Certificación avalada globalmente para admisiones universitarias e intercambios',
      'Precios institucionales con tarifas con descuento exclusivo para colegios aliados',
      'Oportunidad de ser centro examinador autorizado dentro de las propias instalaciones del colegio',
      'Métricas comparativas institucionales contra estándares internacionales CEFR'
    ],
    keyStats: [
      { label: 'Validez', value: 'Mundial' },
      { label: 'Niveles', value: 'Sec, Prepa, Univ.' },
      { label: 'Tarifas', value: 'Convenio Especial' },
      { label: 'Soporte', value: 'Comercial continuo' }
    ],
    institutionalBenefit: 'Acredita formalmente el nivel bilingüe de la institución con el sello más prestigioso del mundo angloparlante.',
    targetAudience: 'Secundaria, Preparatoria y Universidad',
    accreditation: 'ETS TOEFL Official Network',
    modality: 'Presencial en Campus / Digital'
  }
];

export const OTHER_SOLUTIONS = [
  {
    title: 'Movilidad Internacional de Élite',
    desc: 'Intercambios estudiantiles de semestre/año, campamentos de verano de ciencia y humanidades, y programas de educación superior en 36 países.'
  },
  {
    title: 'Experiencia Profesional Global',
    desc: 'Prácticas internacionales, voluntariados globales, programas de Camp Counselor y Work & Travel para egresados de preparatoria y universidad.'
  },
  {
    title: 'Seguros Internacionales Especializados',
    desc: 'Cobertura médica y de asistencia integral diseñada exclusivamente para la movilidad y tranquilidad de comunidades estudiantiles.'
  },
  {
    title: 'Profesionalización y Postgrados Docentes',
    desc: 'Maestrías y doctorados en educación con reconocimiento internacional para elevar el perfil académico de la planta profesoral del colegio.'
  },
  {
    title: 'Universidad Digital Institucional',
    desc: '10 licenciaturas, 7 maestrías, 5 especializaciones, bachillerato digital y 2 doctorados en modalidad 100% en línea.'
  }
];

export const IMPLEMENTATION_STEPS = [
  {
    step: '01',
    title: 'Sesión Diagnóstica con Rectoría y Directores',
    desc: 'Reunión personalizada para identificar prioridades académicas, visión institucional y metas de posicionamiento 2026.'
  },
  {
    step: '02',
    title: 'Desarrollo de Propuesta Estratégica Específica',
    desc: 'Diseño de la solución a la medida de la institución: Doble Diploma, AI Campus, Viajes o Idiomas adaptados al calendario escolar.'
  },
  {
    step: '03',
    title: 'Evaluación y Viabilidad Financiera',
    desc: 'Presentación formal de cotizaciones institucionales, esquemas de retorno de inversión e ingresos compartidos para el colegio.'
  },
  {
    step: '04',
    title: 'Piloto y Arranque Guiado',
    desc: 'Fase de prueba controlada con acompañamiento técnico, pedagógico y sensibilización a directivos y docentes.'
  },
  {
    step: '05',
    title: 'Ajuste Fino e Implementación Definitiva',
    desc: 'Personalización de plataformas con la identidad del colegio y lanzamiento formal ante la comunidad de padres de familia.'
  },
  {
    step: '06',
    title: 'Seguimiento Continuo y Reportes Ejecutivos',
    desc: 'Monitoreo periódico, métricas de retención, satisfacción de alumnos y reportes de progreso directos a la junta de gobierno.'
  }
];

export const TESTIMONIAL_CASES = [
  {
    quote: 'La incorporación del Doble Diploma Mex-USA transformó nuestra matrícula de preparatoria. Los padres de familia reconocieron de inmediato el valor de una acreditación Cognia.',
    author: 'Dra. María Elena Garza',
    role: 'Directora General de Campus',
    badge: 'Colegio Bilingüe de Alto Nivel, N.L.'
  },
  {
    quote: 'Arukay AI nos permitió capacitar a nuestros docentes con seriedad pedagógica. Hoy nuestros alumnos de secundaria programan con IA responsable y ética.',
    author: 'Mtro. Carlos R. Villaseñor',
    role: 'Director Académico e Innovación',
    badge: 'Instituto de Excelencia, CDMX'
  },
  {
    quote: 'Con E2 Square contamos con un socio de 37 años de experiencia. La tranquilidad operativa en los viajes a NASA y Silicon Valley es total.',
    author: 'Lic. Fernando Morales',
    role: 'Coordinador de Relaciones Internacionales',
    badge: 'Red Educativa Regional'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'La incorporación del Doble Diploma Mex-USA acreditado por Cognia transformó nuestra preparatoria. Ofrecer un título oficial de Estados Unidos sin que los alumnos salgan de México nos posicionó de inmediato como la opción número uno ante las familias más exigentes.',
    author: 'Dra. María Elena Garza Canales',
    role: 'Directora General de Campus',
    institution: 'Colegio Bilingüe San Pedro',
    location: 'San Pedro Garza García, N.L.',
    programImplemented: 'Doble Diploma Mex-USA (Cognia)',
    metric: '+38% Retención',
    metricLabel: 'en paso de Secundaria a Bachillerato',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=320&h=320&q=80',
    badge: 'Acreditación Cognia USA',
    year: 'Ciclo 2025-2026'
  },
  {
    id: 'test-2',
    quote: 'No queríamos que la Inteligencia Artificial fuera solo un discurso en nuestro colegio. Con Arukay logramos un currículo K-12 estructurado, ética digital y la certificación oficial de todos nuestros maestros. Una diferencia competitiva palpable.',
    author: 'Dr. Alejandro Valenzuela Ochoa',
    role: 'Rector Institucional',
    institution: 'Instituto Tecnológico & Educativo de Vanguardia',
    location: 'Ciudad de México',
    programImplemented: 'Arukay AI Campus & Certificación Docente',
    metric: '100% Profesores',
    metricLabel: 'certificados en Pedagogía con IA',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&h=320&q=80',
    badge: 'Top 3 Mundial EdTech',
    year: 'Generación 2025'
  },
  {
    id: 'test-3',
    quote: 'La seriedad de E2 Square con sus 37 años de respaldo brindó tranquilidad absoluta a nuestro Patronato. Logramos llevar a más de 160 alumnos a la NASA y Silicon Valley con gratuidades para los profesores acompañantes y una póliza de seguridad 360° impecable.',
    author: 'Mtra. Sofía Castellanos del Río',
    role: 'Directora Académica & Asuntos Internacionales',
    institution: 'Red de Colegios Cumbre',
    location: 'Guadalajara, Jalisco',
    programImplemented: 'Viajes Académicos NASA & Silicon Valley',
    metric: '160+ Alumnos',
    metricLabel: 'en misiones científicas con saldo blanco',
    avatarUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=320&h=320&q=80',
    badge: 'Alianza Internacional',
    year: 'Verano 2025'
  },
  {
    id: 'test-4',
    quote: 'El Centro de Idiomas en Marca Blanca nos permitió ofrecer hasta 10 idiomas con el escudo y colores de nuestro colegio, sin inflar la nómina docente. Además de enriquecer el perfil de egreso, generamos un esquema de ingresos compartidos sumamente rentable.',
    author: 'Ing. Roberto Martínez Elizondo',
    role: 'Presidente del Consejo de Administración',
    institution: 'Colegio Internacional del Bajío',
    location: 'Querétaro, Qro.',
    programImplemented: 'Centro de idiomas digital',
    metric: '+$1.4M MXN',
    metricLabel: 'nuevos ingresos anuales por revenue-share',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=320&h=320&q=80',
    badge: 'Whitelabel 10 Idiomas',
    year: 'Convenio 2025'
  },
  {
    id: 'test-5',
    quote: 'El Sistema de 9 Evaluaciones con Inteligencia Artificial y la certificación oficial TOEFL transformaron el departamento psicopedagógico. Las entregas vocacionales a padres de familia ahora se basan en métricas científicas de proyección profesional.',
    author: 'Lic. Patricia Mondragón Reyes',
    role: 'Directora de Formación y Psicopedagogía',
    institution: 'Instituto Bicultural del Norte',
    location: 'Saltillo, Coahuila',
    programImplemented: 'Sistema de 9 Evaluaciones & Red TOEFL',
    metric: '96% Satisfacción',
    metricLabel: 'en encuestas a padres de familia',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=320&h=320&q=80',
    badge: 'Red Oficial TOEFL',
    year: 'Ciclo 2025-2026'
  }
];
