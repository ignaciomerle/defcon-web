import Image from "next/image";
import logoMark from "../../public/logo-mark.png";

// Ícono de marca: imagen provista por el cliente (techo + señal de
// conectividad), coherente con el nombre Casa Tecnológica.
const LOGO_HEIGHT = 36;
const LOGO_WIDTH = Math.round(
  (logoMark.width / logoMark.height) * LOGO_HEIGHT
);

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={logoMark}
      alt=""
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      style={{ height: LOGO_HEIGHT, width: "auto" }}
      className={className}
      priority
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="shrink-0" />
      <span className="font-heading text-lg font-semibold leading-none text-primary">
        Casa Tecnológica
      </span>
    </span>
  );
}
