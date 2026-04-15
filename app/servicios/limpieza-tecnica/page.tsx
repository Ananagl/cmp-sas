import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CTASection } from "../../components/CTASection";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Limpieza Técnica Industrial en Cartagena",
  description:
    "Servicios de limpieza técnica industrial en Cartagena: lavado a presión, limpieza química, lavado de tanques y cajas de mar. Resultados garantizados por CMP SAS.",
  alternates: { canonical: "/servicios/limpieza-tecnica" },
  openGraph: {
    title: "Limpieza Técnica Industrial | CMP SAS Cartagena",
    description: "Limpieza técnica profesional para el sector industrial y naval en Cartagena.",
    url: "/servicios/limpieza-tecnica",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Limpieza Técnica Industrial",
  description: "Servicios de limpieza técnica industrial, lavado a presión, limpieza química, lavado de tanques y cajas de mar en Cartagena.",
  provider: { "@id": "https://www.cmpcoating.com.co/#organization" },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
  serviceType: "Limpieza Industrial",
};

export default function LimpiezaTecnicaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="relative py-20 bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/limpieza-tecnica-hidrolavado-buque-azul.webp"
            alt="Limpieza técnica industrial en Cartagena - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ name: "Servicios", href: "/servicios" }, { name: "Limpieza Técnica" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Limpieza Técnica Industrial en Cartagena
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Servicios especializados de limpieza industrial con tecnología de alta presión, vapor y agentes
              químicos para el sector naval, petroquímico e industrial de Cartagena. Garantizamos la eliminación
              completa de contaminantes para una preparación de superficie óptima.
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
            Soluciones Integrales de Limpieza Industrial
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            La limpieza técnica es un paso fundamental en el mantenimiento industrial. Antes de cualquier proceso de
            sandblasting o aplicación de recubrimientos, las superficies deben estar libres de grasas, aceites, sales
            solubles y otros contaminantes que comprometerían la adherencia del sistema de protección. En CMP SAS
            utilizamos métodos probados y personal capacitado para garantizar superficies limpias según los estándares
            más exigentes de la industria.
          </p>

          <div className="space-y-8">
            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lavado Técnico a Presión</h3>
              <p className="text-gray-600 mb-4">
                Utilizamos equipos de lavado a presión de hasta 10,000 PSI para la remoción de suciedad,
                incrustaciones marinas, grasas y contaminantes superficiales en estructuras metálicas,
                embarcaciones y equipos industriales en Cartagena. Este método es ideal como paso previo
                al sandblasting, eliminando contaminantes que podrían interferir con el perfil de anclaje.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cascos de embarcaciones", "Estructuras portuarias", "Equipos de proceso", "Fachadas industriales"].map((t) => (
                  <span key={t} className="glass-tag-2 px-3 py-1 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lavado de Cajas de Mar</h3>
              <p className="text-gray-600 mb-4">
                Servicio especializado para la limpieza de cajas de mar (sea chests) en embarcaciones. La acumulación
                de incrustaciones marinas en las cajas de mar reduce la eficiencia del sistema de enfriamiento del motor
                y puede provocar sobrecalentamiento. Utilizamos técnicas de hidroblasting y limpieza mecánica para
                restaurar el flujo óptimo de agua de mar.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Remoción de biofouling", "Restauración de flujo", "Inspección de gratings", "Mantenimiento preventivo"].map((t) => (
                  <span key={t} className="glass-tag-2 px-3 py-1 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lavado de Tanques</h3>
              <p className="text-gray-600 mb-4">
                Limpieza profesional de tanques de almacenamiento de combustible, agua, químicos y productos
                alimenticios. Seguimos procedimientos de seguridad estrictos para espacios confinados,
                incluyendo monitoreo de atmósfera, ventilación forzada y personal con certificación en
                trabajo en espacios confinados. La limpieza de tanques es esencial antes de inspecciones
                API 653 y antes de la aplicación de recubrimientos internos.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Tanques de combustible", "Tanques de agua", "Tanques químicos", "Protocolo espacios confinados"].map((t) => (
                  <span key={t} className="glass-tag-2 px-3 py-1 rounded-lg text-sm font-medium">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Limpieza Química</h3>
              <p className="text-gray-600 mb-4">
                Aplicación de solventes y desengrasantes industriales para la eliminación de aceites, grasas,
                compuestos orgánicos y sales solubles. Cumplimos con la norma SSPC-SP1 (Solvent Cleaning) como
                paso inicial obligatorio antes de cualquier método de preparación de superficies mecánico.
                Utilizamos productos biodegradables y seguimos protocolos de disposición de residuos.
              </p>
              <div className="flex flex-wrap gap-2">
                {["SSPC-SP1 Solvent Cleaning", "Desengrase industrial", "Remoción de sales solubles", "Productos biodegradables"].map((t) => (
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
              <p className="text-sm text-gray-600">El siguiente paso después de la limpieza técnica</p>
            </Link>
            <Link href="/servicios/proteccion-recubrimientos" className="block bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Protección y Recubrimientos</h3>
              <p className="text-sm text-gray-600">Sistemas de pintura anticorrosiva para completar la protección</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
