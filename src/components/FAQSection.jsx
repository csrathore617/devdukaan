import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteData';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about our services and how we work.</p>
        </div>
        <div className={styles.list} data-reveal="stagger">
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button id={`faq-${i}-question`} className={styles.question} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`faq-${i}-answer`}>
                <span>{faq.q}</span>
                <ChevronDown size={18} className={styles.chevron} />
              </button>
              <div id={`faq-${i}-answer`} className={styles.answer} role="region" aria-labelledby={`faq-${i}-question`} hidden={open !== i}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
