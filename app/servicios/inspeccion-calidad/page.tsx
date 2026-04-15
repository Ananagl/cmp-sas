import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CTASection } from "../../components/CTASection";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Inspección y Control de Calidad - Medición de Espesores",
  description:
    "Servicios de inspección y calidad: medición de espesores, pruebas de adherencia, verificación de estándares SSPC/NACE en Cartagena. CMP SAS.",
  alternates: { canonical: "/servicios/inspeccion-calidad" },
  openGraph: {
    title: "Inspección y Control de Calidad | CMP SAS Cartagena",
    description: "Servicios de inspección, medición de espesores y verificación de estándares SSPC/NACE.",
    url: "/servicios/inspeccion-calidad",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Inspección y Control de Calidad",
  description: "Servicios de inspección, medición de espesores, pruebas de adherencia y verificación de estándares SSPC/NACE en Cartagena.",
  provider: { "@id": "https://www.cmpcoating.com.co/#organization" },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
  serviceType: "Inspección y Calidad",
};

export default function InspeccionCalidadPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="relative py-20 bg-[var(--color-brand-dark)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/inspeccion-control-calidad-superficie.webp"
            alt="Inspección y control de calidad de recubrimientos en Cartagena - CMP SAS"
            fill
            priority
            sizes="100vw"
            quality={75}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ name: "Servicios", href: "/servicios" }, { name: "Inspección y Calidad" }]} />
          <div className="max-w-3xl mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Inspección y Control de Calidad en Cartagena
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              El control de calidad es el eslabón que garantiza que la preparación de superficie y la aplicación
              de recubrimientos se ejecuten correctamente. En CMP SAS utilizamos instrumentos calibrados y
              metodologías alineadas con normas SSPC, NACE y ASTM para verificar cada etapa del proceso.
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
            Aseguramiento de Calidad en Sandblasting y Recubrimientos
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Un sistema de recubrimiento anticorrosivo solo será tan bueno como su eslabón más débil. Por eso,
            cada etapa del proceso —desde la limpieza inicial hasta la aplicación de la última capa— debe ser
            verificada y documentada con instrumentos de precisión. Nuestro servicio de inspección garantiza
            que el trabajo de sandblasting y pintura cumpla con las especificaciones del proyecto y las normas
            internacionales aplicables.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Contamos con medidores de espesor digital, réplicas de perfil de anclaje (replica tape), medidores
            de punto de rocío, equipo de prueba de adherencia y todo el instrumental necesario para una
            inspección completa según SSPC, NACE y ASTM.
          </p>

          <div className="space-y-8">
            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medición de Espesores (DFT)</h3>
              <p className="text-gray-600 mb-4">
                Medición de espesor de película seca (Dry Film Thickness) con medidores magnéticos y de corrientes
                de Foucault calibrados según SSPC-PA 2. El control de espesor es crítico: un recubrimiento
                demasiado delgado no protegerá adecuadamente, y uno demasiado grueso puede presentar problemas
                de curado, agrietamiento o costos excesivos.
              </p>
              <ul className="grid md:grid-cols-2 gap-2">
                {["Medición según SSPC-PA 2", "Medidores calibrados (certificado NIST)", "Sustrato ferroso y no ferroso", "Registro estadístico de lecturas", "Reportes con histogramas y promedios", "Verificación de especificaciones del fabricante"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pruebas de Adherencia</h3>
              <p className="text-gray-600 mb-4">
                Verificación de la adherencia del recubrimiento al sustrato y entre capas mediante pruebas
                destructivas y no destructivas. La adherencia es el indicador más directo de la calidad
                de la preparación de superficie y la aplicación del recubrimiento.
              </p>
              <ul className="space-y-2">
                {["Prueba de corte en X (cross-cut) según ASTM D3359", "Prueba de pull-off (tracción) según ASTM D4541", "Verificación de adherencia entre capas", "Documentación fotográfica de resultados", "Comparación con valores mínimos especificados"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verificación de Perfil de Anclaje</h3>
              <p className="text-gray-600 mb-4">
                Medición del perfil de anclaje (rugosidad) generado por el sandblasting mediante réplicas de
                perfil (replica tape) según ASTM D4417 Método C. El perfil de anclaje debe estar dentro del
                rango especificado por el fabricante del recubrimiento para garantizar la adherencia mecánica.
              </p>
              <ul className="space-y-2">
                {["Replica tape según ASTM D4417 Método C", "Comparador de perfil según ASTM D4417 Método A", "Rugosímetro digital", "Verificación de rango según especificación", "Registro y documentación"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={16} className="text-[var(--color-brand-orange)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-brand-gray)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Control Ambiental</h3>
              <p className="text-gray-600 mb-4">
                Monitoreo de condiciones ambientales antes y durante la aplicación de recubrimientos. En el
                clima tropical y húmedo de Cartagena, el control del punto de rocío, la humedad relativa y
                la temperatura de superficie es fundamental para evitar fallas prematuras del recubrimiento.
              </p>
              <ul className="space-y-2">
                {["Temperatura ambiente y de superficie", "Humedad relativa", "Punto de rocío (Dew Point)", "Diferencial entre temperatura de superficie y punto de rocío (mínimo 3°C)", "Registro continuo durante la aplicación"].map((item) => (
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
              <p className="text-sm text-gray-600">Preparación de superficies que verificamos con nuestros instrumentos</p>
            </Link>
            <Link href="/servicios/proteccion-recubrimientos" className="block bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Protección y Recubrimientos</h3>
              <p className="text-sm text-gray-600">Aplicación de recubrimientos con control de calidad incluido</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
