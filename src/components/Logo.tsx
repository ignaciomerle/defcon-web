import Image from "next/image";
import logoMark from "../../public/logo-mark.png";

// Ícono de marca: imagen provista por el cliente (techo + señal de
// conectividad), coherente con el nombre Casa Tecnológica.
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={logoMark}
      alt=""
      className={`h-auto w-auto object-contain ${className ?? ""}`}
      priority
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="h-9 shrink-0" />
      <span className="font-heading text-lg font-semibold leading-none text-primary">
        Casa Tecnológica
      </span>
    </span>
  );
}
