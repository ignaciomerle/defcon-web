import type { Metadata } from "next";
import { WhatsAppInlineButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quién está detrás de Casa Tecnológica y por qué elegir un servicio de trato directo.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <header>
        <h1 className="font-heading text-3xl font-semibold text-primary">
          Nosotros
        </h1>
      </header>

      <div className="mt-6 flex flex-col gap-5 text-muted">
        <p>
          Casa Tecnológica es un servicio de asistencia técnica para el hogar
          en zona norte del GBA.
        </p>
        <p>
          La idea nació de una necesidad simple: en la mayoría de las casas
          hay algo tecnológico sin resolver — el WiFi que no cubre toda la
          casa, una cámara que no se ve bien, una PC lenta, dudas del celular
          que nadie tiene tiempo de resolver. Casa Tecnológica existe para
          resolver todos esos pendientes, con explicaciones claras y sin
          tecnicismos innecesarios.
        </p>
        <p>
          Ofrecemos trato directo, sin pasar por una mesa de ayuda ni por
          distintos técnicos en cada visita.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <WhatsAppInlineButton>Escribinos por WhatsApp</WhatsAppInlineButton>
      </div>
    </div>
  );
}
