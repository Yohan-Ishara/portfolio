import { handleContactRequest } from '../../../server/contact-email';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = await handleContactRequest('POST', body);

  return Response.json(result.body, { status: result.status });
}

export async function GET() {
  return Response.json({ message: 'Method not allowed.' }, { status: 405 });
}
