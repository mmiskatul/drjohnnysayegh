import { Minus, Navigation, Plus } from "lucide-react";
import { useState } from "react";

import { clinic } from "@/data/clinic";
import { buttonStyles, SectionHeading } from "./ui";

const faqs = [
  {
    q: "How can I book an appointment?",
    a: `You can request an appointment using the form on this page, or call the clinic directly on ${clinic.phone}. Our team will contact you to confirm a time.`,
  },
  {
    q: "Where is the clinic located?",
    a: "Al Wadi Building, Office 302, Sheikh Zayed Road, Dubai, UAE.",
  },
  {
    q: "How can I contact the clinic?",
    a: `You can reach the clinic by phone on ${clinic.phone}.`,
  },
  {
    q: "How can I get directions?",
    a: "Use the Get Directions button to open the clinic location in Google Maps.",
    directions: true,
  },
  {
    q: "Can I contact the clinic through WhatsApp?",
    a: "WhatsApp availability has not been confirmed for the clinic line, so please call the clinic directly for now.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card shadow-card">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-heading transition-colors hover:bg-accent/50"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <Minus className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    ) : (
                      <Plus className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    )}
                  </button>
                </h3>
                {isOpen ? (
                  <div id={`faq-panel-${i}`} className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    {item.directions ? (
                      <a
                        href={clinic.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonStyles.outline} mt-4`}
                      >
                        <Navigation className="size-4" aria-hidden="true" />
                        Get Directions
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
