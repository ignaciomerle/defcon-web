// Configuración central del sitio. Editar acá los datos de contacto,
// el texto de cobertura y el catálogo de servicios: todas las páginas
// y componentes leen de este archivo.

export const site = {
  name: "DEFCON - Servicios Digitales",
  shortName: "DEFCON",
  domain: "www.defcon.com.ar",
  description:
    "Asistencia técnica de confianza para tu casa: redes, cámaras, domótica, soporte y reparación de PC. Presencial en CABA y zona norte del GBA, o remoto.",
  // TODO: reemplazar por el número real en formato internacional sin espacios
  // ni signos, por ejemplo "5491122334455" (54 + código de área sin 0 + número sin 15).
  whatsappNumber: "5491100000000",
  whatsappDefaultMessage:
    "Hola! Vi la web de DEFCON y quería consultar por un servicio.",
  // TODO: reemplazar por el mail de contacto real si difiere del de WhatsApp.
  contactEmail: "contacto@defcon.com.ar",
  coverage: {
    presencial: "CABA y zona norte del GBA",
    remoto: "Todo el país, sin restricción geográfica",
  },
} as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappDefaultMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  services: Service[];
};

export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "redes-y-seguridad",
    title: "Redes y seguridad",
    description:
      "Que la conexión y la vigilancia de tu casa funcionen bien, sin que tengas que entender de tecnología.",
    services: [
      {
        slug: "redes",
        title: "Instalación y mantenimiento de redes",
        description:
          "Configuración de wifi doméstico, extensores de señal, resolución de problemas de conectividad, cableado básico y mantenimiento periódico para que la red no se degrade con el tiempo.",
      },
      {
        slug: "camaras",
        title: "Cámaras de vigilancia",
        description:
          "Relevamiento del lugar, instalación de cámaras IP o analógicas según el caso, configuración de grabación (NVR o en la nube) y acceso remoto desde el celular. Mantenimiento y soporte ante fallas.",
      },
      {
        slug: "auditoria-seguridad",
        title: "Auditoría básica de seguridad de red",
        description:
          "Revisión de contraseñas, configuración del router y de los dispositivos conectados, para detectar accesos indebidos o configuraciones inseguras.",
      },
    ],
  },
  {
    slug: "domotica-y-hogar-inteligente",
    title: "Domótica y hogar inteligente",
    description:
      "Automatizá tu casa de a poco, con todo integrado y controlable desde el celular.",
    services: [
      {
        slug: "domotica",
        title: "Domótica hogareña",
        description:
          "Automatización de luces (dimmers, tomas inteligentes, interruptores wifi) y sensores (movimiento, apertura de puertas y ventanas, humedad), integrados en una sola app.",
      },
      {
        slug: "asistentes-de-voz-y-tv",
        title: "Asistentes de voz y Smart TV",
        description:
          "Puesta en marcha de Alexa, Google Home, Chromecast y Smart TVs, integrados con el resto de la domótica y la red del hogar.",
      },
    ],
  },
  {
    slug: "soporte-y-mantenimiento",
    title: "Soporte y mantenimiento",
    description:
      "El día a día con tus dispositivos, sin trabas y sin que nadie te apure.",
    services: [
      {
        slug: "asistente-digital",
        title: "Asistente digital para el día a día",
        description:
          "Instalar aplicaciones, configurar el mail, hacer videollamadas, resolver errores, organizar fotos: lo que a un usuario no técnico se le complique. Presencial o remoto.",
      },
      {
        slug: "reparacion-pc",
        title: "Reparación de PC",
        description:
          "Diagnóstico y reparación de hardware y software, limpieza de virus, optimización de rendimiento y recuperación de datos básica.",
      },
      {
        slug: "backup",
        title: "Backup en la nube",
        description:
          "Configuración de copias de seguridad automáticas para no perder fotos, documentos o contactos.",
      },
      {
        slug: "impresoras",
        title: "Impresoras y redes de impresión",
        description:
          "Instalación, conexión por wifi y resolución de errores de impresión y escaneo.",
      },
      {
        slug: "home-office",
        title: "Armado de home office",
        description:
          "PC, monitor, impresora y red funcionando en conjunto para quien trabaja desde casa.",
      },
    ],
  },
];

export const allServices = serviceCategories.flatMap((c) => c.services);

export const howItWorksSteps = [
  {
    title: "Contactás por WhatsApp",
    description:
      "Contás qué necesitás. Sin formularios ni esperas: te responde una persona, no un bot.",
  },
  {
    title: "Coordinamos presencial o remoto",
    description:
      "Vemos juntos qué conviene según el caso, y armamos un presupuesto a medida antes de arrancar.",
  },
  {
    title: "Se resuelve",
    description:
      "En tu casa o a distancia, con explicaciones claras de lo que se hizo y por qué.",
  },
];

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/zona-de-cobertura", label: "Zona de cobertura" },
  { href: "/sobre-defcon", label: "Sobre DEFCON" },
];
