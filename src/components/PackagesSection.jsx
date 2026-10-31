import { ArrowRight, Check } from 'lucide-react';
import styles from './PackagesSection.module.css';

const packages = [
  {
    name: 'Landing Page',
    description: 'A focused page for a campaign, product or local business enquiry.',
    features: ['Responsive layout', 'WhatsApp and call CTA', 'Lead capture form', 'SEO-ready foundation'],
  },
  {
    name: 'Business Website',
    description: 'A polished multi-page website that explains your business clearly.',
    features: ['Premium UI/UX', 'Mobile-first design', 'SEO-ready structure', 'Performance-focused delivery'],
  },
  {
    name: 'E-commerce Website',
    description: 'A commerce experience shaped around your products and operations.',
    features: ['Product catalogue', 'Mobile-optimised pages', 'Cart and checkout scope', 'Payment integration where required'],
  },
  {
    name: 'Custom Software',
    description: 'A tailored digital product for workflows, dashboards and integrations.',
    features: ['Custom design system', 'Advanced interactions', 'API integrations', 'Scalable architecture'],
  },
];

export default function PackagesSection({ onQuote }) {
  return (
    <section className={styles.section} aria-labelledby="packages-title">
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>Packages</span>
          <h2 id="packages-title">Website Packages For <span>Every Business</span></h2>
          <p>Every project is scoped around your goals, requirements and functionality. Request a tailored estimate for the right package.</p>
        </div>
        <div className={styles.grid} data-reveal="stagger">
          {packages.map((item, index) => (
            <article className={styles.card} key={item.name} style={{ '--reveal-index': index }}>
              <span className={styles.number}>0{index + 1}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <ul>
                {item.features.map(feature => (
                  <li key={feature}><Check size={14} />{feature}</li>
                ))}
              </ul>
              <button type="button" onClick={onQuote}>
                Discuss this package <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
