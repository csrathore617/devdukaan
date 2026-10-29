import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useDialogFocus } from '../hooks/useDialogFocus';
import styles from './EnquiryPopup.module.css';

const STORAGE_KEY = 'dd_popup_shown';

export default function EnquiryPopup({ modalOpen }) {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const popupOpen = visible && !modalOpen;
  useBodyScrollLock(popupOpen);
  useDialogFocus(popupOpen, dialogRef, closeRef);

  useEffect(() => {
    if (modalOpen) {
      if (!visible) return undefined;
      const closeTimer = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(closeTimer);
    }
    let alreadyShown;
    try {
      alreadyShown = window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      console.error('Unable to read the enquiry popup preference.', error);
      return undefined;
    }
    if (alreadyShown) return undefined;

    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, '1');
      } catch (error) {
        console.error('Unable to save the enquiry popup preference.', error);
      }
      setVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [modalOpen, visible]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setVisible(false);
    };
    if (popupOpen) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [popupOpen]);

  if (!popupOpen) return null;

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && setVisible(false)}>
      <div ref={dialogRef} className={styles.popup} role="dialog" aria-modal="true" aria-labelledby="enquiry-popup-title">
        <button ref={closeRef} className={styles.close} onClick={() => setVisible(false)} aria-label="Close enquiry popup"><X size={18} /></button>
        <div className={styles.header}>
          <span className={styles.emoji}>💡</span>
          <h2 id="enquiry-popup-title">Let’s Build Something Great Together!</h2>
          <p>Tell us about your project, and let’s explore the right digital solution for your business.</p>
        </div>
        <EnquiryForm onSuccess={() => setVisible(false)} />
      </div>
    </div>
  );
}
