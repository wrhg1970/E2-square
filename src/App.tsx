import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsShowcase } from './components/SolutionsShowcase';
import { StrategicImpact } from './components/StrategicImpact';
import { ImplementationMethodology } from './components/ImplementationMethodology';
import { Testimonios } from './components/Testimonios';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnalyticsPanelModal } from './components/AnalyticsPanelModal';
import { BookingModal } from './components/BookingModal';
import { analyticsService } from './services/analyticsService';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Calendar, ArrowUp, MessageCircle } from 'lucide-react';

function AppContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { language, t } = useLanguage();

  const [analyticsData, setAnalyticsData] = useState(() => analyticsService.getData());
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync analytics data on updates
  const refreshAnalytics = () => {
    setAnalyticsData(analyticsService.getData());
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (programTitle?: string) => {
    if (programTitle) {
      setPreselectedProgram(programTitle);
    }
    setIsBookingOpen(true);
  };

  const handleExploreCategory = (catId: string) => {
    setSelectedCategory(catId);
    const el = document.getElementById('soluciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? 'bg-[#121a2a] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200' : 'bg-white text-slate-900 selection:bg-amber-500/30 selection:text-amber-700'
      }`}
    >
      {/* Fixed Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
        totalVisits={analyticsData.totalVisits}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={(prog) => handleOpenBooking(prog)} 
          onExploreCategory={handleExploreCategory}
        />

        {/* 7 Core Solutions & Detail Modals */}
        <SolutionsShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectProgramForBooking={(progTitle) => handleOpenBooking(progTitle)}
        />

        {/* 5 Strategic Axes & Interactive Simulator */}
        <StrategicImpact onOpenBooking={() => handleOpenBooking()} />

        {/* 6-Stage Implementation Roadmap & Other Programs */}
        <ImplementationMethodology onOpenBooking={() => handleOpenBooking()} />

        {/* Carousel de Citas de Rectores y Directivos Académicos (Social Proof) */}
        <Testimonios onOpenBooking={() => handleOpenBooking()} />

        {/* Bespoke Executive Invitation Card triggering Modal */}
        <ContactSection
          onOpenBookingModal={() => handleOpenBooking()}
        />
      </main>

      {/* Institutional Footer with Accessibility Theme Toggle */}
      <Footer
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking Modal Overlay (Not embedded on the main page) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedProgram={preselectedProgram}
        onLeadSubmitted={refreshAnalytics}
      />

      {/* Analytics Panel Modal */}
      <AnalyticsPanelModal
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
        data={analyticsData}
        onDataUpdate={refreshAnalytics}
      />

      {/* Discreet Floating Direct Concierge (Clean & Non-Intrusive) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            title="Volver arriba"
            className={`p-2.5 rounded-full border shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 ${
              isDark 
                ? 'bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border-slate-700/80' 
                : 'bg-white/90 text-slate-700 hover:text-slate-950 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href="https://wa.me/528183352711?text=Hola%20E2%20Square,%20me%20comunico%20desde%20la%20direcci%C3%B3n%20de%20mi%20colegio%20para%20solicitar%20informaci%C3%B3n%20sobre%20sus%20soluciones%20educativas."
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          title={language === 'en' ? "Direct WhatsApp contact to Chancellery" : "Contacto directo vía WhatsApp a Rectoría"}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all text-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">{t.contact.whatsappBtn}</span>
        </a>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
