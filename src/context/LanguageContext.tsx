import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    solutions: string;
    strategy: string;
    methodology: string;
    testimonials: string;
    contact: string;
    metrics: string;
    bookSession: string;
    catalog: string;
    location: string;
    yearsLeadership: string;
    direct: string;
  };
  hero: {
    badge: string;
    cycle: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    subtitleHighlight: string;
    subtitleTail: string;
    bookCta: string;
    catalogCta: string;
    pillar1Tag: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar1Cta: string;
    pillar2Tag: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar2Cta: string;
    pillar3Tag: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar3Cta: string;
    yearsBadge: string;
    cogniaBadge: string;
    cogniaSub: string;
    dualDiplomaBadge: string;
    dualDiplomaSub: string;
    topAiBadge: string;
    topAiSub: string;
    globalReachBadge: string;
    globalReachSub: string;
    toeflBadge: string;
    toeflSub: string;
  };
  solutions: {
    portfolioBadge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    resetFilters: string;
    noResults: string;
    viewTechSheet: string;
    catalogCalloutTitle: string;
    catalogCalloutDesc: string;
    catalogCalloutBtn: string;
    modalCurricularPlan: string;
    modalInstitutionalBenefit: string;
    modalSupport: string;
    modalSupportDesc: string;
    modalReturn: string;
    modalBookSession: string;
    categories: {
      todos: string;
      internacionalizacion: string;
      tecnologia_ia: string;
      idiomas: string;
      evaluacion: string;
      experiencias: string;
    };
    levels: {
      todos: string;
      k12: string;
      prepa: string;
      docentes: string;
    };
  };
  strategy: {
    badge: string;
    title: string;
    subtitle: string;
    holisticBadge: string;
    holisticTitle: string;
    holisticDesc: string;
  };
  methodology: {
    badge: string;
    title: string;
    subtitle: string;
    trainingBadge: string;
    trainingTitle: string;
    trainingDesc: string;
    check1: string;
    check2: string;
    check3: string;
    ecosystemBadge: string;
    ecosystemTitle: string;
    ecosystemSubtitle: string;
    guarantee1Title: string;
    guarantee1Desc: string;
    guarantee2Title: string;
    guarantee2Desc: string;
    guarantee3Title: string;
    guarantee3Desc: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    impactReported: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    bookBtn: string;
    whatsappBtn: string;
    hqTitle: string;
    hqBadge: string;
    hqGroup: string;
    city: string;
    country: string;
  };
  footer: {
    tagline: string;
    programsTitle: string;
    officeTitle: string;
    accessTitle: string;
    bookBtn: string;
    metricsBtn: string;
    catalogLink: string;
    rights: string;
  };
  booking: {
    title: string;
    subtitle: string;
    fullName: string;
    role: string;
    institution: string;
    institutionType: string;
    studentsCount: string;
    email: string;
    phone: string;
    city: string;
    preferredDate: string;
    preferredTime: string;
    meetingFormat: string;
    programsInterest: string;
    notes: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMsg: string;
    closeBtn: string;
  };
}

