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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
