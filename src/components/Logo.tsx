// Ícono simple de marca: casa + señal de conectividad, con formas
// redondeadas, coherente con el nombre Casa Tecnológica.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="12" fill="var(--color-primary)" />
      <path
        d="M20 9.5 9 18.2v12.3a1.5 1.5 0 0 0 1.5 1.5H16v-8.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1V32h5.5a1.5 1.5 0 0 0 1.5-1.5V18.2L20 9.5Z"
        fill="white"
      />
      <path
        d="M13.5 15.2a9 9 0 0 1 13 0"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.2 17.9a5.2 5.2 0 0 1 7.6 0"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20.6" r="1.4" fill="var(--color-accent)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="font-heading text-lg font-semibold leading-none text-primary">
        Casa Tecnológica
      </span>
    </span>
  );
}
