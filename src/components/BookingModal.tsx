import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Send, 
  Globe, 
  Building, 
  UserCheck, 
  Download,
  CalendarPlus,
  Sparkles,
  ShieldCheck,
  Check,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, PROGRAMS } from '../data/presentationData';
import { BookingLead } from '../types';
import { analyticsService } from '../services/analyticsService';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
  onLeadSubmitted: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram,
  onLeadSubmitted
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    role: 'Rector / Director General',
    institutionName: '',
    institutionType: 'Colegio Privado K-12' as BookingLead['institutionType'],
    studentsCount: '500 - 1,000 alumnos',
    email: '',
    phone: '',
    city: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    meetingFormat: 'Videollamada Ejecutiva (30 min)' as BookingLead['meetingFormat'],
    selectedPrograms: [] as string[],
    notes: ''
  });

  const [submittedLead, setSubmittedLead] = useState<BookingLead | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync preselected program when modal opens
  useEffect(() => {
    if (preselectedProgram) {
      setFormData(prev => {
        if (!prev.selectedPrograms.includes(preselectedProgram)) {
          return {
            ...prev,
            selectedPrograms: [...prev.selectedPrograms, preselectedProgram]
          };
        }
        return prev;
      });
    }
  }, [preselectedProgram, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleProgram = (progTitle: string) => {
    setFormData(prev => {
      const exists = prev.selectedPrograms.includes(progTitle);
      return {
        ...prev,
        selectedPrograms: exists
          ? prev.selectedPrograms.filter(p => p !== progTitle)
          : [...prev.selectedPrograms, progTitle]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const recorded = analyticsService.recordLead({
        fullName: formData.fullName,
        role: formData.role,
        institutionName: formData.institutionName,
        institutionType: formData.institutionType,
        studentsCount: formData.studentsCount,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        preferredDate: formData.preferredDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        preferredTime: formData.preferredTime,
        meetingFormat: formData.meetingFormat,
        selectedPrograms: formData.selectedPrograms.length > 0 ? formData.selectedPrograms : ['Portafolio General E2 Square'],
        notes: formData.notes
      });

      setSubmittedLead(recorded);
      setIsSubmitting(false);
      onLeadSubmitted();
    }, 600);
  };

  const handleDownloadIcs = () => {
    if (!submittedLead) return;
    const title = `Sesión Estratégica E2 Square - ${submittedLead.institutionName}`;
    const desc = `Reunión ejecutiva con directiva de E2 Square y ${submittedLead.fullName} (${submittedLead.role}). Programas de interés: ${submittedLead.selectedPrograms.join(', ')}. Contacto: ${COMPANY_INFO.headquarters.phone}`;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//E2 Square//Soluciones Educativas//ES',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      `LOCATION:${submittedLead.meetingFormat}`,
      `DTSTART:${new Date().toISOString().replace(/-|:|\.\d+/g, '')}`,
      `DTEND:${new Date(Date.now() + 30 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '')}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Cita-E2Square-${submittedLead.institutionName.replace(/\s+/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetAndClose = () => {
    setSubmittedLead(null);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-md transition-all duration-300"
      onClick={resetAndClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        id="booking-modal-container"
        className={`relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl transition-all duration-300 overflow-hidden ${
          isDark 
            ? 'bg-[#182337] border-slate-700/80 text-slate-100 shadow-black/60' 
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-900/15'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 sm:p-7 border-b flex items-start justify-between gap-4 shrink-0 ${
          isDark ? 'border-slate-700/80 bg-[#141d2e]' : 'border-slate-100 bg-slate-50/80'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase border ${
                isDark ? 'bg-amber-400/10 border-amber-400/20 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'
              }`}>
                <Sparkles className="w-3 h-3" />
                <span>{language === 'en' ? 'Exclusive Attention to Educational Authorities' : 'Atención Exclusiva a Autoridades Educativas'}</span>
              </span>
            </div>
            <h2 className={`font-serif-display text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {t.booking.title}
            </h2>
            <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {t.booking.subtitle}
            </p>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={resetAndClose}
            className={`p-2 rounded-xl border transition-colors ${
              isDark 
                ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submittedLead ? (
            /* Confirmation Screen */
            <div className="text-center py-6 sm:py-8 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <h3 className={`font-serif-display text-2xl sm:text-3xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}>
                  {t.booking.successTitle}
                </h3>
                <p className={`text-sm mt-2 max-w-md mx-auto leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {t.booking.successMsg}
                </p>
              </div>

              {/* Folio & Details Box */}
              <div className={`p-5 rounded-2xl border text-left max-w-lg mx-auto space-y-3 ${
                isDark ? 'bg-slate-900/80 border-slate-700/80' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-700/50">
                  <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    {language === 'en' ? 'Institutional Case ID:' : 'Folio Institucional:'}
                  </span>
                  <span className="font-mono font-bold text-amber-400">{submittedLead.id}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className={`block text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {language === 'en' ? 'Institution:' : 'Institución:'}
                    </span>
                    <span className="font-semibold">{submittedLead.institutionName}</span>
                  </div>
                  <div>
                    <span className={`block text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {language === 'en' ? 'Format:' : 'Formato:'}
                    </span>
                    <span className="font-semibold">{submittedLead.meetingFormat.split('(')[0]}</span>
                  </div>
                  <div>
                    <span className={`block text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {language === 'en' ? 'Proposed Date:' : 'Fecha Propuesta:'}
                    </span>
                    <span className="font-semibold">{submittedLead.preferredDate} ({submittedLead.preferredTime})</span>
                  </div>
                  <div>
                    <span className={`block text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {language === 'en' ? 'Programs:' : 'Programas:'}
                    </span>
                    <span className="font-semibold truncate block">
                      {language === 'en' ? `${submittedLead.selectedPrograms.length} selected` : `${submittedLead.selectedPrograms.length} seleccionados`}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadIcs}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>{language === 'en' ? 'Add to Calendar (.ICS)' : 'Descargar Cita en Calendario (.ICS)'}</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className={`w-full sm:w-auto px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-colors ${
                    isDark 
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  }`}
                >
                  {t.booking.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Directivo & Colegio */}
              <div>
                <div className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                  isDark ? 'text-amber-300' : 'text-amber-700'
                }`}>
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">1</span>
                  <span>{language === 'en' ? 'Leadership & Institution Details' : 'Datos de Rectoría o Dirección'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t.booking.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? "e.g. Dr. Robert Martinez" : "Ej. Dr. Roberto Elizondo M."}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t.booking.role} *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white' 
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="Rector / Director General">{language === 'en' ? 'Chancellor / Head of School' : 'Rector / Director General'}</option>
                      <option value="Director(a) Académico">{language === 'en' ? 'Academic Dean / Principal' : 'Director(a) Académico'}</option>
                      <option value="Director(a) de Asuntos Internacionales">{language === 'en' ? 'International Affairs Director' : 'Director(a) de Asuntos Internacionales'}</option>
                      <option value="Miembro de Patronato / Consejo">{language === 'en' ? 'Board of Trustees / Governing Member' : 'Miembro de Patronato / Consejo Directivo'}</option>
                      <option value="Coordinador de Idiomas / STEAM">{language === 'en' ? 'Languages / STEAM Coordinator' : 'Coordinador de Idiomas / STEAM'}</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t.booking.institution} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'en' ? "e.g. Oakridge International School" : "Ej. Colegio Internacional del Norte"}
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t.booking.studentsCount}
                    </label>
                    <select
                      value={formData.studentsCount}
                      onChange={(e) => setFormData({ ...formData, studentsCount: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white' 
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="Menos de 300 alumnos">{language === 'en' ? 'Under 300 students' : 'Menos de 300 alumnos'}</option>
                      <option value="300 - 600 alumnos">300 - 600 {language === 'en' ? 'students' : 'alumnos'}</option>
                      <option value="600 - 1,200 alumnos">600 - 1,200 {language === 'en' ? 'students' : 'alumnos'}</option>
                      <option value="Más de 1,200 alumnos">{language === 'en' ? 'Over 1,200 students (Multi-campus)' : 'Más de 1,200 alumnos (Campus Múltiples)'}</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t.booking.email} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="chancellery@school.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t.booking.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+52 (81) 8335-2711"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Soluciones de Interés */}
              <div className="pt-2">
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center justify-between ${
                  isDark ? 'text-amber-300' : 'text-amber-700'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">2</span>
                    <span>{language === 'en' ? 'Strategic Programs of Interest' : 'Programas Estratégicos de Interés'}</span>
                  </div>
                  <span className={`text-[11px] font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {language === 'en' ? `${formData.selectedPrograms.length} selected` : `${formData.selectedPrograms.length} seleccionados`}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PROGRAMS.map((prog) => {
                    const isSelected = formData.selectedPrograms.includes(prog.title);
                    return (
                      <button
                        key={prog.id}
                        type="button"
                        onClick={() => toggleProgram(prog.title)}
                        className={`p-2.5 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                          isSelected
                            ? isDark
                              ? 'bg-amber-400/15 border-amber-400/50 text-white'
                              : 'bg-amber-50 border-amber-400 text-amber-950 shadow-sm'
                            : isDark
                              ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center border transition-colors ${
                          isSelected 
                            ? 'bg-amber-400 border-amber-400 text-slate-950' 
                            : isDark ? 'border-slate-600' : 'border-slate-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold leading-tight">{prog.title}</div>
                          <div className={`text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {prog.badge || prog.subtitle}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Formato y Fecha */}
              <div className="pt-2">
                <div className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                  isDark ? 'text-amber-300' : 'text-amber-700'
                }`}>
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">3</span>
                  <span>{language === 'en' ? 'Format & Preferred Schedule' : 'Modalidad y Horario Preferido'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {[
                    language === 'en' ? 'Executive Videoconference (30 min)' : 'Videollamada Ejecutiva (30 min)',
                    language === 'en' ? 'On-Campus Executive Visit' : 'Reunión Presencial en Campus',
                    language === 'en' ? 'Board Presentation' : 'Presentación a Consejo Directivo'
                  ].map((format) => (
                    <button
                      key={format}
                      type="button"
                      onClick={() => setFormData({ ...formData, meetingFormat: format as any })}
                      className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                        formData.meetingFormat === format
                          ? isDark
                            ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                            : 'bg-blue-50 border-blue-600 text-blue-950 ring-1 ring-blue-600'
                          : isDark
                            ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t.booking.preferredDate}
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white' 
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {t.booking.preferredTime}
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700 text-white' 
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="05:30 PM">05:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Notas Opcionales */}
              <div>
                <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {t.booking.notes}
                </label>
                <textarea
                  rows={2}
                  placeholder={language === 'en' ? "e.g. We are looking to evaluate the US Dual Diploma for our incoming high school cohort in August..." : "Ej. Buscamos evaluar el Doble Diploma para la generación que ingresa a bachillerato en agosto..."}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                    isDark 
                      ? 'bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500' 
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-booking-form-btn"
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.booking.submitting}</span>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 text-slate-950" />
                      <span>{t.booking.submitBtn}</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
