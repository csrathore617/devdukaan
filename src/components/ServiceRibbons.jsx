import styles from './ServiceRibbons.module.css';

const labels = [
  'SPEED OPTIMISATION',
  'SEO SETUP',
  'MOBILE-FIRST BUILD',
  'CUSTOM WEBSITE',
  'LOGO DESIGN',
  'CHAT WIDGET',
  'FAST DELIVERY',
  'SOCIAL MEDIA INTEGRATION',
];

function Ribbon({ reverse = false, children }) {
  const items = [...labels, ...labels];
  return (
    <div className={`${styles.ribbon} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.track}>
        {items.map((label, index) => (
          <span key={`${label}-${index}`}>{label}<b aria-hidden="true">◆</b></span>
        ))}
      </div>
      <span className={styles.srOnly}>{children}</span>
    </div>
  );
}

export default function ServiceRibbons() {
  return (
    <section className={styles.section} aria-label="DevDukaan capabilities">
      <Ribbon>DevDukaan website and software development capabilities</Ribbon>
      <Ribbon reverse>DevDukaan website and software development capabilities</Ribbon>
    </section>
  );
}
