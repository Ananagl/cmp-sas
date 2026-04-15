import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { JsonLd } from "../components/JsonLd";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto - Cotización de Sandblasting",
  description:
    "Contacta a CMP SAS para cotización de sandblasting y recubrimientos industriales en Colombia. WhatsApp y teléfono. Respuesta en 24 horas.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | CMP SAS - Sandblasting Colombia",
    description:
      "Solicita cotización gratuita de sandblasting y recubrimientos industriales. Respuesta en menos de 24 horas.",
    url: "/contacto",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto CMP SAS",
  description: "Página de contacto de CMP SAS para cotizaciones de sandblasting y recubrimientos industriales en Colombia.",
  url: "https://www.cmpcoating.com.co/contacto",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://www.cmpcoating.com.co/#organization",
    name: "CMP SAS Corrosion y Proof Coating",
    telephone: "+573137804820",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cartagena de Indias",
      addressRegion: "Bolívar",
      addressCountry: "CO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
  },
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />

      <section className="py-24 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Breadcrumbs items={[{ name: "Contacto" }]} />

          <div className="mt-8 mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Contáctanos
            </h1>
            <p className="text-lg text-gray-600">
              Solicita una cotización gratuita para tu proyecto de sandblasting o recubrimientos industriales
              en Colombia. Nuestro equipo responde en menos de 24 horas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-orange)]/10 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-[var(--color-brand-orange)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
                    <a href="tel:+573137804820" className="text-gray-600 hover:text-[var(--color-brand-orange)] transition-colors">
                      +57 313 780 4820
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-orange)]/10 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-[var(--color-brand-orange)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600 text-sm">Cartagena de Indias, Bolívar, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-orange)]/10 flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-[var(--color-brand-orange)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Horario de Atención</h3>
                    <p className="text-gray-600 text-sm">Lunes a Viernes: 7:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-sm">Sábados: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=573137804820&text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BE5C] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 w-full"
                >
                  <MessageCircle size={20} />
                  Escribir por WhatsApp
                </a>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
