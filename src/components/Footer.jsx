import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { contact } from '../data/siteData';
import { scrollToSection } from '../utils/scrollToSection';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Contact Us', href: '#contact' },
];

const serviceLinks = [
  'Website Development', 'Web Applications', 'Android & iOS Apps',
  'E-commerce', 'Custom Software', 'Maintenance & Support',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const handleNav = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner} data-reveal="stagger">
        <div className={styles.brand}>
          <Logo size="sm" />
          <p>Websites, web applications and Android &amp; iOS apps shaped around your business.</p>
          <div className={styles.social}>
            {contact.instagram && (
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            )}
            {contact.linkedin && (
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            )}
            <a href={`mailto:${contact.email}`} aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map(l => (
              <li key={l.href}><a href={l.href} onClick={(e) => handleNav(e, l.href)}>{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Our Services</h4>
          <ul>
            {serviceLinks.map(s => <li key={s}><a href="#services" onClick={(e) => handleNav(e, '#services')}>{s}</a></li>)}
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Contact</h4>
          <div className={styles.contactList}>
            {contact.phone && (
              <a href={`tel:${contact.phone.international}`} className={styles.contactRow}><Phone size={14} />{contact.phone.display}</a>
            )}
            <a href={`mailto:${contact.email}`} className={styles.contactRow}><Mail size={14} />{contact.email}</a>
            <div className={styles.contactRow}><MapPin size={14} />{contact.location}</div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {year} DevDukaan.in. All rights reserved.</span>
        <div className={styles.legal}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
