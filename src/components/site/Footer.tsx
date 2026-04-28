import { Truck, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { EMAIL, LOCATION, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-[oklch(0.16_0.035_250)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-brand-foreground">
                <Truck className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-extrabold">
                Remolques <span className="text-brand">Allende</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Fabricación, venta y renta de remolques de alta resistencia. Trato directo, soluciones reales
              de carga.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                aria-label="Facebook"
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-foreground/80 transition hover:border-brand hover:text-brand"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-foreground/80 transition hover:border-brand hover:text-brand"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" /> {LOCATION}
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-start gap-2.5 hover:text-foreground">
                  <Phone className="mt-0.5 h-4 w-4 text-brand" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-2.5 hover:text-foreground">
                  <Mail className="mt-0.5 h-4 w-4 text-brand" /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand">Enlaces</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#venta" className="hover:text-foreground">Venta</a></li>
              <li><a href="#renta" className="hover:text-foreground">Renta</a></li>
              <li><a href="#cotizar" className="hover:text-foreground">Cotizar</a></li>
              <li><a href="#" className="hover:text-foreground">Aviso de privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Remolques Allende. Todos los derechos reservados.</p>
          <p>Allende, Nuevo León · México</p>
        </div>
      </div>
    </footer>
  );
}
