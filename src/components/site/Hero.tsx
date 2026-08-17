import { MapPin, Phone } from "lucide-react";

import heroImage from "@/assets/clinic-hero.jpg";
import { clinic } from "@/data/clinic";
import { buttonStyles, Eyebrow } from "./ui";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-[32rem] rounded-full bg-accent/70 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <Eyebrow>Trusted Medical Care in Dubai</Eyebrow>
          <h1 className="mt-6 text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-6xl">
            Compassionate Care.
            <span className="block text-primary">Professional Expertise.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Providing a welcoming and professional healthcare experience for patients in
            Dubai.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#appointment" className={buttonStyles.primary}>
              Book an Appointment
            </a>
            <a href={clinic.phoneHref} className={buttonStyles.outline}>
              <Phone className="size-4" aria-hidden="true" />
              Call the Clinic
            </a>
          </div>

          <dl className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Phone</dt>
              <Phone className="size-4 text-primary" aria-hidden="true" />
              <dd>
                <a href={clinic.phoneHref} className="font-semibold text-heading">
                  {clinic.phone}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Location</dt>
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              <dd className="text-muted-foreground">Sheikh Zayed Road, Dubai</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -top-6 -left-6 size-28 rounded-lg bg-accent"
          />
          <div
            aria-hidden="true"
            className="absolute -right-5 -bottom-6 size-36 rounded-full bg-secondary"
          />
          <img
            src={heroImage}
            width={1200}
            height={1408}
            alt="Bright, modern waiting area of a medical clinic with natural daylight"
            className="relative w-full rounded-xl border border-border object-cover shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}
