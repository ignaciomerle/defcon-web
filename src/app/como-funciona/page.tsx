import type { Metadata } from "next";
import { howItWorksSteps } from "@/lib/site-config";
import { WhatsAppInlineButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cómo funciona",
  description:
    "Cómo es el proceso para pedir un servicio a DEFCON: contacto por WhatsApp, coordinación presencial o remota, y resolución.",
};

export default function ComoFuncionaPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
      <header className="max-w-2xl">
        <h1 className="font-heading text-3xl font-semibold text-primary">
          Cómo funciona
        </h1>
        <p className="mt-3 text-muted">
          Nada de formularios largos ni esperas sin respuesta. El proceso es
          simple y siempre hablás con la misma persona, de punta a punta.
        </p>
      </header>

      <ol className="mt-12 flex flex-col gap-8">
        {howItWorksSteps.map((step, i) => (
          <li key={step.title} className="flex gap-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-base font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <h2 className="font-heading text-lg font-semibold text-primary">
                {step.title}
              </h2>
              <p className="mt-1 text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 rounded-2xl border border-border bg-surface p-8">
        <h2 className="font-heading text-lg font-semibold text-primary">
          Sobre los presupuestos
        </h2>
        <p className="mt-2 text-muted">
          No hay precios publicados en la web porque cada trabajo puede
          variar mucho en alcance: no es lo mismo instalar una cámara que
          cablear una casa entera. Por eso el presupuesto se arma después de
          entender qué necesitás, y siempre te lo confirmamos antes de
          empezar cualquier trabajo.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <WhatsAppInlineButton>Empezar por WhatsApp</WhatsAppInlineButton>
      </div>
    </div>
  );
}
