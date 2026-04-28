import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "¿Puedo rentar por día?", a: "Sí, manejamos renta por día, semana o mes según disponibilidad. Escríbenos las fechas y te confirmamos al instante por WhatsApp." },
  { q: "¿También venden remolques?", a: "Sí. Vendemos modelos disponibles y también fabricamos según el uso, capacidad y vehículo del cliente." },
  { q: "¿Fabrican a la medida?", a: "Sí. Diseñamos y construimos remolques personalizados: medidas, refuerzos, adaptaciones para negocio y más." },
  { q: "¿Qué datos necesito para cotizar?", a: "Tipo de carga, peso aproximado, vehículo que jalará y uso (trabajo, negocio o personal). Con eso te orientamos rápido." },
  { q: "¿Dónde están ubicados?", a: "Estamos en Allende, Nuevo León. Atendemos a clientes locales y de toda la región." },
  { q: "¿Pueden hacer remolques para negocio?", a: "Sí. Fabricamos remolques para food trucks, talleres móviles, transporte de mercancía, ventas itinerantes y más." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Preguntas frecuentes</h2>
        </div>

        <div className="reveal mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-white/10 bg-surface transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-display text-base font-bold sm:text-lg">{f.q}</span>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-white/15 bg-white/5 text-brand">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
