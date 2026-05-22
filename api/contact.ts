import { Resend } from 'resend';

declare const process: {
  env: {
    RESEND_API_KEY?: string;
  };
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
};

type ApiRequest = {
  method?: string;
  body?: ContactPayload | string | null;
};

type ApiResponse = {
  status: (statusCode: number) => {
    json: (body: unknown) => void;
  };
};

type ContactData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const recipientEmail = 'yohanishara01@gmail.com';
const senderEmail = 'Yohan Portfolio <onboarding@resend.dev>';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method !== 'POST') {
    response.status(405).json({ message: 'Method not allowed.' });
    return;
  }

  const validation = validatePayload(parsePayload(request.body));

  if (!validation.valid) {
    response.status(400).json({ message: validation.message });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    response.status(500).json({ message: 'Email service is not configured.' });
    return;
  }

  const { name, email, projectType, message } = validation.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `New portfolio contact request from ${name}`,
      text: createPlainTextEmail({ name, email, projectType, message }),
      html: createHtmlEmail({ name, email, projectType, message }),
    });

    if (error) {
      console.error('Resend send error:', sanitizeError(error));
      response.status(502).json({ message: getPublicResendMessage(error) });
      return;
    }

    response.status(200).json({ message: 'Thank you! Your message has been sent.' });
  } catch (error) {
    console.error('Contact email exception:', sanitizeError(error));
    response.status(502).json({ message: 'Could not send your message right now. Please try again later.' });
  }
}

function parsePayload(body: ContactPayload | string | null | undefined): ContactPayload | null {
  if (!body) {
    return null;
  }

  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as ContactPayload;
    } catch {
      return null;
    }
  }

  return body;
}

function validatePayload(payload: ContactPayload | null):
  | { valid: true; data: ContactData }
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

function createPlainTextEmail(data: ContactData) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project Type: ${data.projectType}`,
    '',
    'Message:',
    data.message,
  ].join('\n');
}

function createHtmlEmail(data: ContactData) {
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

function sanitizeError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return error;
}

function getPublicResendMessage(error: unknown) {
  const message = getErrorMessage(error).toLowerCase();

  if (message.includes('api key') || message.includes('unauthorized')) {
    return 'Email service authentication failed. Please check the Vercel RESEND_API_KEY environment variable.';
  }

  if (message.includes('domain') || message.includes('sender') || message.includes('from')) {
    return 'Email sender is not verified in Resend. Please verify a domain or use an allowed sender.';
  }

  return 'Could not send your message right now. Please try again later.';
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'object' && error && 'message' in error) {
    const message = (error as { message?: unknown }).message;
    return typeof message === 'string' ? message : '';
  }

  return '';
}
