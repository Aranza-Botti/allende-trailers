import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { NeedCards } from "@/components/site/NeedCards";
import { Custom } from "@/components/site/Custom";
import { Benefits } from "@/components/site/Benefits";
import { Trust } from "@/components/site/Trust";
import { LeadForm } from "@/components/site/LeadForm";
import { FinalCta } from "@/components/site/FinalCta";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Remolques Allende — Venta, Renta y Fabricación a la Medida en N.L." },
      {
        name: "description",
        content:
          "Fabricación, venta y renta de remolques de alta resistencia en Allende, Nuevo León. Cotiza por WhatsApp: trabajo pesado, negocio o uso personal.",
      },
      { property: "og:title", content: "Remolques Allende — Alta Resistencia para Trabajo Pesado" },
      {
        property: "og:description",
        content:
          "Fabricamos, vendemos y rentamos remolques reforzados en Allende, N.L. Cotización rápida y trato directo.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <NeedCards />
        <Custom />
        <Benefits />
        <Trust />
        <LeadForm />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
