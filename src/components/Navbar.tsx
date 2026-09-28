import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Calendar, 
  BarChart2, 
  Menu, 
  X, 
  Phone, 
  Globe, 
  Sun, 
  Moon,
  MapPin,
  Mail,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/presentationData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAnalytics: () => void;
  totalVisits: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAnalytics, totalVisits }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const { language, toggleLanguage, t } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.solutions, href: '#soluciones' },
    { label: t.nav.strategy, href: '#estrategia' },
    { label: t.nav.methodology, href: '#metodologia' },
    { label: t.nav.testimonials, href: '#testimonios' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    >
      {/* Institutional Executive Top Bar (San Pedro Garza García & Contact Channels) */}
      <div 
        className={`hidden md:block text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-300 ${
          isDark 
            ? 'bg-[#0f1726]/95 border-slate-800/80 text-slate-300' 
            : 'bg-slate-900 text-slate-200 border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t.nav.location}</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <span>{COMPANY_INFO.groupName}</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-400 font-semibold">{t.nav.yearsLeadership}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${COMPANY_INFO.headquarters.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{t.nav.direct}: {COMPANY_INFO.headquarters.phone}</span>
            </a>

            <a 
              href={`mailto:${COMPANY_INFO.headquarters.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{COMPANY_INFO.headquarters.email}</span>
            </a>

            <a
              href={COMPANY_INFO.headquarters.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 hover:bg-amber-400/30 transition-all font-semibold"
            >
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span>{t.nav.catalog}</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? isDark 
              ? 'bg-[#131c2e]/95 backdrop-blur-md border-b border-slate-700/80 shadow-lg shadow-black/25 py-2.5'
              : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-900/5 py-2.5'
            : isDark
              ? 'bg-[#131c2e]/75 backdrop-blur-sm py-4'
              : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Identification */}
            <a
              href="#"
              id="brand-logo-link"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-amber-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                  isDark ? 'bg-[#182337]' : 'bg-slate-900'
                }`}>
                  <span className="font-serif-display font-bold text-lg tracking-wider text-white">
                    E<sup className="text-amber-400 font-sans text-xs">2</sup>
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                    isDark 
                      ? 'text-white group-hover:text-amber-300' 
                      : 'text-slate-900 group-hover:text-amber-600'
                  }`}>
                    E² SQUARE
                  </span>
                  <span className={`text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.2 rounded border ${
                    isDark
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                      : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}>
                    2026
                  </span>
                </div>
                <span className={`text-[11px] font-medium tracking-wide ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {language === 'en' ? 'Global Educational Solutions' : 'Soluciones Educativas Globales'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className={`text-xs sm:text-sm font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200 ${
                    isDark 
                      ? 'text-slate-300 hover:text-white' 
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTAs, Language Toggle & Quick Theme Toggle */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                id="nav-lang-toggle"
                title={language === 'es' ? "Switch to English" : "Cambiar a Español"}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  isDark 
                    ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-amber-400/40' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 hover:border-amber-500 shadow-sm'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-mono tracking-wider">{language.toUpperCase()}</span>
              </button>

              {/* Quick theme toggle */}
              <button
                onClick={toggleTheme}
                id="nav-theme-toggle"
                title={isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Grafito"}
                className={`p-2 rounded-xl border transition-all ${
                  isDark 
                    ? 'bg-slate-800/80 hover:bg-slate-700 text-amber-400 border-slate-700' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Discreet Analytics Button */}
              <button
                id="nav-analytics-btn"
                onClick={onOpenAnalytics}
                title="Abrir panel de monitoreo de visitas y prospectos"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all shadow-sm ${
                  isDark 
                    ? 'text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border-slate-700/80' 
                    : 'text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-300'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden xl:inline">{t.nav.metrics}</span>
                <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded-full border ${
                  isDark 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
                    : 'bg-amber-100 text-amber-900 border-amber-200'
                }`}>
                  {totalVisits}
                </span>
              </button>

              {/* Direct Booking Button */}
              <button
                id="nav-booking-cta"
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>{t.nav.bookSession}</span>
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={toggleLanguage}
                id="mobile-lang-toggle"
                className={`px-2 py-1.5 rounded-lg border text-xs font-bold font-mono ${
                  isDark ? 'bg-slate-800 text-amber-400 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300'
                }`}
                aria-label="Cambiar idioma"
              >
                {language.toUpperCase()}
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border ${
                  isDark ? 'bg-slate-800 text-amber-400 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300'
                }`}
                aria-label="Cambiar tema"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                id="mobile-analytics-icon"
                onClick={onOpenAnalytics}
                className={`p-2 rounded-lg border ${
                  isDark ? 'bg-slate-800 text-amber-400 border-slate-700' : 'bg-slate-100 text-amber-600 border-slate-300'
                }`}
                aria-label="Panel Analítico"
              >
                <BarChart2 className="w-4 h-4" />
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg border ${
                  isDark ? 'bg-slate-800/80 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300'
                }`}
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`sm:hidden border-b px-5 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 ${
            isDark ? 'bg-[#182337] border-slate-700' : 'bg-white border-slate-200'
          }`}
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isDark 
                    ? 'text-slate-200 hover:text-amber-300 hover:bg-slate-800/60' 
                    : 'text-slate-800 hover:text-amber-600 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher in Drawer */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-700/60">
            <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {language === 'en' ? 'Language / Idioma:' : 'Idioma / Language:'}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => toggleLanguage()}
                className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${
                  language === 'es'
                    ? 'bg-amber-400 text-slate-950 border-amber-400'
                    : isDark ? 'text-slate-400 border-slate-700' : 'text-slate-600 border-slate-300'
                }`}
              >
                Español
              </button>
              <button
                onClick={() => toggleLanguage()}
                className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${
                  language === 'en'
                    ? 'bg-amber-400 text-slate-950 border-amber-400'
                    : isDark ? 'text-slate-400 border-slate-700' : 'text-slate-600 border-slate-300'
                }`}
              >
                English
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-700/60 flex flex-col gap-2.5">
            <button
              id="mobile-nav-booking-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookSession}</span>
            </button>
            <button
              id="mobile-nav-analytics-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAnalytics();
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border ${
                isDark ? 'text-slate-300 bg-slate-800 border-slate-700' : 'text-slate-700 bg-slate-100 border-slate-300'
              }`}
            >
              <BarChart2 className="w-4 h-4 text-amber-500" />
              <span>{t.nav.metrics} ({totalVisits})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
