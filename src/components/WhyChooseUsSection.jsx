import { CheckCircle, HeartHandshake, Layers, Puzzle, Shield, Smartphone, Zap } from 'lucide-react';
import { whyUs } from '../data/siteData';
import styles from './WhyChooseUsSection.module.css';

const icons = { CheckCircle, HeartHandshake, Layers, Puzzle, Shield, Smartphone, Zap };

const cardThemes = [
  { gradient: 'linear-gradient(135deg, #1d4ed8, #06b6d4)', glow: '#22d3ee' },
  { gradient: 'linear-gradient(135deg, #7c3aed, #2563eb)', glow: '#818cf8' },
  { gradient: 'linear-gradient(135deg, #059669, #0f9f95)', glow: '#34d399' },
  { gradient: 'linear-gradient(135deg, #f97316, #facc15)', glow: '#fbbf24' },
  { gradient: 'linear-gradient(135deg, #ec4899, #7c3aed)', glow: '#f472b6' },
  { gradient: 'linear-gradient(135deg, #06b6d4, #1e3a8a)', glow: '#38bdf8' },
];

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
            const theme = cardThemes[index];
            return (
              <article
                key={item.title}
                className={styles.card}
                style={{
                  '--reveal-index': index,
                  '--card-gradient': theme.gradient,
                  '--card-glow': theme.glow,
                }}
              >
                <div className={styles.iconWrap} aria-hidden="true"><Icon size={22} /></div>
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
