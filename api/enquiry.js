import { Buffer } from 'node:buffer';
import process from 'node:process';

const RATE_LIMIT = new Map();
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MOBILE_LENGTH = 40;
const MAX_DESCRIPTION_LENGTH = 2500;

function response(statusCode, message) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  };
}

function validate(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return 'Please provide valid enquiry details.';
  }
  if (typeof data.name !== 'string' || !data.name.trim() || data.name.length > MAX_NAME_LENGTH) {
    return 'Enter a name of 1 to 120 characters.';
  }
  if (
    typeof data.email !== 'string' ||
    data.email.length > MAX_EMAIL_LENGTH ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  ) {
    return 'Enter a valid email address.';
  }
  if (typeof data.mobile !== 'string' || data.mobile.length > MAX_MOBILE_LENGTH) {
    return 'Enter a valid mobile number.';
  }
  const mobileDigits = data.mobile.replace(/\D/g, '').length;
  if (!/^\+?[\d\s().-]+$/.test(data.mobile.trim()) || mobileDigits < 7 || mobileDigits > 15) {
    return 'Enter a valid mobile number.';
  }
  if (
    typeof data.description !== 'string' ||
    !data.description.trim() ||
    data.description.length > MAX_DESCRIPTION_LENGTH
  ) {
    return 'Enter a project description of 1 to 3000 characters.';
  }
  return null;
}

function buildMessage(data, sourcePage) {
  let pageUrl = 'Not provided';
  if (typeof sourcePage === 'string') {
    try {
      const parsedUrl = new URL(sourcePage);
      if (parsedUrl.protocol === 'https:' || parsedUrl.protocol === 'http:') {
        pageUrl = parsedUrl.href.slice(0, 512);
      }
    } catch {
      pageUrl = 'Not provided';
    }
  }
  const cleanText = value => value.trim().replace(/[\r\n]+/g, ' ');

  return [
    'New Enquiry — DevDukaan.in',
    '',
    `Name: ${cleanText(data.name)}`,
    `Email: ${cleanText(data.email)}`,
    `Mobile: ${cleanText(data.mobile)}`,
    `Description: ${cleanText(data.description)}`,
    `Page: ${pageUrl}`,
    `Submitted At: ${new Date().toISOString()}`,
  ].join('\n');
}

function isRateLimited(ip) {
  const now = Date.now();
  const entry = RATE_LIMIT.get(ip);
  if (!entry || now - entry.start >= 60_000) {
    RATE_LIMIT.set(ip, { count: 1, start: now });
    return false;
  }

  entry.count += 1;
  return entry.count > 3;
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return response(405, 'Method not allowed.');
  }

  const ip = event.headers?.['x-nf-client-connection-ip'] ||
    event.headers?.['x-forwarded-for']?.split(',')[0] ||
    'unknown';
  if (isRateLimited(ip)) {
    return response(429, 'Too many requests. Please wait a moment.');
  }

  let data;
  try {
    const body = event.isBase64Encoded
      ? Buffer.from(event.body || '', 'base64').toString('utf8')
      : event.body;
    if (typeof body !== 'string') return response(400, 'Please provide valid enquiry details.');
    if (body.length > 5000) return response(413, 'Enquiry details are too large.');
    data = JSON.parse(body || '');
  } catch {
    return response(400, 'Please provide valid enquiry details.');
  }

  const validationError = validate(data);
  if (validationError) return response(400, validationError);

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error('Telegram credentials are not configured.');
    return response(500, 'Enquiry delivery is not configured. Please try again later.');
  }

  let telegramResponse;
  try {
    telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: buildMessage(data, data.sourcePage),
      }),
    });
  } catch (error) {
    console.error('Unable to reach the Telegram API:', error);
    return response(502, 'We could not deliver your enquiry. Please try again.');
  }

  let telegramResult;
  try {
    telegramResult = await telegramResponse.json();
  } catch (error) {
    console.error('Telegram API returned an invalid response:', error);
    return response(502, 'We could not deliver your enquiry. Please try again.');
  }

  if (!telegramResponse.ok || !telegramResult || telegramResult.ok !== true) {
    console.error('Telegram API rejected the enquiry:', telegramResult);
    return response(502, 'We could not deliver your enquiry. Please try again.');
  }

  return response(200, 'Enquiry submitted successfully.');
}
