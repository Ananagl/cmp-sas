import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Clock,
  Award,
  Wrench,
  Anchor,
  Factory,
  Building2,
  Flame,
  HardHat,
  CheckCircle2,
} from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Sandblasting en Cartagena - Servicio Profesional Certificado NACE/SSPC",
  description:
    "Servicio de sandblasting en Cartagena con certificación NACE/SSPC. Preparación de superficies Sa 2½, SSPC-SP10. Cotización gratuita. +57 313 780 4820.",
  alternates: { canonical: "/sandblasting-cartagena" },
  openGraph: {
    title: "Sandblasting en Cartagena - Servicio Profesional Certificado | CMP SAS",
    description:
      "Servicio de sandblasting en Cartagena con certificación NACE/SSPC. Preparación de superficies Sa 2½. +9 años de experiencia. Cotización gratuita.",
    url: "/sandblasting-cartagena",
    images: [
      {
        url: "/images/hero-pintura-remolcador-astillero-cartagena.webp",
        width: 1200,
        height: 630,
        alt: "Sandblasting profesional en Cartagena - CMP SAS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandblasting en Cartagena - CMP SAS",
    description:
      "Servicio profesional de sandblasting certificado NACE/SSPC en Cartagena. Cotización gratuita.",
    images: ["/images/hero-pintura-remolcador-astillero-cartagena.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cmpcoating.com.co/#organization",
  name: "CMP SAS Corrosion y Proof Coating",
  alternateName: "CMP SAS",
  url: "https://www.cmpcoating.com.co",
  image: "https://www.cmpcoating.com.co/images/hero-pintura-remolcador-astillero-cartagena.webp",
  description: "Empresa especializada en sandblasting y recubrimientos industriales en Cartagena, Colombia. Certificaciones NACE/SSPC.",
  telephone: "+573137804820",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cartagena de Indias",
    addressRegion: "Bolívar",
    addressCountry: "CO",
  },
  geo: { "@type": "GeoCoordinates", latitude: 10.391, longitude: -75.5144 },
  foundingDate: "2015",
  areaServed: [
    { "@type": "City", name: "Cartagena de Indias" },
    { "@type": "Country", name: "Colombia" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el sandblasting en Cartagena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo del sandblasting en Cartagena varía según el área a tratar, el grado de limpieza requerido (SSPC-SP5, SP6, SP10), el tipo de abrasivo y las condiciones de acceso. En CMP SAS ofrecemos cotizaciones gratuitas y personalizadas. Contáctenos al +57 313 780 4820 para una evaluación sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el sandblasting y para qué sirve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El sandblasting (también conocido como chorreado abrasivo o arenado) es un proceso de preparación de superficies que consiste en proyectar partículas abrasivas a alta presión contra una superficie metálica para eliminar óxido, pintura vieja, calamina y otros contaminantes. Es fundamental antes de aplicar recubrimientos anticorrosivos para garantizar la adherencia y durabilidad de la pintura.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre sandblasting y ecoblasting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El sandblasting convencional utiliza abrasivos como granalla de acero o arena, mientras que el ecoblasting (soda blasting) utiliza bicarbonato de sodio como abrasivo. El ecoblasting es más amigable con el medio ambiente, no genera chispa, y es ideal para superficies delicadas como aluminio o sustratos donde no se desea un perfil de anclaje agresivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué norma de preparación de superficie necesito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La norma depende del sistema de recubrimiento y el ambiente de servicio. Las más comunes son: SSPC-SP10/NACE No.2 (Near-White Blast) para ambientes agresivos y marinos, SSPC-SP5/NACE No.1 (White Metal Blast) para condiciones extremas, y SSPC-SP6/NACE No.3 (Commercial Blast) para ambientes moderados. Nuestro equipo técnico le asesora sobre la norma adecuada para su proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma un proyecto de sandblasting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El tiempo depende del área a tratar, el grado de corrosión existente, el nivel de limpieza requerido y las condiciones ambientales. Un proyecto típico de 500 m² puede tomar entre 3 a 7 días. En CMP SAS nos comprometemos con cronogramas definidos, especialmente en proyectos navales donde cada día en dique seco cuenta.",
      },
    },
    {
      "@type": "Question",
      name: "¿El sandblasting daña la estructura metálica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El sandblasting profesional, realizado con el abrasivo y la presión correcta, no daña la estructura metálica. Al contrario, crea un perfil de anclaje (rugosidad controlada) que es esencial para la correcta adherencia del recubrimiento. Utilizamos instrumentos de medición de perfil para verificar que se cumplan las especificaciones sin comprometer la integridad del metal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con proyectos offshore en Cartagena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. CMP SAS cuenta con experiencia en proyectos offshore, mantenimiento de plataformas y embarcaciones en el sector naval de Cartagena. Nuestro equipo está capacitado en normativas de seguridad HSE y cuenta con los equipos necesarios para trabajos en ambientes marinos exigentes.",
      },
    },
  ],
};

