import type { Metadata } from "next";
import { WhatsAppInlineButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre DEFCON",
  description:
    "Quién está detrás de DEFCON - Servicios Digitales y por qué elegir un servicio de trato directo.",
};

export default function SobreDefconPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      <header>
        <h1 className="font-heading text-3xl font-semibold text-primary">
          Sobre DEFCON
        </h1>
      </header>

      <div className="mt-6 flex flex-col gap-5 text-muted">
        <p>
          DEFCON - Servicios Digitales es un servicio de asistencia técnica
          para el hogar en zona norte del GBA. Atiende una sola
          persona: eso significa que quien coordina el trabajo por WhatsApp
          es la misma que resuelve el problema en tu casa o de forma remota,
          sin derivaciones ni intermediarios.
        </p>
        <p>
          La idea nació de una necesidad simple: en la mayoría de las casas
          hay algo tecnológico sin resolver — una red que anda mal, una
          cámara que nunca se terminó de configurar, una PC lenta, dudas del
          celular que nadie tiene tiempo de explicar sin apurar. DEFCON existe
          para resolver todo eso en un solo lugar, con explicaciones claras y
          sin tecnicismos innecesarios.
        </p>
        <p>
          Ser una operación de una sola persona tiene una ventaja concreta:
          trato directo, sin pasar por una mesa de ayuda ni por distintos
          técnicos en cada visita. Vos hablás siempre con la misma persona,
          de principio a fin.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <WhatsAppInlineButton>Escribinos por WhatsApp</WhatsAppInlineButton>
      </div>
    </div>
  );
}
