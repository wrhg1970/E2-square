import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  TrendingUp, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Play, 
  Pause,
  Sparkles
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/presentationData';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface TestimoniosProps {
  onOpenBooking?: () => void;
}

export const Testimonios: React.FC<TestimoniosProps> = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { language, t } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const localizedTestimonials = useMemo(() => {
    if (language === 'es') return TESTIMONIALS_DATA;

    const enMap: Record<string, any> = {
      'test-1': {
        quote: 'Implementing the Cognia US Dual Diploma with E² Square was a total institutional triumph. We increased enrollment retention from middle to high school by 28% and elevated the school’s academic prestige before our governing board.',
        role: 'Academic Dean & General Director',
        institution: 'Instituto Cumbres del Valle',
        programImplemented: 'US-Mexico Dual Diploma (Cognia)',
        metric: '+28% Retention',
        metricLabel: 'in middle school to prep re-enrollment',
        badge: 'Cognia USA Network',
        year: '2024-2025 Cycle'
      },
      'test-3': {
        quote: 'E² Square’s 37 years of experience brought total peace of mind to our Board of Trustees. We sent over 160 students to NASA and Silicon Valley with full complimentary passes for teachers and an impeccable 360° safety policy.',
        role: 'Academic Director & Global Affairs',
        institution: 'Cumbre School Network',
        programImplemented: 'Academic Study Journeys: NASA & Silicon Valley',
        metric: '160+ Students',
        metricLabel: 'on scientific missions with flawless safety',
        badge: 'Global Alliance',
        year: 'Summer 2025'
      },
      'test-4': {
        quote: 'The Whitelabel Language Center allowed us to offer up to 10 languages with our school crest and colors, without inflating faculty payroll. It enriched our graduates’ profile and created a highly profitable shared-revenue stream.',
        role: 'Chairman of the Board of Trustees',
        institution: 'Colegio Internacional del Bajío',
        programImplemented: 'Digital Language Center',
        metric: '+$1.4M MXN',
        metricLabel: 'new annual revenue through revenue-sharing',
        badge: '10-Language Whitelabel',
        year: '2025 Agreement'
      },
      'test-5': {
        quote: 'The 9-Assessment AI System and official TOEFL network transformed our counseling department. Career guidance sessions with parents are now grounded in scientific analytics of professional projection.',
        role: 'Director of Counseling & Student Formation',
        institution: 'Instituto Bicultural del Norte',
        programImplemented: '9-Assessment System & TOEFL Network',
        metric: '96% Satisfaction',
        metricLabel: 'in parent community surveys',
        badge: 'Official TOEFL Network',
        year: '2025-2026 Cycle'
      }
    };

    return TESTIMONIALS_DATA.map(item => ({
      ...item,
      ...(enMap[item.id] || {})
    }));
  }, [language]);

  const activeTestimonial = localizedTestimonials[currentIndex] || localizedTestimonials[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % localizedTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + localizedTestimonials.length) % localizedTestimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 7000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex, localizedTestimonials.length]);

  return (
    <section 
      id="testimonios" 
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-b from-[#131c2e] via-[#162339] to-[#131c2e]' 
          : 'bg-gradient-to-b from-slate-50 via-white to-slate-50'
      }`}
    >
      {/* Subtle ambient lighting */}
      <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 blur-[120px] rounded-full pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-400/5'
      }`} />
      <div className={`absolute top-1/3 right-1/4 w-96 h-96 blur-[120px] rounded-full pointer-events-none ${
        isDark ? 'bg-blue-600/5' : 'bg-blue-400/5'
      }`} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border ${
            isDark ? 'bg-amber-400/10 border-amber-400/20 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'
          }`}>
            <Award className="w-3.5 h-3.5" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className={`font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            {t.testimonials.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Carousel Showcase Card */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial Card */}
          <div 
            id="testimonial-card-active"
            className={`rounded-3xl border p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-500 ${
              isDark 
                ? 'bg-[#182337] border-slate-700/80 shadow-black/40' 
                : 'bg-white border-slate-200 shadow-slate-900/10'
            }`}
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            {/* Giant watermark quote icon */}
            <Quote className={`absolute top-8 right-8 w-24 h-24 -rotate-12 pointer-events-none transition-colors ${
              isDark ? 'text-slate-700/20' : 'text-slate-200/50'
            }`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Author Image & Metric Callout */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
                
                {/* Avatar with gold ring & accreditation badge */}
                <div className="relative">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-amber-400/50 shadow-xl bg-slate-800">
                    <img 
                      src={activeTestimonial.avatarUrl} 
                      alt={activeTestimonial.author}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className={`absolute -bottom-2.5 -right-2.5 p-1 rounded-xl shadow-md border ${
                    isDark ? 'bg-[#182337] border-slate-700' : 'bg-white border-slate-200'
                  }`}>
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-400 text-slate-950">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Author Info */}
                <div>
                  <h3 className={`font-serif-display text-lg sm:text-xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {activeTestimonial.author}
                  </h3>
                  <div className={`text-xs font-semibold mt-0.5 ${
                    isDark ? 'text-amber-300' : 'text-amber-700'
                  }`}>
                    {activeTestimonial.role}
                  </div>
                  <div className={`text-xs mt-1 flex items-center justify-center sm:justify-start gap-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <Building2 className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                    <span>{activeTestimonial.institution}</span>
                  </div>
                  <div className={`text-[11px] flex items-center justify-center sm:justify-start gap-1 mt-0.5 ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{activeTestimonial.location}</span>
                  </div>
                </div>

                {/* Impact Metric Callout Box */}
                <div className={`w-full p-4 rounded-2xl border shadow-sm text-left ${
                  isDark 
                    ? 'bg-slate-900/90 border-slate-700/80 text-white' 
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-500 mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{t.testimonials.impactReported}</span>
                  </div>
                  <div className={`text-2xl font-bold font-serif-display ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {activeTestimonial.metric}
                  </div>
                  <div className={`text-[11px] leading-tight mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {activeTestimonial.metricLabel}
                  </div>
                </div>

              </div>

              {/* Right Column: Quote & Solution Details */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                
                {/* Program Tag & Accreditation */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold border ${
                    isDark ? 'bg-amber-400/10 text-amber-300 border-amber-400/20' : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}>
                    <Sparkles className="w-3 h-3" />
                    {activeTestimonial.programImplemented}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-md border ${
                    isDark ? 'text-slate-300 bg-slate-800 border-slate-700' : 'text-slate-700 bg-slate-100 border-slate-200'
                  }`}>
                    {activeTestimonial.badge}
                  </span>
                  <span className={`text-[11px] ml-auto hidden sm:inline-block ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {activeTestimonial.year}
                  </span>
                </div>

                {/* The Quote */}
                <blockquote className={`text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed italic ${
                  isDark ? 'text-slate-100' : 'text-slate-800'
                }`}>
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Bottom Bar: Quick Select Thumbnails */}
                <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${
                  isDark ? 'border-slate-700/70' : 'border-slate-100'
                }`}>
                  <div className="flex items-center gap-2">
                    {localizedTestimonials.map((item, idx) => (
                      <button
                        key={item.id}
                        id={`test-nav-${idx}`}
                        onClick={() => setCurrentIndex(idx)}
                        className={`group relative transition-all rounded-full ${
                          idx === currentIndex
                            ? isDark 
                              ? 'ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 scale-110'
                              : 'ring-2 ring-amber-500 ring-offset-2 ring-offset-white scale-110'
                            : 'opacity-40 hover:opacity-100'
                        }`}
                        title={`${item.author} (${item.institution})`}
                      >
                        <img
                          src={item.avatarUrl}
                          alt={item.author}
                          className="w-8 h-8 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Manual Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      id="prev-testimonial-btn"
                      onClick={handlePrev}
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isDark 
                          ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 border-slate-300'
                      }`}
                      title={language === 'en' ? 'Previous endorsement' : 'Testimonio anterior'}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      id="next-testimonial-btn"
                      onClick={handleNext}
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isDark 
                          ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 border-slate-300'
                      }`}
                      title={language === 'en' ? 'Next endorsement' : 'Siguiente testimonio'}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Indicators Bar */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {localizedTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-amber-400' 
                    : isDark ? 'w-2 bg-slate-700 hover:bg-slate-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`ml-3 p-1 transition-colors ${
                isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800'
              }`}
              title={isAutoPlaying ? (language === 'en' ? "Pause autoplay" : "Pausar rotación") : (language === 'en' ? "Start autoplay" : "Iniciar rotación")}
            >
              {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
