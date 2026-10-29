const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT || '/.netlify/functions/enquiry';

export async function submitEnquiry(data) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      sourcePage: window.location.href,
    }),
  });
  let result;
  try {
    result = await res.json();
  } catch {
    throw new Error('The server returned an invalid response. Please try again.');
  }
  if (!res.ok) {
    throw new Error(result.message || 'Submission failed. Please try again.');
  }
  return result;
}
