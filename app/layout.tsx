import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const title = "RU GRUP | Desarrollo Inmobiliario en Huancayo";
const description = "Viviendas seguras, modernas y tecnológicas en Huancayo. Conoce Terra Nova Residencial en Palián.";

export const metadata: Metadata = {
  metadataBase: new URL("https://terranova.ru-grup.uk"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/ru-grup-isotipo.svg",
    shortcut: "/ru-grup-isotipo.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_PE",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "RU GRUP y Terra Nova Residencial" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://terranova.ru-grup.uk/#organization",
      name: "RU GRUP Desarrollo Inmobiliario",
      url: "https://terranova.ru-grup.uk/",
      logo: "https://terranova.ru-grup.uk/ru-grup-logo.png",
      description,
      areaServed: {
        "@type": "City",
        name: "Huancayo",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+51 916 851 544",
        email: "albassurinversiones@gmail.com",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "ApartmentComplex",
      "@id": "https://terranova.ru-grup.uk/#terra-nova-residencial",
      name: "Terra Nova Residencial",
      url: "https://terranova.ru-grup.uk/",
      image: "https://terranova.ru-grup.uk/terra-nova-fachada-v3.png",
      description:
        "Proyecto residencial de cuatro unidades familiares en Palián, Huancayo, desarrollado por RU GRUP.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Antonio de Sucre 158, Urbanización Los Parques de Huancayo",
        addressLocality: "Palián",
        addressRegion: "Junín",
        addressCountry: "PE",
      },
      numberOfAccommodationUnits: 4,
      developer: {
        "@id": "https://terranova.ru-grup.uk/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
