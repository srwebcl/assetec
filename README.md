# Assetec — Réplica en Astro.js

Copia fiel del sitio [assetec.cl](https://assetec.cl) construida con **Astro.js**.

## 🚀 Inicio rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### 3. Build de producción

```bash
npm run build
npm run preview
```

---

## 📁 Estructura del proyecto

```
assetec-astro/
├── public/
│   └── images/            # Imágenes estáticas locales (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.astro       # Barra de navegación fija con scroll effect
│   │   ├── Hero.astro         # Sección hero principal
│   │   ├── Services.astro     # Sección de servicios (3 tarjetas)
│   │   ├── About.astro        # Sección "Empresa Eléctrica"
│   │   ├── Clients.astro      # Logos de clientes + testimonios
│   │   ├── CTABanner.astro    # Banner de llamada a la acción
│   │   ├── Footer.astro       # Pie de página completo
│   │   └── WhatsApp.astro     # Widget flotante de WhatsApp
│   ├── layouts/
│   │   └── Layout.astro       # Layout base (HTML, head, meta)
│   ├── pages/
│   │   ├── index.astro                    # Página de inicio
│   │   ├── nosotros.astro                 # Página Nosotros
│   │   ├── ingenieria-electrica.astro     # Ingeniería Eléctrica
│   │   ├── arquitectura-obras-civiles.astro  # Arquitectura & Obras
│   │   ├── proyectos.astro                # Proyectos
│   │   ├── contacto.astro                 # Contacto con formulario
│   │   └── 404.astro                      # Página 404
│   └── styles/
│       └── global.css         # Variables CSS, tipografía, animaciones globales
├── astro.config.mjs
└── package.json
```

---

## 🎨 Características implementadas

- **Navbar fija** con efecto blur al hacer scroll y menú hamburguesa para móvil
- **Hero** con grilla animada, badge de certificación y estadísticas
- **Sección de servicios** con 3 tarjetas interactivas (Ingeniería Eléctrica, Arquitectura, Asesorías)
- **Sección Nosotros** con imagen y floating badge
- **Carrusel de clientes** con marquee infinito (logos con hover a color)
- **Testimonios** de Matías y Nicolás Barraza
- **Banner CTA** llamada a la acción
- **Footer** completo con links, datos de contacto y redes sociales
- **Widget de WhatsApp** flotante con popup (auto-abre a los 3 segundos)
- **Páginas internas**: Nosotros, Ingeniería Eléctrica, Arquitectura, Proyectos, Contacto
- **Formulario de contacto** con campos validados
- **Página 404** personalizada
- **Totalmente responsive** (mobile-first)
- **Paleta de colores exacta** (#e8b400 dorado, oscuros #0d0d0d)
- **Fuentes**: Montserrat (headings) + Open Sans (body)
- **Animaciones CSS**: fadeInUp, marquee, pulse-gold

---

## 🖼️ Imágenes

Las imágenes se cargan directamente desde el CDN de assetec.cl. Para producción se recomienda descargarlas y servirlas localmente desde `/public/images/`.

```bash
# Ejemplo para descargar las imágenes principales
curl -o public/images/logo.webp "https://assetec.cl/wp-content/uploads/2025/01/Logo-Assetec.webp"
curl -o public/images/hero-electricista.png "https://assetec.cl/wp-content/uploads/2025/01/electrician_09.png"
curl -o public/images/ingenieria-la-serena.webp "https://assetec.cl/wp-content/uploads/2025/02/Ingenieria-Electrica-La-Serena.webp"
```

---

## ⚙️ Tecnologías

- [Astro.js 4](https://astro.build) — Framework principal
- CSS puro con variables (sin frameworks de UI)
- Google Fonts — Montserrat + Open Sans
- JavaScript vanilla para interacciones (navbar, WhatsApp popup)

---

## 📞 Datos de contacto originales

- **Teléfono**: +56 9 6510 2370
- **Email**: contacto@assetec.cl
- **Dirección**: Camino Alfalfares Huerto #29, La Serena, Región de Coquimbo
