"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

export function ImageGallery({
  images,
  columns = 4,
}: {
  images: GalleryImage[];
  columns?: 3 | 4;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );
  const next = useCallback(
    () => setOpen((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [open, close, prev, next]);

  const gridCols = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-4";

  return (
    <>
      <div className={`grid grid-cols-2 ${gridCols} gap-4`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setOpen(i)}
            className="relative h-48 md:h-56 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={columns === 4 ? "(max-width: 768px) 50vw, 25vw" : "(max-width: 768px) 50vw, 33vw"}
              quality={75}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            aria-label="Anterior"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            aria-label="Siguiente"
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt={images[open].alt}
              fill
              sizes="90vw"
              quality={90}
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-6 text-white/80 text-sm text-center max-w-xl px-4">
            {images[open].alt}
          </p>
        </div>
      )}
    </>
  );
}