export default function SandblastingCartagena() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex items-center bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-pintura-remolcador-astillero-cartagena.webp"
            alt="Servicio de sandblasting profesional en Cartagena - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "Sandblasting en Cartagena" }]} />

          <div className="max-w-4xl mt-8">
            <span className="inline-block glass-tag px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              Servicio Profesional Certificado
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sandblasting en Cartagena: Servicio Profesional con Certificación NACE/SSPC
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl">
              En <strong className="text-white">CMP SAS</strong> somos especialistas en sandblasting en Cartagena
              con más de 9 años de experiencia. Ofrecemos preparación de superficies certificada según normas
              internacionales NACE y SSPC, garantizando la máxima protección anticorrosiva para tu infraestructura
              industrial, naval y offshore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=573137804820&text=Hola%2C%20necesito%20una%20cotizaci%C3%B3n%20de%20sandblasting"
                className="bg-[#25D366] hover:bg-[#20BE5C] text-white px-8 py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center text-lg"
              >
                Cotización Gratuita por WhatsApp
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a
                href="tel:+573137804820"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all duration-300"
              >
                +57 313 780 4820
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Por qué elegirnos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              ¿Por qué elegir CMP SAS para tu proyecto de sandblasting en Cartagena?
            </h2>
            <p className="text-lg text-gray-600">
              Somos la empresa de sandblasting de confianza en Cartagena de Indias. Nuestro compromiso con la calidad,
              el cumplimiento normativo y la entrega a tiempo nos diferencia en el sector industrial y naval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "9+ Años de Experiencia",
                description: "Desde 2015 ejecutando proyectos de sandblasting y recubrimientos en Cartagena y toda Colombia.",
              },
              {
                icon: Shield,
                title: "Certificación NACE/SSPC",
                description: "Procesos alineados con las normas internacionales más exigentes del sector anticorrosivo.",
              },
              {
                icon: Clock,
                title: "Entrega a Tiempo",
                description: "En el sector naval, cada día en dique seco cuenta. Cumplimos cronogramas comprometidos.",
              },
              {
                icon: Wrench,
                title: "Equipos de Última Generación",
                description: "Compresores Atlas Copco, medidores de espesor digital y control ambiental de punto de rocío.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-[var(--color-brand-orange)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-10 text-center">
              <div className="text-5xl font-extrabold text-[var(--color-brand-orange)] mb-4">+30.000 m²</div>
              <p className="text-xl font-semibold text-gray-800">en preparación de superficies y pintura</p>
            </div>
            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-10 text-center">
              <div className="text-5xl font-extrabold text-[var(--color-brand-orange)] mb-4">+40</div>
              <p className="text-xl font-semibold text-gray-800">proyectos ejecutados con éxito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Sandblasting */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Tipos de Sandblasting que Ofrecemos en Cartagena
            </h2>
            <p className="text-lg text-gray-600">
              Contamos con diferentes técnicas de preparación de superficies para adaptarnos a las necesidades
              específicas de cada proyecto industrial, naval u offshore en Cartagena.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-6">
                <Flame size={28} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sandblasting Convencional</h3>
              <p className="text-gray-600 mb-4">
                El método más utilizado de chorreado abrasivo en Cartagena. Proyectamos granalla de acero o abrasivos minerales
                a alta presión para alcanzar perfiles de anclaje de 2 a 4 mils, ideales para sistemas de recubrimiento
                de alto espesor en ambientes marinos y corrosivos.
              </p>
              <p className="text-gray-600">
                Aplicamos grados de limpieza desde SSPC-SP6 (Commercial Blast) hasta SSPC-SP5 (White Metal Blast)
                según los requerimientos del proyecto y las especificaciones del fabricante de pintura.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-6">
                <Shield size={28} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ecoblasting (Soda Blasting)</h3>
              <p className="text-gray-600 mb-4">
                Técnica de limpieza abrasiva ecológica que utiliza bicarbonato de sodio como medio de proyección.
                No genera chispa, es soluble en agua y no daña superficies delicadas como aluminio, fibra de vidrio
                o sustratos que requieren un tratamiento menos agresivo.
              </p>
              <p className="text-gray-600">
                Ideal para proyectos en Cartagena donde se requiere cumplimiento de normativas ambientales
                estrictas o donde no se desea un perfil de anclaje profundo.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-6">
                <Wrench size={28} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hidroblasting</h3>
              <p className="text-gray-600 mb-4">
                Limpieza de superficies con agua a ultra alta presión (hasta 40,000 PSI). Elimina recubrimientos
                deteriorados, óxido y contaminantes sin generar polvo ni residuos de abrasivo. Excelente para
                preparación de superficies en tanques, tuberías y estructuras en zonas confinadas.
              </p>
              <p className="text-gray-600">
                Este método es especialmente valorado en el sector naval y petroquímico de Cartagena por su
                eficiencia y bajo impacto ambiental.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servicios/sandblasting-ecoblasting"
              className="inline-flex items-center text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-hover)] font-bold text-lg transition-colors"
            >
              Ver más detalles de nuestro servicio de sandblasting
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Normas y Estándares */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Normas y Estándares que Cumplimos
            </h2>
            <p className="text-lg text-gray-600">
              Todo nuestro trabajo de sandblasting en Cartagena se ejecuta bajo estricto cumplimiento de normas
              internacionales SSPC y NACE, verificado con instrumentos de medición calibrados.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[var(--color-brand-dark)] text-white">
                  <th className="px-6 py-4 text-left font-bold">Norma</th>
                  <th className="px-6 py-4 text-left font-bold">Descripción</th>
                  <th className="px-6 py-4 text-left font-bold">Aplicación Típica</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    norma: "SSPC-SP5 / NACE No. 1",
                    desc: "White Metal Blast Cleaning (Limpieza a metal blanco)",
                    app: "Ambientes extremos, inmersión en agua de mar, tanques de almacenamiento",
                  },
                  {
                    norma: "SSPC-SP10 / NACE No. 2",
                    desc: "Near-White Blast Cleaning (Limpieza casi a metal blanco)",
                    app: "Ambientes marinos agresivos, plataformas offshore, cascos de buques",
                  },
                  {
                    norma: "SSPC-SP6 / NACE No. 3",
                    desc: "Commercial Blast Cleaning (Limpieza comercial)",
                    app: "Ambientes industriales moderados, estructuras interiores",
                  },
                  {
                    norma: "ISO 8501-1 Sa 2½",
                    desc: "Equivalente a SSPC-SP10 en el estándar europeo/internacional",
                    app: "Proyectos con especificaciones bajo normativa ISO",
                  },
                ].map((row) => (
                  <tr key={row.norma} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-[var(--color-brand-orange)]">{row.norma}</td>
                    <td className="px-6 py-4 text-gray-700">{row.desc}</td>
                    <td className="px-6 py-4 text-gray-600">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sectores que Atendemos */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Sectores que Atendemos en Cartagena
            </h2>
            <p className="text-lg text-gray-600">
              Nuestros servicios de sandblasting y protección anticorrosiva en Cartagena atienden a los principales
              sectores productivos de la región Caribe colombiana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Anchor,
                title: "Naval y Marítimo",
                description: "Preparación de cascos, cubiertas, bodegas y sentinas de embarcaciones en los astilleros y diques de Cartagena. Cumplimos con las exigencias de clasificadoras internacionales.",
              },
              {
                icon: Factory,
                title: "Petroquímico y Refinería",
                description: "Sandblasting y recubrimiento de tanques de almacenamiento, tuberías, estructuras metálicas y equipos de proceso en la zona industrial de Mamonal.",
              },
              {
                icon: Building2,
                title: "Industrial y Manufactura",
                description: "Preparación de superficies para plantas de producción, estructuras de acero, naves industriales y equipos de procesamiento en Cartagena y el Caribe colombiano.",
              },
              {
                icon: HardHat,
                title: "Offshore y Plataformas",
                description: "Mantenimiento anticorrosivo de plataformas petroleras, jack-ups y equipos offshore con personal certificado y protocolos HSE.",
              },
              {
                icon: Building2,
                title: "Infraestructura Civil",
                description: "Sandblasting de puentes, pasarelas, torres de comunicación, estructuras de acero y cualquier proyecto de ingeniería civil que requiera protección anticorrosiva.",
              },
              {
                icon: Shield,
                title: "Energía",
                description: "Preparación de superficies para torres eólicas, subestaciones eléctricas, paneles solares y toda la infraestructura del sector energético.",
              },
            ].map((sector) => (
              <div key={sector.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-4">
                  <sector.icon size={24} className="text-[var(--color-brand-orange)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.title}</h3>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-lg text-gray-600">
              Cada proyecto de sandblasting en Cartagena sigue un proceso riguroso para garantizar resultados
              que cumplen con las normas internacionales y las expectativas de nuestros clientes.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Diagnóstico e Inspección Inicial",
                description: "Evaluamos el grado de corrosión existente según ISO 8501 (grados A, B, C, D), medimos espesores residuales del metal base y documentamos las condiciones actuales de la superficie.",
              },
              {
                step: "02",
                title: "Selección de Abrasivo y Perfil de Anclaje",
                description: "Según las especificaciones del proyecto y el sistema de recubrimiento a aplicar, seleccionamos el abrasivo óptimo (granalla de acero, arena mineral, bicarbonato) y definimos el perfil de anclaje objetivo.",
              },
              {
                step: "03",
                title: "Preparación de Superficie según Norma",
                description: "Ejecutamos el sandblasting alcanzando el grado de limpieza especificado (SSPC-SP5, SP6, SP10 o equivalente ISO). Controlamos la presión, la distancia de proyección y el ángulo de impacto para resultados uniformes.",
              },
              {
                step: "04",
                title: "Verificación con Instrumentos",
                description: "Medimos el perfil de anclaje con replica tape, verificamos el punto de rocío con medidor ambiental, y confirmamos el grado de limpieza visual antes de proceder con el recubrimiento.",
              },
              {
                step: "05",
                title: "Aplicación de Recubrimiento",
                description: "Coordinamos la aplicación del sistema de pintura dentro de las ventanas de tiempo normativas, verificando espesor de película húmeda y seca (DFT) con medidores calibrados.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center text-white font-extrabold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/servicios/proteccion-recubrimientos"
              className="inline-flex items-center text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-hover)] font-bold text-lg transition-colors"
            >
              Conoce nuestros servicios de recubrimientos industriales
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery / Before-After */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Nuestros Proyectos de Sandblasting en Cartagena
            </h2>
            <p className="text-lg text-gray-600">
              Resultados reales de nuestro trabajo de preparación de superficies y recubrimientos anticorrosivos
              en la zona industrial y naval de Cartagena.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/images/sandblasting-granallado-casco-industrial.webp"
                  alt="Proyecto de sandblasting industrial en Cartagena - preparación de superficie SSPC-SP10"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Preparación de Superficie Industrial</h3>
                <p className="text-gray-600 text-sm">Grado de limpieza: SSPC-SP10 / Sa 2½. Perfil de anclaje: 2.5 mils. Abrasivo: granalla de acero G-40.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-64">
                <Image
                  src="/images/recubrimiento-proteccion-casco-naval.webp"
                  alt="Proyecto de recubrimiento anticorrosivo después del sandblasting en Cartagena"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Aplicación de Recubrimiento Anticorrosivo</h3>
                <p className="text-gray-600 text-sm">Sistema: Primer epóxico + acabado poliuretano. DFT total: 12 mils. Garantía de adherencia verificada con prueba cross-cut.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Preguntas Frecuentes sobre Sandblasting en Cartagena
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Cuánto cuesta el sandblasting en Cartagena?",
                a: "El costo del sandblasting en Cartagena varía según el área a tratar, el grado de limpieza requerido (SSPC-SP5, SP6, SP10), el tipo de abrasivo y las condiciones de acceso. En CMP SAS ofrecemos cotizaciones gratuitas y personalizadas. Contáctenos al +57 313 780 4820 para una evaluación sin compromiso.",
              },
              {
                q: "¿Qué es el sandblasting y para qué sirve?",
                a: "El sandblasting (también conocido como chorreado abrasivo o arenado) es un proceso de preparación de superficies que consiste en proyectar partículas abrasivas a alta presión contra una superficie metálica para eliminar óxido, pintura vieja, calamina y otros contaminantes. Es fundamental antes de aplicar recubrimientos anticorrosivos para garantizar la adherencia y durabilidad de la pintura.",
              },
              {
                q: "¿Cuál es la diferencia entre sandblasting y ecoblasting?",
                a: "El sandblasting convencional utiliza abrasivos como granalla de acero o arena, mientras que el ecoblasting (soda blasting) utiliza bicarbonato de sodio. El ecoblasting es más amigable con el medio ambiente, no genera chispa, y es ideal para superficies delicadas como aluminio o sustratos que requieren un tratamiento menos agresivo.",
              },
              {
                q: "¿Qué norma de preparación de superficie necesito?",
                a: "Depende del sistema de recubrimiento y el ambiente de servicio. Las más comunes son: SSPC-SP10/NACE No.2 para ambientes marinos agresivos, SSPC-SP5/NACE No.1 para condiciones extremas, y SSPC-SP6/NACE No.3 para ambientes moderados. Nuestro equipo técnico le asesora sobre la norma adecuada para su proyecto.",
              },
              {
                q: "¿Cuánto tiempo toma un proyecto de sandblasting?",
                a: "Depende del área, el grado de corrosión y el nivel de limpieza requerido. Un proyecto típico de 500 m² puede tomar entre 3 a 7 días. En CMP SAS nos comprometemos con cronogramas definidos, especialmente en proyectos navales donde cada día en dique seco cuenta.",
              },
              {
                q: "¿El sandblasting daña la estructura metálica?",
                a: "No. El sandblasting profesional, realizado con el abrasivo y la presión correcta, no daña la estructura. Al contrario, crea un perfil de anclaje (rugosidad controlada) esencial para la adherencia del recubrimiento. Utilizamos instrumentos de medición para verificar que se cumplan las especificaciones sin comprometer la integridad del metal.",
              },
              {
                q: "¿Trabajan con proyectos offshore en Cartagena?",
                a: "Sí. CMP SAS cuenta con experiencia en proyectos offshore, mantenimiento de plataformas y embarcaciones en el sector naval de Cartagena. Nuestro equipo está capacitado en normativas HSE y cuenta con los equipos necesarios para trabajos en ambientes marinos exigentes.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-[var(--color-brand-gray)] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            Servicios Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/servicios/sandblasting-ecoblasting" className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Sandblasting y Ecoblasting</h3>
              <p className="text-sm text-gray-600">Detalle completo de nuestros servicios de preparación de superficies</p>
            </Link>
            <Link href="/servicios/proteccion-recubrimientos" className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Protección y Recubrimientos</h3>
              <p className="text-sm text-gray-600">Sistemas de pintura industrial y recubrimientos anticorrosivos</p>
            </Link>
            <Link href="/servicios/inspeccion-calidad" className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Inspección y Calidad</h3>
              <p className="text-sm text-gray-600">Medición de espesores, pruebas de adherencia y verificación de estándares</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <CTASection />
    </>
  );
}
