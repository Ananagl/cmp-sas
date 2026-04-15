import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Shield,
  Target,
  Heart,
  Users,
  CheckCircle2,
  MapPin,
  Calendar,
  Ruler,
  Globe,
} from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Sandblasting Colombia",
  description:
    "Conoce a CMP SAS: empresa de sandblasting y recubrimientos industriales en Cartagena desde 2015. Certificaciones NACE/SSPC. +30,000 m² tratados en Colombia.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros | CMP SAS - Sandblasting Colombia",
    description:
      "Desde 2015, CMP SAS protege la infraestructura industrial de Colombia con sandblasting y recubrimientos certificados NACE/SSPC.",
    url: "/sobre-nosotros",
    images: [
      {
        url: "/images/equipo-cuadrilla-trabajo-campo.webp",
        width: 1200,
        height: 630,
        alt: "Equipo profesional de CMP SAS en Cartagena",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.cmpcoating.com.co/#organization",
  name: "CMP SAS Corrosion y Proof Coating",
  alternateName: "CMP SAS",
  url: "https://www.cmpcoating.com.co",
  logo: "https://www.cmpcoating.com.co/logo.svg",
  image: "https://www.cmpcoating.com.co/images/equipo-cuadrilla-trabajo-campo.webp",
  description: "Empresa especializada en sandblasting, recubrimientos industriales y protección anticorrosiva en Colombia desde 2015.",
  foundingDate: "2015",
  foundingLocation: {
    "@type": "Place",
    name: "Cartagena de Indias, Colombia",
  },
  telephone: "+573137804820",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cartagena de Indias",
    addressRegion: "Bolívar",
    addressCountry: "CO",
  },
  areaServed: [
    { "@type": "Country", name: "Colombia" },
    { "@type": "AdministrativeArea", name: "Costa Caribe Colombiana" },
    { "@type": "City", name: "Cartagena de Indias" },
  ],
  knowsAbout: [
    "Sandblasting",
    "Recubrimientos industriales",
    "Protección anticorrosiva",
    "Preparación de superficies",
    "NACE",
    "SSPC",
    "ISO 8501",
  ],
};

