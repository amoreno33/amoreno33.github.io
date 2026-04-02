# amoreno33.github.io — Portfolio & Blog

## Contexto del proyecto
Portfolio personal y blog técnico de A. Moreno. Objetivo: mostrar capacidades a recruiters técnicos. Se publica en GitHub Pages vía GitHub Actions.

## Stack
- Framework: Astro.js
- Estilos: Tailwind CSS
- Contenido: Markdown/MDX en src/content/
- Deploy: GitHub Actions → GitHub Pages
- Repo: amoreno33/amoreno33.github.io

## Comandos clave
- `npm run dev` — servidor local en localhost:4321
- `npm run build` — build de producción en /dist
- `npm run preview` — preview del build
- `npm run lint` — ESLint + Prettier

## Convenciones de código
- TypeScript en todos los componentes .astro y .ts
- Nombres de archivos: kebab-case (mi-componente.astro)
- Componentes: PascalCase (BlogCard.astro)
- Imports con alias @/ (mapeado a src/)
- 2-space indentation

## Estructura de contenido
- Posts del blog: src/content/posts/YYYY-MM-DD-titulo.md
- Proyectos: src/content/projects/nombre-proyecto.md
- Imágenes: public/images/[posts|projects]/nombre/

## Frontmatter obligatorio para posts
```yaml
---
title: "Título del análisis"
date: YYYY-MM-DD
tags: [python, sql, data-analysis]
description: "Descripción corta para SEO y cards"
draft: false
---
```

## Frontmatter obligatorio para proyectos
```yaml
---
title: "Nombre del proyecto"
stack: [Python, Pandas, PostgreSQL]
category: backend  # backend | llm | data-analysis | ml
github: https://github.com/amoreno33/...
demo: ""  # URL o vacío
featured: false
---
```

## Reglas de diseño (NO CAMBIAR sin avisar)
- Paleta: fondo #0a0a0a, texto #e5e5e5, acento #00d4ff
- Tipografía display: JetBrains Mono (headings técnicos)
- Tipografía body: Inter
- No usar purple gradients ni patrones genéricos de AI
- Cards con border sutil, hover con acento azul cian

## Lo que Claude NO debe hacer
- No eliminar el archivo .github/workflows/deploy.yml
- No cambiar la configuración de Astro para i18n sin consultar
- No agregar dependencias pesadas sin verificar el bundle size
- No tocar public/CNAME si existe

## Seguimiento del proyecto — progress.md

El archivo `docs/progress.md` es el registro oficial del proyecto.
El agente DEBE seguir este protocolo en cada sesión:

### Al INICIAR una sesión
1. Leer `docs/progress.md` completo antes de hacer cualquier otra cosa
2. Leer el estado actual y las tareas pendientes de la última sesión
3. Confirmar con el usuario qué se va a trabajar en esta sesión
4. Actualizar el campo "Última sesión" y "Próxima tarea" en la tabla de estado

### Durante la sesión
- Si se toma una decisión técnica importante → agregarla en "Decisiones de arquitectura"
- Si aparece un error → documentarlo INMEDIATAMENTE en dos lugares:
  1. En "Errores encontrados en esta sesión" dentro de la entrada de sesión activa
  2. En "Registro de errores y soluciones" con el bloque completo (ERR-NNN)
  Incluir siempre: mensaje exacto, archivo y línea, qué se intentó, qué funcionó, tiempo perdido
  Si el error no se resolvió, igual documentarlo con estado "sin resolver"
- Si se crea un archivo nuevo → actualizar el árbol en "Estructura de archivos creados"
- Si se identifica una tarea nueva → agregarla al Backlog

### Al FINALIZAR una sesión
1. Completar la entrada de sesión correspondiente en "Historial de sesiones":
   - Qué se hizo (bullets concretos, no vagos)
   - Qué quedó pendiente
   - Problemas encontrados
2. Mover tareas completadas del Backlog a la sección "Completado"
3. Actualizar la tabla de "Estado actual"
4. Crear la entrada de la próxima sesión con el encabezado vacío listo

### Reglas
- NUNCA borrar entradas anteriores
- Las entradas nuevas van SIEMPRE al tope de cada sección
- Ser específico: "Creé src/pages/index.astro con hero y nav" > "Avancé con el frontend"
- Si algo no se pudo hacer, explicar por qué
- NUNCA omitir un error aunque parezca menor o ya resuelto
- El mensaje de error va SIEMPRE copiado exacto, no parafraseado
- Los errores sin resolver se documentan igual, con estado "sin resolver" y lo que se intentó

## Roadmap de aprendizaje

[ pendiente de definir — agregar cuando haya claridad ]

Idea: sección pública en el portfolio que muestre los temas
en cola, en progreso y completados. Actualizar manualmente
cada vez que se avanza en un tema nuevo.