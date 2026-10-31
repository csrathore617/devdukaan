import { contact } from '../data/siteData';
import styles from './FloatingWhatsAppButton.module.css';

const MESSAGE = 'Hi DevDukaan, I would like to discuss a website or software development project.';

export default function FloatingWhatsAppButton({ modalOpen = false }) {
  if (!contact.phone || modalOpen) return null;

  return (
    <a
      href={`https://wa.me/${contact.phone.whatsapp}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank" rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <svg className={styles.logo} viewBox="0 0 32 32">
        <path fill="currentColor" d="M16.02 3.2A12.7 12.7 0 0 0 5.1 22.37L3.4 28.6l6.39-1.67a12.7 12.7 0 1 0 6.23-23.73Zm0 23.1a10.34 10.34 0 0 1-5.27-1.44l-.38-.23-3.79.99 1.01-3.69-.25-.39a10.38 10.38 0 1 1 8.68 4.76Z" />
        <path fill="#25d366" d="M22.1 18.5c-.33-.17-1.94-.96-2.24-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.39-.51-2.64-1.62-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.42-.03-.59-.08-.17-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.42-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.17.22 2.32 3.54 5.62 4.96.79.34 1.41.55 1.89.7.79.25 1.51.21 2.08.13.63-.09 1.94-.79 2.21-1.56.28-.77.28-1.43.19-1.56-.08-.14-.3-.22-.63-.39Z" />
        </svg>
      </span>
      <span className={styles.tooltip}>Chat with us on WhatsApp</span>
    </a>
  );
}
