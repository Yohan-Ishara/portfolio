import { handleContactRequest } from '../server/contact-email';
import type { ContactPayload } from '../server/contact-email';

type ApiRequest = {
  method?: string;
  body?: ContactPayload | null;
};

type ApiResponse = {
  status: (statusCode: number) => {
    json: (body: unknown) => void;
  };
};

export default async function handler(request: ApiRequest, response: ApiResponse) {
  const result = await handleContactRequest(request.method, parsePayload(request.body));

  response.status(result.status).json(result.body);
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
