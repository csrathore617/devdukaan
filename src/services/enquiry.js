
export async function submitEnquiry(data) {
  const token = '9119242613:AAEV-P_SQIVz-H-ckhyh2vFpMz-B8m-zZpU';
  const chatId = 1045111149;

  if (!token || !chatId) {
    throw new Error('Telegram bot configuration missing.');
  }

  const message = [
    '🔔 New DevDukaan Inquiry',
    '',
    `Name: ${data.name || ''}`,
    `Email: ${data.email || ''}`,
    `Mobile: ${data.mobile || ''}`,
    `Description: ${data.description || ''}`,
    `Source: ${window.location.href}`,
    `Submitted: ${new Date().toLocaleString()}`
  ].join('\n');

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    }
  );

  const result = await res.json();

  if (!res.ok || result.ok !== true) {
    console.error('Telegram API error:', result.description);
    throw new Error(
      result.description || 'Unable to send enquiry.'
    );
  }

  return result;
}
