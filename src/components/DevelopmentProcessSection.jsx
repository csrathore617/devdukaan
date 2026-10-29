import { processSteps } from '../data/siteData';
import styles from './DevelopmentProcessSection.module.css';

export default function DevelopmentProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>How We Work</span>
          <h2>From Idea to Launch</h2>
          <p>A clear, structured process to take your project from concept to launch.</p>
        </div>
        <div className={styles.steps} data-reveal="stagger">
          {processSteps.map((s, i) => (
            <div key={s.step} className={styles.step} style={{ '--reveal-index': i }}>
              <div className={styles.stepNum}>{s.step}</div>
              {i < processSteps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepContent}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
