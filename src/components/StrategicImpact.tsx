import React from 'react';
import { 
  TrendingUp, 
  CalendarCheck, 
  Compass, 
  BarChart3,
  ShieldCheck,
  Award
} from 'lucide-react';
import { STRATEGIC_PILLARS, HOLISTIC_SOLUTION } from '../data/presentationData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface StrategicImpactProps {
  onOpenBooking?: () => void;
}

export const StrategicImpact: React.FC<StrategicImpactProps> = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { language, t } = useLanguage();

  // Bilingual translation mapper for strategic pillars
  const pillars = STRATEGIC_PILLARS.map((p, idx) => {
    if (language === 'en') {
      const enPillars = [
        {
          title: 'Genuine Internationalization',
          description: 'We transform your school into an authentic International School through official programs with global validity.',
          impact: 'Immediate international prestige and institutional projection.'
        },
        {
          title: 'Unique Competitive Advantages',
          description: 'Pedagogical differentiators that position your school far ahead of conventional regional educational offerings.',
          impact: 'Unrivaled value proposition for discerning families.'
        },
        {
          title: 'Additional Revenue Generation',
          description: 'Sustainable financial models and institutional revenue-sharing creating new cash flow streams for the institution.',
          impact: 'Measurable ROI and capital for academic infrastructure.'
        },
        {
          title: 'Technology & Artificial Intelligence',
          description: 'Real pedagogical integration of AI, STEAM, and digital environments, beyond superficial add-on tools.',
          impact: 'Direct alignment with the digital economy and certified faculty.'
        },
        {
          title: 'Student Enrollment & Retention',
          description: 'High-impact programs fostering loyalty from middle school through preferred admission to top universities.',
          impact: 'Sustained growth in retention and new admissions.'
        }
      ];
      return { ...p, ...enPillars[idx] };
    }
    return p;
  });

  // Bilingual translation mapper for holistic solution
  const holistic = HOLISTIC_SOLUTION.map((item, idx) => {
    if (language === 'en') {
      const enHolistic = [
        {
          title: 'Planning & Execution',
          desc: 'Comprehensive project design for short, medium, and long terms with close executive accompaniment.'
        },
        {
          title: 'Strategic Vision',
          desc: '5-year growth roadmap towards formal internationalization and academic vanguard.'
        },
        {
          title: 'Control & Analytics',
          desc: 'Executive dashboards for school heads with individualized metrics by student, grade, and campus.'
        },
        {
          title: 'Return on Investment',
          desc: 'Direct economic impact through student retention and financial value co-creation frameworks.'
        }
      ];
      return { ...item, ...enHolistic[idx] };
    }
    return item;
  });

  return (
    <section 
      id="estrategia" 
      className={`py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-[#131c2e] via-[#162339] to-[#131c2e]' 
          : 'bg-gradient-to-b from-white via-slate-50 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Strategic Pillars Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border ${
            isDark ? 'bg-amber-400/10 border-amber-400/20 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'
          }`}>
            {t.strategy.badge}
          </div>
          <h2 className={`font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            {t.strategy.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t.strategy.subtitle}
          </p>
        </div>

        {/* 5 Strategies from presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between group hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#182337] border-slate-700/80 hover:border-amber-400/50 shadow-black/20' 
                  : 'bg-white border-slate-200 hover:border-amber-500 shadow-sm shadow-slate-900/5'
              }`}
            >
              <div>
                <div className="text-2xl font-serif-display font-bold text-amber-500 mb-3">
                  {pillar.number}
                </div>
                <h3 className={`text-base font-bold transition-colors mb-2 ${
                  isDark ? 'text-white group-hover:text-amber-300' : 'text-slate-900 group-hover:text-amber-600'
                }`}>
                  {pillar.title}
                </h3>
                <p className={`text-xs leading-relaxed mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {pillar.description}
                </p>
              </div>
              <div className={`pt-3 border-t text-[11px] font-medium ${
                isDark ? 'border-slate-700/70 text-amber-300/90' : 'border-slate-100 text-amber-800'
              }`}>
                ✦ {pillar.impact}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of the Integral Solution with Executive Boardroom Photo */}
        <div className={`rounded-3xl border p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl transition-colors duration-300 ${
          isDark ? 'bg-[#182337] border-slate-700/80 shadow-black/30' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-7">
              <span className={`text-xs font-semibold uppercase tracking-widest ${
                isDark ? 'text-amber-400' : 'text-amber-600'
              }`}>
                {t.strategy.holisticBadge}
              </span>
              <h3 className={`font-serif-display text-2xl sm:text-3xl font-bold mt-1.5 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                {t.strategy.holisticTitle}
              </h3>
              <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {t.strategy.holisticDesc}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-slate-700/80 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                  alt="Sesión de consejo y dirección académica"
                  className="w-full h-full object-cover brightness-85"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-semibold text-slate-200 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>{language === 'en' ? 'Board of Trustees & Chancellery Advisory' : 'Acompañamiento a Patronatos y Consejos Directivos'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {holistic.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-5 rounded-2xl border transition-colors ${
                  isDark 
                    ? 'bg-[#121927] border-slate-700/60 hover:border-slate-600' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center mb-3">
                  {idx === 0 && <CalendarCheck className="w-5 h-5" />}
                  {idx === 1 && <Compass className="w-5 h-5" />}
                  {idx === 2 && <BarChart3 className="w-5 h-5" />}
                  {idx === 3 && <TrendingUp className="w-5 h-5" />}
                </div>
                <h4 className={`text-sm sm:text-base font-bold mb-1.5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h4>
                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
