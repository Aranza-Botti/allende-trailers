import { useState } from "react";
import { Menu, X, MessageCircle, Truck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  { href: "#venta", label: "Venta" },
  { href: "#renta", label: "Renta" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#cotizar", label: "Cotizar" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-brand-foreground shadow-brand">
            <Truck className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
            Remolques <span className="text-brand">Allende</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-md bg-[var(--color-whatsapp)]/15 px-3 py-2 text-sm font-semibold text-[var(--color-whatsapp)] ring-1 ring-[var(--color-whatsapp)]/30 transition hover:bg-[var(--color-whatsapp)]/25 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background md:hidden">
          <div className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-whatsapp)] px-4 py-3 text-base font-semibold text-background"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
