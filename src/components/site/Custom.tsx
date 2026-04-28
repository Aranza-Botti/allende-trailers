import fab from "@/assets/fabricacion.jpg";
import { Ruler, Wrench, Briefcase, Hammer, ArrowRight } from "lucide-react";

const items = [
  { icon: Ruler, label: "Medidas personalizadas" },
  { icon: Hammer, label: "Refuerzos según carga" },
  { icon: Briefcase, label: "Adaptaciones para negocio" },
  { icon: Wrench, label: "Uso comercial o personal" },
];

export function Custom() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-3xl bg-brand/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={fab}
              alt="Fabricación personalizada de remolque con soldadura industrial"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Fabricación a la medida</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            ¿Necesitas un remolque <span className="text-brand">especial</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cotizamos remolques personalizados según medidas, capacidad, tipo de carga y uso real.
            Cuéntanos qué necesitas transportar y diseñamos una solución práctica y resistente.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((it) => (
              <li
                key={it.label}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
              >
                <it.icon className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium">{it.label}</span>
              </li>
            ))}
          </ul>

          <a
            href="#cotizar"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-4 text-base font-bold text-brand-foreground shadow-brand transition-all hover:brightness-110"
          >
            Solicitar Diseño a la Medida
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
