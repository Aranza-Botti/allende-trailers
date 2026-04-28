import { Briefcase, Truck, Home } from "lucide-react";

const blocks = [
  {
    icon: Truck,
    tag: "Para trabajo",
    title: "Carga pesada cada día",
    text: "Para constructores, transportistas y obreros que no pueden detenerse.",
  },
  {
    icon: Briefcase,
    tag: "Para negocio",
    title: "Una herramienta de venta",
    text: "Remolques adaptados para tu giro: food trucks, talleres móviles, ventas y logística.",
  },
  {
    icon: Home,
    tag: "Para uso personal",
    title: "Mudanzas y proyectos",
    text: "Soluciones prácticas para mover lo tuyo con seguridad y sin pagar de más.",
  },
];

export function Trust() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Remolques hechos para <span className="text-brand">trabajar</span>,
            <br className="hidden sm:block" /> no solo para verse bien.
          </h2>
          <p className="mt-5 text-muted-foreground">
            En Remolques Allende priorizamos resistencia, seguridad y funcionalidad. Te ayudamos a elegir o
            fabricar el remolque correcto según tu vehículo, tu carga y tu presupuesto.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.tag}
              className="reveal relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <b.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand">{b.tag}</p>
              <h3 className="mt-1 font-display text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
