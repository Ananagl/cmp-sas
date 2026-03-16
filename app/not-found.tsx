import Link from "next/link";
import {
  Wind,
  Droplets,
  ShieldCheck,
  MapPin,
  Phone,
} from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 bg-[var(--color-brand-gray)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="text-8xl font-extrabold text-[var(--color-brand-orange)] mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Página no encontrada
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida. Te
            invitamos a explorar nuestros servicios de sandblasting y
            recubrimientos industriales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white px-8 py-4 rounded-xl font-bold text-center transition-colors"
            >
              Ir al Inicio
            </Link>
            <Link
              href="/servicios"
              className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-center transition-colors"
            >
              Ver Servicios
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Páginas populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/sandblasting-cartagena"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <Wind
                size={28}
                className="text-[var(--color-brand-orange)] mx-auto mb-3"
              />
              <h3 className="font-bold text-gray-900 mb-1">
                Sandblasting Cartagena
              </h3>
              <p className="text-sm text-gray-600">
                Servicio certificado NACE/SSPC
              </p>
            </Link>
            <Link
              href="/sandblasting-colombia"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <MapPin
                size={28}
                className="text-[var(--color-brand-orange)] mx-auto mb-3"
              />
              <h3 className="font-bold text-gray-900 mb-1">
                Sandblasting Colombia
              </h3>
              <p className="text-sm text-gray-600">
                Cobertura nacional
              </p>
            </Link>
            <Link
              href="/sandblasting-costa-caribe"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center"
            >
              <Droplets
                size={28}
                className="text-[var(--color-brand-orange)] mx-auto mb-3"
              />
              <h3 className="font-bold text-gray-900 mb-1">
                Sandblasting Costa Caribe
              </h3>
              <p className="text-sm text-gray-600">
                Región Caribe colombiana
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Link
              href="/servicios/proteccion-recubrimientos"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-4"
            >
              <ShieldCheck
                size={24}
                className="text-[var(--color-brand-orange)] flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-gray-900">
                  Protección y Recubrimientos
                </h3>
                <p className="text-sm text-gray-600">
                  Sistemas anticorrosivos industriales
                </p>
              </div>
            </Link>
            <Link
              href="/contacto"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-4"
            >
              <Phone
                size={24}
                className="text-[var(--color-brand-orange)] flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-gray-900">Contacto</h3>
                <p className="text-sm text-gray-600">
                  Cotización gratuita: +57 313 780 4820
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
