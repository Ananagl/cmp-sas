import type { Metadata } from "next";
import Link from "next/link";
import {
  Wind,
  Droplets,
  ShieldCheck,
  Factory,
  SearchCheck,
  Users,
  ChevronRight,
} from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";

export const metadata: Metadata = {
  title: "Servicios de Sandblasting y Recubrimientos en Colombia",
  description:
    "Servicios de sandblasting, ecoblasting, limpieza técnica, recubrimientos industriales, inspección y offshore en Colombia. Cartagena, Costa Caribe y todo el país.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de Sandblasting y Recubrimientos | CMP SAS",
    description:
      "Conoce todos nuestros servicios de protección anticorrosiva en Cartagena.",
    url: "/servicios",
  },
};

const servicios = [
  {
    title: "Sandblasting y Ecoblasting",
    href: "/servicios/sandblasting-ecoblasting",
    icon: Wind,
    description:
      "Preparación de superficies mediante chorreado abrasivo convencional, ecoblasting con bicarbonato de sodio e hidroblasting a ultra alta presión. Cumplimos normas SSPC/NACE.",
    tags: ["Sandblasting Convencional", "Ecoblasting (Soda Blasting)", "Hidroblasting"],
  },
  {
    title: "Limpieza Técnica",
    href: "/servicios/limpieza-tecnica",
    icon: Droplets,
    description:
      "Limpieza industrial especializada con tecnología de alta presión, vapor y agentes químicos para tanques, cajas de mar, tuberías y equipos de proceso.",
    tags: ["Lavado técnico a presión", "Lavado de cajas de mar", "Lavado de tanques"],
  },
  {
    title: "Protección y Recubrimientos",
    href: "/servicios/proteccion-recubrimientos",
    icon: ShieldCheck,
    description:
      "Aplicación profesional de sistemas de recubrimiento anticorrosivo, pisos epóxicos industriales, impermeabilización y recubrimientos marinos especializados.",
    tags: ["Pintura Industrial", "Pisos Epóxicos", "Recubrimientos Marinos"],
  },
  {
    title: "Servicios Offshore e Industriales",
    href: "/servicios/servicios-offshore-industriales",
    icon: Factory,
    description:
      "Mantenimiento anticorrosivo de plataformas petroleras, soluciones metalmecánicas, protección catódica y servicios especializados para el sector naval y energético.",
    tags: ["Mantenimiento de Plataformas", "Soluciones Metalmecánicas", "Protección Catódica"],
  },
  {
    title: "Inspección y Calidad",
    href: "/servicios/inspeccion-calidad",
    icon: SearchCheck,
    description:
      "Control de calidad con instrumentos calibrados: medición de espesores, pruebas de adherencia, verificación de perfil de anclaje y cumplimiento de estándares SSPC/NACE.",
    tags: ["Medición de Espesores", "Pruebas de Adherencia", "Verificación de Estándares"],
  },
  {
    title: "Servicios de Personal y Equipos",
    href: "/servicios/personal-equipos",
    icon: Users,
    description:
      "Suministro de personal calificado y alquiler de equipos especializados para proyectos de sandblasting, pintura industrial y mantenimiento de infraestructura.",
    tags: ["Suministro de Personal", "Alquiler de Equipos", "Alquiler de Andamios"],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="py-16 bg-[var(--color-brand-gray)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs items={[{ name: "Servicios" }]} />

          <div className="text-center mt-8 mb-16 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Nuestros Servicios de Sandblasting y Recubrimientos en Cartagena
            </h1>
            <p className="text-lg text-gray-600">
              En CMP SAS ofrecemos un portafolio completo de servicios para la protección anticorrosiva
              de tu infraestructura industrial, naval y offshore. Cada servicio se ejecuta bajo normas
              internacionales NACE y SSPC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((servicio) => (
              <Link key={servicio.href} href={servicio.href} className="block group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-brand-orange)] transition-colors">
                      <servicio.icon size={28} className="text-[var(--color-brand-orange)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors flex items-center gap-2">
                        {servicio.title}
                        <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h2>
                      <p className="text-gray-600 mb-4">{servicio.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {servicio.tags.map((tag) => (
                          <span key={tag} className="glass-tag-2 px-3 py-1 rounded-lg text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
