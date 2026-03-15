import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
  tags: string[];
}

export function ServiceCard({ title, href, icon: Icon, tags }: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer group h-full">
        <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-orange)] transition-colors">
          <Icon size={28} className="text-[var(--color-brand-orange)] group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
        <div className="flex flex-col gap-3">
          {tags.map((tag) => (
            <span key={tag} className="glass-tag-2 px-4 py-2 rounded-xl text-sm font-medium w-fit">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
