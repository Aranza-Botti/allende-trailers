import { ShieldCheck, HardHat, Headphones, Weight } from "lucide-react";

const items = [
  {
    icon: HardHat,
    title: "Materiales de grado industrial",
    text: "Acero reforzado y componentes seleccionados para rodar más, durar más.",
  },
  {
    icon: ShieldCheck,
    title: "Diseño seguro y funcional",
    text: "Estructura calculada para distribuir carga y rodar con estabilidad.",
  },
  {
    icon: Headphones,
    title: "Atención especializada",
    text: "Te asesoramos directo, sin intermediarios, para que elijas bien.",
  },
  {
    icon: Weight,
    title: "Capacidad según necesidad",
    text: "Adaptamos cada remolque al peso real y al uso del cliente.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Por qué elegirnos</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Construidos para resistir. Pensados para tu trabajo.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="reveal group rounded-2xl border border-white/10 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:bg-surface-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <it.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
