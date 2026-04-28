import { MessageCircle, Hammer } from "lucide-react";
import { whatsappWith, WHATSAPP_URL } from "@/lib/contact";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.14_0.04_250)] to-background" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="reveal font-display text-3xl font-extrabold leading-tight sm:text-5xl">
          ¿Listo para mover tu carga?
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-muted-foreground">
          La disponibilidad de renta puede variar por fecha. Escríbenos hoy para cotizar, apartar o
          fabricar tu remolque.
        </p>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-whatsapp)] px-7 py-4 text-base font-bold text-background transition-all hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" /> Enviar WhatsApp
          </a>
          <a
            href={whatsappWith("Hola, quiero cotizar fabricación a la medida")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-brand bg-brand/10 px-7 py-4 text-base font-bold text-brand transition-all hover:bg-brand hover:text-brand-foreground"
          >
            <Hammer className="h-5 w-5" /> Cotizar fabricación
          </a>
        </div>
      </div>
    </section>
  );
}
