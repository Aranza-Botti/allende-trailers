import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)] px-4 py-3 text-sm font-semibold text-background shadow-[0_10px_30px_-5px_oklch(0.72_0.17_150/0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_15px_40px_-5px_oklch(0.72_0.17_150/0.8)] sm:px-5 sm:py-3.5"
    >
      <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[var(--color-whatsapp)]/40 opacity-60" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chatea con nosotros</span>
    </a>
  );
}