export default function SobreNosotrosPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />

      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-remolcador-saam-tajin-dique-cartagena.webp"
            alt="Equipo profesional de CMP SAS - Sandblasting y recubrimientos en Colombia"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "Sobre Nosotros" }]} />

          <div className="max-w-4xl mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sobre CMP SAS
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
              Desde 2015, <strong className="text-white">CMP SAS Corrosion y Proof Coating</strong> protege
              la infraestructura industrial de Colombia con servicios profesionales de sandblasting,
              recubrimientos y protección anticorrosiva certificados bajo normas internacionales NACE y SSPC.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-brand-orange)] font-bold tracking-wider uppercase text-sm mb-4 block">
                Nuestra Historia
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                De Cartagena para toda Colombia
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong className="text-gray-900">CMP SAS</strong> fue fundada en 2015 en Cartagena de Indias
                  con una misión clara: ofrecer servicios de preparación de superficies y protección anticorrosiva
                  de la más alta calidad para la industria colombiana.
                </p>
                <p>
                  Lo que comenzó como una operación enfocada en el sector naval de Cartagena ha crecido hasta
                  convertirse en una empresa integral que atiende los principales sectores industriales de la
                  Costa Caribe y toda Colombia: naval, petroquímico, offshore, infraestructura civil y energía.
                </p>
                <p>
                  A lo largo de más de 9 años hemos tratado más de 30,000 m² de superficies y ejecutado más
                  de 40 proyectos, ganándonos la confianza de empresas del sector industrial de Cartagena,
                  Barranquilla, Santa Marta y otras ciudades del país.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sandblasting-limpieza-abrasiva-estructura.webp"
                  alt="Trabajo de sandblasting y preparación de superficies - CMP SAS"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-brand-orange)] text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-3xl font-extrabold">2015</div>
                <p className="text-sm opacity-90">Año de fundación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Misión, Visión y Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-600">
                Ejecutar mantenimientos e ingenierías con responsabilidad, honestidad y calidad,
                brindando soluciones integrales de sandblasting y protección anticorrosiva que
                superen las expectativas de nuestros clientes en Colombia.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-6">
                <Globe size={28} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser la empresa líder en protección anticorrosiva y sandblasting en la Costa Caribe
                y Colombia, reconocida por la excelencia de nuestros servicios, la confianza de
                nuestros clientes y nuestro compromiso con la mejora continua.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-6">
                <Heart size={28} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                  <strong>Calidad:</strong> Hacemos las cosas bien
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                  <strong>Seguridad:</strong> Prioridad en cada proyecto
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                  <strong>Integridad:</strong> Honestidad y transparencia
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                  <strong>Mejora continua:</strong> Siempre evolucionando
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Cifras que nos Respaldan
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, value: "9+", label: "Años de experiencia" },
              { icon: Ruler, value: "+30.000 m²", label: "Superficies tratadas" },
              { icon: Award, value: "+40", label: "Proyectos ejecutados" },
              { icon: Shield, value: "NACE/SSPC", label: "Certificaciones" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={32} className="text-[var(--color-brand-orange)] mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-brand-orange)] mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Certificaciones y Estándares
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestro trabajo cumple con las normas internacionales más exigentes del sector
              anticorrosivo, verificado con instrumentos calibrados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "NACE International",
                description: "National Association of Corrosion Engineers. Nuestros procesos están alineados con las normas NACE para preparación de superficies y protección anticorrosiva en ambientes industriales y marinos.",
              },
              {
                title: "SSPC (Society for Protective Coatings)",
                description: "Cumplimos con los estándares SSPC-SP5, SP6, SP10 para grados de limpieza en sandblasting. Cada proyecto se ejecuta según el grado especificado y se verifica con instrumentos.",
              },
              {
                title: "ISO 8501-1",
                description: "Estándar internacional para evaluación visual de preparación de superficies. Trabajamos con grados Sa 2½ (equivalente SSPC-SP10) como referencia para ambientes agresivos.",
              },
              {
                title: "Protocolos HSE",
                description: "Implementamos protocolos de Salud, Seguridad y Medio Ambiente en todos nuestros proyectos, con especial énfasis en trabajos offshore y en alturas.",
              },
            ].map((cert) => (
              <div key={cert.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-[var(--color-brand-orange)]" />
                  <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/equipo-personal-trabajo-industrial.webp"
                  alt="Equipo profesional de CMP SAS en Cartagena, Colombia"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-[var(--color-brand-orange)] font-bold tracking-wider uppercase text-sm mb-4 block">
                Nuestro Equipo
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Personal Capacitado y Certificado
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Contamos con un equipo de profesionales especializados en preparación de superficies,
                  aplicación de recubrimientos e inspección de calidad. Nuestro personal se capacita
                  constantemente en las últimas técnicas y normativas del sector anticorrosivo.
                </p>
                <p>
                  Cada miembro del equipo CMP SAS aporta experiencia en los sectores naval, petroquímico,
                  offshore e industrial, lo que nos permite abordar proyectos complejos con confianza
                  y entregar resultados que superan los estándares requeridos.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Sandblasters certificados", "Inspectores de calidad", "Aplicadores de recubrimiento", "Personal HSE"].map((tag) => (
                  <span key={tag} className="bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Cobertura
            </h2>
            <p className="text-lg text-gray-600">
              Desde Cartagena, cubrimos toda la Costa Caribe y Colombia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/sandblasting-cartagena" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center group">
              <MapPin size={28} className="text-[var(--color-brand-orange)] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 group-hover:text-[var(--color-brand-orange)] transition-colors mb-1">Cartagena</h3>
              <p className="text-sm text-gray-600">Sede principal. Mamonal, sector naval.</p>
            </Link>
            <Link href="/sandblasting-costa-caribe" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center group">
              <MapPin size={28} className="text-[var(--color-brand-orange)] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 group-hover:text-[var(--color-brand-orange)] transition-colors mb-1">Costa Caribe</h3>
              <p className="text-sm text-gray-600">Barranquilla, Santa Marta, región Caribe.</p>
            </Link>
            <Link href="/sandblasting-colombia" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center group">
              <MapPin size={28} className="text-[var(--color-brand-orange)] mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 group-hover:text-[var(--color-brand-orange)] transition-colors mb-1">Colombia</h3>
              <p className="text-sm text-gray-600">Cobertura nacional.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
