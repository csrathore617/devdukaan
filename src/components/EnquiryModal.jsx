import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useDialogFocus } from '../hooks/useDialogFocus';
import styles from './EnquiryModal.module.css';

export default function EnquiryModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  useBodyScrollLock(isOpen);
  useDialogFocus(isOpen, dialogRef, closeRef);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={dialogRef} className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title">
        <div className={styles.header}>
          <div>
            <h2 id="enquiry-modal-title">Get a Free Quote</h2>
            <p>Share your requirements and we’ll review the right next step with you.</p>
          </div>
          <button ref={closeRef} className={styles.close} onClick={onClose} aria-label="Close enquiry form"><X size={20} /></button>
        </div>
        <div className={styles.body}>
          <EnquiryForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
