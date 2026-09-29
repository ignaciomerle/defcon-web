import type { CSSProperties, ComponentType } from "react";
import {
  RouterIcon,
  WifiIcon,
  CameraLensIcon,
  ShieldCheckIcon,
  DomeCameraIcon,
  LockIcon,
  EthernetIcon,
  MonitorCheckIcon,
  LightbulbIcon,
  SmartPlugIcon,
  MotionSensorIcon,
  SpeakerIcon,
  SmartTvIcon,
  DoorSensorIcon,
  PhoneControlIcon,
  DimmerIcon,
  LaptopGearIcon,
  PrinterIcon,
  CloudBackupIcon,
  WrenchIcon,
  HeadsetIcon,
  TowerIcon,
  FolderIcon,
  DeskIcon,
  CodeIcon,
  BrowserIcon,
  AppPhoneIcon,
  DatabaseIcon,
  WireframeIcon,
  GearIcon,
  SparkleIcon,
  ChatIcon,
  WandIcon,
  ChipIcon,
  PhotosIcon,
  SearchIcon,
  RobotIcon,
} from "./ServiceCategoryIcons";

type IconSpec = {
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  style: CSSProperties;
  opacity: number;
};

// Posición y tamaño de cada ícono decorativo, tomado del mockup
// aprobado (fondo de 900px, íconos anclados al borde derecho).
// Se ocultan en mobile: a ese ancho el banner es demasiado angosto
// para el patrón y compite con el texto.
const iconsByCategory: Record<string, IconSpec[]> = {
  "redes-y-seguridad": [
    { Icon: RouterIcon, style: { top: -18, right: 26, width: 88, height: 88 }, opacity: 0.22 },
    { Icon: WifiIcon, style: { top: 58, right: 132, width: 56, height: 56 }, opacity: 0.16 },
    { Icon: CameraLensIcon, style: { bottom: -12, right: 198, width: 66, height: 66 }, opacity: 0.18 },
    { Icon: ShieldCheckIcon, style: { top: 20, right: 14, width: 44, height: 44 }, opacity: 0.15 },
    { Icon: DomeCameraIcon, style: { top: 108, right: 42, width: 50, height: 50 }, opacity: 0.15 },
    { Icon: LockIcon, style: { bottom: 18, right: 284, width: 40, height: 40 }, opacity: 0.14 },
    { Icon: EthernetIcon, style: { top: 150, right: 168, width: 42, height: 42 }, opacity: 0.14 },
    { Icon: MonitorCheckIcon, style: { bottom: -10, right: 6, width: 52, height: 52 }, opacity: 0.13 },
  ],
  "domotica-y-hogar-inteligente": [
    { Icon: LightbulbIcon, style: { top: -14, right: 30, width: 82, height: 82 }, opacity: 0.22 },
    { Icon: SmartPlugIcon, style: { top: 62, right: 140, width: 54, height: 54 }, opacity: 0.15 },
    { Icon: MotionSensorIcon, style: { bottom: -12, right: 206, width: 64, height: 64 }, opacity: 0.18 },
    { Icon: SpeakerIcon, style: { top: 18, right: 14, width: 42, height: 42 }, opacity: 0.15 },
    { Icon: SmartTvIcon, style: { top: 112, right: 44, width: 52, height: 52 }, opacity: 0.15 },
    { Icon: DoorSensorIcon, style: { bottom: 20, right: 288, width: 40, height: 40 }, opacity: 0.14 },
    { Icon: PhoneControlIcon, style: { top: 152, right: 170, width: 40, height: 40 }, opacity: 0.14 },
    { Icon: DimmerIcon, style: { bottom: -10, right: 8, width: 52, height: 52 }, opacity: 0.13 },
  ],
  "soporte-y-mantenimiento": [
    { Icon: LaptopGearIcon, style: { top: -14, right: 26, width: 86, height: 86 }, opacity: 0.22 },
    { Icon: PrinterIcon, style: { top: 62, right: 140, width: 54, height: 54 }, opacity: 0.15 },
    { Icon: CloudBackupIcon, style: { bottom: -12, right: 206, width: 66, height: 66 }, opacity: 0.18 },
    { Icon: WrenchIcon, style: { top: 20, right: 14, width: 42, height: 42 }, opacity: 0.15 },
    { Icon: HeadsetIcon, style: { top: 112, right: 44, width: 52, height: 52 }, opacity: 0.15 },
    { Icon: TowerIcon, style: { bottom: 18, right: 284, width: 40, height: 40 }, opacity: 0.14 },
    { Icon: FolderIcon, style: { top: 152, right: 170, width: 40, height: 40 }, opacity: 0.14 },
    { Icon: DeskIcon, style: { bottom: -10, right: 6, width: 54, height: 54 }, opacity: 0.13 },
  ],
  "desarrollo-web-y-apps": [
    { Icon: CodeIcon, style: { top: -14, right: 26, width: 88, height: 88 }, opacity: 0.22 },
    { Icon: BrowserIcon, style: { top: 60, right: 140, width: 58, height: 58 }, opacity: 0.15 },
    { Icon: AppPhoneIcon, style: { bottom: -12, right: 206, width: 60, height: 60 }, opacity: 0.18 },
    { Icon: DatabaseIcon, style: { top: 20, right: 14, width: 44, height: 44 }, opacity: 0.15 },
    { Icon: WireframeIcon, style: { top: 112, right: 44, width: 52, height: 52 }, opacity: 0.15 },
    { Icon: GearIcon, style: { bottom: 20, right: 288, width: 40, height: 40 }, opacity: 0.14 },
  ],
  "servicios-con-ia": [
    { Icon: SparkleIcon, style: { top: -14, right: 30, width: 80, height: 80 }, opacity: 0.22 },
    { Icon: ChatIcon, style: { top: 62, right: 140, width: 56, height: 56 }, opacity: 0.15 },
    { Icon: WandIcon, style: { bottom: -12, right: 206, width: 64, height: 64 }, opacity: 0.18 },
    { Icon: ChipIcon, style: { top: 20, right: 14, width: 42, height: 42 }, opacity: 0.15 },
    { Icon: PhotosIcon, style: { top: 112, right: 44, width: 52, height: 52 }, opacity: 0.15 },
    { Icon: SearchIcon, style: { bottom: 18, right: 284, width: 40, height: 40 }, opacity: 0.14 },
    { Icon: RobotIcon, style: { top: 152, right: 170, width: 42, height: 42 }, opacity: 0.14 },
  ],
};

export function CategoryBanner({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  const icons = iconsByCategory[slug] ?? [];

  return (
    <div
      className="relative overflow-hidden rounded-2xl px-6 py-8 md:px-10 md:py-9"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary) 0%, #0e5a6d 55%, var(--color-accent) 100%)",
      }}
    >
      {icons.map(({ Icon, style, opacity }, i) => (
        <Icon
          key={i}
          className="pointer-events-none absolute hidden text-white md:block"
          style={{ ...style, opacity }}
        />
      ))}

      <div className="relative flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#8fe3d6]">
          Servicios
        </span>
        <h2 className="font-heading text-2xl font-semibold text-white">
          {title}
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-white/85">
          {description}
        </p>
      </div>
    </div>
  );
}
