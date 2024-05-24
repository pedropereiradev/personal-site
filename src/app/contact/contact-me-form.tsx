'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import {
  ContactEmailSchema,
  contactEmailSchema,
} from '@/zod-schemas/email-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const ContactMeForm = () => {
  const form = useForm<contactEmailSchema>({
    resolver: zodResolver(ContactEmailSchema),
    defaultValues: {
      fullName: '',
      email: '',
      description: '',
    },
  });

  async function onSubmit(data: contactEmailSchema) {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Your message was sent successfully!',
          description: (
            <p className="tracking-tight text-muted-foreground">
              Thank you for reaching out, I will get back to you as soon as
              possible.
            </p>
          ),
        });

        return;
      }
      const error = await response.json();
      throw new Error(error.message);
    } catch (error) {
      console.error(error);

      toast({
        title: 'There was an error sending your message!',
        description: (
          <p className="tracking-tight text-muted-foreground">
            Please try again later or contact me through my linkedin.
          </p>
        ),
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Pedro Pereira" {...field} />
              </FormControl>
              <FormDescription>Please enter your full name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@email.com" {...field} />
              </FormControl>
              <FormDescription>Please enter your email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Feel free to send me a message."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
