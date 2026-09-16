# DEFCON - Servicios Digitales — sitio web

Sitio de presentación para DEFCON - Servicios Digitales, construido con
Next.js (App Router) y Tailwind CSS. Sin backend ni base de datos: todo el
contacto se hace por WhatsApp.

## Antes de publicar

Hay dos datos placeholder que hay que reemplazar en `src/lib/site-config.ts`
antes de dar el sitio por terminado:

- `whatsappNumber`: número real en formato internacional sin espacios ni
  signos (ej. `"5491122334455"` = 54 + código de área sin el 0 + número sin
  el 15).
- `contactEmail`: mail de contacto real, si es distinto al de WhatsApp.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

- `src/app/` — páginas (Inicio, Servicios, Cómo funciona, Zona de cobertura,
  Sobre DEFCON), una por ruta según el App Router de Next.js.
- `src/components/` — Header, Footer, botón de WhatsApp (flotante e inline),
  logo.
- `src/lib/site-config.ts` — todos los datos editables del sitio: contacto,
  cobertura, catálogo de servicios, pasos de "cómo funciona". Para actualizar
  un servicio o agregar uno nuevo, se edita solo este archivo.

## Deploy a Vercel (tier gratuito)

1. Subir este proyecto a un repositorio de GitHub.
2. En Vercel, "Add New Project" → importar el repositorio. Next.js se
   detecta automáticamente, no hace falta configurar nada más.
3. Una vez deployado, ir a la configuración del proyecto → Domains, y
   agregar `defcon.com.ar` y `www.defcon.com.ar`.
4. En la sección DNS Records del dominio, activar **Enable Vercel DNS**.
5. En NIC Argentina (nic.ar → Trámites a Distancia), delegar el dominio a:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
6. Esperar la propagación del DNS (hasta 48 hs según nic.ar, normalmente
   bastante menos) y verificar que Vercel emitió el certificado HTTPS.

## Nota sobre las fuentes

El proyecto usa `next/font/google` (Poppins para títulos, Inter para texto),
que descarga y autohospeda las fuentes durante el build — no hacen falta
requests a Google Fonts en producción. Esto requiere que el entorno donde se
corre `npm run build` tenga acceso a internet saliente (Vercel lo tiene sin
configuración adicional).
