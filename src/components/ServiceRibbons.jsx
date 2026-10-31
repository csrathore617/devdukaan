import styles from './ServiceRibbons.module.css';

const defaultLabels = [
  'SPEED OPTIMISATION',
  'SEO SETUP',
  'MOBILE-FIRST BUILD',
  'CUSTOM WEBSITE',
  'LOGO DESIGN',
  'CHAT WIDGET',
  'FAST DELIVERY',
  'SOCIAL MEDIA INTEGRATION',
];

const variants = {
  yellowGreen: { colors: 'yellowGreen', angle: -2.4, speed: 30 },
  orangeNavy: { colors: 'orangeNavy', angle: 2, speed: 34, reverse: true },
  cyanBlue: { colors: 'cyanBlue', angle: -1.6, speed: 28 },
  purpleBlue: { colors: 'purpleBlue', angle: 2.4, speed: 32, reverse: true },
  whiteBlue: { colors: 'whiteBlue', angle: -1.8, speed: 36 },
};

const companionVariants = {
  yellowGreen: 'orangeNavy',
  orangeNavy: 'yellowGreen',
  cyanBlue: 'purpleBlue',
  purpleBlue: 'cyanBlue',
  whiteBlue: 'purpleBlue',
};

export function AnimatedRibbon({
  variant = 'yellowGreen',
  labels = defaultLabels,
  reverse,
  children = 'DevDukaan website and software development capabilities',
  layer = 'primary',
}) {
  const settings = variants[variant] || variants.yellowGreen;
  const items = [...labels, ...labels];
  const isReverse = reverse ?? settings.reverse;

  return (
    <div
      className={`${styles.ribbon} ${styles[layer]} ${styles[settings.colors]} ${isReverse ? styles.reverse : ''}`}
      style={{ '--ribbon-angle': `${settings.angle}deg`, '--ribbon-speed': `${settings.speed}s` }}
    >
      <div className={styles.track} aria-hidden="true">
        {items.map((label, index) => (
          <span key={`${label}-${index}`}>{label}<b aria-hidden="true">◆</b></span>
        ))}
      </div>
      <span className={styles.srOnly}>{children}</span>
    </div>
  );
}

export default function ServiceRibbons({ variant = 'yellowGreen', labels, children }) {
  const companionVariant = companionVariants[variant] || 'orangeNavy';
  const primarySettings = variants[variant] || variants.yellowGreen;

  return (
    <section className={styles.section} aria-label={children || 'DevDukaan capabilities'}>
      <AnimatedRibbon variant={variant} labels={labels} children={children} layer="primary" />
      <AnimatedRibbon
        variant={companionVariant}
        labels={labels}
        reverse={!primarySettings.reverse}
        children={`${children || 'DevDukaan capabilities'} supporting services`}
        layer="companion"
      />
    </section>
  );
}
