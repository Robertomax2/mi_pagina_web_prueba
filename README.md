# Piedra & Luz — sitio del estudio

Proyecto hecho con [Astro](https://astro.build). Incluye:

- **Inicio** (`/`): hero a pantalla completa, sección de historia con boceto, grid de obra reciente, y la sección oscura con contador animado (inspirada en el video que compartiste).
- **Obra** (`/obra`): grid de todos los proyectos + página de detalle por proyecto.
- **Revista** (`/revista`): grid de artículos estilo ArchDaily + página de detalle por artículo.

## 1. Instalar y correr en tu computador

Necesitas [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
cd piedra-luz
npm install
npm run dev
```

Abre `http://localhost:4321` en tu navegador. Los cambios se ven al instante.

## 2. Cómo agregar contenido

**Proyectos nuevos:** crea un archivo `.md` en `src/content/proyectos/`, copiando el formato de cualquiera de los existentes (el bloque `---` de arriba son los datos, y el texto de abajo es el cuerpo del artículo en Markdown).

**Artículos de revista nuevos:** igual, pero en `src/content/articulos/`.

No necesitas tocar código para agregar contenido — solo crear el archivo `.md`.

## 3. Imágenes

Ahora mismo el sitio usa imágenes de Unsplash como placeholder (para que puedas verlo funcionando de inmediato). Para tus imágenes reales:

- **Pocas imágenes / sitio chico:** ponlas en la carpeta `public/images/` y referencia la ruta como `/images/tu-foto.jpg` en el campo `imagen` del archivo `.md`.
- **Muchas imágenes / sitio que va a crecer:** sube tus imágenes a [Cloudinary](https://cloudinary.com) (plan gratis) y usa la URL que te dan en el campo `imagen`.

**Videos:** súbelos a YouTube/Vimeo y luego podemos embeberlos en una página de proyecto — avísame si quieres que agregue esa función.

## 4. Publicarlo gratis

La forma más simple es [Netlify](https://netlify.com):

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a netlify.com → "Add new site" → "Import an existing project" → conecta tu repo.
3. Build command: `npm run build` — Publish directory: `dist`
4. Netlify te da un subdominio gratis tipo `tu-sitio.netlify.app`.

Si más adelante compras un dominio propio (ej. `piedraluz.studio`), lo conectas desde el panel de Netlify en "Domain settings" — toma unos minutos.

## Paleta y tipografía del diseño

- Fondo: `#F6F4EE` (piedra clara) · Tinta: `#17160F` · Acento: `#4B5A45` (musgo) · Sección oscura: `#0B0B09`
- Display: **Instrument Serif** (itálica para énfasis) · Cuerpo: **Inter** · Datos/etiquetas: **IBM Plex Mono**
