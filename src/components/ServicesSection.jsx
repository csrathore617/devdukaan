import {
  Code2, Globe, LayoutDashboard, Paintbrush, Plug, Settings, ShoppingCart,
  Smartphone, TabletSmartphone, TrendingUp, Wrench, Layers,
} from 'lucide-react';
import { services } from '../data/services';
import styles from './ServicesSection.module.css';

const icons = {
  Code2, Globe, LayoutDashboard, Paintbrush, Plug, Settings, ShoppingCart,
  Smartphone, TabletSmartphone, TrendingUp, Wrench, Layers,
};

const cardThemes = [
  { accent: 'linear-gradient(90deg,#2563eb,#06b6d4)', badgeBg: '#e7f0ff', badgeColor: '#2563eb', category: 'Web' },
  { accent: 'linear-gradient(90deg,#06b6d4,#0f9f95)', badgeBg: '#e0f9f7', badgeColor: '#0f9f95', category: 'Web App' },
  { accent: 'linear-gradient(90deg,#8b5cf6,#6366f1)', badgeBg: '#f0ebff', badgeColor: '#7c3aed', category: 'Mobile' },
  { accent: 'linear-gradient(90deg,#f59e0b,#f97316)', badgeBg: '#fff7e6', badgeColor: '#d97706', category: 'Mobile' },
  { accent: 'linear-gradient(90deg,#10b981,#06b6d4)', badgeBg: '#e6faf4', badgeColor: '#059669', category: 'Mobile' },
  { accent: 'linear-gradient(90deg,#ef4444,#f97316)', badgeBg: '#fff0f0', badgeColor: '#dc2626', category: 'E-commerce' },
  { accent: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', badgeBg: '#eef2ff', badgeColor: '#4f46e5', category: 'Software' },
  { accent: 'linear-gradient(90deg,#06b6d4,#3b82f6)', badgeBg: '#e0f2fe', badgeColor: '#0284c7', category: 'Integration' },
  { accent: 'linear-gradient(90deg,#8b5cf6,#ec4899)', badgeBg: '#fdf2ff', badgeColor: '#9333ea', category: 'CMS' },
  { accent: 'linear-gradient(90deg,#f59e0b,#10b981)', badgeBg: '#fefce8', badgeColor: '#ca8a04', category: 'Support' },
  { accent: 'linear-gradient(90deg,#10b981,#06b6d4)', badgeBg: '#ecfdf5', badgeColor: '#059669', category: 'Design' },
  { accent: 'linear-gradient(90deg,#ef4444,#8b5cf6)', badgeBg: '#fff0f0', badgeColor: '#dc2626', category: 'SEO' },
];

export default function ServicesSection({ onQuote }) {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>What We Do</span>
          <h2>Check Out Our <span className={styles.highlight}>Stunning Services</span></h2>
          <p>From business websites and distinct mobile apps to custom software, design and ongoing support.</p>
        </div>
        <div className={styles.grid} data-reveal="stagger">
          {services.map((s, index) => {
            const Icon = icons[s.icon] || Globe;
            const theme = cardThemes[index % cardThemes.length];
            return (
              <article
                key={s.id}
                className={styles.card}
                style={{
                  '--reveal-index': index,
                  '--card-accent': theme.accent,
                  '--badge-bg': theme.badgeBg,
                  '--badge-color': theme.badgeColor,
                }}
              >
                <span className={styles.cardBadge}>{theme.category}</span>
                <div className={styles.iconWrap} style={{ background: `${s.color}18`, border: `1px solid ${s.color}40` }}>
                  <Icon size={24} color={s.color} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <button className={styles.action} onClick={onQuote}>
                  Enquire Now <span aria-hidden="true">→</span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
