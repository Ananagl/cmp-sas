"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  error: string | null;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "No proporcionado";
  const company = (formData.get("company") as string) || "No proporcionado";
  const service = (formData.get("service") as string) || "No especificado";
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Por favor completa los campos obligatorios." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Por favor ingresa un email válido." };
  }

  try {
    await resend.emails.send({
      from: "CMP SAS Web <onboarding@resend.dev>",
      to: ["ventasservicios@cmpcoating.com.co"],
      replyTo: email,
      subject: `Nueva cotización de ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #E96F1F; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nueva Solicitud de Cotización</h1>
          </div>
          <div style="background-color: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 130px;">Nombre:</td>
                <td style="padding: 8px 0; color: #4b5563;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #4b5563;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Teléfono:</td>
                <td style="padding: 8px 0; color: #4b5563;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Empresa:</td>
                <td style="padding: 8px 0; color: #4b5563;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Servicio:</td>
                <td style="padding: 8px 0; color: #4b5563;">${service}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Mensaje:</p>
            <p style="color: #4b5563; white-space: pre-wrap; background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">${message}</p>
          </div>
        </div>
      `,
    });

    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error: "Error al enviar el mensaje. Por favor intenta por WhatsApp o teléfono.",
    };
  }
}
