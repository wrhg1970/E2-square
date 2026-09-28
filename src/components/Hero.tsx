import React from 'react';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Globe, 
  Building2, 
  GraduationCap,
  Plane,
  BrainCircuit,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/presentationData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBooking: (programTitle?: string) => void;
  onExploreCategory?: (categoryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCategory }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { t } = useLanguage();

  const handlePillarClick = (categoryId: string) => {
    if (onExploreCategory) {
      onExploreCategory(categoryId);
    } else {
      const el = document.getElementById('soluciones');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-[94vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-[#111a2c] via-[#142034] to-[#101827]' 
          : 'bg-gradient-to-b from-slate-50 via-white to-slate-100/90'
      }`}
    >
      {/* Subtle architectural ambient background aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] blur-[130px] rounded-full ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-500/5'
        }`} />
        <div className={`absolute top-1/3 right-[-10%] w-[450px] h-[450px] blur-[120px] rounded-full ${
          isDark ? 'bg-amber-500/5' : 'bg-amber-400/5'
        }`} />
        <div className={`absolute bottom-10 left-[-10%] w-[500px] h-[500px] blur-[140px] rounded-full ${
          isDark ? 'bg-indigo-600/10' : 'bg-indigo-500/5'
        }`} />
        
        {/* Subtle grid pattern */}
        <div 
          className={`absolute inset-0 ${isDark ? 'opacity-[0.025]' : 'opacity-[0.04]'}`}
          style={{
            backgroundImage: `radial-gradient(${isDark ? '#ffffff' : '#0f172a'} 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Prestigious badge */}
        <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full shadow-sm backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500 border ${
          isDark 
            ? 'bg-slate-800/80 border-slate-700/80' 
            : 'bg-white border-slate-200 shadow-slate-200/50'
        }`}>
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <span className={`text-xs sm:text-sm font-medium tracking-wide ${
            isDark ? 'text-slate-200' : 'text-slate-700'
          }`}>
            {t.hero.badge} • <span className="text-amber-500 font-semibold">{t.hero.cycle}</span>
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className={`font-serif-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12] mb-6 ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          {t.hero.titleLine1}
          <span className={`block mt-2 font-normal italic ${
            isDark 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100' 
              : 'text-amber-600'
          }`}>
            {t.hero.titleLine2}
          </span>
        </h1>

        {/* Value Subtitle */}
        <p className={`max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-9 ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {t.hero.subtitle} <span className={isDark ? "text-white font-semibold" : "text-slate-950 font-semibold"}>{t.hero.subtitleHighlight}</span> {t.hero.subtitleTail}
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
          <button
            id="hero-primary-cta"
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm md:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
          >
            <Calendar className="w-5 h-5 text-slate-900" />
            <span>{t.hero.bookCta}</span>
            <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={COMPANY_INFO.headquarters.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-catalog-cta"
            className={`w-full sm:w-auto px-6 py-4 rounded-xl text-sm md:text-base font-medium border transition-all flex items-center justify-center gap-2 ${
              isDark 
                ? 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white border-slate-700/80 hover:border-amber-400/40' 
                : 'bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-950 border-slate-300 shadow-sm hover:border-amber-500'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>{t.hero.catalogCta}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* 3 Strategic Pillars Cards (Matching e2-square structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 text-left">
          {/* Pillar 1: Colegios K-12 */}
          <div 
            onClick={() => handlePillarClick('internacionalizacion')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${
              isDark 
                ? 'bg-[#152033] border-slate-700/70 hover:border-amber-400/50 shadow-lg shadow-black/20' 
                : 'bg-white border-slate-200 hover:border-amber-400 shadow-md shadow-slate-900/5'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-slate-800 text-amber-300 border-slate-700' : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}>
                {t.hero.pillar1Tag}
              </span>
            </div>
            <h3 className={`font-serif-display text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {t.hero.pillar1Title}
            </h3>
            <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {t.hero.pillar1Desc}
            </p>
            <div className="flex items-center text-xs font-semibold text-amber-500 group-hover:translate-x-0.5 transition-transform">
              <span>{t.hero.pillar1Cta}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Pillar 2: Tecnología, IA & Competencias Digitales */}
          <div 
            onClick={() => handlePillarClick('tecnologia_ia')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${
              isDark 
                ? 'bg-[#152033] border-slate-700/70 hover:border-blue-400/50 shadow-lg shadow-black/20' 
                : 'bg-white border-slate-200 hover:border-blue-400 shadow-md shadow-slate-900/5'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-slate-800 text-blue-300 border-slate-700' : 'bg-blue-50 text-blue-800 border-blue-200'
              }`}>
                {t.hero.pillar2Tag}
              </span>
            </div>
            <h3 className={`font-serif-display text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {t.hero.pillar2Title}
            </h3>
            <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {t.hero.pillar2Desc}
            </p>
            <div className="flex items-center text-xs font-semibold text-blue-400 group-hover:translate-x-0.5 transition-transform">
              <span>{t.hero.pillar2Cta}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Pillar 3: Experiencias & Movilidad */}
          <div 
            onClick={() => handlePillarClick('experiencias')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${
              isDark 
                ? 'bg-[#152033] border-slate-700/70 hover:border-emerald-400/50 shadow-lg shadow-black/20' 
                : 'bg-white border-slate-200 hover:border-emerald-400 shadow-md shadow-slate-900/5'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-slate-800 text-emerald-300 border-slate-700' : 'bg-emerald-50 text-emerald-800 border-emerald-200'
              }`}>
                {t.hero.pillar3Tag}
              </span>
            </div>
            <h3 className={`font-serif-display text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {t.hero.pillar3Title}
            </h3>
            <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {t.hero.pillar3Desc}
            </p>
            <div className="flex items-center text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
              <span>{t.hero.pillar3Cta}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>
        </div>

        {/* Hero Visual Feature Image Banner */}
        <div className={`relative mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border shadow-2xl group ${
          isDark ? 'border-slate-700/80 shadow-black/40' : 'border-slate-300 shadow-slate-900/10'
        }`}>
          <div className="aspect-[16/8] sm:aspect-[21/9] w-full relative bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
              alt="Estudiantes en campus internacional de excelencia"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 brightness-[0.80]"
              referrerPolicy="no-referrer"
            />
            {/* Gradient overlays for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            
            {/* Floating Live Badges on Image */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 shadow-lg text-left">
                <div className="w-9 h-9 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-sm">
                  37+
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">{t.hero.yearsBadge}</div>
                  <div className="text-[11px] text-slate-300">{COMPANY_INFO.groupName}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 shadow-lg text-left">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-sm">
                  USA
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">{t.hero.cogniaBadge}</div>
                  <div className="text-[11px] text-slate-300">{t.hero.cogniaSub}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges & Accreditations Row */}
        <div className={`pt-6 border-t grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-colors ${
            isDark ? 'bg-slate-800/50 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.hero.dualDiplomaBadge}
              </div>
              <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {t.hero.dualDiplomaSub}
              </div>
            </div>
          </div>

          <div className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-colors ${
            isDark ? 'bg-slate-800/50 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.hero.topAiBadge}
              </div>
              <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {t.hero.topAiSub}
              </div>
            </div>
          </div>

          <div className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-colors ${
            isDark ? 'bg-slate-800/50 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.hero.globalReachBadge}
              </div>
              <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {t.hero.globalReachSub}
              </div>
            </div>
          </div>

          <div className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-colors ${
            isDark ? 'bg-slate-800/50 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.hero.toeflBadge}
              </div>
              <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {t.hero.toeflSub}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
