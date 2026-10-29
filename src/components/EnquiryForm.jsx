import { useId } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useEnquiryForm } from '../hooks/useEnquiryForm';
import styles from './EnquiryForm.module.css';

export default function EnquiryForm({ onSuccess }) {
  const formId = useId();
  const { fields, errors, status, serverError, handleChange, handleSubmit } = useEnquiryForm(onSuccess);

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <CheckCircle size={48} color="#10b981" />
        <h3>Thank you for reaching out</h3>
        <p>Your enquiry was delivered successfully. We’ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-busy={status === 'loading'}>
      <Field id={`${formId}-name`} label="Name" error={errors.name}>
        <input id={`${formId}-name`} name="name" value={fields.name} onChange={handleChange} placeholder="Enter your full name" autoComplete="name" maxLength={120} required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${formId}-name-error` : undefined} />
      </Field>
      <Field id={`${formId}-email`} label="Email" error={errors.email}>
        <input id={`${formId}-email`} name="email" type="email" value={fields.email} onChange={handleChange} placeholder="Enter your email address" autoComplete="email" maxLength={254} required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${formId}-email-error` : undefined} />
      </Field>
      <Field id={`${formId}-mobile`} label="Mobile Number" error={errors.mobile}>
        <input id={`${formId}-mobile`} name="mobile" type="tel" inputMode="tel" value={fields.mobile} onChange={handleChange} placeholder="Enter your mobile number" autoComplete="tel" maxLength={40} required aria-invalid={Boolean(errors.mobile)} aria-describedby={errors.mobile ? `${formId}-mobile-error` : undefined} />
      </Field>
      <Field id={`${formId}-description`} label="Description" error={errors.description}>
        <textarea id={`${formId}-description`} name="description" value={fields.description} onChange={handleChange} rows={4} placeholder="Tell us briefly about your project" maxLength={2500} required aria-invalid={Boolean(errors.description)} aria-describedby={errors.description ? `${formId}-description-error` : undefined} />
      </Field>
      {serverError && <p className={styles.serverError} role="alert">{serverError}</p>}
      <button type="submit" className={styles.submit} disabled={status === 'loading'}>
        {status === 'loading' ? <><Loader2 size={18} className={styles.spin} /> Sending...</> : 'Send Enquiry'}
      </button>
    </form>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div className={styles.field}>
      {label && <label htmlFor={id}>{label}<span aria-hidden="true"> *</span></label>}
      {children}
      {error && <span id={`${id}-error`} className={styles.error}>{error}</span>}
    </div>
  );
}
