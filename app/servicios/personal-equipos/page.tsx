import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CTASection } from "../../components/CTASection";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Alquiler de Equipos y Personal Especializado en Cartagena",
  description:
    "Alquiler de equipos de sandblasting, andamios y suministro de personal certificado para proyectos industriales en Cartagena y Colombia. CMP SAS.",
  alternates: { canonical: "/servicios/personal-equipos" },
  openGraph: {
    title: "Alquiler de Equipos y Personal | CMP SAS Cartagena",
    description: "Equipos de sandblasting y personal certificado para proyectos industriales en Cartagena.",
    url: "/servicios/personal-equipos",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicios de Personal y Equipos",
  description: "Alquiler de equipos de sandblasting, andamios y suministro de personal especializado para proyectos industriales en Cartagena.",
  provider: { "@id": "https://www.cmpcoating.com.co/#organization" },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
  serviceType: "Alquiler de Equipos y Personal",
};

export default function PersonalEquiposPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="relative py-20 bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/equipo-profesional-cmp-sas-cartagena.webp"
            alt="Personal especializado y equipos de sandblasting en Cartagena - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ name: "Servicios", href: "/servicios" }, { name: "Personal y Equipos" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Alquiler de Equipos y Suministro de Personal Especializado
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              En CMP SAS ofrecemos alquiler de equipos de sandblasting y suministro de personal calificado
              para que tu proyecto en Cartagena cuente con los recursos necesarios sin inversión en activos fijos.
              Personal capacitado, equipos certificados y respuesta rápida.
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
            Recursos para tu Proyecto Industrial
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            No todos los proyectos requieren la contratación de un servicio integral. A veces necesitas equipos
            específicos para un proyecto puntual, o personal calificado para reforzar tu equipo durante una parada
            de planta o un proyecto con plazos ajustados. En CMP SAS entendemos estas necesidades y ofrecemos
            soluciones flexibles de alquiler de equipos y suministro de personal en Cartagena.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Todos nuestros equipos cuentan con mantenimiento preventivo al día y nuestro personal está certificado
            en las competencias técnicas y de seguridad que requiere el sector industrial.
          </p>

          <div className="space-y-8">
            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Suministro de Personal</h3>
              <p className="text-gray-600 mb-4">
                Proveemos personal calificado para proyectos de sandblasting, pintura industrial, andamiaje
                y mantenimiento general. Nuestro personal cuenta con certificaciones en trabajo en alturas,
                espacios confinados, manejo de sustancias químicas y normativas HSE del sector industrial.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Perfiles disponibles:</h4>
                  <ul className="space-y-2">
                    {["Operadores de sandblasting certificados", "Pintores industriales calificados", "Armadores de andamios", "Ayudantes industriales", "Supervisores de recubrimiento"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Certificaciones:</h4>
                  <ul className="space-y-2">
                    {["Trabajo en alturas (Resolución 4272)", "Espacios confinados", "Manejo de sustancias químicas", "Curso de 50 horas SGSST", "EPP y seguridad industrial"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alquiler de Equipos de Sandblasting</h3>
              <p className="text-gray-600 mb-4">
                Alquiler de equipos completos de sandblasting para proyectos de corta y larga duración.
                Incluimos ollas de presión (blast pots), compresores, mangueras, boquillas y accesorios.
                Todos los equipos cuentan con mantenimiento al día y son entregados en condiciones óptimas
                de operación.
              </p>
              <ul className="grid md:grid-cols-2 gap-2">
                {["Compresores Atlas Copco de alta capacidad", "Ollas de presión (blast pots)", "Mangueras y acoples certificados", "Boquillas de carburo de tungsteno", "Trajes y cascos de sandblaster", "Equipos de recuperación de abrasivo"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alquiler de Andamios</h3>
              <p className="text-gray-600 mb-4">
                Suministro, montaje y desmontaje de andamios certificados para proyectos industriales
                y navales. Contamos con andamios tubulares, andamios multidireccionales y sistemas de
                acceso para trabajos en alturas según la normativa colombiana vigente.
              </p>
              <ul className="space-y-2">
                {["Andamios tubulares certificados", "Andamios multidireccionales", "Montaje y desmontaje incluido", "Ingeniería de andamiaje (diseño y cálculo)", "Inspección periódica durante el proyecto", "Cumplimiento Resolución 4272 de 2021"].map((item) => (
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
              <p className="text-sm text-gray-600">Servicio integral con nuestros equipos y personal</p>
            </Link>
            <Link href="/servicios/servicios-offshore-industriales" className="block bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Servicios Offshore e Industriales</h3>
              <p className="text-sm text-gray-600">Proyectos que requieren personal y equipos especializados</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
