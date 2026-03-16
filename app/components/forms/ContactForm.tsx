"use client";

import { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactForm, type ContactFormState } from "../../actions/send-contact";

type ContactFormProps = {
  variant?: "light" | "dark";
};

const initialState: ContactFormState = { success: false, error: null };

export function ContactForm({ variant = "light" }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState);

  const isLight = variant === "light";

  const inputClass = isLight
    ? "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-orange)] focus:ring-1 focus:ring-[var(--color-brand-orange)] transition-all"
    : "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand-orange)] focus:ring-1 focus:ring-[var(--color-brand-orange)] transition-all";

  const labelClass = isLight
    ? "block text-sm font-medium text-gray-700 mb-2"
    : "block text-sm font-medium text-gray-400 mb-2";

  if (state.success) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 text-center ${isLight ? "" : "text-white"}`}>
        <CheckCircle2 size={48} className="text-[#25D366] mb-4" />
        <h3 className={`text-xl font-bold mb-2 ${isLight ? "text-gray-900" : "text-white"}`}>
          Mensaje enviado
        </h3>
        <p className={isLight ? "text-gray-600" : "text-gray-400"}>
          Hemos recibido tu solicitud. Te responderemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <div className="flex items-center gap-2 bg-red-50 text-red-700 px-4 py-3 rounded-xl text-sm">
          <AlertCircle size={18} className="flex-shrink-0" />
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Nombre *</label>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Teléfono</label>
          <input
            type="tel"
            name="phone"
            className={inputClass}
            placeholder="+57 300 000 0000"
          />
        </div>
        <div>
          <label className={labelClass}>Empresa</label>
          <input
            type="text"
            name="company"
            className={inputClass}
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Servicio que necesitas</label>
        <select
          name="service"
          className={inputClass}
        >
          <option value="">Selecciona un servicio</option>
          <option value="Sandblasting">Sandblasting</option>
          <option value="Ecoblasting">Ecoblasting</option>
          <option value="Recubrimientos Industriales">Recubrimientos Industriales</option>
          <option value="Limpieza Técnica">Limpieza Técnica</option>
          <option value="Servicios Offshore">Servicios Offshore</option>
          <option value="Inspección y Calidad">Inspección y Calidad</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Mensaje *</label>
        <textarea
          name="message"
          rows={variant === "dark" ? 4 : 5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Describe tu proyecto: área a tratar, ubicación, tipo de superficie, plazos..."
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 w-full flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-lg shadow-[var(--color-brand-orange)]/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isPending ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Enviar Solicitud
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
