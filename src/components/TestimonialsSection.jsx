import { ArrowRight } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection({ onQuote }) {
  return (
    <section className={styles.section} aria-labelledby="project-cta-title">
      <div className={styles.inner} data-reveal>
        <div className={styles.copy}>
          <span className={styles.badge}>Let’s Build Together</span>
          <h2 id="project-cta-title">Have a Project in Mind?</h2>
          <p>Tell us what you’re planning. We’ll discuss the right next step for your business.</p>
        </div>
        <button className={styles.cta} onClick={onQuote}>Start a Conversation <ArrowRight size={17} /></button>
      </div>
    </section>
  );
}
