import type { CSSProperties } from "react";
// Set de íconos de línea usados como decoración de fondo en los
// encabezados de categorías de /servicios. Todos comparten el mismo
// viewBox y estilo (trazo fino, currentColor) para que se puedan
// combinar libremente vía CategoryBanner.

type IconProps = {
  className?: string;
  style?: CSSProperties;
};

export function RouterIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="9" width="18" height="7" rx="2" />
      <path d="M7 9V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <circle cx="8" cy="12.5" r="0.6" fill="currentColor" />
      <circle cx="10.5" cy="12.5" r="0.6" fill="currentColor" />
      <path d="M17 12.5h2" />
    </svg>
  );
}

export function WifiIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M2 8.5a15 15 0 0 1 20 0" />
      <path d="M5.5 12.5a10 10 0 0 1 13 0" />
      <path d="M9 16.5a5 5 0 0 1 6 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

export function CameraLensIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 5V2.5" />
      <path d="M9.5 2.5h5" />
    </svg>
  );
}

export function ShieldCheckIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2.5 4.5 5.5v5.2c0 4.8 3.2 8.2 7.5 9.8 4.3-1.6 7.5-5 7.5-9.8V5.5Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function DomeCameraIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 10.5a8 4 0 0 1 16 0" />
      <path d="M4 10.5h16v2.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="11.6" r="1.3" fill="currentColor" />
      <path d="M9 18h6" />
    </svg>
  );
}

export function LockIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
      <circle cx="12" cy="15.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function EthernetIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="7" y="3" width="10" height="8" rx="1.5" />
      <path d="M9 11v2M11 11v2M13 11v2M15 11v2" />
      <path d="M12 15v3" />
      <path d="M8 18h8" />
    </svg>
  );
}

export function MonitorCheckIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16.5V20" />
      <path d="M8.5 10.5l2 2 4.5-4.5" />
    </svg>
  );
}

export function LightbulbIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M9 16.5h6" />
      <path d="M10 19.5h4" />
      <path d="M8 10.5a4 4 0 1 1 8 0c0 2-1.2 3-2 4.5H10c-.8-1.5-2-2.5-2-4.5Z" />
      <path d="M12 3v1.5" />
    </svg>
  );
}

export function SmartPlugIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="9.5" cy="12" r="1" fill="currentColor" />
      <circle cx="14.5" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function MotionSensorIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 18a8 8 0 0 1 16 0" />
      <path d="M7 18a5 5 0 0 1 10 0" />
      <circle cx="12" cy="18" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function SpeakerIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="2.5" width="10" height="19" rx="5" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function SmartTvIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M9 20.5h6" />
      <path d="M12 17v3.5" />
      <path d="M9 8.5l2.5 2.5L15 7.5" />
    </svg>
  );
}

export function DoorSensorIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <circle cx="14.5" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function PhoneControlIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 19h2" />
      <path d="M9.5 6.5h5v6h-5z" />
    </svg>
  );
}

export function DimmerIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 12 15.5 8.5" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LaptopGearIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M1.5 19.5h21" />
      <circle cx="12" cy="10.5" r="2.2" />
      <path d="M12 7.3v.9M12 12.4v.9M9.3 10.5h.9M14.8 10.5h.9" />
    </svg>
  );
}

export function PrinterIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="5" y="8" width="14" height="8" rx="1.5" />
      <path d="M7 8V4h10v4" />
      <path d="M7 16v4h10v-4" />
      <circle cx="16" cy="11" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function CloudBackupIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M7 17a4 4 0 0 1 .5-8 5 5 0 0 1 9.6-1.2A3.8 3.8 0 0 1 17 17Z" />
      <path d="M12 12v5" />
      <path d="M9.8 14.5 12 12l2.2 2.5" />
    </svg>
  );
}

export function WrenchIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 6.5a3.5 3.5 0 0 0-4.9 3.9L4 16l2 2 5.6-5.6a3.5 3.5 0 0 0 4.4-4.4l-2.3 2.3-2-2Z" />
    </svg>
  );
}

export function HeadsetIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
    </svg>
  );
}

export function TowerIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="3" width="12" height="18" rx="1.5" />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
      <path d="M9 12h6M9 15h6" />
    </svg>
  );
}

export function FolderIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 6.5h6l2 2h10v11H3Z" />
    </svg>
  );
}

export function DeskIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="5" width="16" height="9" rx="1.5" />
      <path d="M2.5 20h19" />
      <path d="M6 20v-2M18 20v-2" />
    </svg>
  );
}

export function CodeIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8.5 8 4 12.5 8.5 17" />
      <path d="M15.5 8 20 12.5 15.5 17" />
      <path d="M13 6.5 11 18.5" />
    </svg>
  );
}

export function BrowserIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 8.5h18" />
      <circle cx="6" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="8" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function AppPhoneIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 19h2" />
      <path d="M10 7.5h4M10 10.5h4M10 13.5h2.5" />
    </svg>
  );
}

export function DatabaseIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </svg>
  );
}

export function WireframeIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9.5h18" />
      <path d="M8 14h8M8 17h5" />
    </svg>
  );
}

export function GearIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 4v2.3M12 17.7V20M4 12h2.3M17.7 12H20M6.3 6.3l1.6 1.6M16.1 16.1l1.6 1.6M17.7 6.3l-1.6 1.6M7.9 16.1l-1.6 1.6" />
    </svg>
  );
}

export function SparkleIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6Z" />
    </svg>
  );
}

export function ChatIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 5.5h16v11H9l-4 3.5v-3.5H4Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

export function WandIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M5 19 17 7" />
      <path d="M15 3l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z" />
      <path d="M5 13l.5 1.3L7 15l-1.5.7L5 17l-.5-1.3L3 15l1.5-.7Z" />
    </svg>
  );
}

export function ChipIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function PhotosIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <circle cx="9.5" cy="10" r="1.3" />
      <path d="M6 17l4-4 3 3 3-4.5 2 2.5" />
    </svg>
  );
}

export function SearchIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
    </svg>
  );
}

export function RobotIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="5" y="9" width="14" height="10" rx="2.5" />
      <path d="M12 9V6" />
      <circle cx="12" cy="4.5" r="1.2" />
      <circle cx="9" cy="14" r="1" fill="currentColor" />
      <circle cx="15" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}
