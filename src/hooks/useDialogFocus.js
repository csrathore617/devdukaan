import { useEffect } from 'react';

export function useDialogFocus(active, dialogRef, initialFocusRef) {
  useEffect(() => {
    if (!active) return undefined;

    const previousFocus = document.activeElement;
    initialFocusRef.current?.focus();
    const dialog = dialogRef.current;
    const handleTab = (event) => {
      if (event.key !== 'Tab' || !dialog) return;

      const focusable = dialog.querySelectorAll(
        'button:not(:disabled), input:not(:disabled), textarea:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    dialog?.addEventListener('keydown', handleTab);
    return () => {
      dialog?.removeEventListener('keydown', handleTab);
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [active, dialogRef, initialFocusRef]);
}
