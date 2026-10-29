import { CheckCircle, HeartHandshake, Layers, Puzzle, Shield, Smartphone, Zap } from 'lucide-react';
import { whyUs } from '../data/siteData';
import styles from './WhyChooseUsSection.module.css';

const icons = { CheckCircle, HeartHandshake, Layers, Puzzle, Shield, Smartphone, Zap };

export default function WhyChooseUsSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>About DevDukaan</span>
          <h2>Websites &amp; Mobile Apps for Your Business</h2>
          <p>DevDukaan develops business websites and landing pages, custom web applications, Android and iOS mobile applications, e-commerce platforms, business automation software, APIs and system integrations.</p>
        </div>
        <div className={styles.gridIntro} data-reveal>
          <h3>Why Choose Us</h3>
          <p>Custom development, responsive UI, performance, security, scalable architecture and ongoing support.</p>
        </div>
        <div className={styles.grid} data-reveal="stagger">
          {whyUs.map((item, index) => {
            const Icon = icons[item.icon] || CheckCircle;
            return (
              <article key={item.title} className={styles.card} style={{ '--reveal-index': index }}>
                <div className={styles.iconWrap}><Icon size={22} color="#3b82f6" /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
