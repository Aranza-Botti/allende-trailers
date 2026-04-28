import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { whatsappWith } from "@/lib/contact";

type FormState = {
  nombre: string;
  telefono: string;
  tipo: "Renta" | "Venta" | "Fabricación a medida" | "";
  capacidad: string;
  mensaje: string;
};

const initial: FormState = {
  nombre: "",
  telefono: "",
  tipo: "",
  capacidad: "",
  mensaje: "",
};

export function LeadForm() {
  const [data, setData] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setData((d) => ({ ...d, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!data.nombre.trim() || data.nombre.trim().length < 2) return setError("Ingresa tu nombre.");
    if (!/^[0-9+\s\-()]{8,20}$/.test(data.telefono)) return setError("Teléfono inválido.");
    if (!data.tipo) return setError("Selecciona qué buscas.");

    setLoading(true);
    try {
      // TODO: Conectar a Webhook/Zapier reemplazando este bloque.
      console.log("[LeadForm] Submit:", data);
      await new Promise((r) => setTimeout(r, 700));
      setDone(true);

      // Abre WhatsApp con un resumen para no perder el lead.
      const msg = `Hola, soy ${data.nombre}. Busco ${data.tipo}.${
        data.capacidad ? ` Capacidad/Tipo: ${data.capacidad}.` : ""
      }${data.mensaje ? ` Mensaje: ${data.mensaje}` : ""}`;
      window.open(whatsappWith(msg), "_blank");
    } catch (err) {
      setError("Ocurrió un error. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="cotizar" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-2xl border border-brand/40 bg-surface p-6 shadow-brand sm:p-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Cotización</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                Solicita tu cotización
              </h2>
              <p className="mt-3 text-muted-foreground">
                Déjanos tus datos y te contactamos para recomendarte la mejor opción.
              </p>
            </div>

            {done ? (
              <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-brand" />
                <h3 className="mt-4 font-display text-xl font-bold">¡Solicitud enviada!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Te contactaremos muy pronto. También abrimos WhatsApp por si quieres adelantar la conversación.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Nombre" required>
                  <input
                    type="text"
                    value={data.nombre}
                    onChange={(e) => update("nombre", e.target.value)}
                    maxLength={80}
                    className="form-input"
                    placeholder="Tu nombre"
                  />
                </Field>
                <Field label="Teléfono / WhatsApp" required>
                  <input
                    type="tel"
                    value={data.telefono}
                    onChange={(e) => update("telefono", e.target.value)}
                    maxLength={20}
                    className="form-input"
                    placeholder="811 234 5678"
                  />
                </Field>
                <Field label="¿Qué buscas?" required>
                  <select
                    value={data.tipo}
                    onChange={(e) => update("tipo", e.target.value as FormState["tipo"])}
                    className="form-input"
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Renta</option>
                    <option>Venta</option>
                    <option>Fabricación a medida</option>
                  </select>
                </Field>
                <Field label="Capacidad o tipo de remolque">
                  <input
                    type="text"
                    value={data.capacidad}
                    onChange={(e) => update("capacidad", e.target.value)}
                    maxLength={120}
                    className="form-input"
                    placeholder="Ej. 2 toneladas, plataforma 4x8"
                  />
                </Field>
                <Field label="Mensaje" className="sm:col-span-2">
                  <textarea
                    value={data.mensaje}
                    onChange={(e) => update("mensaje", e.target.value)}
                    maxLength={600}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Cuéntanos qué necesitas transportar"
                  />
                </Field>

                {error && (
                  <p className="sm:col-span-2 text-sm text-[oklch(0.75_0.18_30)]">{error}</p>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 text-base font-bold text-brand-foreground shadow-brand transition-all hover:brightness-110 disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Solicitar Cotización Ahora
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Sin compromiso. Te orientamos según tu necesidad real.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: oklch(1 0 0 / 0.04);
          border: 1px solid oklch(1 0 0 / 0.1);
          color: var(--color-foreground);
          border-radius: 10px;
          padding: 14px 14px;
          font-size: 15px;
          outline: none;
          transition: all 0.15s ease;
        }
        .form-input::placeholder { color: oklch(0.65 0.015 250); }
        .form-input:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px oklch(0.7 0.2 45 / 0.2);
          background: oklch(1 0 0 / 0.06);
        }
        select.form-input { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23ffffff99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 40px; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-2 block text-sm font-medium text-foreground/90">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}
