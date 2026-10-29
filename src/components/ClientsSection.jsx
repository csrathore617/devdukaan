import { portfolio } from '../data/portfolio';
import styles from './ClientsSection.module.css';

export default function ClientsSection() {
  return (
    <section id="clients" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHead} data-reveal>
          <span className={styles.badge}>Our Clients</span>
          <h2>Our Clients &amp; Projects</h2>
          <p>Selected names from the projects featured in our portfolio.</p>
        </div>
        <div className={styles.grid} data-reveal="stagger">
          {portfolio.map((p, index) => (
            <div key={p.id} className={styles.card} style={{ '--reveal-index': index }}>
              <div className={styles.logo}>{p.name.charAt(0)}</div>
              <div className={styles.info}>
                <span className={styles.name}>{p.name}</span>
                <span className={styles.cat}>{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
