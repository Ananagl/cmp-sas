import Image from "next/image";
import Link from "next/link";

const servicios = [
  { name: "Sandblasting y Ecoblasting", href: "/servicios/sandblasting-ecoblasting" },
  { name: "Limpieza Técnica", href: "/servicios/limpieza-tecnica" },
  { name: "Protección y Recubrimientos", href: "/servicios/proteccion-recubrimientos" },
  { name: "Servicios Offshore e Industriales", href: "/servicios/servicios-offshore-industriales" },
  { name: "Inspección y Calidad", href: "/servicios/inspeccion-calidad" },
  { name: "Personal y Equipos", href: "/servicios/personal-equipos" },
];

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Image
              src="/logoletra.svg"
              alt="CMP SAS Corrosion y Proof Coating - Sandblasting y recubrimientos industriales en Colombia"
              width={180}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm mb-4">
              Empresa especializada en sandblasting, recubrimientos industriales y protección anticorrosiva en Colombia. Certificaciones NACE/SSPC.
            </p>
            <p className="text-sm">&copy; {new Date().getFullYear()} CMP SAS</p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {servicios.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm hover:text-[var(--color-brand-orange)] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Sandblasting</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sandblasting-cartagena" className="text-sm text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-hover)] font-medium transition-colors">
                  Sandblasting en Cartagena
                </Link>
              </li>
              <li>
                <Link href="/sandblasting-colombia" className="text-sm hover:text-[var(--color-brand-orange)] transition-colors">
                  Sandblasting en Colombia
                </Link>
              </li>
              <li>
                <Link href="/sandblasting-costa-caribe" className="text-sm hover:text-[var(--color-brand-orange)] transition-colors">
                  Sandblasting Costa Caribe
                </Link>
              </li>
            </ul>
            <h4 className="text-white font-bold mb-4 mt-6">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-sm hover:text-[var(--color-brand-orange)] transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:text-[var(--color-brand-orange)] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+573137804820" className="hover:text-[var(--color-brand-orange)] transition-colors">
                  Tel: +57 313 780 4820
                </a>
              </li>
              <li>
                <a href="mailto:ventasservicio@cmpcoating.com.co" className="hover:text-[var(--color-brand-orange)] transition-colors">
                  ventasservicio@cmpcoating.com.co
                </a>
              </li>
              <li className="pt-2">Cartagena de Indias, Colombia</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://api.whatsapp.com/send?phone=573137804820"
                className="inline-block bg-[#25D366] hover:bg-[#20BE5C] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-600">
          <p>Diseño web by: Luigy devs | Rediseñado con Next.js</p>
        </div>
      </div>
    </footer>
  );
}
