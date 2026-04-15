"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  q: string;
  a: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div
          key={faq.q}
          className="bg-[var(--color-brand-gray)] rounded-2xl overflow-hidden border border-gray-100"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
            aria-expanded={openIndex === index}
          >
            <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
            <ChevronDown
              size={22}
              className={`text-[var(--color-brand-orange)] flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-gray-600 px-6 pb-6">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
