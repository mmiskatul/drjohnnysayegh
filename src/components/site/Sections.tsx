import {
  CalendarCheck,
  ClipboardList,
  Clock3,
  Heart,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";

import aboutImage from "@/assets/clinic-about.jpg";
import { clinic } from "@/data/clinic";
import { buttonStyles, Card, Eyebrow, IconBadge, Reveal, SectionHeading } from "./ui";

const trustItems = [
  {
    icon: Stethoscope,
    title: "Professional Medical Care",
    text: "A professional environment designed around patient needs.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Approach",
    text: "A welcoming experience focused on clear communication and personal attention.",
  },
  {
    icon: MapPin,
    title: "Convenient Dubai Location",
    text: "Conveniently located on Sheikh Zayed Road.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Appointment Access",
    text: "Contact the clinic directly to request an appointment.",
  },
];

export function TrustBar() {
  return (
    <section aria-label="Why patients trust the clinic" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="flex h-full gap-4">
              <IconBadge>
                <item.icon className="size-5" aria-hidden="true" />
              </IconBadge>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const aboutPoints = [
  "A professional healthcare environment focused on patient comfort",
  "Personalized attention throughout every visit",
  "Clear communication in plain, easy-to-follow language",
  "A convenient Sheikh Zayed Road location in Dubai",
];

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <img
            src={aboutImage}
            width={1200}
            height={1008}
            loading="lazy"
            alt="Clean consultation room with an examination bed and natural light"
            className="w-full rounded-xl border border-border object-cover shadow-card"
          />
        </Reveal>
        <Reveal delay={80}>
          <Eyebrow>About the Clinic</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Care That Puts Patients First
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {clinic.name} offers a calm, quality-focused healthcare setting in the heart of
            Dubai. Every visit is built around patient comfort, personal attention and
            clear, respectful communication.
          </p>
          <ul className="mt-6 space-y-3">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <ShieldCheck
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a href="#services" className={`${buttonStyles.outline} mt-8`}>
            Learn More
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Stethoscope,
    title: "Medical Consultation",
    text: "A one-to-one consultation to discuss your health concerns and next steps.",
  },
  {
    icon: UserRound,
    title: "Specialist Care",
    text: "Focused care tailored to each patient's individual situation.",
  },
  {
    icon: ClipboardList,
    title: "Patient Assessment",
    text: "A careful assessment to understand your needs before any recommendation.",
  },
  {
    icon: Clock3,
    title: "Follow-up Care",
    text: "Continued support and follow-up appointments as required.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Our Medical Services"
          subtitle="Professional care designed around the needs of every patient."
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-muted-foreground">
          The services below are editable placeholders and should be confirmed with the
          clinic before publishing.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 60} className="h-full">
              <Card className="flex h-full flex-col">
                <IconBadge>
                  <service.icon className="size-5" aria-hidden="true" />
                </IconBadge>
                <h3 className="mt-5 text-base font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
                <a
                  href="#contact"
                  className="mt-5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn More
                </a>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    text: "Focus on making every patient interaction comfortable and clear.",
  },
  {
    icon: Sparkles,
    title: "Professional Environment",
    text: "A clean and welcoming healthcare setting.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    text: "A patient experience that feels attentive and respectful.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    text: "Healthcare information made easier for patients to understand.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    text: "Located on Sheikh Zayed Road in Dubai.",
  },
  {
    icon: Phone,
    title: "Easy Contact",
    text: "Patients can quickly contact the clinic by phone.",
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading id="why-heading" eyebrow="Why Us" title="Why Patients Choose Us" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 50} className="h-full">
              <Card className="h-full">
                <IconBadge>
                  <item.icon className="size-5" aria-hidden="true" />
                </IconBadge>
                <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DoctorProfile() {
  return (
    <section id="doctor" className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <Reveal>
          <div className="flex aspect-4/5 w-full items-center justify-center rounded-xl border border-border bg-card shadow-card">
            <div className="px-8 text-center">
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-accent text-primary">
                <UserRound className="size-8" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm text-muted-foreground">
                Photograph placeholder — add an authentic photo of {clinic.doctor} when
                available.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <Eyebrow>The Doctor</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Meet {clinic.doctor}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {clinic.doctor} leads {clinic.name} on Sheikh Zayed Road in Dubai, where
            patients are seen in a calm, professional setting with time for their
            questions.
          </p>
          <p className="mt-4 rounded-md border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
            Qualifications, specialties and professional background are intentionally left
            blank until they can be confirmed by the clinic. Share the verified details and
            they can be added here.
          </p>
          <a href="#appointment" className={`${buttonStyles.primary} mt-8`}>
            Book an Appointment
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function AppointmentCTA() {
  return (
    <section id="appointment" className="bg-surface">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Book Your Visit?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Contact our clinic to schedule an appointment or speak with our team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#appointment-form" className={buttonStyles.primary}>
              Book an Appointment
            </a>
            <a href={clinic.phoneHref} className={buttonStyles.outline}>
              <Phone className="size-4" aria-hidden="true" />
              Call {clinic.phone}
            </a>
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles.ghost}
            >
              <Navigation className="size-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
          {!clinic.whatsappEnabled ? (
            <p className="mt-5 text-xs text-muted-foreground">
              WhatsApp is not shown as an active option because the clinic line has not been
              confirmed as a WhatsApp number.
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Patients Say"
          subtitle="Verified patient reviews will appear here. No testimonials have been invented."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal as="li" key={i} delay={i * 60} className="h-full">
              <Card className="h-full">
                <Quote className="size-6 text-primary/40" aria-hidden="true" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Editable review placeholder. Replace with an authentic review from the
                  clinic's Google listing, including the reviewer's rating and name.
                </p>
                <p className="mt-5 text-xs font-semibold tracking-wide text-heading uppercase">
                  Verified reviewer name
                </p>
              </Card>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles.outline}
          >
            Read Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="Location" title="Visit Our Clinic" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full hover:translate-y-0">
              <h3 className="text-xl font-semibold">{clinic.name}</h3>
              <address className="mt-4 space-y-1 text-sm leading-relaxed not-italic text-muted-foreground">
                {clinic.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <p className="mt-4 text-sm">
                <span className="font-medium text-heading">Phone: </span>
                <a href={clinic.phoneHref} className="text-primary hover:underline">
                  {clinic.phone}
                </a>
              </p>
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonStyles.primary} mt-6`}
              >
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full overflow-hidden rounded-lg border border-border shadow-card">
              <iframe
                title={`Map showing the location of ${clinic.name}`}
                src={clinic.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full lg:h-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
        <SectionHeading eyebrow="Contact" title="We're Here to Help" />
        <Reveal delay={60}>
          <div className="mt-10 rounded-lg border border-border bg-card p-8 shadow-card">
            <p className="text-lg font-semibold text-heading">{clinic.name}</p>
            <a
              href={clinic.phoneHref}
              className="mt-2 inline-block text-2xl font-semibold text-primary hover:underline"
            >
              {clinic.phone}
            </a>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {clinic.addressOneLine}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={clinic.phoneHref} className={buttonStyles.primary}>
                <Phone className="size-4" aria-hidden="true" />
                Call Clinic
              </a>
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles.outline}
              >
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
            {!clinic.whatsappEnabled ? (
              <p className="mt-5 text-xs text-muted-foreground">
                WhatsApp: not yet verified for this number. Once confirmed, a WhatsApp
                button can be enabled here.
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
