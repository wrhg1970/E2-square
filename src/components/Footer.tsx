import React from 'react';
import { Shield, ExternalLink, BarChart2, Mail, Phone, MapPin, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/presentationData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenAnalytics: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAnalytics, onOpenBooking }) => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const { language, t } = useLanguage();

  return (
    <footer 
      id="main-footer" 
      className={`border-t text-xs pt-16 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark 
          ? 'bg-[#121a2a] border-slate-700/80 text-slate-400' 
          : 'bg-slate-100/90 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-300/80'
        }`}>
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-amber-500 p-0.5 shadow-md">
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                  isDark ? 'bg-[#182337]' : 'bg-slate-900'
                }`}>
                  <span className="font-serif-display font-bold text-base tracking-wider text-white">
                    E<sup className="text-amber-400 font-sans text-xs">2</sup>
                  </span>
                </div>
              </div>
              <div>
                <span className={`text-base font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  E2 SQUARE
                </span>
                <span className={`block text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {language === 'en' ? 'Educational Solutions • 2026' : 'Soluciones Educativas • 2026'}
                </span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.footer.tagline}
            </p>

            <div className="pt-2">
              <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded border ${
                isDark 
                  ? 'text-amber-300 bg-amber-400/10 border-amber-400/20' 
                  : 'text-amber-800 bg-amber-50 border-amber-200'
              }`}>
                {COMPANY_INFO.groupName}
              </span>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.footer.programsTitle}
            </div>
            <ul className={`space-y-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#soluciones" className="hover:text-amber-400 transition-colors">{language === 'en' ? 'US-Mexico Dual Diploma (Cognia)' : 'Doble Diploma Mex-USA (Cognia)'}</a></li>
              <li><a href="#soluciones" className="hover:text-amber-400 transition-colors">{language === 'en' ? 'Arukay AI Campus & Teacher Certification' : 'Arukay AI Campus & Certificación Docente'}</a></li>
              <li><a href="#soluciones" className="hover:text-amber-400 transition-colors">{language === 'en' ? 'Elite Academic Study Travel' : 'Viajes Académicos de Élite'}</a></li>
              <li><a href="#soluciones" className="hover:text-amber-400 transition-colors">{language === 'en' ? 'Digital Language Center' : 'Centro de idiomas digital'}</a></li>
              <li><a href="#soluciones" className="hover:text-amber-400 transition-colors">{language === 'en' ? '9-Assessment Student System' : 'Sistema de 9 Evaluaciones Psicopedagógicas'}</a></li>
              <li><a href="#soluciones" className="hover:text-amber-400 transition-colors">{language === 'en' ? 'Official TOEFL Network Certification' : 'Certificación Oficial Red TOEFL'}</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-3">
            <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.footer.officeTitle}
            </div>
            <div className={`space-y-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href="tel:8183352711" className="hover:text-amber-500 font-medium">{COMPANY_INFO.headquarters.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="hover:text-amber-500 truncate">{COMPANY_INFO.headquarters.email}</a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.headquarters.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-600 font-medium underline"
              >
                <span>{t.footer.catalogLink}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Actions Col & Theme Switcher */}
          <div className="lg:col-span-2 space-y-4">
            <div className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.footer.accessTitle}
            </div>
            <div className="space-y-2">
              <button
                id="footer-book-btn"
                onClick={onOpenBooking}
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors text-center shadow-md shadow-amber-500/20"
              >
                {t.footer.bookBtn}
              </button>

              <button
                onClick={onOpenAnalytics}
                className={`w-full py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                  isDark 
                    ? 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 border-slate-700' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-sm'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.footer.metricsBtn}</span>
              </button>
            </div>

            {/* Accessibility Theme Selector */}
            <div className="pt-2">
              <span className={`block text-[10px] font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {language === 'en' ? 'Visual Theme:' : 'Tema Visual:'}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setTheme('dark')}
                  className={`flex-1 py-1.5 px-2 rounded-lg border text-[11px] font-medium transition-colors ${
                    isDark
                      ? 'bg-slate-800 text-amber-400 border-slate-700'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {language === 'en' ? 'Graphite' : 'Grafito'}
                </button>
                <button
                  onClick={() => setTheme('light')}
                  className={`flex-1 py-1.5 px-2 rounded-lg border text-[11px] font-medium transition-colors ${
                    !isDark
                      ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                      : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:text-white'
                  }`}
                >
                  {language === 'en' ? 'Light' : 'Claro'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
          isDark ? 'text-slate-400' : 'text-slate-500'
        }`}>
          <div>
            © {new Date().getFullYear()} E² Square • {COMPANY_INFO.brandSub}
            <span className="block sm:inline sm:ml-2 text-slate-400">
              {t.footer.rights}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-amber-400 transition-colors cursor-pointer">{language === 'en' ? 'Privacy Notice' : 'Aviso de Privacidad'}</span>
            <span>•</span>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">{language === 'en' ? 'Institutional Security' : 'Seguridad Institucional'}</span>
            <span>•</span>
            <span className="hover:text-amber-400 transition-colors cursor-pointer">San Pedro Garza García</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
