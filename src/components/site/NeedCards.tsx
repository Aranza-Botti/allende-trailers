import { ArrowRight, ShoppingCart, CalendarClock, Check } from "lucide-react";

function Card({
  id,
  icon,
  tag,
  title,
  text,
  benefits,
  cta,
  href,
}: {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  text: string;
  benefits: string[];
  cta: string;
  href: string;
}) {
  return (
    <div
      id={id}
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface p-7 transition-all hover:border-brand/40 hover:bg-surface-elevated sm:p-8"
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
            {icon}
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">{tag}</span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">{title}</h3>
        <p className="mt-3 text-muted-foreground">{text}</p>

        <ul className="mt-5 space-y-2.5">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 flex-none text-brand" />
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>

        <a
          href={href}
          className="mt-7 inline-flex items-center gap-2 self-start rounded-md bg-white/5 px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-white/15 transition-all hover:bg-brand hover:text-brand-foreground hover:ring-brand"
        >
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

export function NeedCards() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Soluciones</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            ¿Qué necesitas hoy?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Elige el camino correcto. Dos formas simples de empezar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card
            id="venta"
            icon={<ShoppingCart className="h-6 w-6" />}
            tag="Venta"
            title="Compra tu Remolque"
            text="Fabricamos remolques resistentes para trabajo, carga, negocio o uso personal."
            benefits={[
              "Hechos a la medida",
              "Acero reforzado",
              "Diseño según tipo de carga",
              "Opción de fabricación personalizada",
            ]}
            cta="Ver Modelos en Venta"
            href="#cotizar"
          />
          <Card
            id="renta"
            icon={<CalendarClock className="h-6 w-6" />}
            tag="Renta"
            title="Renta por Día o Mes"
            text="Solución rápida para transportar carga sin comprar un remolque."
            benefits={[
              "Disponibilidad según agenda",
              "Diferentes capacidades",
              "Ideal para mudanzas, trabajo y transporte temporal",
              "Atención directa por WhatsApp",
            ]}
            cta="Consultar Disponibilidad"
            href="#cotizar"
          />
        </div>
      </div>
    </section>
  );
}
