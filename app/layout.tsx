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
    template: "%s | CMP SAS",
    default:
      "CMP SAS - Sandblasting y Recubrimientos Industriales en Colombia",
  },
  description:
    "CMP SAS: empresa de sandblasting, recubrimientos industriales y protección anticorrosiva en Colombia. Cartagena, Costa Caribe y todo el país. Certificaciones NACE/SSPC. +9 años de experiencia.",
  keywords: [
    "sandblasting colombia",
    "recubrimientos industriales colombia",
    "protección anticorrosiva colombia",
    "ecoblasting colombia",
    "chorreado abrasivo colombia",
    "preparación de superficies",
    "CMP SAS",
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
        url: "/images/hero-sandblasting-nocturno-buque-cartagena.webp",
        width: 1200,
        height: 630,
        alt: "CMP SAS - Sandblasting y Recubrimientos Industriales en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMP SAS - Sandblasting y Recubrimientos Industriales en Colombia",
    description:
      "Empresa especializada en sandblasting, recubrimientos industriales y protección anticorrosiva en Colombia.",
    images: ["/images/hero-sandblasting-nocturno-buque-cartagena.webp"],
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

        {/* WhatsApp Floating Button */}
        <a
          href="https://api.whatsapp.com/send?phone=573137804820&text=Hola%2C%20necesito%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BE5C] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
