# 🌟 Clarity

> El lienzo digital definitivo para organizar y conectar ideas de forma visual

**Desarrollado por Esteban Abanto** | [esteban.abanto.2709@gmail.com](mailto:esteban.abanto.2709@gmail.com)

## ✨ Concepto y Visión

**Clarity** es una aplicación web diseñada como un canvas infinito minimalista, inspirado en lo mejor de herramientas como Canvas Whiteboard, Milanote, Excalidraw y Draw.io. Su objetivo es ofrecer un entorno abierto, sin fricciones y totalmente visual, donde los usuarios puedan pensar, organizar y dar forma a sus ideas.

La visión central es construir un espacio de trabajo fluido y visual, accesible sin cuentas ni barreras, donde cada persona pueda crear sus propios boards/canvas, moverse libremente en un lienzo infinito y dar vida a sus pensamientos, desde simples notas rápidas hasta esquemas más complejos.

## 🎨 Referencias Clave

- **Canvas Whiteboard** → Base de la experiencia de usuario (UI/UX intuitiva, navegación y sensación de espacio infinito)
- **Milanote** → Inspiración en la idea de boards dentro de boards (sub-canvases)
- **Excalidraw** → Facilidad para dibujar y crear trazos sin fricciones
- **Draw.io** → Uso inmediato sin necesidad de registro, con opción de guardar avances en Google Drive

## 🚫 Qué NO es (por ahora)

- ❌ **No es una herramienta de colaboración multiusuario** (no usa sockets ni tiempo real)
- ❌ **No incluye sistema de compartir públicamente** los boards (tal vez en fases futuras)
- ❌ **No es un gestor de proyectos clásico**: está enfocado en la organización visual, no en tareas ni calendarios

## 🎨 Filosofía de Diseño

- **Glassmorphism minimalista**: Transparencias, difuminados y estética futurista
- **Claridad y simplicidad**: Un espacio limpio donde las ideas respiran
- **Futurista pero humano**: Moderno en lo visual, siempre centrado en la facilidad de uso
- **Sin fricciones**: Empieza a usar Clarity sin cuentas, registros ni barreras

## 🚀 Características Principales (MVP)

### Core Features

- **📋 Boards dinámicos**: Crea y navega en múltiples tableros
- **🧩 Elementos modulares**: Tarjetas de texto, imágenes, listas, enlaces y notas rápidas
- **🖱️ Drag & Drop**: Organiza de forma intuitiva y visual
- **🔗 Sub-boards**: Abre nuevos canvases desde un elemento dentro de otro (inspirado en Milanote)
- **⚡ Navegación fluida**: Zoom infinito y movimiento libre dentro del canvas
- **🌐 100% Web**: Accesible sin descargas ni cuentas

> **Nota**: En la fase inicial, Clarity es para un solo usuario local, con persistencia en navegador.

## 🛠️ Stack Técnico

### Frontend

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) → Simple, rápido y moderno
- **UI Library**: React + [Tailwind CSS](https://tailwindcss.com/) → Base visual con Glassmorphism
- **Canvas Engine**: [Konva.js](https://konvajs.org/) / React-Konva → Renderizado del lienzo infinito
- **Tipografía**: Inter, Manrope o Sora para estética limpia y moderna

### Persistencia de Datos

#### Fase 1 (Sin Backend)

- Almacenamiento en `localStorage`
- Exportación/Importación de boards en JSON

#### Fase 2 (Opcional)

- Guardado en la nube (ej. Supabase, Firebase o API ligera propia)
- Opción de sincronización con Google Drive

### Hosting & Deploy

- **Platform**: [Vercel](https://vercel.com/) o [Netlify](https://netlify.com/)
- **Estilo Visual**: Glassmorphism con `backdrop-filter`, paleta neutra (grises, azules, lilas)

## 🗺️ Roadmap de Desarrollo

### 📦 Fase 1: MVP Inicial

- [ ] Crear y gestionar boards
- [ ] Añadir tarjetas de texto
- [ ] Sistema Drag & Drop básico
- [ ] Persistencia en `localStorage`

### 🎯 Fase 2: Funcionalidades Clave

- [ ] Tipos de tarjetas adicionales (imágenes, listas, links)
- [ ] Sub-boards (abrir un canvas dentro de otro)
- [ ] Exportar/Importar boards (JSON)
- [ ] Guardado opcional en Google Drive

### 🚀 Fase 3: Expansión

- [ ] Colaboración multiusuario en tiempo real
- [ ] Compartir boards con enlaces públicos
- [ ] Mejoras de UX (temas, atajos de teclado, plantillas)

## 💡 Diferenciales Clave

- **🆓 Uso inmediato y gratuito** → Sin necesidad de registro
- **🎯 Minimalismo extremo** → Interfaz clara y ligera
- **⚡ Fluidez total** → Zoom infinito, navegación sin cortes
- **🎨 Pensado para creativos** → No es una herramienta corporativa, sino un espacio visual libre

## 🚦 Getting Started

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/esteban-abanto/clarity.git

# Navegar al directorio
cd clarity

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

## 📁 Estructura del Proyecto

``` cmd
clarity/
├── components/          # Componentes reutilizables
├── src/                 # Código fuente principal
│   ├── pages/           # Rutas de React Router (boards, home, etc.)
│   ├── hooks/           # Custom hooks
│   ├── styles/          # Estilos globales y Tailwind
│   └── lib/             # Utilidades y helpers
├── public/              # Assets estáticos
└── README.md
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📞 Contacto

**Esteban Abanto** - [esteban.abanto.2709@gmail.com](mailto:esteban.abanto.2709@gmail.com)

Enlace del proyecto: [https://github.com/esteban-abanto/clarity](https://github.com/esteban-abanto/clarity)

## 📄 Licencia

Este proyecto está bajo la Licencia BSD 3-Clause - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**Clarity** - Donde las ideas cobran forma ✨

[🌐 Demo](https://clarity-demo.vercel.app) | [📖 Docs](https://docs.clarity.app) | [🐛 Issues](https://github.com/esteban-abanto/clarity/issues)

</div>
