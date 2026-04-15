import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Wind,
  Droplets,
  ShieldCheck,
  Factory,
  SearchCheck,
  Users,
} from "lucide-react";
import { ServiceCard } from "./components/ServiceCard";
import { CTASection } from "./components/CTASection";
import { JsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  title: "Sandblasting y Recubrimientos Industriales en Colombia",
  description:
    "CMP SAS: empresa líder en sandblasting, ecoblasting y recubrimientos industriales en Colombia. Cobertura nacional. NACE/SSPC. +30,000 m² tratados.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "CMP SAS - Sandblasting y Recubrimientos Industriales en Colombia",
    description:
      "Empresa líder en sandblasting, ecoblasting y recubrimientos industriales en Colombia. Certificaciones NACE/SSPC. +30,000 m² tratados.",
    url: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cmpcoating.com.co/#organization",
  name: "CMP SAS Corrosion y Proof Coating",
  alternateName: "CMP SAS",
  url: "https://www.cmpcoating.com.co",
  image:
    "https://www.cmpcoating.com.co/images/hero-sandblasting-nocturno-buque-cartagena.webp",
  description:
    "Empresa especializada en sandblasting, recubrimientos industriales y protección anticorrosiva en Colombia. Cobertura en la Costa Caribe y todo el país.",
  telephone: "+573137804820",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cartagena de Indias",
    addressRegion: "Bolívar",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.391,
    longitude: -75.5144,
  },
  foundingDate: "2015",
  areaServed: [
    { "@type": "City", name: "Cartagena de Indias" },
    { "@type": "AdministrativeArea", name: "Costa Caribe Colombiana" },
    { "@type": "City", name: "Barranquilla" },
    { "@type": "City", name: "Santa Marta" },
    { "@type": "Country", name: "Colombia" },
  ],
  knowsAbout: [
    "Sandblasting",
    "Sandblasting Colombia",
    "Sandblasting Costa Caribe",
    "Recubrimientos industriales",
    "Protección anticorrosiva",
    "NACE",
    "SSPC",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios CMP SAS",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sandblasting y Ecoblasting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Limpieza Técnica" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Protección y Recubrimientos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Servicios Offshore e Industriales",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Inspección y Calidad" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alquiler de Equipos y Personal",
        },
      },
    ],
  },
};

