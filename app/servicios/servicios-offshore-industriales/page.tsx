import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CTASection } from "../../components/CTASection";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Servicios Offshore e Industriales en Colombia",
  description:
    "Mantenimiento de plataformas offshore, protección catódica y soluciones metalmecánicas para el sector naval e industrial en Cartagena. CMP SAS.",
  alternates: { canonical: "/servicios/servicios-offshore-industriales" },
  openGraph: {
    title: "Servicios Offshore e Industriales | CMP SAS Cartagena",
    description: "Mantenimiento anticorrosivo offshore y servicios industriales en Cartagena.",
    url: "/servicios/servicios-offshore-industriales",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicios Offshore e Industriales",
  description: "Mantenimiento anticorrosivo de plataformas offshore, protección catódica y soluciones metalmecánicas en Cartagena.",
  provider: { "@id": "https://www.cmpcoating.com.co/#organization" },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
  serviceType: "Servicios Offshore",
};

export default function OffshoreIndustrialesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="relative py-20 bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/offshore-estructura-maritima-trabajo.webp"
            alt="Servicios offshore e industriales en Cartagena - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ name: "Servicios", href: "/servicios" }, { name: "Servicios Offshore e Industriales" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Servicios Offshore e Industriales en Cartagena
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              CMP SAS ofrece servicios especializados para el sector offshore, naval y petroquímico en Cartagena.
              Desde mantenimiento anticorrosivo de plataformas hasta soluciones metalmecánicas complejas, contamos
              con el personal, equipos y protocolos HSE necesarios para trabajar en los ambientes más exigentes.
            </p>
            <a href="https://api.whatsapp.com/send?phone=573137804820" className="inline-flex items-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white px-8 py-4 rounded-xl font-bold transition-colors">
              Solicitar Cotización <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Soluciones para el Sector Offshore y Naval
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Cartagena es uno de los principales puertos industriales y navales de Colombia, con una zona industrial
            en Mamonal que alberga refinerías, terminales marítimas y astilleros de clase mundial. En CMP SAS
            entendemos las exigencias únicas de este sector: plazos ajustados, normas de seguridad estrictas,
            ambientes altamente corrosivos y la necesidad de minimizar tiempos muertos.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Nuestro equipo está capacitado en normativas HSE (Health, Safety & Environment) y cuenta con las
            certificaciones necesarias para operar en instalaciones petroleras, astilleros y plataformas offshore.
          </p>

          <div className="space-y-8">
            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mantenimiento de Plataformas</h3>
              <p className="text-gray-600 mb-4">
                Servicio integral de mantenimiento anticorrosivo para plataformas petroleras, jack-ups, barcazas
                y FPSOs. Incluye sandblasting, aplicación de recubrimientos, reparaciones estructurales y
                protección catódica. Trabajamos bajo los más altos estándares de seguridad y cumplimos con
                las especificaciones de las principales clasificadoras internacionales.
              </p>
              <ul className="grid md:grid-cols-2 gap-2">
                {["Sandblasting y recubrimiento de cubiertas", "Protección de zonas splash y sumergidas", "Reparación de recubrimientos dañados", "Mantenimiento de sistemas de lastre", "Protección de tuberías y válvulas", "Documentación fotográfica y reportes"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Protección Catódica</h3>
              <p className="text-gray-600 mb-4">
                Diseño, instalación y mantenimiento de sistemas de protección catódica para estructuras
                sumergidas y enterradas. La protección catódica complementa los recubrimientos anticorrosivos
                y es esencial para la protección de cascos de embarcaciones, pilotes, tuberías submarinas
                y tanques enterrados.
              </p>
              <ul className="space-y-2">
                {["Ánodos de sacrificio (zinc, aluminio, magnesio)", "Sistemas de corriente impresa (ICCP)", "Monitoreo de potenciales de protección", "Inspección y reemplazo de ánodos", "Informes de potencial de estructura"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Soluciones Metalmecánicas</h3>
              <p className="text-gray-600 mb-4">
                Fabricación, reparación y montaje de estructuras metálicas, soportes, plataformas de acceso,
                barandas y escaleras industriales. Complementamos nuestros servicios de sandblasting y
                recubrimientos con soluciones metalmecánicas que permiten a nuestros clientes resolver
                necesidades integrales de mantenimiento en un solo proveedor.
              </p>
              <ul className="space-y-2">
                {["Fabricación de estructuras metálicas", "Reparación de elementos corroídos", "Montaje de plataformas de acceso", "Soldadura calificada (AWS)", "Reemplazo de secciones estructurales"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Servicios Relacionados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/servicios/sandblasting-ecoblasting" className="block bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Sandblasting y Ecoblasting</h3>
              <p className="text-sm text-gray-600">Preparación de superficies para proyectos offshore</p>
            </Link>
            <Link href="/servicios/proteccion-recubrimientos" className="block bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Protección y Recubrimientos</h3>
              <p className="text-sm text-gray-600">Sistemas de recubrimiento para ambientes marinos extremos</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
