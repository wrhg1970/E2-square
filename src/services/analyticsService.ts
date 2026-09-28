import { AnalyticsData, BookingLead } from '../types';

const STORAGE_KEY = 'e2_square_analytics_v1';
const VISITOR_ID_KEY = 'e2_square_visitor_id';

function getInitialAnalytics(): AnalyticsData {
  return {
    totalVisits: 384,
    uniqueVisitors: 289,
    totalTimeSpentSeconds: 98400,
    bounceRatePercent: 24.8,
    conversionCount: 19,
    sections: {
      hero: { sectionId: 'hero', sectionName: 'Inicio / Portada Institucional', views: 384, timeSpentSeconds: 14200 },
      'doble-diploma': { sectionId: 'doble-diploma', sectionName: 'Doble Diploma Mex-USA (Cognia)', views: 310, timeSpentSeconds: 28400 },
      'arukay-ai': { sectionId: 'arukay-ai', sectionName: 'Arukay AI Campus (Inteligencia Artificial)', views: 295, timeSpentSeconds: 24600 },
      'viajes-academicos': { sectionId: 'viajes-academicos', sectionName: 'Viajes Académicos & Graduación', views: 245, timeSpentSeconds: 16800 },
      'esports-academy': { sectionId: 'esports-academy', sectionName: 'E-Sports Academy & STEAM', views: 180, timeSpentSeconds: 9200 },
      'centro-idiomas': { sectionId: 'centro-idiomas', sectionName: 'Centro de Idiomas Marca Blanca', views: 160, timeSpentSeconds: 8400 },
      'evaluaciones-alumno': { sectionId: 'evaluaciones-alumno', sectionName: 'Sistema de 9 Evaluaciones IA', views: 215, timeSpentSeconds: 12800 },
      'certificacion-toefl': { sectionId: 'certificacion-toefl', sectionName: 'Certificación Oficial TOEFL', views: 190, timeSpentSeconds: 9900 },
      simulador: { sectionId: 'simulador', sectionName: 'Simulador de Proyección Institucional', views: 260, timeSpentSeconds: 19400 },
      contacto: { sectionId: 'contacto', sectionName: 'Agendador de Llamada Directiva', views: 220, timeSpentSeconds: 15300 },
    },
    devices: {
      desktop: 62,
      mobile: 31,
      tablet: 7
    },
    sources: {
      direct: 44,
      institutionalEmail: 32,
      referral: 16,
      organic: 8
    },
    leads: [
      {
        id: 'lead-101',
        fullName: 'Dr. Alejandro Cantú Lozano',
        role: 'Rector General',
        institutionName: 'Colegio Internacional Monterrey',
        institutionType: 'Colegio Privado K-12',
        studentsCount: '850 alumnos',
        email: 'acantu@colintermty.edu.mx',
        phone: '(81) 8244-9000',
        city: 'San Pedro Garza García, N.L.',
        preferredDate: '2026-09-22',
        preferredTime: '10:30 AM',
        meetingFormat: 'Videollamada Ejecutiva (30 min)',
        selectedPrograms: ['Doble Diploma Mex-USA', 'Arukay AI Campus', 'Certificación Oficial TOEFL'],
        notes: 'Interesados en presentar la propuesta ante el consejo directivo para el ciclo escolar 2026-2027.',
        createdAt: '2026-09-15T10:14:00Z',
        status: 'En seguimiento'
      },
      {
        id: 'lead-102',
        fullName: 'Mtra. Sofía Valenzuela Garza',
        role: 'Directora Académica de Bachillerato',
        institutionName: 'Instituto Cumbres Poniente',
        institutionType: 'Preparatoria / Bachillerato',
        studentsCount: '620 alumnos',
        email: 'svalenzuela@cumbrespte.edu.mx',
        phone: '(55) 5489-3211',
        city: 'Ciudad de México',
        preferredDate: '2026-09-24',
        preferredTime: '12:00 PM',
        meetingFormat: 'Reunión Presencial en Campus',
        selectedPrograms: ['Arukay AI Campus', 'Sistema de 9 Evaluaciones IA'],
        notes: 'Buscamos certificar a 45 profesores en IA antes de fin de año.',
        createdAt: '2026-09-16T14:30:00Z',
        status: 'Confirmada'
      },
      {
        id: 'lead-103',
        fullName: 'Lic. Roberto De la Garza',
        role: 'Coordinador de Internacionalización',
        institutionName: 'Colegio Americano de Guadalajara',
        institutionType: 'Colegio Privado K-12',
        studentsCount: '1,200 alumnos',
        email: 'roberto.garza@asg.edu.mx',
        phone: '(33) 3819-2040',
        city: 'Guadalajara, Jalisco',
        preferredDate: '2026-09-25',
        preferredTime: '09:00 AM',
        meetingFormat: 'Videollamada Ejecutiva (30 min)',
        selectedPrograms: ['Viajes Académicos & Graduación', 'Doble Diploma Mex-USA'],
        notes: 'Queremos cotización para viaje académico a NASA Space Center y Silicon Valley para 3 grupos.',
        createdAt: '2026-09-17T09:45:00Z',
        status: 'Pendiente'
      }
    ],
    recentEvents: [
      {
        id: 'evt-1',
        type: 'visit',
        description: 'Nueva sesión de Rectoría desde San Pedro Garza García (Desktop)',
        timestamp: 'Hace 8 minutos'
      },
      {
        id: 'evt-2',
        type: 'section_view',
        description: 'Consulta detallada de Acreditación Cognia en Doble Diploma',
        timestamp: 'Hace 15 minutos'
      },
      {
        id: 'evt-3',
        type: 'booking',
        description: 'Solicitud de llamada personalizada registrada por Colegio Americano',
        timestamp: 'Hace 45 minutos'
      },
      {
        id: 'evt-4',
        type: 'brochure_view',
        description: 'Acceso a catálogo digital de viajes académicos https://estudiantes.aflip.in/',
        timestamp: 'Hace 2 horas'
      }
    ]
  };
}

