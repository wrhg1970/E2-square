import React from 'react';
import { 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Building2,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/presentationData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  onOpenBookingModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  onOpenBookingModal 
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { language, t } = useLanguage();

  return (
    <section 
      id="contacto" 
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden ${
        isDark ? 'bg-[#121b2d]' : 'bg-slate-100/70'
      }`}
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Executive Card */}
        <div className={`rounded-3xl border p-8 sm:p-12 lg:p-16 shadow-2xl transition-all duration-300 relative overflow-hidden ${
          isDark 
            ? 'bg-[#182337] border-slate-700/80 shadow-black/40' 
            : 'bg-white border-slate-200 shadow-slate-900/10'
        }`}>
          {/* Top subtle highlight */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-amber-400 to-indigo-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Invitation Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border">
                <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-amber-400' : 'bg-amber-500'}`} />
                <span className={isDark ? 'text-amber-300' : 'text-amber-800'}>
                  {t.contact.badge}
                </span>
              </div>

              <h2 className={`font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                {t.contact.title}
              </h2>

              <p className={`text-base sm:text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {t.contact.subtitle}
              </p>

              {/* Value points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.contact.point1}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.contact.point2}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.contact.point3}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.contact.point4}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="open-booking-modal-cta"
                  onClick={onOpenBookingModal}
                  className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>{t.contact.bookBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/528183352711?text=Hola%20E2%20Square,%20solicito%20informaci%C3%B3n%20para%20la%20direcci%C3%B3n%20de%20nuestro%20colegio.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.contact.whatsappBtn}</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.headquarters.phone.replace(/[^0-9]/g, '')}`}
                  className={`px-4 py-3.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isDark
                      ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  }`}
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>{COMPANY_INFO.headquarters.phone}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Corporate Details Card */}
            <div className="lg:col-span-5">
              <div className={`rounded-2xl border p-6 sm:p-7 space-y-6 ${
                isDark ? 'bg-slate-900/80 border-slate-700/80' : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}>
                
                <div className="flex items-center gap-3 pb-4 border-b border-slate-700/40">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {language === 'en' ? 'Institutional Liaison Office' : 'Oficina de Enlace Institucional'}
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {language === 'en' ? 'Attention for Chancellors & Boards' : 'Atención para Rectores y Consejos'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className={`block ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {language === 'en' ? 'Corporate Address' : 'Dirección Corporativa'}
                      </strong>
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        {COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className={`block ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {language === 'en' ? 'Direct Chancellery Email' : 'Correo Directo de Rectoría'}
                      </strong>
                      <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="text-amber-500 hover:underline">
                        {COMPANY_INFO.headquarters.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className={`block ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {language === 'en' ? 'Hours of Attention' : 'Horario de Atención'}
                      </strong>
                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                        {language === 'en' ? 'Monday to Friday • 09:00 to 18:00 hrs (CST)' : 'Lunes a Viernes • 09:00 a 18:00 hrs (CST)'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Directorial guarantee note */}
                <div className={`p-3.5 rounded-xl border text-[11px] leading-relaxed flex items-center gap-2.5 ${
                  isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-600'
                }`}>
                  <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>
                    {language === 'en' 
                      ? 'Guaranteed response and confirmation within 4 business hours by E² Square executive leadership.'
                      : 'Respuesta y confirmación en menos de 4 horas hábiles por parte de la Dirección de E2 Square.'}
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
