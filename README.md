# 📡 Vendor Speed Ranking App

Aplicación desarrollada con **React + TypeScript** para visualizar, comparar y rotar información sobre vendors de telecomunicaciones según la velocidad de sus antenas.

---

## ✨ Características

- ✅ Clasificación global de vendors por velocidad total
- 📊 Ranking detallado por tecnología (2G, 3G, 4G, LTE, 5G)
- 🧾 Página individual para cada vendor con ficha técnica
- 🔄 Vista rotatoria automática entre vendors
- 💅 UI elegante y responsive con Bootstrap 5

---

## 🚀 Cómo ejecutar el proyecto

```bash
npm install
npm start
La aplicación se abrirá en http://localhost:3000.

🧠 Simulación de Backend
Se simula una llamada a un backend real usando setTimeout en el archivo:

bash
Copiar
Editar
src/api/fetchVendors.ts
Este módulo devuelve los datos desde un JSON local tras un pequeño retardo para simular la latencia de red.

📁 Estructura del Proyecto
bash
Copiar
Editar
src/
├── api/              # Simulación de backend (JSON + fetch)
├── components/       # Componentes reutilizables (Navbar, Cards, Listas)
├── pages/            # Vistas de la app: Home, Ranking, Vendor, Rotación
├── routes/           # Configuración de rutas React Router
├── types/            # Definiciones de interfaces TypeScript
├── utils/            # Funciones auxiliares como formateo de fechas
├── App.tsx           # Layout general con Navbar y rutas
├── index.tsx         # Punto de entrada, carga estilos globales
└── README.md         # Documentación del proyecto

🛠 Tecnologías utilizadas
React 18

TypeScript

React Router DOM

Bootstrap 5

🧹 Buenas prácticas implementadas
Separación clara entre lógica, presentación y rutas

Componentes reutilizables con props tipadas

Simulación de backend para pruebas realistas

Rutas centralizadas y fácilmente mantenibles

Código comentado y estructurado para legibilidad

📦 .gitignore recomendado
gitignore
# dependencias
node_modules/

# compilación
build/
dist/

# sistema
.DS_Store
Thumbs.db

# entorno local
.env
.env.local

# herramientas
.vscode/
.idea/
*.log