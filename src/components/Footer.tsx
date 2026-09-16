import Link from "next/link";
import { Logo } from "./Logo";
import { navLinks, site, whatsappLink } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-white/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Logo className="[&_span]:text-white [&_span:last-child]:text-white/60" />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
            Navegación
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/60">
            Contacto
          </h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-white/80">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                WhatsApp
              </a>
            </li>
            <li className="pt-1 text-white/60">
              Presencial: {site.coverage.presencial}
            </li>
            <li className="text-white/60">Remoto: {site.coverage.remoto}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50 md:px-8">
        © {year} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
