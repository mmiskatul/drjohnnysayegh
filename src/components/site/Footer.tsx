import { CalendarCheck, Navigation, Phone } from "lucide-react";

import { clinic, navLinks } from "@/data/clinic";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-heading uppercase">
            Dr. Johnny Sayegh <span className="text-primary">Clinic</span>
          </p>
          <address className="mt-4 space-y-1 text-sm leading-relaxed not-italic text-muted-foreground">
            {clinic.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <a
            href={clinic.phoneHref}
            className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
          >
            {clinic.phone}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-heading">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-heading">Visit us</h2>
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Get Directions
          </a>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Information provided on this website is for general informational purposes and
            does not replace professional medical advice.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground lg:px-8">
          © 2026 {clinic.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={clinic.phoneHref}
          className="flex min-h-14 items-center justify-center gap-2 text-sm font-semibold text-heading"
        >
          <Phone className="size-4 text-primary" aria-hidden="true" />
          Call
        </a>
        <a
          href="#appointment-form"
          className="flex min-h-14 items-center justify-center gap-2 bg-primary text-sm font-semibold text-primary-foreground"
        >
          <CalendarCheck className="size-4" aria-hidden="true" />
          Appointment
        </a>
      </div>
    </div>
  );
}
