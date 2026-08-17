// Central clinic information — update here and it propagates across the site.
export const clinic = {
  name: "Dr. Johnny Sayegh Clinic",
  doctor: "Dr. Johnny Sayegh",
  addressLines: [
    "Al Wadi Building - Office 302",
    "Sheikh Zayed Road",
    "Dubai, United Arab Emirates",
  ],
  addressOneLine:
    "Al Wadi Building - Office 302, Sheikh Zayed Road, Dubai, United Arab Emirates",
  phone: "+971 4 380 6474",
  phoneHref: "tel:+97143806474",
  mapsUrl: "https://maps.app.goo.gl/rsNbQPGooW5VN3WS8",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Al+Wadi+Building+Sheikh+Zayed+Road+Dubai&output=embed",
  // The clinic landline is not verified as a WhatsApp number, so WhatsApp is
  // shown as an unverified option rather than an active link.
  whatsappEnabled: false,
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
