import { Resend } from 'resend';

const FROM_EMAIL = 'Ithaca Agency <hello@ithaca-agency.gr>';
const DESTINATION_EMAIL = 'info@ithaca-agency.gr';

type ContactPayload = {
  businessOrName?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

type ApiRequest = {
  method?: string;
  body?: ContactPayload | string;
};

type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
};

function parseBody(body: ApiRequest['body']): ContactPayload {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as ContactPayload;
    } catch {
      return {};
    }
  }

  if (body && typeof body === 'object') {
    return body;
  }

  return {};
}

function normalizeValue(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return response.status(500).json({ error: 'Missing RESEND_API_KEY' });
  }

  const payload = parseBody(request.body);
  const businessOrName = normalizeValue(payload.businessOrName);
  const email = normalizeValue(payload.email);
  const phone = normalizeValue(payload.phone);
  const message = normalizeValue(payload.message);

  if (!businessOrName || !email || !phone || !isValidEmail(email)) {
    return response.status(400).json({ error: 'Invalid form submission' });
  }

  const resend = new Resend(apiKey);

  const subject = `Νέα αίτηση 15ήμερου trial από ${businessOrName}`;
  const html = `
    <div style="font-family: Arial, sans-serif; color: #203c3c; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">Νέα αίτηση 15ήμερου trial</h2>
      <p><strong>Επωνυμία Επιχείρησης ή Ονοματεπώνυμο:</strong> ${escapeHtml(businessOrName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Τηλέφωνο:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Σύντομο μήνυμα:</strong><br />${message ? escapeHtml(message) : 'Δεν δόθηκε μήνυμα.'}</p>
    </div>
  `;
  const text = [
    'Νέα αίτηση 15ήμερου trial',
    '',
    `Επωνυμία Επιχείρησης ή Ονοματεπώνυμο: ${businessOrName}`,
    `Email: ${email}`,
    `Τηλέφωνο: ${phone}`,
    `Σύντομο μήνυμα: ${message || 'Δεν δόθηκε μήνυμα.'}`,
  ].join('\n');

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      return response.status(502).json({ error: 'Failed to send email' });
    }

    return response.status(200).json({ success: true });
  } catch {
    return response.status(500).json({ error: 'Unexpected server error' });
  }
}
