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
  const result = await handleContactRequest(request.method, request.body ?? null);

  response.status(result.status).json(result.body);
}
