import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { clinic, navLinks } from "@/data/clinic";
import { buttonStyles } from "./ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-shadow duration-200",
        scrolled && "shadow-card",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8"
      >
        <a
          href="#home"
          className="min-w-0 text-sm font-bold tracking-[0.12em] text-heading uppercase sm:text-base"
        >
          Dr. Johnny Sayegh <span className="text-primary">Clinic</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#appointment" className={buttonStyles.primary}>
            Book Appointment
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={clinic.phoneHref}
            aria-label={`Call the clinic at ${clinic.phone}`}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-primary"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-heading"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-3 text-base font-medium text-heading last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-4">
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className={cn(buttonStyles.primary, "w-full")}
            >
              Book Appointment
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
