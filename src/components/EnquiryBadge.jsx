import styles from './EnquiryBadge.module.css';

export default function EnquiryBadge({ onClick }) {
  return (
    <button
      type="button"
      className={styles.badge}
      onClick={onClick}
      aria-label="Open enquiry form"
    >
      ENQUIRY
    </button>
  );
}
