import {
  BarChart3, Globe2, LockKeyhole, Mail, MessageCircle,
  Search, Bot, Palette, FileText, Server, Link2,
} from 'lucide-react';
import styles from './FeaturesIncludedSection.module.css';

const features = [
  { icon: Globe2,       title: 'Domain Setup',               color: '#3b82f6' },
  { icon: Server,       title: 'Web Hosting Setup',           color: '#06b6d4' },
  { icon: Link2,        title: 'Social Media Integration',    color: '#8b5cf6' },
  { icon: BarChart3,    title: 'Google Tools Integration',    color: '#f59e0b' },
  { icon: Search,       title: 'Basic SEO Setup',             color: '#10b981' },
  { icon: Globe2,       title: 'Indexing Tools Setup',        color: '#0ea5e9' },
  { icon: Bot,          title: 'AI Visibility Tools Setup',   color: '#6366f1' },
  { icon: Palette,      title: 'Logo Design & Creatives',     color: '#ec4899' },
  { icon: FileText,     title: 'Website Content Creation',    color: '#f97316' },
  { icon: MessageCircle,title: 'Chat & Call Tools',           color: '#14b8a6' },
  { icon: Mail,         title: 'Enterprise Email Setup',      color: '#ef4444' },
  { icon: LockKeyhole,  title: 'SSL Security Setup',          color: '#6366f1' },
];

export default function FeaturesIncludedSection() {
  return (
    <section className={styles.section} aria-labelledby="features-title">
      <div className={styles.inner}>
        <div className={styles.heading} data-reveal>
          <span className={styles.badge}>INCLUDED WITH EVERY PROJECT</span>
          <h2 id="features-title">Unique Services We Offer With <em>Every Project</em></h2>
          <p>Every project is shaped around its scope. These are the practical foundations we include when they fit your website, app or software brief.</p>
        </div>
        <div className={styles.grid} data-reveal="stagger">
          {features.map(({ icon: Icon, title, color }, index) => (
            <article key={title} className={styles.card} style={{ '--reveal-index': index, '--card-color': color }}>
              <span className={styles.icon} style={{ color, background: `${color}15` }}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className={styles.label}>{title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
