import { Phone } from 'lucide-react';
import { contact } from '../data/siteData';
import styles from './FloatingCallButton.module.css';

export default function FloatingCallButton({ modalOpen = false }) {
  if (!contact.phone || modalOpen) return null;
  return (
    <a
      href={`tel:${contact.phone.international}`}
      className={styles.button}
      aria-label={`Call DevDukaan at ${contact.phone.display}`}
      title={`Call ${contact.phone.display}`}
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <Phone className={styles.icon} size={23} />
      </span>
      <span className={styles.label}>Call Us</span>
    </a>
  );
}