const TRANSLATIONS: Record<Language, Translations> = {
  es: {
    nav: {
      solutions: 'Soluciones',
      strategy: 'Estrategia',
      methodology: 'Metodología',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      metrics: 'Métricas',
      bookSession: 'Agendar Sesión',
      catalog: 'Catálogo 2026',
      location: 'San Pedro Garza García, N.L. • México',
      yearsLeadership: '37+ Años de Liderazgo',
      direct: 'Directo'
    },
    hero: {
      badge: 'E² SQUARE • Soluciones Globales',
      cycle: 'Ciclo 2026-2027',
      titleLine1: 'Potenciamos la Educación',
      titleLine2: 'con Soluciones Globales de Alto Nivel',
      subtitle: 'Somos la firma aliada de',
      subtitleHighlight: 'directores de colegios, rectores y consejos educativos',
      subtitleTail: 'en México y Latinoamérica. Diseñamos e implementamos programas académicos con validez internacional oficial, inteligencia artificial galardonada y modelos sustentables de co-creación de valor.',
      bookCta: 'Agendar Sesión Estratégica',
      catalogCta: 'Catálogo Interactivo 2026',
      pillar1Tag: 'K-12 & Prepa',
      pillar1Title: 'Colegios & Bachilleratos',
      pillar1Desc: 'Doble Diploma USA acreditado por Cognia, Inteligencia Artificial Arukay K-12, Red Oficial TOEFL y Sistema de 9 Evaluaciones Psicopedagógicas.',
      pillar1Cta: 'Explorar programas escolares',
      pillar2Tag: 'IA & STEAM',
      pillar2Title: 'Inteligencia Artificial & STEAM K-12',
      pillar2Desc: 'Currículo Arukay K-12 de pensamiento computacional e inteligencia artificial, certificación docente y academias formativas de E-Sports con rigor pedagógico.',
      pillar2Cta: 'Ver programas de tecnología',
      pillar3Tag: 'Movilidad Global',
      pillar3Title: 'Viajes Académicos de Élite',
      pillar3Desc: 'Inmersiones formativas en NASA Space Center Houston & Orlando, Silicon Valley, Disney STEAM, Boston Academics, ONU Nueva York y Europa.',
      pillar3Cta: 'Descubrir itinerarios formativos',
      yearsBadge: 'Años de Trayectoria',
      cogniaBadge: 'Acreditación Cognia USA',
      cogniaSub: 'Pase preferencial a +30 universidades',
      dualDiplomaBadge: 'Doble Diploma USA',
      dualDiplomaSub: 'Acreditación Cognia oficial',
      topAiBadge: 'Top 3 Mundial EdTech',
      topAiSub: 'Arukay AI Campus 2025',
      globalReachBadge: '37 Años de Trayectoria',
      globalReachSub: 'Convenios en 36 países',
      toeflBadge: 'Red TOEFL Oficial & SEP',
      toeflSub: 'Validaciones institucionales'
    },
    solutions: {
      portfolioBadge: 'Portafolio Institucional E² Square 2026',
      title: 'Soluciones Educativas de Clase Mundial',
      subtitle: 'Programas integrales llave en mano con validez oficial internacional, soporte docente continuo y modelos financieros de co-creación de valor para su institución.',
      searchPlaceholder: 'Buscar por programa, certificación o habilidad...',
      resetFilters: 'Restablecer todos los filtros',
      noResults: 'No se encontraron soluciones con los filtros seleccionados.',
      viewTechSheet: 'Ver Ficha Técnica y Plan Curricular',
      catalogCalloutTitle: 'Catálogo Digital Completo E² Square 2026',
      catalogCalloutDesc: 'Consulte las especificaciones detalladas de destinos, fechas de salida, convenios universitarios y planes académicos en nuestro visor interactivo oficial.',
      catalogCalloutBtn: 'Ver Catálogo Interactivo',
      modalCurricularPlan: 'Plan Curricular & Módulos Destacados',
      modalInstitutionalBenefit: 'Beneficio Estratégico Institucional',
      modalSupport: 'Acompañamiento E² Square',
      modalSupportDesc: 'Proporcionamos capacitación directiva, material para juntas con padres de familia, métricas de seguimiento institucional y asesoría operativa continua durante todo el ciclo escolar.',
      modalReturn: 'Volver al portafolio',
      modalBookSession: 'Agendar Sesión sobre este Programa',
      categories: {
        todos: 'Todas las Soluciones',
        internacionalizacion: 'Doble Diploma & Acreditaciones',
        tecnologia_ia: 'Inteligencia Artificial & STEAM',
        idiomas: 'Centro de idiomas digital',
        evaluacion: 'Orientación Vocacional Integral',
        experiencias: 'Viajes Académicos'
      },
      levels: {
        todos: 'Todos los Niveles',
        k12: 'Colegios K-12',
        prepa: 'Bachillerato / Prepa',
        docentes: 'Claustro Docente'
      }
    },
    strategy: {
      badge: 'Ejes Estratégicos E² Square',
      title: 'Transformando la Propuesta de Valor Institucional',
      subtitle: 'Nuestra intervención va mucho más allá de un programa aislado: integramos una arquitectura sustentable que fortalece el modelo de negocio y el prestigio académico de su colegio.',
      holisticBadge: 'Arquitectura Institucional 360°',
      holisticTitle: 'Modelo Integral de Co-Creación de Valor',
      holisticDesc: 'Desarrollamos soluciones integrales que abarcan desde el diagnóstico inicial hasta la proyección presupuestaria y acompañamiento en aula.'
    },
    methodology: {
      badge: 'Ruta Crítica Institucional',
      title: 'Metodología de Implementación Sin Fricción',
      subtitle: 'Un proceso paso a paso concebido para directores generales y rectores, garantizando viabilidad técnica, aprobación del consejo y adopción docente fluida.',
      trainingBadge: 'Acompañamiento en Campus',
      trainingTitle: 'Transferencia de Conocimiento y Capacitación Docente In Situ',
      trainingDesc: 'Nuestros especialistas pedagógicos y consultores de internacionalización trabajan hombro a hombro con sus coordinadores para asegurar una curva de aprendizaje mínima y entusiasmo en toda la comunidad educativa.',
      check1: 'Cero sobrecarga a la nómina',
      check2: 'Soporte técnico 24/7',
      check3: 'Plataformas en marca blanca',
      ecosystemBadge: 'Ecosistema de Oportunidades Globales',
      ecosystemTitle: 'Otros Programas de Grupo Estudiantes Embajadores',
      ecosystemSubtitle: 'Soluciones complementarias disponibles para alumnos, graduados y planta docente de colegios aliados.',
      guarantee1Title: 'Garantía de Acompañamiento',
      guarantee1Desc: 'Asesoría pedagógica y soporte operativo continuo durante todo el ciclo escolar.',
      guarantee2Title: 'Cero Carga Administrativa',
      guarantee2Desc: 'Plataformas llave en mano sin sobrecarga a la nómina institucional de su colegio.',
      guarantee3Title: '37 Años de Trayectoria',
      guarantee3Desc: 'Respaldo probado por más de 500 instituciones educativas de élite.'
    },
    testimonials: {
      badge: 'Prueba Social & Respaldo Directivo',
      title: 'Voces de Rectores y Directores Académicos',
      subtitle: 'Líderes educativos en México y América Latina comparten el impacto medible de nuestras soluciones en su captación, retención e internacionalización.',
      impactReported: 'Impacto Reportado'
    },
    contact: {
      badge: 'Atención Exclusiva a Autoridades Educativas',
      title: 'Agende una Sesión Estratégica con Dirección General',
      subtitle: 'Espacio ejecutivo confidencial de 30 minutos para rectores, directores generales y consejos directivos. Evaluamos la integración curricular, modelo de sostenibilidad financiera y retorno para el ciclo 2026.',
      point1: 'Diagnóstico de viabilidad sin costo institucional',
      point2: '37 años de respaldo Grupo Estudiantes Embajadores',
      point3: 'Simulación financiera y modelos de autosuficiencia',
      point4: 'Modalidad virtual o visita presencial en campus',
      bookBtn: 'Agendar Sesión Estratégica',
      whatsappBtn: 'WhatsApp Rectoría',
      hqTitle: 'Sede Corporativa México',
      hqBadge: 'Matriz Regional',
      hqGroup: 'Grupo Estudiantes Embajadores',
      city: 'San Pedro Garza García, N.L.',
      country: 'México'
    },
    footer: {
      tagline: 'Socio estratégico para colegios y bachilleratos de alto nivel en México y Latinoamérica. Internacionalización, Inteligencia Artificial y programas de excelencia con 37 años de experiencia.',
      programsTitle: 'Programas Estratégicos',
      officeTitle: 'Oficina Central',
      accessTitle: 'Acceso Directivo',
      bookBtn: 'Agendar Sesión',
      metricsBtn: 'Panel de Métricas',
      catalogLink: 'Catálogo Digital Interactivo',
      rights: 'Todos los derechos reservados. E² Square es una división estratégica de Grupo Estudiantes Embajadores.'
    },
    booking: {
      title: 'Agendar Sesión Estratégica Institucional',
      subtitle: 'Espacio confidencial exclusivo para Rectores, Directores Generales y Consejos Directivos.',
      fullName: 'Nombre Completo y Cargo',
      role: 'Cargo Institucional',
      institution: 'Nombre del Colegio / Institución',
      institutionType: 'Tipo de Institución',
      studentsCount: 'Población Estudiantil Aproximada',
      email: 'Correo Electrónico Institucional',
      phone: 'Teléfono Móvil / WhatsApp de Contacto',
      city: 'Ciudad y Estado',
      preferredDate: 'Fecha Tentativa Deseada',
      preferredTime: 'Horario Preferente',
      meetingFormat: 'Formato de Sesión',
      programsInterest: 'Programas de Interés Principal',
      notes: 'Notas o Requerimientos Específicos para la Sesión',
      submitBtn: 'Confirmar Solicitud de Sesión Ejecutiva',
      submitting: 'Procesando Solicitud Directiva...',
      successTitle: '¡Solicitud Ejecutiva Registrada!',
      successMsg: 'Hemos recibido la solicitud de sesión para su institución. Nuestra Dirección General coordinará la confirmación vía correo y WhatsApp con el enlace de videoconferencia o agenda de visita presencial.',
      closeBtn: 'Cerrar Ventana'
    }
  },
  en: {
    nav: {
      solutions: 'Solutions',
      strategy: 'Strategy',
      methodology: 'Methodology',
      testimonials: 'Testimonials',
      contact: 'Contact',
      metrics: 'Metrics',
      bookSession: 'Book a Session',
      catalog: '2026 Catalog',
      location: 'San Pedro Garza Garcia, N.L. • Mexico',
      yearsLeadership: '37+ Years of Leadership',
      direct: 'Direct'
    },
    hero: {
      badge: 'E² SQUARE • Global Solutions',
      cycle: '2026-2027 Academic Cycle',
      titleLine1: 'Empowering Education',
      titleLine2: 'with World-Class Global Solutions',
      subtitle: 'We are the strategic partner for',
      subtitleHighlight: 'school heads, chancellors, and governing boards',
      subtitleTail: 'across Mexico and Latin America. We design and implement academic programs with official international validity, award-winning AI, and sustainable value co-creation models.',
      bookCta: 'Schedule Strategic Session',
      catalogCta: '2026 Interactive Catalog',
      pillar1Tag: 'K-12 & Prep',
      pillar1Title: 'Schools & High Schools',
      pillar1Desc: 'Cognia-accredited US Dual Diploma, Arukay K-12 AI Curriculum, Official TOEFL Network, and 9-Dimension Psycho-educational Assessment System.',
      pillar1Cta: 'Explore academic programs',
      pillar2Tag: 'AI & STEAM',
      pillar2Title: 'Artificial Intelligence & STEAM K-12',
      pillar2Desc: 'Arukay K-12 curriculum in computational thinking and AI, certified teacher training, and pedagogical E-Sports academies.',
      pillar2Cta: 'View technology programs',
      pillar3Tag: 'Global Mobility',
      pillar3Title: 'Elite Academic Travel',
      pillar3Desc: 'Immersive educational journeys to NASA Space Center Houston & Orlando, Silicon Valley, Disney STEAM, Boston Academics, UN New York, and Europe.',
      pillar3Cta: 'Discover study travel itineraries',
      yearsBadge: 'Years of Experience',
      cogniaBadge: 'Cognia USA Accreditation',
      cogniaSub: 'Direct pathway to +30 universities',
      dualDiplomaBadge: 'US Dual Diploma',
      dualDiplomaSub: 'Official Cognia accreditation',
      topAiBadge: 'Top 3 Global EdTech',
      topAiSub: 'Arukay AI Campus 2025',
      globalReachBadge: '37 Years Track Record',
      globalReachSub: 'Agreements across 36 countries',
      toeflBadge: 'Official TOEFL Network & SEP',
      toeflSub: 'Institutional validations'
    },
    solutions: {
      portfolioBadge: 'E² Square 2026 Institutional Portfolio',
      title: 'World-Class Educational Solutions',
      subtitle: 'Turnkey comprehensive programs with official international accreditation, ongoing faculty training, and value co-creation financial models for your institution.',
      searchPlaceholder: 'Search by program, certification, or skill...',
      resetFilters: 'Reset all filters',
      noResults: 'No solutions found matching the selected filters.',
      viewTechSheet: 'View Technical Sheet & Academic Plan',
      catalogCalloutTitle: 'Complete E² Square 2026 Digital Catalog',
      catalogCalloutDesc: 'Review detailed destination specifications, departure dates, university agreements, and academic curricula in our official interactive viewer.',
      catalogCalloutBtn: 'View Interactive Catalog',
      modalCurricularPlan: 'Curricular Plan & Key Modules',
      modalInstitutionalBenefit: 'Strategic Institutional Benefit',
      modalSupport: 'E² Square Implementation Support',
      modalSupportDesc: 'We provide executive coaching, parent meeting resources, institutional tracking analytics, and continuous operational advisory throughout the academic school year.',
      modalReturn: 'Back to portfolio',
      modalBookSession: 'Schedule Session about this Program',
      categories: {
        todos: 'All Solutions',
        internacionalizacion: 'Dual Diploma & Accreditations',
        tecnologia_ia: 'Artificial Intelligence & STEAM',
        idiomas: 'Digital Language Center',
        evaluacion: 'Comprehensive Career Guidance',
        experiencias: 'Academic Travel'
      },
      levels: {
        todos: 'All Levels',
        k12: 'K-12 Schools',
        prepa: 'High School / Prep',
        docentes: 'Faculty & Teachers'
      }
    },
    strategy: {
      badge: 'E² Square Strategic Axes',
      title: 'Transforming Institutional Value Propositions',
      subtitle: 'Our intervention goes far beyond an isolated program: we integrate a sustainable educational architecture that strengthens your school’s business model and academic prestige.',
      holisticBadge: '360° Institutional Architecture',
      holisticTitle: 'Integral Model of Value Co-Creation',
      holisticDesc: 'We build comprehensive solutions spanning from initial diagnostics to budgetary projections and hands-on classroom onboarding.'
    },
    methodology: {
      badge: 'Institutional Critical Path',
      title: 'Frictionless Implementation Methodology',
      subtitle: 'A step-by-step roadmap designed for heads of schools and rectors, ensuring technical viability, board approval, and smooth teacher adoption.',
      trainingBadge: 'On-Campus Support',
      trainingTitle: 'Knowledge Transfer and In-Situ Teacher Training',
      trainingDesc: 'Our pedagogical specialists and internationalization consultants work hand-in-hand with your coordinators to guarantee zero learning friction and community enthusiasm.',
      check1: 'Zero payroll overhead',
      check2: '24/7 technical support',
      check3: 'Whitelabel customized platforms',
      ecosystemBadge: 'Global Opportunities Ecosystem',
      ecosystemTitle: 'Other Programs by Grupo Estudiantes Embajadores',
      ecosystemSubtitle: 'Complementary solutions available for students, alumni, and faculty of partner schools.',
      guarantee1Title: 'Dedicated Advisory Guarantee',
      guarantee1Desc: 'Continuous pedagogical and operational support throughout the entire school year.',
      guarantee2Title: 'Zero Administrative Burden',
      guarantee2Desc: 'Turnkey platforms with no added overhead to your school’s institutional payroll.',
      guarantee3Title: '37 Years of Proven Success',
      guarantee3Desc: 'Backed and trusted by over 500 elite educational institutions.'
    },
    testimonials: {
      badge: 'Social Proof & Executive Endorsements',
      title: 'Voices of Rectors and Academic Leaders',
      subtitle: 'Educational leaders across Mexico and Latin America share the measurable impact of our solutions on enrollment, retention, and internationalization.',
      impactReported: 'Reported Impact'
    },
    contact: {
      badge: 'Exclusive Attention to Educational Authorities',
      title: 'Schedule a Strategic Executive Consultation',
      subtitle: 'A confidential 30-minute executive session for school chancellors, heads of school, and governing boards. We evaluate curricular integration, financial viability, and return for the 2026 cycle.',
      point1: 'Complimentary feasibility diagnostic for your school',
      point2: '37-year track record by Grupo Estudiantes Embajadores',
      point3: 'Financial modeling and self-funding revenue share',
      point4: 'Virtual conference or on-campus executive visit',
      bookBtn: 'Schedule Strategic Session',
      whatsappBtn: 'Chancellor WhatsApp',
      hqTitle: 'Mexico Corporate Headquarters',
      hqBadge: 'Regional Matrix',
      hqGroup: 'Grupo Estudiantes Embajadores',
      city: 'San Pedro Garza Garcia, N.L.',
      country: 'Mexico'
    },
    footer: {
      tagline: 'Strategic partner for top-tier schools and high schools across Mexico and Latin America. Internationalization, Artificial Intelligence, and academic excellence backed by 37 years of experience.',
      programsTitle: 'Strategic Programs',
      officeTitle: 'Central Office',
      accessTitle: 'Executive Access',
      bookBtn: 'Schedule Session',
      metricsBtn: 'Metrics Dashboard',
      catalogLink: 'Interactive Digital Catalog',
      rights: 'All rights reserved. E² Square is a strategic division of Grupo Estudiantes Embajadores.'
    },
    booking: {
      title: 'Schedule Institutional Strategic Consultation',
      subtitle: 'Exclusive confidential executive session for Rectors, School Directors, and Governing Boards.',
      fullName: 'Full Name and Title',
      role: 'Institutional Role',
      institution: 'School / Institution Name',
      institutionType: 'Institution Type',
      studentsCount: 'Approximate Student Enrollment',
      email: 'Institutional Email',
      phone: 'Mobile / WhatsApp Number',
      city: 'City and State / Country',
      preferredDate: 'Target Meeting Date',
      preferredTime: 'Preferred Time Window',
      meetingFormat: 'Meeting Format',
      programsInterest: 'Primary Programs of Interest',
      notes: 'Specific Notes or Meeting Objectives',
      submitBtn: 'Confirm Executive Session Request',
      submitting: 'Processing Leadership Request...',
      successTitle: 'Executive Request Confirmed!',
      successMsg: 'We have received your institutional request. Our executive leadership will coordinate confirmation via email and WhatsApp with the conference link or on-campus visit itinerary.',
      closeBtn: 'Close Window'
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('e2_language');
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
    return 'es'; // Default to Spanish
  });

  useEffect(() => {
    localStorage.setItem('e2_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
