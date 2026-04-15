import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CTASection } from "../../components/CTASection";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Recubrimientos Industriales y Pintura Anticorrosiva en Cartagena",
  description:
    "Aplicación de recubrimientos industriales, pintura anticorrosiva, pisos epóxicos y galvanizado en frío en Cartagena. Cumplimos normas NACE/SSPC. CMP SAS.",
  alternates: { canonical: "/servicios/proteccion-recubrimientos" },
  openGraph: {
    title: "Recubrimientos Industriales y Pintura Anticorrosiva | CMP SAS",
    description: "Sistemas de protección anticorrosiva y recubrimientos industriales en Cartagena.",
    url: "/servicios/proteccion-recubrimientos",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Protección y Recubrimientos Industriales",
  description: "Aplicación profesional de recubrimientos industriales, pintura anticorrosiva, pisos epóxicos y sistemas de protección contra la corrosión en Cartagena.",
  provider: { "@id": "https://www.cmpcoating.com.co/#organization" },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
  serviceType: "Recubrimientos Industriales",
};

export default function ProteccionRecubrimientosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="relative py-20 bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/recubrimiento-pintura-barco-rojo-acabado.webp"
            alt="Recubrimientos industriales y pintura anticorrosiva en Cartagena - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ name: "Servicios", href: "/servicios" }, { name: "Protección y Recubrimientos" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Recubrimientos Industriales y Pintura Anticorrosiva en Cartagena
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              En CMP SAS aplicamos sistemas de recubrimiento de alta performance para proteger tu infraestructura
              contra la corrosión en el exigente ambiente marino y tropical de Cartagena. Trabajamos con las mejores
              marcas de la industria y cumplimos estrictas normas de aplicación NACE y SSPC.
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
            Sistemas de Protección Anticorrosiva
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            La selección correcta del sistema de recubrimiento es tan importante como la preparación de la superficie.
            Un recubrimiento aplicado sobre una superficie mal preparada fallará prematuramente, pero igualmente un
            recubrimiento inadecuado para las condiciones de servicio no proporcionará la protección necesaria.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            En CMP SAS asesoramos a nuestros clientes en la selección del sistema de recubrimiento óptimo según el
            ambiente de servicio, la vida útil deseada y el presupuesto disponible. Trabajamos con fabricantes líderes
            como Hempel, Jotun, Sherwin-Williams e International Paint.
          </p>

          <div className="space-y-8">
            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pintura Industrial</h3>
              <p className="text-gray-600 mb-4">
                Aplicación de sistemas de pintura industrial de alto desempeño para estructuras metálicas, equipos
                de proceso, tanques de almacenamiento y toda infraestructura expuesta a condiciones agresivas.
                Controlamos el espesor de película húmeda y seca (DFT) con instrumentos calibrados para garantizar
                el cumplimiento de las especificaciones del fabricante.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {["Primers epóxicos de zinc", "Epóxicos de alto espesor", "Poliuretanos alifáticos", "Silicones de alta temperatura", "Primers ricos en zinc inorgánico"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {["Control de DFT (espesor)", "Verificación de adherencia", "Registro de condiciones ambientales", "Informes de aplicación", "Fichas técnicas documentadas"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pisos Epóxicos Industriales</h3>
              <p className="text-gray-600 mb-4">
                Instalación de sistemas de pisos epóxicos para plantas industriales, laboratorios, bodegas,
                áreas de producción y estacionamientos. Los pisos epóxicos proporcionan resistencia química,
                mecánica y facilidad de limpieza. Ofrecemos acabados antideslizantes, conductivos y de alta
                resistencia al tráfico pesado.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Pisos autonivelantes", "Pisos antideslizantes", "Pisos conductivos/ESD", "Pisos de alto tráfico", "Señalización industrial"].map((t) => (
                  <span key={t} className="glass-tag-2 px-3 py-1 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recubrimientos Marinos y Navales</h3>
              <p className="text-gray-600 mb-4">
                Aplicación de sistemas de recubrimiento especializados para embarcaciones, plataformas offshore
                y estructuras marinas. Utilizamos sistemas de antifouling, anticorrosivos de inmersión y
                recubrimientos de zona splash diseñados para resistir las condiciones extremas del ambiente
                marino caribeño. Cumplimos con las especificaciones de clasificadoras como Lloyd&apos;s, DNV,
                ABS y Bureau Veritas.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Antifouling (antiincrustante)", "Recubrimientos de inmersión", "Zona splash", "Sistemas de lastre", "Compatible con clasificadoras"].map((t) => (
                  <span key={t} className="glass-tag-2 px-3 py-1 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impermeabilización</h3>
              <p className="text-gray-600 mb-4">
                Sistemas de impermeabilización para cubiertas, terrazas, cimentaciones, tanques y estructuras
                de concreto. Utilizamos membranas de poliurea, poliuretano y sistemas acrílicos elastoméricos
                que proporcionan una barrera continua contra la humedad y las filtraciones.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Membranas de poliurea", "Poliuretano elastomérico", "Sistemas acrílicos", "Cubiertas y terrazas", "Tanques de concreto"].map((t) => (
                  <span key={t} className="glass-tag-2 px-3 py-1 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Galvanizado en Frío</h3>
              <p className="text-gray-600 mb-4">
                Aplicación de recubrimientos ricos en zinc (galvanizado en frío) para protección catódica
                de superficies metálicas. Este método proporciona protección galvánica similar al galvanizado
                en caliente pero con la flexibilidad de aplicación en campo. Ideal para reparaciones de
                galvanizado, áreas de difícil acceso y retoques en obra.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Protección catódica", "Reparación de galvanizado", "Aplicación en campo", "95%+ contenido de zinc", "Resistencia UV"].map((t) => (
                  <span key={t} className="glass-tag-2 px-3 py-1 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
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
              <p className="text-sm text-gray-600">La preparación de superficie es clave antes de aplicar recubrimientos</p>
            </Link>
            <Link href="/servicios/inspeccion-calidad" className="block bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Inspección y Calidad</h3>
              <p className="text-sm text-gray-600">Verificamos espesores, adherencia y cumplimiento de normas</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
