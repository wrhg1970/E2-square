import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Briefcase 
} from 'lucide-react';
import { IMPLEMENTATION_STEPS, OTHER_SOLUTIONS } from '../data/presentationData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface ImplementationProps {
  onOpenBooking?: () => void;
}

export const ImplementationMethodology: React.FC<ImplementationProps> = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { language, t } = useLanguage();

  // English localization for implementation steps
  const steps = IMPLEMENTATION_STEPS.map((s, idx) => {
    if (language === 'en') {
      const enSteps = [
        {
          title: 'Institutional Diagnostic & Feasibility',
          desc: 'Comprehensive evaluation of curricular profile, language levels, and technological infrastructure.'
        },
        {
          title: 'Board Approval & Curricular Architecture',
          desc: 'Presentation of the tailored business case, financial simulation, and board consensus.'
        },
        {
          title: 'Technology Integration & Whitelabel Setup',
          desc: 'Branding deployment, student credentialing, and LMS platform personalization.'
        },
        {
          title: 'Leadership & Faculty Training',
          desc: 'On-site or virtual workshops for coordinators, counselors, and teachers with official certification.'
        },
        {
          title: 'Launch & Parent Orientation',
          desc: 'Comprehensive marketing kits, parent informational webinars, and dedicated enrollment portal.'
        },
        {
          title: 'Continuous Tracking & Global Certification',
          desc: 'Executive analytics dashboard, continuous student mentoring, and official credential delivery.'
        }
      ];
      return { ...s, ...enSteps[idx] };
    }
    return s;
  });

  // English localization for other solutions
  const otherPrograms = OTHER_SOLUTIONS.map((prog, idx) => {
    if (language === 'en') {
      const enOther = [
        {
          title: 'Elite International Mobility',
          desc: 'Semester/year student exchanges, science and humanities summer camps, and higher education pathways in 36 countries.'
        },
        {
          title: 'Global Professional Experience',
          desc: 'International internships, global volunteering, Camp Counselor programs, and Work & Travel for prep and college graduates.'
        },
        {
          title: 'High School Abroad Programs',
          desc: 'Academic immersion terms in private day and boarding schools across USA, Canada, UK, Ireland, France, and Switzerland.'
        }
      ];
      return { ...prog, ...enOther[idx] };
    }
    return prog;
  });

  return (
    <section 
      id="metodologia" 
      className={`py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300 ${
        isDark ? 'bg-[#141e30]' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border ${
            isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-800'
          }`}>
            {t.methodology.badge}
          </div>
          <h2 className={`font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            {t.methodology.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t.methodology.subtitle}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={step.step}
              className={`p-6 rounded-3xl border transition-all relative group hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#182337] border-slate-700/80 hover:border-slate-600 shadow-black/20' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm shadow-slate-900/5'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-display text-2xl font-bold text-amber-500">
                  {step.step}
                </span>
                <span className={`text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded border ${
                  isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  {language === 'en' ? `Phase 0${idx + 1}` : `Fase 0${idx + 1}`}
                </span>
              </div>
              <h3 className={`text-base font-bold mb-2 transition-colors ${
                isDark ? 'text-white group-hover:text-amber-300' : 'text-slate-900 group-hover:text-amber-600'
              }`}>
                {step.title}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Implementation Banner Photo & Guarantee */}
        <div className={`mb-20 rounded-3xl overflow-hidden border relative shadow-xl transition-colors duration-300 ${
          isDark ? 'border-slate-700/80 bg-[#182337]' : 'border-slate-200 bg-white'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
              <span className={`text-xs font-semibold uppercase tracking-widest ${
                isDark ? 'text-amber-400' : 'text-amber-600'
              }`}>
                {t.methodology.trainingBadge}
              </span>
              <h3 className={`font-serif-display text-2xl sm:text-3xl font-bold leading-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                {t.methodology.trainingTitle}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {t.methodology.trainingDesc}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{t.methodology.check1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{t.methodology.check2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{t.methodology.check3}</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 h-56 lg:h-full min-h-[220px] relative">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                alt="Capacitación docente y directiva en campus"
                className="w-full h-full object-cover brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Other Programs by Grupo Estudiantes Embajadores */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className={`text-xs font-semibold uppercase tracking-widest ${
                isDark ? 'text-amber-400' : 'text-amber-600'
              }`}>
                {t.methodology.ecosystemBadge}
              </span>
              <h3 className={`font-serif-display text-2xl sm:text-3xl font-bold mt-1 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                {t.methodology.ecosystemTitle}
              </h3>
            </div>
            <p className={`text-xs sm:text-sm max-w-md ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.methodology.ecosystemSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherPrograms.map((prog, i) => (
              <div
                key={i}
                className={`p-5 rounded-2xl border transition-colors ${
                  isDark 
                    ? 'bg-[#182337] border-slate-700/80 hover:border-slate-600' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{prog.title}</h4>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Assurance & Governance Card (Clean, non-pushy, trust-building) */}
        <div className={`rounded-3xl border p-8 sm:p-10 transition-colors ${
          isDark 
            ? 'bg-[#182337]/70 border-slate-700/80 shadow-lg' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-500 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t.methodology.guarantee1Title}
                </h4>
                <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t.methodology.guarantee1Desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t.methodology.guarantee2Title}
                </h4>
                <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t.methodology.guarantee2Desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t.methodology.guarantee3Title}
                </h4>
                <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t.methodology.guarantee3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
