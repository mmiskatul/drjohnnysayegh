import { createFileRoute } from "@tanstack/react-router";

import { AppointmentForm } from "@/components/site/AppointmentForm";
import { Faq } from "@/components/site/Faq";
import { Footer, MobileActionBar } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import {
  About,
  AppointmentCTA,
  Contact,
  DoctorProfile,
  Location,
  Reviews,
  Services,
  TrustBar,
  WhyChooseUs,
} from "@/components/site/Sections";
import { clinic } from "@/data/clinic";

const title = "Dr. Johnny Sayegh Clinic | Medical Clinic in Dubai";
const description =
  "Dr. Johnny Sayegh Clinic in Dubai. Find our Sheikh Zayed Road location, contact our clinic, and request an appointment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "AE-DU" },
      { name: "geo.placename", content: "Dubai" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: clinic.name,
          telephone: clinic.phone,
          hasMap: clinic.mapsUrl,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Al Wadi Building - Office 302, Sheikh Zayed Road",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background pb-14 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <DoctorProfile />
        <AppointmentCTA />
        <AppointmentForm />
        <Reviews />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
