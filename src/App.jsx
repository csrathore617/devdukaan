import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TechnologiesSection from './components/TechnologiesSection';
import DevelopmentProcessSection from './components/DevelopmentProcessSection';
import ClientsSection from './components/ClientsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import EnquiryPopup from './components/EnquiryPopup';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return undefined;
    }

    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    elements.forEach(element => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  if (path === '/privacy-policy') return <PrivacyPolicy />;
  if (path === '/terms') return <Terms />;

  return (
    <>
      <Header onQuote={() => setModalOpen(true)} />
      <main>
        <HeroSection onQuote={() => setModalOpen(true)} />
        <ServicesSection onQuote={() => setModalOpen(true)} />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TechnologiesSection />
        <DevelopmentProcessSection />
        <ClientsSection />
        <TestimonialsSection onQuote={() => setModalOpen(true)} />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <EnquiryPopup modalOpen={modalOpen} />
      <FloatingWhatsAppButton modalOpen={modalOpen} />
    </>
  );
}
