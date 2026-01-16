# Gamers-de-Nintendo
The Blog Site Lab 

# 🎮 AeroTech Gaming Blog & Game Finder
Bienvenido al repositorio oficial del proyecto **Blog Site**. Este proyecto comenzó como una práctica de maquetación web y evolucionó hacia una aplicación interactiva que consume la API de videojuegos **RAWG** para permitir a los usuarios explorar, buscar y ver detalles de miles de títulos, con un enfoque especial en el ecosistema **Nintendo**.


## 🚀 Características Principales

* **Blog Informativo:** Páginas estáticas (Inicio, Quiénes Somos, Contacto) con diseño moderno.
* **Game Finder (Buscador):** Módulo independiente ubicado en `pages/buscar/` que conecta con una API externa.
* **Modo Oscuro (Dark UI):** Interfaz inmersiva con paleta de colores "Gaming Night" (Azul profundo y Neón).
* **Diseño Responsivo:** Maquetación fluida utilizando **Bootstrap 5** y CSS Grid.
* **Gestión de Datos:** Uso de `fetch` y `async/await` para consultas asíncronas de datos.

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico**
* **CSS3 & Bootstrap 5.3** (Estilizado personalizado)
* **JavaScript (ES6+)**
* **API Externa:** [RAWG Video Games Database](https://rawg.io/apidocs)
* **Gestión de Proyecto:** GitHub Projects (Kanban / SCRUM)

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular para separar la lógica del Blog de la lógica de la Aplicación de búsqueda.

```text
/root
  |-- index.html            # Página de Inicio (Landing del Blog)
  |-- about.html            # Quiénes Somos
  |-- contact.html          # Contacto
  |-- css/                  # Estilos globales
  |-- img/                  # Assets gráficos
  |-- pages/
       |-- config.js        # (Ignorado por Git) Archivo de Claves API
       |-- buscar/          # MÓDULO DEL BUSCADOR
             |-- buscar.html
             |-- buscar.css
             |-- appBuscar.js

## 👥 Equipo y Distribución de Tareas (Sprints)

El seguimiento de las tareas y la asignación de responsabilidades se gestiona a través de **Notion**. A continuación, se detalla el estado actual del desarrollo por integrante y rama de trabajo:

| Tarea / User Story | Responsable |
| :--- | :--- | :--- | :--- |
| **🎨 Configuración y Estilos Globales** | | | |
| Configurar estructura de carpetas y conectar VS Code | **Monroy Tellez** |
| Vincular Bootstrap 5 y crear `styles.css` con variables | **Monroy Tellez** |
| Base de colores y Diseño CSS Raíz | **Monroy Tellez** |
| **🧭 Navegación y Layout** | | | |
| Navegación: Crear `<nav>` responsive | **Jose Evelio Nieves** | `navbar-page` |
| Implementar Navbar en todas las páginas | **Jose Evelio Nievess** | `navbar-page` |
| Footer: Crear pie de página y lista de autores | **Hageo Balam Mendez** |
| Implementar Footer en todas las páginas | **Hageo Balam Mendez** |
| **🏠 Página de Inicio (Home)** | | | |
| Definir tema del blog y redactar textos base | **Andrea Meneses** |
| Home Content: Maquetar sección "Hero" (h1) | **Andrea Meneses** |
| Maquetación General Home | **Andrea Meneses** |
| **ℹ️ Página "Acerca de"** | | | |
| Definir tema y redactar textos base | **Montiel Zúñiga Emmanuel** |
| About Us: Crear página con info del grupo y misión | **Montiel Zúñiga Emmanuel** |
| **📞 Página de Contacto** | | | |
| Definir tema y redactar textos base | **Mariana Carmona Hinojosa** |
| Contact: Crear página con datos falsos | **Hageo Balam Mendez** |
| Formulario: Maquetar formulario visual | **Mariana Carmona Hinojosa** |
| **⚡ Funcionalidad y Contenido Extra** | | | |
| Funcionalidad JS: Conexión a API y buscador | **Isaura Casas** |
| Redacción de Artículos | **gabrielonitsuaf** | `articulo-page` |
| **✅ Calidad y Revisión** | | | |
| Code Review, QA Visual y Validación PO | **Todo el Equipo** |

