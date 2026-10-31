import {
  BarChart3, Globe2, Gauge, LockKeyhole, Mail, MessageCircle,
  Search, ShieldCheck, Smartphone, Wrench,
} from 'lucide-react';
import styles from './FeaturesIncludedSection.module.css';

const features = [
  { icon: Globe2, title: 'Domain & hosting guidance', color: '#3b82f6' },
  { icon: Smartphone, title: 'Responsive by design', color: '#06b6d4' },
  { icon: Search, title: 'SEO-ready foundations', color: '#8b5cf6' },
  { icon: BarChart3, title: 'Analytics integration', color: '#f59e0b' },
  { icon: MessageCircle, title: 'WhatsApp integration', color: '#10b981' },
  { icon: Mail, title: 'Contact form setup', color: '#ef4444' },
  { icon: LockKeyhole, title: 'SSL & security setup', color: '#6366f1' },
  { icon: Gauge, title: 'Performance focused', color: '#0ea5e9' },
  { icon: Wrench, title: 'Post-launch support', color: '#f97316' },
  { icon: ShieldCheck, title: 'Maintainable delivery', color: '#14b8a6' },
];

export default function FeaturesIncludedSection() {
  return (
    <section className={styles.section} aria-labelledby="features-title">
      <div className={styles.inner}>
        <div className={styles.stats} data-reveal>
          <div><strong>Web</strong><span>Experiences</span></div>
          <div><strong>Web</strong><span>Applications</span></div>
          <div><strong>Mobile</strong><span>Products</span></div>
          <div><strong>Support</strong><span>After launch</span></div>
        </div>
        <div className={styles.heading} data-reveal>
          <span className={styles.badge}>Included with every project</span>
          <h2 id="features-title">Unique Services We Offer With Every <em>Project.</em></h2>
          <p>Every project is shaped around its scope. These are the practical foundations we consider when they fit your website, app or software brief.</p>
        </div>
        <div className={styles.marquee} aria-label="Project capabilities">
          <div className={styles.marqueeTrack}>
            {[...features, ...features].map(({ icon: Icon, title, color }, index) => (
              <span key={`${title}-${index}`} className={styles.pill}>
                <Icon size={16} color={color} aria-hidden="true" /> {title}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.grid} data-reveal="stagger">
          {features.map(({ icon: Icon, title, color }, index) => (
            <article key={title} className={styles.card} style={{ '--reveal-index': index }}>
              <span className={styles.icon} style={{ color, background: `${color}15` }}><Icon size={20} /></span>
              <span>{title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
