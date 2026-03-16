"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const servicios = [
  { name: "Sandblasting y Ecoblasting", href: "/servicios/sandblasting-ecoblasting" },
  { name: "Limpieza Técnica", href: "/servicios/limpieza-tecnica" },
  { name: "Protección y Recubrimientos", href: "/servicios/proteccion-recubrimientos" },
  { name: "Servicios Offshore e Industriales", href: "/servicios/servicios-offshore-industriales" },
  { name: "Inspección y Calidad", href: "/servicios/inspeccion-calidad" },
  { name: "Personal y Equipos", href: "/servicios/personal-equipos" },
];

const sandblastingPages = [
  { name: "Sandblasting en Cartagena", href: "/sandblasting-cartagena" },
  { name: "Sandblasting en Colombia", href: "/sandblasting-colombia" },
  { name: "Sandblasting Costa Caribe", href: "/sandblasting-costa-caribe" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [sandblastingOpen, setSandblastingOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logoletra.svg"
                alt="CMP SAS Corrosion y Proof Coating - Sandblasting y recubrimientos industriales en Colombia"
                width={200}
                height={45}
                priority
                className="h-11 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-[var(--color-brand-orange)] font-medium transition-colors flex items-center gap-1"
                onMouseEnter={() => setServiciosOpen(true)}
                onMouseLeave={() => setServiciosOpen(false)}
              >
                Servicios
                <ChevronDown size={16} />
              </button>
              <div
                className={`absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 py-2 w-72 transition-all duration-200 ${serviciosOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                onMouseEnter={() => setServiciosOpen(true)}
                onMouseLeave={() => setServiciosOpen(false)}
              >
                <Link
                  href="/servicios"
                  className="block px-4 py-2 text-sm font-bold text-[var(--color-brand-orange)] hover:bg-gray-50 transition-colors"
                >
                  Ver todos los servicios
                </Link>
                <div className="border-t border-gray-100 my-1" />
                {servicios.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-brand-orange)] transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button
                className="text-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange-hover)] font-bold transition-colors flex items-center gap-1"
                onMouseEnter={() => setSandblastingOpen(true)}
                onMouseLeave={() => setSandblastingOpen(false)}
              >
                Sandblasting
                <ChevronDown size={16} />
              </button>
              <div
                className={`absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 py-2 w-64 transition-all duration-200 ${sandblastingOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                onMouseEnter={() => setSandblastingOpen(true)}
                onMouseLeave={() => setSandblastingOpen(false)}
              >
                {sandblastingPages.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--color-brand-orange)] transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/sobre-nosotros" className="text-gray-700 hover:text-[var(--color-brand-orange)] font-medium transition-colors">
              Sobre nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-[var(--color-brand-orange)] font-medium transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-[var(--color-brand-orange)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link href="/servicios" className="block text-gray-700 hover:text-[var(--color-brand-orange)] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
              Servicios
            </Link>
            {servicios.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block text-gray-500 hover:text-[var(--color-brand-orange)] text-sm py-1 pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-[var(--color-brand-orange)] font-bold py-2">
                Sandblasting
              </span>
              {sandblastingPages.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block text-gray-500 hover:text-[var(--color-brand-orange)] text-sm py-1 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-3">
              <Link href="/sobre-nosotros" className="block text-gray-700 hover:text-[var(--color-brand-orange)] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Sobre nosotros
              </Link>
              <Link href="/contacto" className="block text-gray-700 hover:text-[var(--color-brand-orange)] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Contacto
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
