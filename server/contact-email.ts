declare const process: {
  env: {
    RESEND_API_KEY?: string;
  };
};

export type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
};

type ContactResult = {
  status: number;
  body: {
    message: string;
  };
};

const recipientEmail = 'yohanishara01@gmail.com';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function handleContactRequest(method: string | undefined, payload: ContactPayload | null): Promise<ContactResult> {
  if (method !== 'POST') {
    return {
      status: 405,
      body: { message: 'Method not allowed.' },
    };
  }

  const validation = validatePayload(payload);

  if (!validation.valid) {
    return {
      status: 400,
      body: { message: validation.message },
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      status: 500,
      body: { message: 'Email service is not configured.' },
    };
  }

  const { name, email, projectType, message } = validation.data;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: recipientEmail,
      reply_to: email,
      subject: `New portfolio contact request from ${name}`,
      text: createPlainTextEmail({ name, email, projectType, message }),
      html: createHtmlEmail({ name, email, projectType, message }),
    }),
  });

  if (!resendResponse.ok) {
    return {
      status: 502,
      body: { message: 'Could not send your message right now. Please try again later.' },
    };
  }

  return {
    status: 200,
    body: { message: 'Thanks, your message has been sent.' },
  };
}

function validatePayload(payload: ContactPayload | null):
  | { valid: true; data: { name: string; email: string; projectType: string; message: string } }
  | { valid: false; message: string } {
  if (!payload || typeof payload !== 'object') {
    return { valid: false, message: 'Invalid request body.' };
  }

  const name = cleanField(payload.name);
  const email = cleanField(payload.email);
  const projectType = cleanField(payload.projectType);
  const message = cleanField(payload.message);

  if (!name || !email || !projectType || !message) {
    return { valid: false, message: 'Please complete all required fields.' };
  }

  if (name.length > 120) {
    return { valid: false, message: 'Name is too long.' };
  }

  if (!emailPattern.test(email) || email.length > 180) {
    return { valid: false, message: 'Please enter a valid email address.' };
  }

  if (projectType.length > 120) {
    return { valid: false, message: 'Project type is too long.' };
  }

  if (message.length > 3000) {
    return { valid: false, message: 'Message is too long.' };
  }

  return {
    valid: true,
    data: { name, email, projectType, message },
  };
}

function cleanField(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function createPlainTextEmail(data: { name: string; email: string; projectType: string; message: string }) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project Type: ${data.projectType}`,
    '',
    'Message:',
    data.message,
  ].join('\n');
}

function createHtmlEmail(data: { name: string; email: string; projectType: string; message: string }) {
  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h2>New portfolio contact request</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(data.projectType)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
