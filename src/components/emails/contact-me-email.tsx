import { contactEmailSchema } from '@/zod-schemas/email-schema';
import * as React from 'react';

export const ContactMeEmail = ({
  fullName,
  description,
  email,
}: contactEmailSchema) => (
  <div>
    <h1>You receive an email from, {fullName}!</h1>
    <h2>{email}</h2>
    <section>
      <p>{description}</p>
    </section>
  </div>
);
