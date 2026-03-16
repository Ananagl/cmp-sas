import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cmpcoating.com.co"),
  title: {
    template: "%s | CMP SAS - Sandblasting y Recubrimientos en Cartagena",
    default:
      "CMP SAS - Sandblasting y Recubrimientos Industriales en Cartagena",
  },
  description:
    "CMP SAS: empresa especializada en sandblasting, recubrimientos industriales y protección anticorrosiva en Cartagena, Colombia. Certificaciones NACE/SSPC. +9 años de experiencia.",
  keywords: [
    "sandblasting cartagena",
    "sandblasting colombia",
    "recubrimientos industriales cartagena",
    "protección anticorrosiva",
    "pintura industrial cartagena",
    "ecoblasting",
    "CMP SAS",
    "chorreado abrasivo",
    "preparación de superficies",
  ],
  authors: [{ name: "CMP SAS" }],
  creator: "CMP SAS",
  publisher: "CMP SAS",
  formatDetection: { telephone: true, email: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "CMP SAS Corrosion y Proof Coating",
    images: [
      {
        url: "/images/sandblasting-industrial-cartagena-cmp-sas.webp",
        width: 1200,
        height: 630,
        alt: "CMP SAS - Sandblasting y Recubrimientos Industriales en Cartagena",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMP SAS - Sandblasting y Recubrimientos Industriales en Cartagena",
    description:
      "Empresa especializada en sandblasting, recubrimientos industriales y protección anticorrosiva en Cartagena, Colombia.",
    images: ["/images/sandblasting-industrial-cartagena-cmp-sas.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
  },
  other: {
    "theme-color": "#E96F1F",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
