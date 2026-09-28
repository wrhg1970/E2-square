import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  BrainCircuit, 
  Plane, 
  Gamepad2, 
  Languages, 
  CheckSquare, 
  Award, 
  ArrowUpRight, 
  Check, 
  ChevronRight, 
  Sparkles, 
  Building2, 
  Calendar,
  ExternalLink,
  BookOpen,
  X,
  Search,
  Users,
  Building,
  Target,
  FileText
} from 'lucide-react';
import { PROGRAMS, COMPANY_INFO } from '../data/presentationData';
import { ProgramDetail } from '../types';
import { analyticsService } from '../services/analyticsService';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface SolutionsShowcaseProps {
  onSelectProgramForBooking: (programName: string) => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const SolutionsShowcase: React.FC<SolutionsShowcaseProps> = ({ 
  onSelectProgramForBooking,
  selectedCategory: propCategory,
  onSelectCategory: propOnSelectCategory
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { language, t } = useLanguage();

  const [internalCategory, setInternalCategory] = useState<string>('todos');
  const selectedCategory = propCategory ?? internalCategory;

  const handleCategorySelect = (catId: string) => {
    if (propOnSelectCategory) {
      propOnSelectCategory(catId);
    } else {
      setInternalCategory(catId);
    }
  };

  const [selectedLevel, setSelectedLevel] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProgramModal, setActiveProgramModal] = useState<ProgramDetail | null>(null);
  const [modalTab, setModalTab] = useState<'resumen' | 'modulos' | 'beneficios'>('resumen');

  const categories = [
    { id: 'todos', label: t.solutions.categories.todos },
    { id: 'internacionalizacion', label: t.solutions.categories.internacionalizacion },
    { id: 'tecnologia_ia', label: t.solutions.categories.tecnologia_ia },
    { id: 'idiomas', label: t.solutions.categories.idiomas },
    { id: 'evaluacion', label: t.solutions.categories.evaluacion },
    { id: 'experiencias', label: t.solutions.categories.experiencias }
  ];

  const levels = [
    { id: 'todos', label: t.solutions.levels.todos },
    { id: 'k12', label: t.solutions.levels.k12 },
    { id: 'prepa', label: t.solutions.levels.prepa },
    { id: 'docentes', label: t.solutions.levels.docentes }
  ];

  // English localized program content
  const localizedPrograms: ProgramDetail[] = useMemo(() => {
    if (language === 'es') return PROGRAMS;

    const enMap: Record<string, Partial<ProgramDetail>> = {
      'doble-diploma': {
        title: 'Authentic Internationalization: US-Mexico Dual Diploma',
        subtitle: 'Official US High School Diploma without leaving home country',
        description: 'Students earn the official Cognia-accredited US high school diploma, complementing their national curriculum with only 5 specialized online courses.',
        badge: 'Cognia Accredited',
        tagline: 'Instantly transform your school into a genuine "International School"',
        institutionalBenefit: 'Supreme admissions differentiator justifying premium tuition and drastically boosting retention from middle school to high school.',
        highlights: [
          'Dual official validity: National Certificate + US High School Diploma',
          'Flexible model requiring only 5 core specialized courses',
          'Available from Grade 8 through Grade 12 with 150+ electives and AP courses',
          'Direct admission agreements and preferential scholarships at 30+ top US universities',
          'Continuous bilingual advisory and dedicated faculty mentorship'
        ],
        keyStats: [
          { label: 'Required courses', value: 'Only 5' },
          { label: 'Accreditation', value: 'Cognia USA' },
          { label: 'US Univ. Agreements', value: '+30 Direct' },
          { label: 'Electives catalog', value: '+150 & AP' }
        ]
      },
      'arukay-ai': {
        title: 'Arukay AI Campus: School in the Artificial Intelligence Era',
        subtitle: 'Awarded 3rd Place Best Educational Technology in the World 2025',
        description: 'Comprehensive learning ecosystem transforming traditional schools into pioneering AI campuses with structured methodology and a quantifiable Theory of Change.',
        badge: 'World Award 2025',
        tagline: 'K-12 Artificial Intelligence Curriculum, Teacher Certification & Digital Citizenship',
        institutionalBenefit: 'Ensures the school leads the technological vanguard with an internationally recognized formal AI program.',
        highlights: [
          'Arukay AI Curriculum K-12: Age-graded learning with pedagogical AI agents and progress metrics',
          'Arukay AI Teacher Certification: Structured path to train and certify school faculty in AI integration',
          'Arukay Digital Citizenship: Ethics, privacy, critical thinking, and responsible digital decision-making',
          'Integrated Theory of Change scientifically evaluating institutional learning impact'
        ],
        keyStats: [
          { label: 'Recognition', value: 'Top 3 Global 2025' },
          { label: 'Scope', value: 'Full K-12' },
          { label: 'Faculty', value: 'Certified' },
          { label: 'Methodology', value: 'Theory of Change' }
        ]
      },
      'viajes-academicos': {
        title: 'High-Level Academic & Study Journeys',
        subtitle: 'Global immersion experiences that transcend the conventional classroom',
        description: 'Specialized curricular itineraries visiting world hubs of science, diplomacy, and technology, supported by 37 years of turnkey premium logistics.',
        badge: 'Global Experiences',
        tagline: 'Silicon Valley, NASA, UN, Boston, Europe, and leadership programs in Spain & China',
        institutionalBenefit: 'Strengthens community pride, fosters parental loyalty, and positions the school as a window to the world.',
        highlights: [
          'Elite academic routes: Silicon Valley, Disney STEAM, NASA Space Center, Harvard/MIT Boston, UN NY and Washington D.C.',
          'Leadership and School Entrepreneurship: Missions in Spain and China fostering global mindsets',
          'Custom Graduation Journeys: Total flexibility in dates, destinations, budget, and academic value',
          'Institutional facilities: Full complimentary passes and travel stipends for accompanying directors and teachers',
          'Interactive digital catalog with detailed step-by-step itineraries'
        ],
        keyStats: [
          { label: 'Destinations', value: '36 Countries' },
          { label: 'Student Travelers', value: '+35,000' },
          { label: 'Faculty perks', value: 'Complimentary' },
          { label: 'Safety', value: '360° Comprehensive' }
        ]
      },
      'esports-academy': {
        title: 'E-Sports Academy & STEAM: Skills for the Digital Economy',
        subtitle: 'From isolated gaming at home to a supervised intercollegiate academic discipline',
        description: 'Turnkey competitive leagues coupled with hands-on coding, 3D animation, media broadcasting, and collaborative teamwork.',
        badge: 'Youth Vanguard',
        tagline: 'Transforming youth passions into high-demand STEAM capabilities',
        institutionalBenefit: 'Engages students in a safe institutional setting and attracts tech-forward families.',
        highlights: [
          'Safe, supervised environment with specialized mentors and psychologists',
          'Intercollegiate and intramural league organization with campus identity',
          'STEAM K-12 curriculum: Gamification applied to data science, coding, and 3D modeling',
          'Digital career training: Broadcasting, tournament production, digital marketing, and analytics'
        ],
        keyStats: [
          { label: 'Focus', value: 'STEAM & Teamwork' },
          { label: 'Levels', value: 'Middle & High School' },
          { label: 'Competition', value: 'School League' },
          { label: 'Skills', value: 'Digital Economy' }
        ]
      },
      'centro-idiomas': {
        title: 'Digital Language Center & Institutional Whitelabel',
        subtitle: '24/7 multilingual platform customized with your school’s crest and institutional colors',
        description: 'Turnkey cloud infrastructure enabling the school to offer its own branded virtual language center (English, German, French, Korean, Japanese, etc.) without increasing fixed faculty payroll.',
        badge: 'Institutional Whitelabel',
        tagline: 'Annual licenses for up to 10 languages with executive control dashboard',
        institutionalBenefit: 'Creates an immediate direct revenue stream and broadens the academic catalog without increasing fixed payroll.',
        highlights: [
          '10 languages available with structured CEFR levels A1 to C2',
          '100% customized Whitelabel with school crest and graphic identity',
          'Administrative dashboard: Real-time campus, grade, and individual analytics',
          'Balanced 4-skill mastery: Listening, reading, speaking, and writing',
          'Direct articulation with official international certifications'
        ],
        keyStats: [
          { label: 'Languages', value: 'Up to 10' },
          { label: 'Access', value: '24/7 Cloud' },
          { label: 'Customization', value: 'Whitelabel' },
          { label: 'Management', value: 'Executive Dashboard' }
        ]
      },
      'evaluaciones-alumno': {
        title: 'Comprehensive 9-Assessment Student System',
        subtitle: 'Psychometrics, vocational guidance, and socio-emotional growth driven by AI algorithms',
        description: 'Gamified multiplatform assessment evaluating the 9 critical developmental dimensions of each student throughout the academic school year.',
        badge: 'Algorithms & AI',
        tagline: 'Personalized executive reports to empower talents and prevent dropout',
        institutionalBenefit: 'Provides parents with scientific insight into their child’s trajectory and equips the school with an elite career guidance department.',
        highlights: [
          '9 Specialized assessments: Vocational Orientation, Future Talent, Skills, Leadership, Entrepreneurship, EQ, Socio-emotional, Risk Factors, Global Success',
          'Flexible block or individual application with intuitive interface for youth',
          'Institutional control panel for counselors, tutors, and academic directors',
          'Automated recommended action plans to maximize each student’s strengths'
        ],
        keyStats: [
          { label: 'Assessments', value: '9 Dimensions' },
          { label: 'Technology', value: 'AI & Gamification' },
          { label: 'Reports', value: 'Individual & School' },
          { label: 'Cadence', value: 'Structured Annual' }
        ]
      },
      'certificacion-toefl': {
        title: 'Official International English Certification (TOEFL)',
        subtitle: 'Integrate your school into the worldwide TOEFL assessment network at institutional rates',
        description: 'Formal partnership allowing the school to assess and certify students with the most recognized English proficiency test worldwide, with dedicated support.',
        badge: 'Official TOEFL Network',
        tagline: 'International validity for middle school, high school, and university levels',
        institutionalBenefit: 'Formally certifies the school’s bilingual standard with the highest English-speaking prestige.',
        highlights: [
          'Globally endorsed certification for university admissions and exchanges',
          'Institutional pricing with exclusive discounted rates for partner schools',
          'Opportunity to become an authorized test center within campus facilities',
          'Comparative metrics aligned with international CEFR standards'
        ],
        keyStats: [
          { label: 'Validity', value: 'Worldwide' },
          { label: 'Levels', value: 'Middle, High, Univ.' },
          { label: 'Rates', value: 'Special Agreement' },
          { label: 'Support', value: 'Dedicated Ongoing' }
        ]
      }
    };

    return PROGRAMS.map(p => ({
      ...p,
      ...(enMap[p.id] || {})
    }));
  }, [language]);

  const filteredPrograms = useMemo(() => {
    return localizedPrograms.filter((p) => {
      // Category filter
      if (selectedCategory !== 'todos' && p.category !== selectedCategory) {
        return false;
      }

      // Level filter
      if (selectedLevel === 'k12' && !p.id.includes('doble') && !p.id.includes('arukay') && !p.id.includes('idiomas') && !p.id.includes('evaluaciones') && !p.id.includes('toefl')) {
        return false;
      }
      if (selectedLevel === 'prepa' && !p.id.includes('doble') && !p.id.includes('toefl') && !p.id.includes('viajes') && !p.id.includes('evaluaciones') && !p.id.includes('esports')) {
        return false;
      }
      if (selectedLevel === 'docentes' && !p.id.includes('arukay') && !p.id.includes('idiomas')) {
        return false;
      }

      // Text search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesSubtitle = p.subtitle.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesBadge = p.badge ? p.badge.toLowerCase().includes(query) : false;
        const matchesHighlights = p.highlights.some(h => h.toLowerCase().includes(query));
        return matchesTitle || matchesSubtitle || matchesDesc || matchesBadge || matchesHighlights;
      }

      return true;
    });
  }, [localizedPrograms, selectedCategory, selectedLevel, searchQuery]);

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'doble-diploma':
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'arukay-ai':
        return <BrainCircuit className="w-5 h-5 text-blue-400" />;
      case 'viajes-academicos':
        return <Plane className="w-5 h-5 text-emerald-400" />;
      case 'esports-academy':
        return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      case 'centro-idiomas':
        return <Languages className="w-5 h-5 text-cyan-400" />;
      case 'evaluaciones-alumno':
        return <CheckSquare className="w-5 h-5 text-rose-400" />;
      case 'certificacion-toefl':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-amber-400" />;
    }
  };

  const handleOpenDetail = (program: ProgramDetail) => {
    setActiveProgramModal(program);
    setModalTab('resumen');
    analyticsService.trackSectionView(program.id, program.title);
  };

  return (
    <section 
      id="soluciones" 
      className={`py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300 ${
        isDark ? 'bg-[#141e30]' : 'bg-slate-100/90'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border ${
            isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}>
            {t.solutions.portfolioBadge}
          </div>
          <h2 className={`font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            {t.solutions.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t.solutions.subtitle}
          </p>
        </div>

        {/* Search & Level Filter Control Bar */}
        <div className={`p-4 sm:p-5 rounded-2xl border mb-8 flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDark 
            ? 'bg-[#182337] border-slate-700/80 shadow-lg shadow-black/20' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
            <input
              type="text"
              id="solutions-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.solutions.searchPlaceholder}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500' 
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                id={`level-btn-${lvl.id}`}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap border ${
                  selectedLevel === lvl.id
                    ? isDark 
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 font-bold' 
                      : 'bg-amber-100 text-amber-900 border-amber-300 font-bold'
                    : isDark 
                      ? 'text-slate-400 border-slate-700/60 hover:text-slate-200' 
                      : 'text-slate-600 border-slate-200 hover:text-slate-900'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20 scale-[1.02]'
                  : isDark
                    ? 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-300 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Solutions */}
        {filteredPrograms.length === 0 ? (
          <div className={`text-center py-16 px-4 rounded-3xl border ${
            isDark ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'
          }`}>
            <p className={`text-base font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {t.solutions.noResults}
            </p>
            <button
              onClick={() => {
                handleCategorySelect('todos');
                setSelectedLevel('todos');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-amber-500 hover:underline"
            >
              {t.solutions.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                id={`card-${program.id}`}
                onClick={() => handleOpenDetail(program)}
                className={`group relative rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
                  isDark 
                    ? 'bg-[#172236] border-slate-700/80 hover:border-amber-400/40 shadow-black/30' 
                    : 'bg-white border-slate-200 hover:border-amber-400 shadow-md shadow-slate-900/5'
                }`}
              >
                {/* Program Photo Header */}
                {program.imageUrl && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={program.imageUrl}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Floating badge & icon on photo */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <div className="p-2 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-white shadow-md">
                        {getProgramIcon(program.id)}
                      </div>
                      {program.badge && (
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-md">
                          {program.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2.5 left-4 flex items-center gap-2">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                        {language === 'en' ? `Program 0${program.number}` : `Programa 0${program.number}`}
                      </span>
                      {program.accreditation && (
                        <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-slate-900/70 text-slate-300 border border-slate-700">
                          {program.accreditation}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-serif-display text-lg font-bold leading-snug mb-1.5 transition-colors ${
                      isDark 
                        ? 'text-white group-hover:text-amber-300' 
                        : 'text-slate-900 group-hover:text-amber-600'
                    }`}>
                      {program.title}
                    </h3>

                    <p className={`text-xs font-semibold mb-2.5 ${
                      isDark ? 'text-amber-300/90' : 'text-amber-700'
                    }`}>
                      {program.subtitle}
                    </p>

                    <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {program.description}
                    </p>
                  </div>

                  <div>
                    {/* Key stats pills */}
                    <div className={`grid grid-cols-2 gap-2 mb-4 pt-3 border-t ${
                      isDark ? 'border-slate-700/70' : 'border-slate-100'
                    }`}>
                      {program.keyStats.slice(0, 2).map((st, i) => (
                        <div 
                          key={i} 
                          className={`p-2 rounded-xl border ${
                            isDark 
                              ? 'bg-[#111929] border-slate-700/60 text-white' 
                              : 'bg-slate-50 border-slate-200 text-slate-900'
                          }`}
                        >
                          <div className="text-xs font-bold truncate">{st.value}</div>
                          <div className={`text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Card Action - Single Strategic, Clean Directorial Action */}
                    <div className="pt-1">
                      <button
                        id={`btn-detail-${program.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenDetail(program);
                        }}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all duration-200 flex items-center justify-center gap-2 group/btn ${
                          isDark 
                            ? 'text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border-slate-700/80 hover:border-amber-400/50' 
                            : 'text-slate-800 bg-slate-50 hover:bg-slate-100 hover:text-slate-950 border-slate-200 hover:border-amber-500 shadow-sm'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-500" />
                        <span>{t.solutions.viewTechSheet}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:opacity-100 transition-all text-amber-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Catalog Callout */}
        <div className={`mt-14 p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
          isDark 
            ? 'bg-[#182337] border-slate-700/80 shadow-lg' 
            : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-400/10 text-amber-500 border border-amber-400/20 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.solutions.catalogCalloutTitle}
              </h4>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {t.solutions.catalogCalloutDesc}
              </p>
            </div>
          </div>
          <a
            href={COMPANY_INFO.headquarters.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analyticsService.logEvent('brochure_view', 'Apertura de catálogo aflip')}
            className={`shrink-0 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold border flex items-center gap-2 transition-all ${
              isDark 
                ? 'text-white bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-amber-400/50' 
                : 'text-slate-800 bg-slate-100 hover:bg-slate-200 border-slate-300 hover:border-amber-500'
            }`}
          >
            <span>{t.solutions.catalogCalloutBtn}</span>
            <ExternalLink className="w-4 h-4 text-amber-500" />
          </a>
        </div>
      </div>

      {/* Program Detail Executive Modal */}
      {activeProgramModal && (
        <div
          id="program-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProgramModal(null)}
        >
          <div
            className={`border rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200 ${
              isDark ? 'bg-[#182337] border-slate-700' : 'bg-white border-slate-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal banner */}
            <div className="relative h-48 w-full bg-slate-900 overflow-hidden rounded-t-3xl">
              <img
                src={activeProgramModal.imageUrl}
                alt={activeProgramModal.title}
                className="w-full h-full object-cover brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#182337] via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setActiveProgramModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  {language === 'en' ? `Institutional Program 0${activeProgramModal.number}` : `Programa Institucional 0${activeProgramModal.number}`}
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white leading-tight">
                  {activeProgramModal.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Modal Tabs */}
              <div className="flex items-center border-b border-slate-700/60 mb-6 gap-2">
                <button
                  onClick={() => setModalTab('resumen')}
                  className={`pb-2 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
                    modalTab === 'resumen'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {language === 'en' ? 'Overview & Scope' : 'Resumen & Enfoque'}
                </button>
                <button
                  onClick={() => setModalTab('modulos')}
                  className={`pb-2 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
                    modalTab === 'modulos'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {language === 'en' ? 'Curricular Modules' : 'Componentes Clave'}
                </button>
                <button
                  onClick={() => setModalTab('beneficios')}
                  className={`pb-2 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
                    modalTab === 'beneficios'
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {language === 'en' ? 'Impact & ROI' : 'Impacto & ROI'}
                </button>
              </div>

              {/* Tab 1: Resumen */}
              {modalTab === 'resumen' && (
                <div className="space-y-4">
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                    {activeProgramModal.description}
                  </p>
                  
                  {activeProgramModal.tagline && (
                    <div className={`p-4 rounded-xl border border-amber-400/20 text-xs sm:text-sm font-medium ${
                      isDark ? 'bg-amber-400/10 text-amber-200' : 'bg-amber-50 text-amber-900'
                    }`}>
                      💡 <span className="font-bold">{language === 'en' ? 'Value Proposition:' : 'Propuesta de Valor:'}</span> {activeProgramModal.tagline}
                    </div>
                  )}

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                    {activeProgramModal.keyStats.map((st, i) => (
                      <div 
                        key={i} 
                        className={`p-3 rounded-xl border text-center ${
                          isDark ? 'bg-slate-900/80 border-slate-700/60' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="text-sm font-bold text-amber-400">{st.value}</div>
                        <div className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Modulos */}
              {modalTab === 'modulos' && (
                <div className="space-y-3">
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {language === 'en' 
                      ? 'Operational structure and curricular specifications:' 
                      : 'Estructura operativa y especificaciones pedagógicas del programa:'}
                  </p>
                  <ul className="space-y-2.5">
                    {activeProgramModal.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div className="p-1 rounded-md bg-amber-400/20 text-amber-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tab 3: Beneficios */}
              {modalTab === 'beneficios' && (
                <div className="space-y-4">
                  <div className={`p-4 rounded-2xl border ${
                    isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-950'
                  }`}>
                    <h5 className="font-bold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-blue-400" />
                      {t.solutions.modalInstitutionalBenefit}
                    </h5>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {activeProgramModal.institutionalBenefit}
                    </p>
                  </div>

                  <div className={`p-4 rounded-2xl border ${
                    isDark ? 'bg-slate-900/60 border-slate-700/60' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-amber-400 mb-2">
                      {t.solutions.modalSupport}
                    </h5>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {t.solutions.modalSupportDesc}
                    </p>
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProgramModal(null)}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold border ${
                    isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {t.solutions.modalReturn}
                </button>

                <button
                  id="modal-detail-booking-btn"
                  onClick={() => {
                    const programTitle = activeProgramModal.title;
                    setActiveProgramModal(null);
                    onSelectProgramForBooking(programTitle);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.solutions.modalBookSession}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