class AnalyticsService {
  private data: AnalyticsData;
  private sessionStartTime: number;

  constructor() {
    this.sessionStartTime = Date.now();
    this.data = this.loadData();
    this.initSession();
  }

  private loadData(): AnalyticsData {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore
    }
    const initial = getInitialAnalytics();
    this.saveData(initial);
    return initial;
  }

  private saveData(data: AnalyticsData) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }

  private initSession() {
    let visitorId = '';
    try {
      visitorId = localStorage.getItem(VISITOR_ID_KEY) || '';
      if (!visitorId) {
        visitorId = 'vis_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
        localStorage.setItem(VISITOR_ID_KEY, visitorId);
        this.data.uniqueVisitors += 1;
      }
    } catch {
      visitorId = 'vis_temp';
    }

    this.data.totalVisits += 1;
    this.logEvent('visit', 'Visita institucional iniciada');
    this.saveData(this.data);
  }

  public getData(): AnalyticsData {
    return { ...this.data };
  }

  public trackSectionView(sectionId: string, sectionName: string) {
    if (!this.data.sections[sectionId]) {
      this.data.sections[sectionId] = {
        sectionId,
        sectionName,
        views: 1,
        timeSpentSeconds: 5
      };
    } else {
      this.data.sections[sectionId].views += 1;
      this.data.sections[sectionId].timeSpentSeconds += 8;
    }
    this.data.totalTimeSpentSeconds += 8;
    this.saveData(this.data);
  }

  public recordLead(leadData: Omit<BookingLead, 'id' | 'createdAt' | 'status'>): BookingLead {
    const newLead: BookingLead = {
      ...leadData,
      id: 'lead-' + Date.now().toString(36),
      createdAt: new Date().toISOString(),
      status: 'Pendiente'
    };

    this.data.leads.unshift(newLead);
    this.data.conversionCount += 1;
    this.logEvent('booking', `Nueva llamada solicitada por ${newLead.fullName} (${newLead.institutionName})`);
    this.saveData(this.data);
    return newLead;
  }

  public updateLeadStatus(id: string, status: BookingLead['status']) {
    const lead = this.data.leads.find(l => l.id === id);
    if (lead) {
      lead.status = status;
      this.saveData(this.data);
    }
  }

  public logEvent(type: 'visit' | 'section_view' | 'booking' | 'brochure_view', description: string) {
    this.data.recentEvents.unshift({
      id: 'evt_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
      type,
      description,
      timestamp: 'Justo ahora'
    });
    if (this.data.recentEvents.length > 25) {
      this.data.recentEvents.pop();
    }
    this.saveData(this.data);
  }

  public resetToDefault(): AnalyticsData {
    const resetData = getInitialAnalytics();
    this.data = resetData;
    this.saveData(resetData);
    return resetData;
  }
}

export const analyticsService = new AnalyticsService();
