import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sonaly-santos-advocacia.vercel.app";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: "Sonaly Santos Advocacia",
    description:
      "Advocacia especializada em Direito Penal, Processo Penal, Família, Sucessões e Direito do Trabalho em Curitiba/PR. Dra. Sonaly Cristina dos Santos.",
    url: siteUrl,
    telephone: `+${OFFICE_INFO.whatsappNumber}`,
    priceRange: "$$",
    image: `${siteUrl}/logo_semfundo_escritapreta_paramodoclaro.png`,
    logo: `${siteUrl}/logo_semfundo_escritapreta_paramodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paraná Office - Av. Paraná, 1755 - Sala 34 - Boa Vista",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "82510-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.3905,
      longitude: -49.2393,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.social.instagram,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: LAWYER_PROFILE.specialties,
      },
    ],
  };
}