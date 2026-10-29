import { useState, useCallback, useRef } from 'react';
import { submitEnquiry } from '../services/enquiry';

const INITIAL = {
  name: '',
  email: '',
  mobile: '',
  description: '',
};

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Name is required.';
  if (f.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) {
    e.email = 'Enter a valid email address.';
  }
  const mobileDigits = f.mobile.replace(/\D/g, '').length;
  if (!/^\+?[\d\s().-]+$/.test(f.mobile.trim()) || mobileDigits < 7 || mobileDigits > 15) {
    e.mobile = 'Enter a valid mobile number.';
  }
  if (!f.description.trim()) e.description = 'Project description is required.';
  return e;
}

export function useEnquiryForm(onSuccess) {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');
  const submitting = useRef(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
    setServerError('');
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (submitting.current) return;
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    submitting.current = true;
    setStatus('loading');
    setServerError('');
    try {
      await submitEnquiry({
        name: fields.name.trim(),
        email: fields.email.trim(),
        mobile: fields.mobile.trim(),
        description: fields.description.trim(),
      });
      setStatus('success');
      setFields(INITIAL);
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setServerError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      submitting.current = false;
    }
  }, [fields, onSuccess]);

  return { fields, errors, status, serverError, handleChange, handleSubmit };
}
