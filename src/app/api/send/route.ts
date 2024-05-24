import { ContactMeEmail } from '@/components/emails/contact-me-email';
import { contactEmailSchema } from '@/zod-schemas/email-schema';
import { randomUUID } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const { fullName, description, email } =
      (await req.json()) as contactEmailSchema;

    const { data, error } = await resend.emails.send({
      from: 'portfolio@pedropereira.dev',
      to: 'devpereirapedro@gmail.com',
      subject: 'New contact request!',
      react: ContactMeEmail({
        fullName,
        email,
        description,
      }),
      headers: {
        'X-Entity-Ref-ID': randomUUID(),
      },
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
