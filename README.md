# 🌟 Clarity

> El lienzo digital definitivo para organizar y conectar ideas de forma visual

**Desarrollado por Esteban Abanto** | [esteban.abanto.2709@gmail.com](mailto:esteban.abanto.2709@gmail.com)

## ✨ Concepto y Visión

**Clarity** es una aplicación web diseñada para ser el espacio definitivo de organización visual de ideas. Con un enfoque abierto, minimalista y sin barreras de uso, Clarity busca convertirse en un **lienzo digital** donde los usuarios puedan **conectar, organizar y dar forma a sus pensamientos** con total libertad.

La idea central es crear boards/canvas colaborativos y modulares que ofrezcan un entorno **intuitivo, gratuito y accesible**, permitiendo trabajar desde un esquema rápido de notas hasta la organización de proyectos completos.

## 🎨 Filosofía de Diseño

- **Glassmorphism minimalista**: Transparencias, difuminados y estética futurista que transmiten elegancia y ligereza visual
- **Enfoque en claridad y simplicidad**: Sin elementos que saturen; cada idea respira en el espacio
- **Futurista pero humano**: Visualmente moderno, siempre centrado en la experiencia de usuario y facilidad de uso

## 🚀 Características Principales (MVP)

### Core Features

- **📋 Boards dinámicos**: Crea tableros ilimitados para organizar tus proyectos
- **🧩 Elementos modulares**: Tarjetas de texto, imágenes, listas, enlaces y notas rápidas
- **🖱️ Drag & Drop**: Organiza ideas de forma visual e intuitiva
- **🔗 Enlaces compartibles**: Cada board se puede compartir con un link único
- **⚡ Edición en tiempo real**: Los cambios se reflejan instantáneamente en el canvas
- **🌐 100% Web**: Sin instalación necesaria, optimizada para desktop

> **Nota**: Fase inicial orientada a un solo usuario; la colaboración multiusuario se explorará en fases posteriores.

## 🛠️ Stack Técnico

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) - Potente enrutamiento (`/board/[id]`), alto rendimiento y despliegue sencillo
- **UI Library**: React + [Tailwind CSS](https://tailwindcss.com/) - Interfaz rápida, escalable con soporte nativo para Glassmorphism
- **Tipografía**: Inter, Manrope o Sora para una estética moderna

### Persistencia de Datos

#### Fase 1 (Sin Backend)

- Almacenamiento en `localStorage`
- Exportación de boards como JSON

#### Fase 2 (Backend Ligero)

- Integración con servicios serverless (Supabase, Firebase, o API propia)
- Guardado en la nube con Express/Prisma

### Hosting & Deploy

- **Platform**: [Vercel](https://vercel.com/) - Perfectamente integrado con Next.js
- **Estilo Visual**: Glassmorphism con `backdrop-filter`, paleta neutra (blancos, grises, toques de azul/lila)

## 🗺️ Roadmap de Desarrollo

### 📦 Fase 1: MVP Inicial

- [ ] Crear y gestionar boards
- [ ] Añadir tarjetas de texto
- [ ] Sistema Drag & Drop básico
- [ ] Persistencia en `localStorage`

### 🎯 Fase 2: Funcionalidades Clave

- [ ] Tipos de tarjetas adicionales (imágenes, listas, links)
- [ ] Sistema de exportar/importar boards (JSON)
- [ ] Links compartibles sin registro

### 🚀 Fase 3: Expansión

- [ ] Sistema de registro opcional para persistencia en la nube
- [ ] Colaboración multiusuario en tiempo real
- [ ] Mejoras de UX (temas, atajos de teclado, plantillas)

## 💡 Diferenciales Clave

- **🆓 Completamente gratuito**: Sin límites en boards o elementos
- **🎯 Minimalismo extremo**: Interfaz limpia centrada en la claridad visual
- **⚡ Deploy simple**: Optimizado para Vercel sin backends complejos
- **🎨 Enfoque creativo**: Ideal para creativos, estudiantes, diseñadores y cualquier persona que busque un espacio visual sin fricciones

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

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📁 Estructura del Proyecto

``` cmd
clarity/
├── components/          # Componentes reutilizables
├── pages/              # Páginas de Next.js
│   ├── api/           # API routes (futuro)
│   ├── board/         # Páginas dinámicas de boards
│   └── index.js       # Página principal
├── styles/            # Estilos globales y Tailwind
├── lib/               # Utilidades y helpers
├── public/            # Assets estáticos
└── README.md
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
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
