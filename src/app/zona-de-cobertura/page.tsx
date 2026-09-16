import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import { WhatsAppInlineButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Zona de cobertura",
  description:
    "DEFCON trabaja de forma presencial en zona norte del GBA, y de forma remota en cualquier lugar del mundo.",
};

export default function ZonaDeCoberturaPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
      <header className="max-w-2xl">
        <h1 className="font-heading text-3xl font-semibold text-primary">
          Zona de cobertura
        </h1>
        <p className="mt-3 text-muted">
          El tipo de servicio disponible depende de dónde estés.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-7">
          <h2 className="font-heading text-lg font-semibold text-primary">
            Presencial
          </h2>
          <p className="mt-2 text-muted">{site.coverage.presencial}</p>
          <p className="mt-3 text-sm text-muted">
            Para instalaciones, cableado, cámaras y todo lo que requiera estar
            físicamente en tu casa.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-7">
          <h2 className="font-heading text-lg font-semibold text-primary">
            Remoto
          </h2>
          <p className="mt-2 text-muted">{site.coverage.remoto}</p>
          <p className="mt-3 text-sm text-muted">
            Para instalación de apps, configuraciones, dudas puntuales y todo
            lo que se pueda resolver a distancia, compartiendo pantalla o por
            videollamada.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center gap-3 rounded-2xl bg-surface p-10 text-center">
        <h2 className="font-heading text-xl font-semibold text-primary">
          ¿No estás seguro de si tu caso aplica?
        </h2>
        <p className="max-w-md text-muted">
          Contanos qué problema necesitás resolver, para darte una solución a
          medida.
        </p>
        <WhatsAppInlineButton>Consultar por WhatsApp</WhatsAppInlineButton>
      </div>
    </div>
  );
}
