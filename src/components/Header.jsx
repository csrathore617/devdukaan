import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import { contact, navLinks } from '../data/siteData';
import { scrollToSection } from '../utils/scrollToSection';
import styles from './Header.module.css';

export default function Header({ onQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const handler = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Logo />
        <nav id="primary-navigation" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Main navigation">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className={styles.link} onClick={(e) => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
          <button className={`${styles.cta} ${styles.ctaMobile}`} onClick={() => { setOpen(false); onQuote(); }}>
            Get a Free Quote
          </button>
        </nav>
        <a className={styles.phoneLink} href={`tel:${contact.phone.international}`} aria-label={`Call DevDukaan at ${contact.phone.display}`}>
          <Phone size={14} aria-hidden="true" />
          <span>{contact.phone.display}</span>
        </a>
        <button className={styles.cta} onClick={onQuote}>Get a Free Quote</button>
        <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}
    </header>
  );
}
