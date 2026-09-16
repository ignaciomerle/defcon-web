import type { Metadata } from "next";
import { serviceCategories } from "@/lib/site-config";
import { WhatsAppInlineButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Redes, cámaras de vigilancia, domótica, asistente digital, reparación de PC y más. Servicios de asistencia técnica para el hogar.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <header className="max-w-2xl">
        <h1 className="font-heading text-3xl font-semibold text-primary">
          Servicios
        </h1>
        <p className="mt-3 text-muted">
          Cada trabajo se cotiza a medida por WhatsApp, según lo que
          necesites. Estas son las áreas en las que podemos ayudarte.
        </p>
      </header>

      <div className="mt-12 flex flex-col gap-16">
        {serviceCategories.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            className="scroll-mt-24"
          >
            <h2 className="font-heading text-2xl font-semibold text-primary">
              {category.title}
            </h2>
            <p className="mt-2 max-w-2xl text-muted">{category.description}</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {category.services.map((service) => (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-24 rounded-2xl border border-border bg-white p-6"
                >
                  <h3 className="font-heading text-base font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-3 rounded-2xl bg-surface p-10 text-center">
        <h2 className="font-heading text-xl font-semibold text-primary">
          ¿No encontrás lo que necesitás en la lista?
        </h2>
        <p className="max-w-md text-muted">
          Contanos igual por WhatsApp: si no lo resolvemos nosotros, te
          orientamos sobre qué necesitás.
        </p>
        <WhatsAppInlineButton>Consultar por WhatsApp</WhatsAppInlineButton>
      </div>
    </div>
  );
}
