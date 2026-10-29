import styles from './Logo.module.css';

export default function Logo({ size = 'md' }) {
  return (
    <a href="#home" className={`${styles.logo} ${styles[size]}`} aria-label="DevDukaan.in Home">
      <div className={styles.icon}>
        <span className={styles.bracket}>&lt;</span>
        <span className={styles.dd}>DD</span>
        <span className={styles.bracket}>/&gt;</span>
      </div>
      <div className={styles.text}>
        <span className={styles.name}>DevDukaan<span className={styles.dot}>.in</span></span>
        <span className={styles.tagline}>Your Vision. Our Code. Your Growth.</span>
      </div>
    </a>
  );
}
