import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { buttonStyles, SectionHeading } from "./ui";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(25)
    .regex(/^[0-9+()\-\s]+$/, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  date: z.string().min(1, "Please choose a preferred date."),
  time: z.string().min(1, "Please choose a preferred time."),
  message: z.string().trim().max(1000).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm text-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none";

export function AppointmentForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <section id="appointment-form" className="bg-background">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Appointment Request"
          title="Request an Appointment"
          subtitle="Share your details and our team will get back to you to confirm a suitable time."
        />

        {submitted ? (
          <div
            role="status"
            className="mt-10 flex items-start gap-3 rounded-lg border border-border bg-accent/60 p-6"
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-heading">
              Thank you. Your appointment request has been received. Our team will contact
              you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-10 rounded-lg border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name" error={errors.name}>
                <input id="name" name="name" autoComplete="name" className={fieldClass} />
              </Field>
              <Field id="phone" label="Phone Number" error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                />
              </Field>
              <Field id="date" label="Preferred Date" error={errors.date}>
                <input id="date" name="date" type="date" className={fieldClass} />
              </Field>
              <Field id="time" label="Preferred Time" error={errors.time}>
                <input id="time" name="time" type="time" className={fieldClass} />
              </Field>
              <div className="sm:col-span-2">
                <Field id="message" label="Message (optional)" error={errors.message}>
                  <textarea id="message" name="message" rows={4} className={fieldClass} />
                </Field>
              </div>
            </div>

            <button type="submit" className={`${buttonStyles.primary} mt-6 w-full sm:w-auto`}>
              Request Appointment
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              Submitting this form sends a request only. An appointment is not confirmed
              until our team contacts you.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-heading">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