const services = [
  {
    title: "Sandblasting y Ecoblasting",
    href: "/servicios/sandblasting-ecoblasting",
    icon: Wind,
    tags: ["Sandblasting", "Chorreado abrasivo", "Ecoblasting"],
  },
  {
    title: "Limpieza Técnica",
    href: "/servicios/limpieza-tecnica",
    icon: Droplets,
    tags: [
      "Lavado técnico a presión",
      "Lavado de cajas de mar",
      "Lavado de tanques",
    ],
  },
  {
    title: "Protección y Recubrimientos",
    href: "/servicios/proteccion-recubrimientos",
    icon: ShieldCheck,
    tags: [
      "Impermeabilización",
      "Pisos epóxicos industriales",
      "Recubrimientos marinos y navales",
    ],
  },
  {
    title: "Servicios Offshore e Industriales",
    href: "/servicios/servicios-offshore-industriales",
    icon: Factory,
    tags: ["Soluciones metalmecánicas", "Servicios offshore"],
  },
  {
    title: "Inspección y Calidad",
    href: "/servicios/inspeccion-calidad",
    icon: SearchCheck,
    tags: [
      "Medición de estándares de calidad",
      "Inspecciones de calidad",
    ],
  },
  {
    title: "Servicios de Personal y Equipos",
    href: "/servicios/personal-equipos",
    icon: Users,
    tags: [
      "Suministro de personal",
      "Alquiler de equipos y herramientas",
      "Alquiler de andamios",
    ],
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <Image
            src="/images/hero-sandblasting-nocturno-buque-cartagena.webp"
            alt="Sandblasting industrial nocturno en buque - CMP SAS Cartagena preparación de superficies certificada NACE"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full md:w-4/5">
          <div className="max-w-3xl">
            <span className="inline-block glass-tag px-4 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              CMP SAS Corrosion y Proof Coating
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Sandblasting y Recubrimientos Industriales en Colombia
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
              Protegemos tu infraestructura con soluciones avanzadas de{" "}
              <strong>sandblasting</strong>, preparación de superficies y recubrimientos anticorrosivos
              en toda <strong>Colombia</strong>. Costa Caribe y cobertura nacional.
              Certificaciones NACE/SSPC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white px-8 py-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center"
              >
                Cotización Gratuita
                <ChevronRight size={20} className="ml-2" />
              </a>
              <Link
                href="/sandblasting-colombia"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-center transition-all duration-300"
              >
                Sandblasting en Colombia
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-extrabold text-[var(--color-brand-orange)]">9+</span>
                <span className="text-sm text-gray-300 leading-tight">Años de<br />experiencia</span>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-extrabold text-[var(--color-brand-orange)]">100%</span>
                <span className="text-sm text-gray-300 leading-tight">Orientados a la<br />seguridad y calidad</span>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-extrabold text-[var(--color-brand-orange)]">NACE</span>
                <span className="text-sm text-gray-300 leading-tight">Certificaciones<br />NACE/SSPC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-6">
              Conoce nuestros servicios
            </h2>
            <p className="text-lg text-gray-600">
              Ofrecemos soluciones integrales de sandblasting, recubrimientos y protección anticorrosiva
              en toda Colombia, con la calidad y eficiencia que tu proyecto requiere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--color-brand-orange)] text-center mb-12">
            Empresas que confían en nosotros
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 mb-20 max-w-5xl mx-auto">
            {[
              { src: "/images/clientes/ferroalquimar.png", alt: "Ferroalquimar S.A.S - Astillero Naval Grúas" },
              { src: "/images/clientes/intercol.png", alt: "Intercol" },
              { src: "/images/clientes/astivik.svg", alt: "Astivik Shipyard", invert: true },
              { src: "/images/clientes/seatech.png", alt: "Seatech International Inc." },
              { src: "/images/clientes/cotecmar.png", alt: "Cotecmar" },
              { src: "/images/clientes/saam-towage.png", alt: "SAAM Towage" },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                className={`object-contain h-12 md:h-14 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300${logo.invert ? " invert" : ""}`}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 text-center flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-extrabold text-[var(--color-brand-orange)] mb-4">
                +30.000 m²
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                en pintura y sandblasting.
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 text-center flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform">
              <div className="text-5xl font-extrabold text-[var(--color-brand-orange)] mb-4">
                +40
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Proyectos ejecutados con éxito.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-24 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/equipo-cuadrilla-trabajo-campo.webp"
                  alt="Equipo profesional de CMP SAS en Cartagena - especialistas en sandblasting y recubrimientos"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[var(--color-brand-orange)] text-white p-8 rounded-2xl shadow-xl w-64 hidden sm:block">
                <h3 className="text-xl font-bold mb-2">Fundados en 2015</h3>
                <p className="text-sm opacity-90">
                  Cartagena de Indias, Colombia
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <Link href="/sobre-nosotros" className="text-[var(--color-brand-orange)] font-bold tracking-wider uppercase text-sm mb-4 block hover:text-[var(--color-brand-orange-hover)] transition-colors">
                ¿Quienes Somos?
              </Link>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                Especialistas en la ejecución de mantenimientos e ingenierías
              </h2>

              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  <strong className="text-gray-900 font-bold">CMP SAS</strong>{" "}
                  es una empresa integral radicada en Cartagena de Indias,
                  dedicada a la ejecución de MANTENIMIENTOS E INGENIERÍAS, que
                  desarrolla sus actividades desde el año 2015. Hemos diseñado y
                  configurado este Portafolio de Servicios Integrados para
                  brindarles soluciones a todas sus necesidades.
                </p>
                <p>
                  Trabajamos y construimos con responsabilidad y honestidad.
                  Contamos con un equipo capacitado que busca en todo momento
                  mejorar sus presentaciones, con la intención de día a día
                  brindar un mejor servicio.
                </p>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-[var(--color-brand-orange)] shadow-sm mt-8">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Nuestra Filosofía
                  </h3>
                  <p className="italic text-gray-700">
                    El propósito de CMP SAS es &ldquo;hacer las cosas
                    bien&rdquo;, logrando la permanente satisfacción de sus
                    clientes. Esto implica el estricto cumplimiento de los
                    contratos, especificaciones técnicas y costos de cada uno de
                    los proyectos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[var(--color-brand-orange)] font-bold tracking-wider uppercase text-sm mb-4 block">
              Infraestructura
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Nuestro equipo y Herramientas
            </h2>
            <p className="text-lg text-gray-600">
              Contamos con tecnología avanzada y herramientas de última
              generación para garantizar la máxima calidad y precisión en cada
              uno de nuestros proyectos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Medidor de Espesor Digital",
                description:
                  "Este equipo nos permite medir con precisión el espesor de recubrimientos aplicados, asegurando la protección óptima en superficies metálicas.",
                image: "/images/inspeccion-calidad-medicion-espesores.webp",
                alt: "Medidor de espesor digital para recubrimientos industriales - CMP SAS Cartagena",
              },
              {
                title: "Compresor de Aire Atlas Copco",
                description:
                  "Potencia y rendimiento superior para operaciones exigentes de sandblasting y aplicación de recubrimientos especializados.",
                image: "/images/instalaciones-maquinaria-compresores.webp",
                alt: "Compresor Atlas Copco para sandblasting industrial - CMP SAS Cartagena",
              },
              {
                title: "Medidor Ambiental de Punto de Rocío",
                description:
                  "Este instrumento nos ayuda a evaluar la humedad y la temperatura, asegurando que las condiciones sean ideales para el recubrimiento.",
                image: "/images/inspeccion-verificacion-recubrimiento.webp",
                alt: "Medidor ambiental de punto de rocío para control de calidad - CMP SAS",
              },
            ].map((tool) => (
              <div
                key={tool.title}
                className="bg-[var(--color-brand-gray)] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
              >
                <div className="h-48 w-full relative overflow-hidden">
                  <Image
                    src={tool.image}
                    alt={tool.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-[var(--color-brand-orange)]/10 rounded-2xl">
            <p className="text-lg font-medium text-gray-800">
              Invertimos en equipos de vanguardia para ofrecer resultados
              superiores en cada proyecto, asegurando durabilidad, eficiencia y
              cumplimiento de estándares internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Geo Coverage Section */}
      <section className="py-20 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Sandblasting en toda Colombia
            </h2>
            <p className="text-lg text-gray-600">
              Ofrecemos servicios de sandblasting y recubrimientos industriales
              en la Costa Caribe y todo el territorio colombiano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/sandblasting-cartagena"
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center group"
            >
              <div className="text-4xl font-extrabold text-[var(--color-brand-orange)] mb-3 group-hover:scale-110 transition-transform">
                Cartagena
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sandblasting en Cartagena</h3>
              <p className="text-gray-600 text-sm">
                Sector naval, Mamonal, zona industrial. Servicio certificado NACE/SSPC con respuesta inmediata.
              </p>
            </Link>
            <Link
              href="/sandblasting-costa-caribe"
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center group"
            >
              <div className="text-4xl font-extrabold text-[var(--color-brand-orange)] mb-3 group-hover:scale-110 transition-transform">
                Costa Caribe
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sandblasting Costa Caribe</h3>
              <p className="text-gray-600 text-sm">
                Barranquilla, Santa Marta, Sincelejo y toda la región Caribe colombiana.
              </p>
            </Link>
            <Link
              href="/sandblasting-colombia"
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 text-center group"
            >
              <div className="text-4xl font-extrabold text-[var(--color-brand-orange)] mb-3 group-hover:scale-110 transition-transform">
                Colombia
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sandblasting en Colombia</h3>
              <p className="text-gray-600 text-sm">
                Cobertura nacional para proyectos industriales, offshore y de infraestructura.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <CTASection />
    </>
  );
}
