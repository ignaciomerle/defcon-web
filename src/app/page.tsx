import Link from "next/link";
import {
  howItWorksSteps,
  serviceCategories,
  site,
} from "@/lib/site-config";
import { WhatsAppInlineButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24">
          <div>
            <h1 className="font-heading text-3xl font-semibold leading-tight text-primary md:text-4xl">
              Tu contacto de confianza para necesidades tecnológicas
              cotidianas.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted md:text-lg">
              Redes, cámaras, domótica, soporte y reparación de PC y
              celulares, IA y desarrollo de aplicaciones. Presencial
              en {site.coverage.presencial} o a distancia, con trato directo
              y explicaciones claras.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppInlineButton>Escribinos por WhatsApp</WhatsAppInlineButton>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-primary/20 px-6 py-3 font-heading text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-primary p-8 text-white shadow-xl shadow-primary/20">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
              ¿Por qué Casa Tecnológica?
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/85">
              <li>Hablá con personas reales, con experiencia.</li>
              <li>Presupuesto a medida antes de empezar cualquier trabajo.</li>
              <li>Contacto directo por WhatsApp, sin formularios.</li>
              <li>Presencial en zona norte del GBA, o remoto desde cualquier lugar.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Categorías de servicios */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-primary md:text-3xl">
            Toda la asistencia tecnológica, en un solo lugar.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Conocé todos los servicios agrupados por áreas, pensados para
            resolver desde una consulta hasta un proyecto digital propio.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/servicios#${category.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-semibold text-primary">
                {category.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted">
                {category.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
                Ver servicios
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-semibold text-primary md:text-3xl">
              Cómo funciona
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Sin vueltas: le escribís a una persona, no a un sistema.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorksSteps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex justify-center">
            <WhatsAppInlineButton>Empezar por WhatsApp</WhatsAppInlineButton>
          </div>
        </div>
      </section>

      {/* Zona de cobertura resumida */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 rounded-2xl border border-border p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="font-heading text-xl font-semibold text-primary md:text-2xl">
              ¿Dónde trabajamos?
            </h2>
            <p className="mt-2 text-muted">
              Presencial en {site.coverage.presencial}. De forma remota
              resolvemos consultas en {site.coverage.remoto.toLowerCase()}.
            </p>
          </div>
          <Link
            href="/zona-de-cobertura"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 px-6 py-3 font-heading text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white md:justify-self-end"
          >
            Ver zona de cobertura
          </Link>
        </div>
      </section>
    </>
  );
}
