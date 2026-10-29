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

export default function ServicesSection({ onQuote }) {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>What We Do</span>
          <h2>Websites, Web Applications &amp; Mobile Apps</h2>
          <p>From business websites and distinct mobile apps to custom software, design and ongoing support.</p>
        </div>
        <div className={styles.grid} data-reveal="stagger">
          {services.map((s, index) => {
            const Icon = icons[s.icon] || Globe;
            return (
              <article key={s.id} className={styles.card} style={{ '--reveal-index': index }}>
                <div className={styles.iconWrap} style={{ background: `${s.color}18`, border: `1px solid ${s.color}40` }}>
                  <Icon size={24} color={s.color} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <button className={styles.action} onClick={onQuote}>Get a Quote <span aria-hidden="true">→</span></button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
