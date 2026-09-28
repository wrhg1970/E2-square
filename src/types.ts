export interface ProgramDetail {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: 'internacionalizacion' | 'tecnologia_ia' | 'experiencias' | 'evaluacion' | 'idiomas';
  tagline: string;
  highlights: string[];
  keyStats: { label: string; value: string }[];
  description: string;
  institutionalBenefit: string;
  badge?: string;
  imageUrl?: string;
  targetAudience?: string;
  accreditation?: string;
  modality?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  location: string;
  programImplemented: string;
  metric: string;
  metricLabel: string;
  avatarUrl: string;
  badge: string;
  year: string;
}

export interface StrategicPillar {
  number: string;
  title: string;
  description: string;
  impact: string;
}

export interface BookingLead {
  id: string;
  fullName: string;
  role: string;
  institutionName: string;
  institutionType: 'Colegio Privado K-12' | 'Preparatoria / Bachillerato' | 'Universidad' | 'Red / Grupo Educativo';
  studentsCount: string;
  email: string;
  phone: string;
  city: string;
  preferredDate: string;
  preferredTime: string;
  meetingFormat: 'Videollamada Ejecutiva (30 min)' | 'Reunión Presencial en Campus' | 'Presentación a Consejo Directivo';
  selectedPrograms: string[];
  notes?: string;
  createdAt: string;
  status: 'Pendiente' | 'Confirmada' | 'En seguimiento';
}

export interface SectionViewMetric {
  sectionId: string;
  sectionName: string;
  views: number;
  timeSpentSeconds: number;
}

export interface AnalyticsData {
  totalVisits: number;
  uniqueVisitors: number;
  totalTimeSpentSeconds: number;
  bounceRatePercent: number;
  conversionCount: number;
  sections: Record<string, SectionViewMetric>;
  devices: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  sources: {
    direct: number;
    referral: number;
    organic: number;
    institutionalEmail: number;
  };
  leads: BookingLead[];
  recentEvents: {
    id: string;
    type: 'visit' | 'section_view' | 'booking' | 'brochure_view';
    description: string;
    timestamp: string;
  }[];
}
