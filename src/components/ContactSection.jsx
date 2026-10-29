import { Phone, Mail, MessageCircle } from 'lucide-react';
import { contact } from '../data/siteData';
import EnquiryForm from './EnquiryForm';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>Get In Touch</span>
          <h2>Have a Project in Mind? Let’s Talk.</h2>
          <p>Tell us about your website, web application or Android and iOS app project.</p>
        </div>
        <div className={styles.grid} data-reveal>
          <div className={styles.info}>
            <h3>Tell Us What You’re Building</h3>
            <p>Share your requirements for a website, mobile app, e-commerce platform or custom software solution.</p>
            <div className={styles.contacts}>
              {contact.phone && (
                <a href={`tel:${contact.phone.international}`} className={styles.contactItem}>
                  <Phone size={18} color="#3b82f6" />
                  <span>{contact.phone.display}</span>
                </a>
              )}
              <a href={`mailto:${contact.email}`} className={styles.contactItem}>
                <Mail size={18} color="#06b6d4" />
                <span>{contact.email}</span>
              </a>
              {contact.phone && (
                <a href={`https://wa.me/${contact.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <MessageCircle size={18} color="#10b981" />
                  <span>WhatsApp</span>
                </a>
              )}
              {contact.instagram && (
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  <span>Instagram</span>
                </a>
              )}
            </div>
          </div>
          <div className={styles.formWrap}>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
