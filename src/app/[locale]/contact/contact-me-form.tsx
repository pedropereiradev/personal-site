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
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

export const ContactMeForm = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("contact.form");

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
      setLoading(true);
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: t('successTitle'),
          description: (
            <p className="tracking-tight text-muted-foreground">
              {t('successDescription')}
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
        title: t('errorTitle'),
        description: (
          <p className="tracking-tight text-muted-foreground">
            {t('errorDescription')}
          </p>
        ),
      });
    } finally {
      setLoading(false);

      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-4 md:px-0 md:w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          disabled={loading}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fullName')}</FormLabel>
              <FormControl>
                <Input placeholder={t('fullNamePlaceholder')} {...field} />
              </FormControl>
              <FormDescription>{t('fullNameDescription')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email')}</FormLabel>
              <FormControl>
                <Input placeholder={t('emailPlaceholder')} {...field} />
              </FormControl>
              <FormDescription>{t('emailDescription')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={loading}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('messagePlaceholder')}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t('sending')}
            </>
          ) : (
            t('sendButton')
          )}
        </Button>
      </form>
    </Form>
  );
};
