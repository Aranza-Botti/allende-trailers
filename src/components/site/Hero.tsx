import heroImg from "@/assets/hero-trailer.jpg";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { whatsappWith } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-16">
        <div className="lg:col-span-7">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Allende, Nuevo León · Trato directo de fábrica
          </div>

          <h1 className="reveal mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Remolques de <span className="text-brand">Alta Resistencia</span> para Trabajo Pesado.
            <br className="hidden sm:block" /> Listos para Rodar.
          </h1>

          <p className="reveal mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fabricación, venta y renta de remolques desde Allende, N.L. para clientes que necesitan
            <span className="text-foreground"> fuerza, seguridad y soluciones reales de carga.</span>
          </p>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cotizar"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 text-base font-bold text-brand-foreground shadow-brand transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              Cotizar Venta
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#renta"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-foreground transition-all hover:bg-white/10"
            >
              Ver Catálogo de Renta
            </a>
          </div>

          <ul className="reveal mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground sm:grid-cols-4">
            {["Trato directo", "Remolques reforzados", "Cotización rápida", "Opciones a la medida"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="reveal mt-6 max-w-xl text-sm text-muted-foreground/80">
            <a
              href={whatsappWith("Hola, quiero orientación: necesito transportar ")}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              <Phone className="mr-1 inline h-4 w-4 text-brand" />
              Responde en WhatsApp qué necesitas transportar
            </a>{" "}
            y te orientamos con la mejor opción.
          </p>
        </div>

        <div className="reveal lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-brand/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
              <img
                src={heroImg}
                alt="Remolque industrial reforzado fabricado en Allende, Nuevo León"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand">Modelo destacado</p>
                    <p className="font-display text-lg font-bold">Plataforma reforzada doble eje</p>
                  </div>
                  <div className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold">
                    Hecho a la medida
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
