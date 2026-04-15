import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  Award,
  Wrench,
  Anchor,
  Factory,
  Building2,
  HardHat,
  CheckCircle2,
  MapPin,
  Globe,
  Zap,
} from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Sandblasting en Colombia - Certificado NACE/SSPC",
  description:
    "Servicio profesional de sandblasting en Colombia. Cobertura nacional desde Cartagena: Costa Caribe, Barranquilla, Santa Marta y todo el país. Certificación NACE/SSPC. Cotización gratuita.",
  alternates: { canonical: "/sandblasting-colombia" },
  openGraph: {
    title: "Sandblasting en Colombia - Servicio Profesional Certificado | CMP SAS",
    description:
      "Sandblasting profesional en Colombia con certificación NACE/SSPC. Cobertura nacional. +9 años de experiencia. +30,000 m² tratados.",
    url: "/sandblasting-colombia",
    images: [
      {
        url: "/images/hero-buque-houma-la-atardecer-astillero.webp",
        width: 1200,
        height: 630,
        alt: "Sandblasting profesional en Colombia - CMP SAS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandblasting en Colombia - CMP SAS",
    description:
      "Servicio profesional de sandblasting certificado NACE/SSPC en Colombia. Cotización gratuita.",
    images: ["/images/hero-buque-houma-la-atardecer-astillero.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cmpcoating.com.co/#organization",
  name: "CMP SAS Corrosion y Proof Coating",
  alternateName: "CMP SAS",
  url: "https://www.cmpcoating.com.co",
  image: "https://www.cmpcoating.com.co/images/hero-buque-houma-la-atardecer-astillero.webp",
  description: "Empresa líder en sandblasting y recubrimientos industriales en Colombia. Sede en Cartagena con cobertura nacional.",
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
    { "@type": "Country", name: "Colombia" },
    { "@type": "AdministrativeArea", name: "Costa Caribe Colombiana" },
    { "@type": "City", name: "Cartagena de Indias" },
    { "@type": "City", name: "Barranquilla" },
    { "@type": "City", name: "Santa Marta" },
    { "@type": "AdministrativeArea", name: "Bolívar" },
    { "@type": "AdministrativeArea", name: "Atlántico" },
    { "@type": "AdministrativeArea", name: "Magdalena" },
    { "@type": "AdministrativeArea", name: "Sucre" },
    { "@type": "AdministrativeArea", name: "Córdoba" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿CMP SAS ofrece servicios de sandblasting en todo Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Aunque nuestra sede está en Cartagena de Indias, ofrecemos servicios de sandblasting, recubrimientos industriales y protección anticorrosiva en todo Colombia. Contamos con equipos móviles y personal capacitado para desplazarnos a cualquier proyecto en el país, con especial cobertura en la Costa Caribe, Barranquilla, Santa Marta y las principales zonas industriales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son las principales ciudades de Colombia donde trabajan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestras principales áreas de operación incluyen: Cartagena de Indias (sede principal, zona industrial de Mamonal, sector naval), Barranquilla (zona industrial y portuaria), Santa Marta (infraestructura portuaria), y toda la Costa Caribe colombiana. También realizamos proyectos en el interior del país según requerimientos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué sectores industriales atienden en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos los principales sectores industriales de Colombia: naval y marítimo (astilleros, diques secos, embarcaciones), petroquímico (refinerías, tanques de almacenamiento, tuberías), infraestructura civil (puentes, torres, estructuras metálicas), offshore (plataformas petroleras), y energía (parques eólicos, subestaciones). Nuestro trabajo cumple con normas NACE/SSPC internacionales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo solicitar una cotización de sandblasting en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solicitar cotización es fácil y gratuito. Puede contactarnos por WhatsApp al +57 313 780 4820 o a través del formulario en nuestra página de contacto. Evaluamos su proyecto, definimos el alcance y le entregamos una propuesta personalizada con precios competitivos y cronograma definido.",
      },
    },
  ],
};

export default function SandblastingColombia() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex items-center bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-buque-houma-la-atardecer-astillero.webp"
            alt="Servicio de sandblasting profesional en Colombia - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: "Sandblasting en Colombia" }]} />

          <div className="max-w-4xl mt-8">
            <span className="inline-block glass-tag px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              Cobertura Nacional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sandblasting en Colombia: Servicio Profesional Certificado NACE/SSPC
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl">
              <strong className="text-white">CMP SAS</strong> es la empresa de sandblasting con mayor experiencia
              en Colombia. Desde nuestra base en Cartagena de Indias, ofrecemos preparación de superficies,
              recubrimientos industriales y protección anticorrosiva en todo el territorio nacional, con certificaciones
              internacionales NACE y SSPC que garantizan la calidad de nuestro trabajo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=573137804820&text=Hola%2C%20necesito%20sandblasting%20en%20Colombia"
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

      {/* Why CMP SAS is Leader */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              ¿Por qué CMP SAS es líder en sandblasting en Colombia?
            </h2>
            <p className="text-lg text-gray-600">
              Con más de 9 años de experiencia y más de 30,000 m² de superficies tratadas, somos la empresa
              de referencia en sandblasting y protección anticorrosiva en Colombia. Nuestro equipo certificado
              y nuestros equipos de última generación nos permiten atender proyectos de cualquier escala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "9+ Años de Experiencia",
                description: "Desde 2015 ejecutando proyectos de sandblasting en Cartagena, la Costa Caribe y toda Colombia.",
              },
              {
                icon: Shield,
                title: "Certificación NACE/SSPC",
                description: "Procesos alineados con normas internacionales. Garantía de calidad en cada metro cuadrado tratado.",
              },
              {
                icon: Globe,
                title: "Cobertura Nacional",
                description: "Equipos móviles y personal capacitado para desplazarnos a cualquier proyecto en Colombia.",
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
              <p className="text-xl font-semibold text-gray-800">proyectos ejecutados en Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage / Regions */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Cobertura de Sandblasting en Colombia
            </h2>
            <p className="text-lg text-gray-600">
              Nuestra sede principal está en Cartagena de Indias, lo que nos permite atender
              rápidamente toda la Costa Caribe y desplazarnos a proyectos en cualquier parte de Colombia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/sandblasting-cartagena"
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors">
                Cartagena de Indias
              </h3>
              <p className="text-gray-600 mb-4">
                Nuestra sede principal. Zona industrial de Mamonal, astilleros, diques secos del sector naval,
                plantas petroquímicas y toda la infraestructura industrial de Cartagena y Bolívar.
              </p>
              <span className="text-[var(--color-brand-orange)] font-bold text-sm flex items-center gap-1">
                Ver sandblasting en Cartagena <ChevronRight size={16} />
              </span>
            </Link>

            <Link
              href="/sandblasting-costa-caribe"
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-4">
                <Anchor size={24} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors">
                Costa Caribe
              </h3>
              <p className="text-gray-600 mb-4">
                Barranquilla, Santa Marta, Sincelejo, Montería, Valledupar. Atendemos proyectos industriales,
                portuarios y de infraestructura en toda la región Caribe colombiana.
              </p>
              <span className="text-[var(--color-brand-orange)] font-bold text-sm flex items-center gap-1">
                Ver sandblasting Costa Caribe <ChevronRight size={16} />
              </span>
            </Link>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-4">
                <Globe size={24} className="text-[var(--color-brand-orange)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Resto de Colombia
              </h3>
              <p className="text-gray-600 mb-4">
                Nos desplazamos a proyectos en Bogotá, Medellín, Bucaramanga, Cali y cualquier ciudad
                de Colombia que requiera servicios profesionales de sandblasting y recubrimientos certificados.
              </p>
              <span className="text-gray-500 text-sm">Consultar disponibilidad</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Sectores Industriales que Atendemos en Colombia
            </h2>
            <p className="text-lg text-gray-600">
              Nuestros servicios de sandblasting y protección anticorrosiva en Colombia atienden a los principales
              sectores productivos del país, desde el naval hasta el energético.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Anchor,
                title: "Naval y Marítimo",
                description: "Sandblasting de cascos, cubiertas y bodegas de embarcaciones en los principales puertos y astilleros de Colombia. Cumplimiento de clasificadoras internacionales.",
              },
              {
                icon: Factory,
                title: "Petroquímico y Refinería",
                description: "Preparación de superficies y recubrimiento de tanques, tuberías y estructuras en refinerías y plantas petroquímicas de Colombia, incluyendo la zona de Mamonal en Cartagena.",
              },
              {
                icon: Building2,
                title: "Infraestructura Civil",
                description: "Sandblasting de puentes, pasarelas, torres de comunicación y estructuras de acero en proyectos de ingeniería civil en todo el territorio colombiano.",
              },
              {
                icon: HardHat,
                title: "Offshore y Plataformas",
                description: "Mantenimiento anticorrosivo de plataformas petroleras, jack-ups y equipos offshore en el Caribe colombiano, con personal certificado y protocolos HSE.",
              },
              {
                icon: Zap,
                title: "Energía",
                description: "Protección anticorrosiva para torres eólicas en La Guajira, subestaciones eléctricas, estructuras de paneles solares y toda la infraestructura del sector energético en Colombia.",
              },
              {
                icon: Factory,
                title: "Industrial y Manufactura",
                description: "Preparación de superficies para plantas de producción, naves industriales, silos, tanques y equipos de procesamiento en las principales zonas industriales de Colombia.",
              },
            ].map((sector) => (
              <div key={sector.title} className="bg-[var(--color-brand-gray)] rounded-2xl p-8 border border-gray-100">
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

      {/* Services Overview */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Nuestros Servicios de Sandblasting en Colombia
            </h2>
            <p className="text-lg text-gray-600">
              Ofrecemos un portafolio completo de soluciones de preparación de superficies y protección
              anticorrosiva para proyectos en cualquier parte de Colombia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sandblasting y Ecoblasting</h3>
              <p className="text-gray-600 mb-4">
                Chorreado abrasivo convencional con granalla de acero y ecoblasting con bicarbonato de sodio.
                Alcanzamos grados de limpieza desde SSPC-SP6 hasta SSPC-SP5, adaptados a las condiciones
                ambientales de cada región de Colombia.
              </p>
              <Link href="/servicios/sandblasting-ecoblasting" className="text-[var(--color-brand-orange)] font-bold text-sm flex items-center gap-1">
                Ver detalle <ChevronRight size={16} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recubrimientos Industriales</h3>
              <p className="text-gray-600 mb-4">
                Aplicación de sistemas de pintura industrial: primers epóxicos, acabados de poliuretano,
                recubrimientos marinos y navales, impermeabilizaciones y pisos epóxicos para la industria colombiana.
              </p>
              <Link href="/servicios/proteccion-recubrimientos" className="text-[var(--color-brand-orange)] font-bold text-sm flex items-center gap-1">
                Ver detalle <ChevronRight size={16} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios Offshore</h3>
              <p className="text-gray-600 mb-4">
                Mantenimiento anticorrosivo de plataformas, embarcaciones y equipos offshore en aguas colombianas.
                Personal con formación HSE y experiencia en ambientes marinos exigentes.
              </p>
              <Link href="/servicios/servicios-offshore-industriales" className="text-[var(--color-brand-orange)] font-bold text-sm flex items-center gap-1">
                Ver detalle <ChevronRight size={16} />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inspección y Control de Calidad</h3>
              <p className="text-gray-600 mb-4">
                Medición de espesores de película, verificación de perfil de anclaje, pruebas de adherencia
                y control de condiciones ambientales con instrumentos calibrados según normas internacionales.
              </p>
              <Link href="/servicios/inspeccion-calidad" className="text-[var(--color-brand-orange)] font-bold text-sm flex items-center gap-1">
                Ver detalle <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Preguntas Frecuentes sobre Sandblasting en Colombia
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿CMP SAS ofrece servicios de sandblasting en todo Colombia?",
                a: "Sí. Aunque nuestra sede está en Cartagena de Indias, ofrecemos servicios de sandblasting y protección anticorrosiva en todo Colombia. Contamos con equipos móviles y personal capacitado para desplazarnos a cualquier proyecto en el país, con especial cobertura en la Costa Caribe, Barranquilla, Santa Marta y las principales zonas industriales.",
              },
              {
                q: "¿Cuáles son las principales ciudades de Colombia donde trabajan?",
                a: "Nuestras principales áreas de operación incluyen: Cartagena de Indias (sede principal, Mamonal, sector naval), Barranquilla (zona industrial y portuaria), Santa Marta (infraestructura portuaria), y toda la Costa Caribe colombiana. También realizamos proyectos en Bogotá, Medellín y otras ciudades según requerimientos.",
              },
              {
                q: "¿Qué sectores industriales atienden en Colombia?",
                a: "Atendemos los principales sectores: naval y marítimo (astilleros, embarcaciones), petroquímico (refinerías, tanques), infraestructura civil (puentes, torres), offshore (plataformas petroleras) y energía (parques eólicos, subestaciones). Todo nuestro trabajo cumple con normas NACE/SSPC.",
              },
              {
                q: "¿Cómo solicitar una cotización de sandblasting en Colombia?",
                a: "Puede contactarnos por WhatsApp al +57 313 780 4820 o a través de nuestro formulario de contacto. Evaluamos su proyecto, definimos el alcance y le entregamos una propuesta personalizada con precios competitivos y cronograma definido.",
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
              <p className="text-sm text-gray-600">Servicio local con respuesta inmediata en Cartagena y Mamonal</p>
            </Link>
            <Link href="/sandblasting-costa-caribe" className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Sandblasting en la Costa Caribe</h3>
              <p className="text-sm text-gray-600">Barranquilla, Santa Marta y toda la región Caribe</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <CTASection />
    </>
  );
}
