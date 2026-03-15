import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 bg-[var(--color-brand-gray)]">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="text-8xl font-extrabold text-[var(--color-brand-orange)] mb-6">404</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Lo sentimos, la página que buscas no existe o ha sido movida. Te invitamos a explorar nuestros
          servicios de sandblasting y recubrimientos industriales en Cartagena.
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
    </section>
  );
}
