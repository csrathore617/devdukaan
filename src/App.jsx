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
import EnquiryBadge from './components/EnquiryBadge';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import FeaturesIncludedSection from './components/FeaturesIncludedSection';
import FloatingCallButton from './components/FloatingCallButton';
import ServiceRibbons from './components/ServiceRibbons';
import PackagesSection from './components/PackagesSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

const PAGE_METADATA = {
  '/': {
    title: 'DevDukaan.in | Website & Mobile App Development',
    description: 'DevDukaan.in develops modern websites, custom web applications and Android & iOS mobile apps for businesses.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | DevDukaan.in',
    description: 'Read how DevDukaan.in collects, uses and protects information submitted through its website enquiry form.',
  },
  '/terms': {
    title: 'Terms & Conditions | DevDukaan.in',
    description: 'Review the terms for DevDukaan.in website, web application, mobile application and software development services.',
  },
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const metadataPath = PAGE_METADATA[path] ? path : '/';
  const pageMetadata = PAGE_METADATA[metadataPath];

  useEffect(() => {
    const canonicalUrl = `https://www.devdukaan.in${metadataPath === '/' ? '/' : metadataPath}`;
    document.title = pageMetadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMetadata.description);
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'index, follow');
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageMetadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageMetadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pageMetadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', pageMetadata.description);
  }, [pageMetadata, metadataPath]);

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
      <div className="announcement-bar" role="status">
        <div className="announcement-viewport" aria-label="DevDukaan services">
          <div className="announcement-track">
            <span><i className="announcement-dot" aria-hidden="true" /> Thoughtful digital products for ambitious businesses</span>
            <span>Websites <b aria-hidden="true">·</b> Web apps <b aria-hidden="true">·</b> Mobile apps</span>
            <span>Responsive design <b aria-hidden="true">·</b> Reliable development</span>
            <span aria-hidden="true"><i className="announcement-dot" /> Thoughtful digital products for ambitious businesses</span>
            <span aria-hidden="true">Websites <b>·</b> Web apps <b>·</b> Mobile apps</span>
            <span aria-hidden="true">Responsive design <b>·</b> Reliable development</span>
          </div>
        </div>
      </div>
      <Header onQuote={() => setModalOpen(true)} />
      <main>
        <HeroSection onQuote={() => setModalOpen(true)} />
        <ServicesSection onQuote={() => setModalOpen(true)} />
        <FeaturesIncludedSection />
        <ServiceRibbons />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TechnologiesSection />
        <PackagesSection onQuote={() => setModalOpen(true)} />
        <DevelopmentProcessSection />
        <ClientsSection />
        <TestimonialsSection onQuote={() => setModalOpen(true)} />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <EnquiryBadge onClick={() => setModalOpen(true)} />
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <EnquiryPopup modalOpen={modalOpen} />
      <FloatingCallButton modalOpen={modalOpen} />
      <FloatingWhatsAppButton modalOpen={modalOpen} />
    </>
  );
}
