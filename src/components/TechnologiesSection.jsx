import { useState } from 'react';
import { technologies } from '../data/siteData';
import styles from './TechnologiesSection.module.css';

export default function TechnologiesSection() {
  const categories = Object.keys(technologies);
  const [active, setActive] = useState(categories[0]);
  const activeTechnologies = technologies[active].filter(tech => tech.enabled);

  return (
    <section id="technologies" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>Our technology ecosystem</span>
          <h2>Our Expertise &amp; <span className={styles.highlight}>Technology</span></h2>
          <p>Explore common technology options for websites, applications, APIs and software. We recommend a stack to fit each project’s scope.</p>
        </div>
        <div className={styles.tabs} role="group" aria-label="Technology categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.tab} ${active === cat ? styles.tabActive : ''}`}
              aria-pressed={active === cat}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div id="technology-grid" className={styles.grid} aria-live="polite" data-reveal="stagger">
          {activeTechnologies.map((tech, index) => (
            <div key={tech.name} className={styles.card} style={{ '--reveal-index': index, '--tech-color': tech.color }}>
              <span className={styles.techIcon} aria-hidden="true">{tech.mark}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
