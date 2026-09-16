import { whatsappLink } from "@/lib/site-config";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.2c-1.6 0-3.14-.43-4.48-1.24l-.32-.19-3.12.82.83-3.04-.21-.32a8.17 8.17 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.26-8.24 4.55 0 8.25 3.7 8.25 8.24 0 4.55-3.7 8.34-8.15 8.34Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-accent px-4 py-3 font-heading text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105 hover:bg-accent-dark md:bottom-8 md:right-8"
      aria-label="Escribinos por WhatsApp"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Escribinos por WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}

export function WhatsAppInlineButton({
  message,
  children,
  className,
}: {
  message?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
      }
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}
