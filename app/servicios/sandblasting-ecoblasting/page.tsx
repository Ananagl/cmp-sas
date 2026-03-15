import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CTASection } from "../../components/CTASection";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Sandblasting y Ecoblasting Profesional en Cartagena",
  description:
    "Servicios de sandblasting convencional, ecoblasting (soda blasting) e hidroblasting en Cartagena. Preparación de superficies según normas SSPC/NACE. Cotización gratuita.",
  alternates: { canonical: "/servicios/sandblasting-ecoblasting" },
  openGraph: {
    title: "Sandblasting y Ecoblasting Profesional | CMP SAS Cartagena",
    description:
      "Preparación de superficies profesional en Cartagena. Sandblasting, ecoblasting e hidroblasting certificados NACE/SSPC.",
    url: "/servicios/sandblasting-ecoblasting",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sandblasting y Ecoblasting",
  description:
    "Servicios profesionales de preparación de superficies mediante chorreado abrasivo, ecoblasting e hidroblasting en Cartagena, Colombia.",
  provider: { "@id": "https://www.cmpcoating.com.co/#organization" },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
  serviceType: "Sandblasting",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sandblasting Convencional" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ecoblasting (Soda Blasting)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hidroblasting" } },
    ],
  },
};

export default function SandblastingEcoblastingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative py-20 bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sandblasting-industrial-cartagena-cmp-sas.webp"
            alt="Servicio de sandblasting y ecoblasting profesional en Cartagena - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs
            items={[
              { name: "Servicios", href: "/servicios" },
              { name: "Sandblasting y Ecoblasting" },
            ]}
          />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Sandblasting y Ecoblasting Profesional en Cartagena
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              En CMP SAS somos especialistas en preparación de superficies mediante técnicas de chorreado abrasivo
              en Cartagena. Ofrecemos sandblasting convencional, ecoblasting y hidroblasting con equipos de alta
              tecnología y personal capacitado bajo normas SSPC y NACE.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=573137804820"
              className="inline-flex items-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white px-8 py-4 rounded-xl font-bold transition-colors"
            >
              Solicitar Cotización
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Descripción del servicio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                ¿Qué es el Sandblasting?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                El sandblasting o chorreado abrasivo es el proceso más efectivo de preparación de superficies metálicas
                antes de la aplicación de recubrimientos protectores. Consiste en proyectar partículas abrasivas
                (granalla de acero, óxido de aluminio, arena mineral) a alta velocidad contra la superficie para
                eliminar óxido, calamina, pintura vieja y otros contaminantes.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Este proceso crea un perfil de anclaje (rugosidad controlada) que es fundamental para la adherencia
                del sistema de recubrimiento. Un buen perfil de anclaje puede ser la diferencia entre un recubrimiento
                que dura 15 años y uno que falla en 2.
              </p>
              <p className="text-lg text-gray-600">
                En CMP SAS aplicamos sandblasting en Cartagena siguiendo las normas SSPC (Steel Structures Painting Council)
                y NACE International, garantizando resultados medibles y verificables con instrumentos calibrados.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/trabajo-sandblasting-preparacion-superficies.webp"
                alt="Proceso de sandblasting en superficie metálica - preparación según norma SSPC en Cartagena"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de servicio */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
            Nuestros Servicios de Preparación de Superficies
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sandblasting Convencional</h3>
              <p className="text-gray-600 mb-4">
                El método estándar de la industria para preparación de superficies metálicas en Cartagena.
                Utilizamos granalla de acero (tipos S y G), óxido de aluminio y abrasivos minerales según los
                requerimientos específicos del proyecto. Alcanzamos grados de limpieza desde SSPC-SP6
                (Commercial Blast) hasta SSPC-SP5 (White Metal Blast).
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Aplicaciones:</h4>
                  <ul className="space-y-2">
                    {["Cascos y cubiertas de embarcaciones", "Tanques de almacenamiento", "Estructuras de acero", "Tuberías y equipos de proceso", "Plataformas offshore"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Perfiles alcanzables:</h4>
                  <ul className="space-y-2">
                    {["1.5 - 4.5 mils de perfil de anclaje", "SSPC-SP5 (White Metal Blast)", "SSPC-SP10 (Near-White Blast)", "SSPC-SP6 (Commercial Blast)", "ISO 8501-1 Sa 2½ / Sa 3"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ecoblasting (Soda Blasting)</h3>
              <p className="text-gray-600 mb-4">
                Técnica ecológica de preparación de superficies que utiliza bicarbonato de sodio como medio abrasivo.
                Es biodegradable, soluble en agua, no genera chispa y es ideal para sustratos sensibles. El ecoblasting
                en Cartagena es cada vez más demandado por empresas que buscan cumplir normativas ambientales sin
                sacrificar calidad en la limpieza.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Ventajas:</h4>
                  <ul className="space-y-2">
                    {["No genera chispa (seguro en áreas ATEX)", "Biodegradable y soluble en agua", "No daña sustratos delicados", "Elimina grasas y contaminantes orgánicos", "Cumple normativas ambientales estrictas"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Ideal para:</h4>
                  <ul className="space-y-2">
                    {["Superficies de aluminio", "Fibra de vidrio", "Equipos eléctricos y electrónicos", "Restauración de monumentos", "Áreas con restricciones ambientales"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hidroblasting</h3>
              <p className="text-gray-600 mb-4">
                Limpieza con agua a ultra alta presión (hasta 40,000 PSI) para remoción de recubrimientos, óxido
                y contaminantes sin generar polvo ni residuos de abrasivo. Es el método preferido en el sector
                naval y petroquímico de Cartagena para preparación de superficies en espacios confinados y áreas
                donde la generación de polvo es un riesgo.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Ventajas:</h4>
                  <ul className="space-y-2">
                    {["Cero generación de polvo", "No deja residuos de abrasivo en la superficie", "Ideal para espacios confinados", "Elimina sales solubles (cloruros)", "Presiones hasta 40,000 PSI"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Normas aplicables:</h4>
                  <ul className="space-y-2">
                    {["SSPC-SP12 / NACE No. 5 (Surface Prep by High-Pressure Water Jetting)", "WJ-1 (Clean to Bare Substrate)", "WJ-2 (Very Thorough Cleaning)", "WJ-3 (Thorough Cleaning)", "WJ-4 (Light Cleaning)"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Servicios Relacionados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/servicios/proteccion-recubrimientos" className="block bg-[var(--color-brand-gray)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Protección y Recubrimientos</h3>
              <p className="text-sm text-gray-600">El paso siguiente al sandblasting: sistemas de pintura anticorrosiva</p>
            </Link>
            <Link href="/servicios/inspeccion-calidad" className="block bg-[var(--color-brand-gray)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Inspección y Calidad</h3>
              <p className="text-sm text-gray-600">Verificación de perfil de anclaje, espesores y adherencia</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
