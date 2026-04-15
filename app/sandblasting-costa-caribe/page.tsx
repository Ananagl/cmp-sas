import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Award,
  Anchor,
  Factory,
  Building2,
  CheckCircle2,
  MapPin,
  Droplets,
  Wind,
  Thermometer,
  Sun,
} from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Sandblasting en la Costa Caribe - NACE/SSPC",
  description:
    "Servicio de sandblasting en la Costa Caribe colombiana. Cartagena, Barranquilla, Santa Marta. Protección anticorrosiva contra el ambiente marino. Certificación NACE/SSPC.",
  alternates: { canonical: "/sandblasting-costa-caribe" },
  openGraph: {
    title: "Sandblasting en la Costa Caribe Colombiana | CMP SAS",
    description:
      "Sandblasting profesional en la Costa Caribe: Cartagena, Barranquilla, Santa Marta. Protección contra corrosión marina. NACE/SSPC.",
    url: "/sandblasting-costa-caribe",
    images: [
      {
        url: "/images/hero-trabajo-altura-manlift-ocaso.webp",
        width: 1200,
        height: 630,
        alt: "Sandblasting en la Costa Caribe - CMP SAS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandblasting Costa Caribe - CMP SAS",
    description:
      "Protección anticorrosiva profesional para la Costa Caribe colombiana. NACE/SSPC.",
    images: ["/images/hero-trabajo-altura-manlift-ocaso.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cmpcoating.com.co/#organization",
  name: "CMP SAS Corrosion y Proof Coating",
  alternateName: "CMP SAS",
  url: "https://www.cmpcoating.com.co",
  image: "https://www.cmpcoating.com.co/images/hero-trabajo-altura-manlift-ocaso.webp",
  description: "Empresa de sandblasting y recubrimientos industriales especializada en la Costa Caribe colombiana.",
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
    { "@type": "AdministrativeArea", name: "Costa Caribe Colombiana" },
    { "@type": "City", name: "Cartagena de Indias" },
    { "@type": "City", name: "Barranquilla" },
    { "@type": "City", name: "Santa Marta" },
    { "@type": "City", name: "Sincelejo" },
    { "@type": "City", name: "Montería" },
    { "@type": "City", name: "Valledupar" },
    { "@type": "City", name: "Riohacha" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿En qué ciudades de la Costa Caribe ofrecen sandblasting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrecemos servicios de sandblasting en toda la Costa Caribe colombiana: Cartagena de Indias (sede principal), Barranquilla, Santa Marta, Sincelejo, Montería, Valledupar y Riohacha. Nuestra ubicación estratégica en Cartagena nos permite atender rápidamente cualquier proyecto en la región.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué la Costa Caribe necesita más protección anticorrosiva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Costa Caribe colombiana presenta condiciones ambientales extremadamente agresivas para las estructuras metálicas: alta salinidad del aire marino, humedad relativa superior al 80%, temperaturas promedio de 28-32°C y exposición directa a la brisa marina. Estos factores aceleran la corrosión hasta 10 veces más rápido que en el interior del país, haciendo indispensable una preparación de superficie y recubrimiento de alta calidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el sandblasting en la Costa Caribe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El costo varía según el área a tratar, el grado de limpieza requerido, el tipo de abrasivo, las condiciones de acceso y la ubicación dentro de la Costa Caribe. En CMP SAS ofrecemos cotizaciones gratuitas y personalizadas. Contáctenos al +57 313 780 4820 para una evaluación sin compromiso de su proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipo de proyectos realizan en la región Caribe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la Costa Caribe atendemos proyectos navales (astilleros de Cartagena, embarcaciones), petroquímicos (Mamonal, refinerías), portuarios (puertos de Cartagena, Barranquilla y Santa Marta), offshore (plataformas en el Caribe colombiano), energéticos (parques eólicos de La Guajira) e infraestructura civil (puentes, torres, estructuras metálicas).",
      },
    },
  ],
};

export default function SandblastingCostaCaribe() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex items-center bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-trabajo-altura-manlift-ocaso.webp"
            alt="Sandblasting en la Costa Caribe colombiana - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "Sandblasting Costa Caribe" }]} />

          <div className="max-w-4xl mt-8">
            <span className="inline-block glass-tag px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              Región Caribe Colombiana
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sandblasting en la Costa Caribe Colombiana
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl">
              La Costa Caribe enfrenta las condiciones de corrosión más agresivas de Colombia.
              En <strong className="text-white">CMP SAS</strong>, con sede en Cartagena de Indias,
              somos especialistas en proteger la infraestructura industrial, naval y portuaria de
              toda la región Caribe contra los efectos devastadores del ambiente marino.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=573137804820&text=Hola%2C%20necesito%20sandblasting%20en%20la%20Costa%20Caribe"
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

      {/* Corrosion Challenge */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                El Desafío de la Corrosión en la Costa Caribe
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  La región Caribe colombiana presenta un ambiente particularmente hostil para las
                  estructuras metálicas. La combinación de <strong className="text-gray-900">alta salinidad</strong>,{" "}
                  <strong className="text-gray-900">humedad tropical constante</strong> y{" "}
                  <strong className="text-gray-900">temperaturas elevadas</strong> crea condiciones donde la
                  corrosión avanza hasta 10 veces más rápido que en el interior del país.
                </p>
                <p>
                  Para las industrias establecidas en la Costa Caribe, desde los astilleros de Cartagena
                  hasta los puertos de Barranquilla y Santa Marta, una preparación de superficie profesional
                  y un sistema de recubrimiento de alta calidad no son opcionales: son la diferencia entre
                  una infraestructura que dura décadas y una que se deteriora en pocos años.
                </p>
                <p>
                  Por eso en CMP SAS diseñamos cada proyecto considerando las condiciones específicas del
                  Caribe colombiano, seleccionando los abrasivos, perfiles de anclaje y sistemas de
                  recubrimiento que mejor resisten este ambiente agresivo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Thermometer, label: "28-32°C", desc: "Temperatura promedio" },
                { icon: Droplets, label: "+80%", desc: "Humedad relativa" },
                { icon: Wind, label: "Alta", desc: "Salinidad del aire" },
                { icon: Sun, label: "12h/día", desc: "Exposición UV" },
              ].map((item) => (
                <div key={item.label} className="bg-[var(--color-brand-gray)] rounded-2xl p-6 text-center">
                  <item.icon size={32} className="text-[var(--color-brand-orange)] mx-auto mb-3" />
                  <div className="text-2xl font-extrabold text-gray-900 mb-1">{item.label}</div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Ciudades que Atendemos en la Costa Caribe
            </h2>
            <p className="text-lg text-gray-600">
              Desde Cartagena cubrimos toda la región Caribe colombiana con tiempos de respuesta
              ágiles y precios competitivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/sandblasting-cartagena"
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-[var(--color-brand-orange)]" />
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--color-brand-orange)] transition-colors">
                  Cartagena de Indias
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Sede principal de CMP SAS. Zona industrial de Mamonal, astilleros navales, diques secos,
                plantas petroquímicas, terminales portuarias y toda la infraestructura industrial de Cartagena y Bolívar.
              </p>
              <span className="text-[var(--color-brand-orange)] font-bold text-sm flex items-center gap-1">
                Sandblasting en Cartagena <ChevronRight size={16} />
              </span>
            </Link>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-[var(--color-brand-orange)]" />
                <h3 className="text-xl font-bold text-gray-900">Barranquilla</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Zona industrial de Barranquilla, puerto marítimo y fluvial sobre el Río Magdalena,
                plantas de manufactura, estructuras metálicas del sector comercial y proyectos
                de infraestructura en el Atlántico.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-[var(--color-brand-orange)]" />
                <h3 className="text-xl font-bold text-gray-900">Santa Marta</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Puerto de Santa Marta, infraestructura turística, terminales carboníferas,
                estructuras metálicas expuestas al ambiente marino del Magdalena y proyectos
                de energía en la zona.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-[var(--color-brand-orange)]" />
                <h3 className="text-xl font-bold text-gray-900">Sincelejo y Sucre</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Proyectos industriales, infraestructura civil, torres de comunicación
                y estructuras de acero en el departamento de Sucre.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-[var(--color-brand-orange)]" />
                <h3 className="text-xl font-bold text-gray-900">Montería y Córdoba</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Sector agroindustrial, infraestructura civil, puentes y estructuras
                metálicas en Córdoba y sus municipios.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-[var(--color-brand-orange)]" />
                <h3 className="text-xl font-bold text-gray-900">La Guajira</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Parques eólicos, infraestructura energética, terminales de carbón en
                Puerto Bolívar y proyectos de energías renovables en La Guajira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sectors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Sectores Clave en la Región Caribe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Anchor,
                title: "Naval y Portuario",
                description: "La Costa Caribe concentra los principales puertos de Colombia. Cartagena, Barranquilla y Santa Marta mueven millones de toneladas anuales. La infraestructura portuaria y naval requiere mantenimiento anticorrosivo constante por la exposición directa al agua de mar.",
              },
              {
                icon: Factory,
                title: "Petroquímico (Mamonal)",
                description: "La zona industrial de Mamonal en Cartagena alberga las principales plantas petroquímicas y refinerías de la Costa Caribe. Los tanques, tuberías y estructuras de este sector requieren sistemas de protección anticorrosiva de alto rendimiento.",
              },
              {
                icon: Wind,
                title: "Energías Renovables",
                description: "La Guajira se ha convertido en el epicentro de la energía eólica en Colombia. Las torres y estructuras de los parques eólicos necesitan protección anticorrosiva especializada contra la salinidad y los vientos del Caribe.",
              },
              {
                icon: Building2,
                title: "Infraestructura Civil",
                description: "Puentes, pasarelas, torres de comunicación, estadios y edificaciones con estructura metálica en la Costa Caribe colombiana necesitan protección reforzada contra la corrosión acelerada del ambiente marino.",
              },
            ].map((sector) => (
              <div key={sector.title} className="flex gap-6 items-start bg-[var(--color-brand-gray)] rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center flex-shrink-0">
                  <sector.icon size={28} className="text-[var(--color-brand-orange)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.title}</h3>
                  <p className="text-gray-600">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Ventajas de Trabajar con CMP SAS en la Costa Caribe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Presencia Local",
                description: "Con sede en Cartagena, estamos a pocas horas de cualquier punto de la Costa Caribe. Tiempos de respuesta rápidos y costos de movilización reducidos.",
              },
              {
                icon: Award,
                title: "Experiencia Regional",
                description: "9+ años trabajando específicamente en las condiciones de la Costa Caribe nos dan un conocimiento profundo de los desafíos de corrosión de la región.",
              },
              {
                icon: Shield,
                title: "Certificación Internacional",
                description: "Nuestros procesos NACE/SSPC garantizan que la protección anticorrosiva cumple con los estándares más exigentes, vitales en el ambiente marino del Caribe.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm text-center border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-[var(--color-brand-orange)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Preguntas Frecuentes sobre Sandblasting en la Costa Caribe
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿En qué ciudades de la Costa Caribe ofrecen sandblasting?",
                a: "Ofrecemos servicios en toda la Costa Caribe: Cartagena de Indias (sede principal), Barranquilla, Santa Marta, Sincelejo, Montería, Valledupar y Riohacha. Nuestra ubicación estratégica en Cartagena nos permite atender rápidamente cualquier proyecto en la región.",
              },
              {
                q: "¿Por qué la Costa Caribe necesita más protección anticorrosiva?",
                a: "La Costa Caribe presenta condiciones extremas: salinidad del aire marino, humedad superior al 80%, temperaturas de 28-32°C y exposición UV constante. Estos factores aceleran la corrosión hasta 10 veces más que en el interior, haciendo indispensable una preparación de superficie y recubrimiento de alta calidad certificada NACE/SSPC.",
              },
              {
                q: "¿Cuánto cuesta el sandblasting en la Costa Caribe?",
                a: "El costo varía según el área, grado de limpieza, tipo de abrasivo, condiciones de acceso y ubicación. Ofrecemos cotizaciones gratuitas y personalizadas. Contáctenos al +57 313 780 4820 para una evaluación sin compromiso.",
              },
              {
                q: "¿Qué tipo de proyectos realizan en la región Caribe?",
                a: "Atendemos proyectos navales (astilleros de Cartagena), petroquímicos (Mamonal), portuarios (puertos de Cartagena, Barranquilla, Santa Marta), offshore (plataformas en el Caribe), energéticos (parques eólicos de La Guajira) e infraestructura civil.",
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

      {/* Related Pages */}
      <section className="py-16 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            Sandblasting por Región
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/sandblasting-cartagena" className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Sandblasting en Cartagena</h3>
              <p className="text-sm text-gray-600">Servicio local certificado en Cartagena y Mamonal</p>
            </Link>
            <Link href="/sandblasting-colombia" className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Sandblasting en Colombia</h3>
              <p className="text-sm text-gray-600">Cobertura nacional para proyectos en todo el país</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <CTASection />
    </>
  );
}
