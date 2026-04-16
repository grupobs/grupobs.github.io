/**
 * ================================================================
 *  BLOGS-DATA.JS — Archivo central de datos del Blog
 *  Grupo B's | Arquitectura y Construcción
 * ================================================================
 *
 *  📌 INSTRUCCIONES PARA AGREGAR UN NUEVO BLOG:
 *  ─────────────────────────────────────────────
 *  1. Crea el archivo del blog en la carpeta "blogs/" (ej: blogs/mi-nuevo-blog.html)
 *  2. Agrega la foto del blog en "blogs/imagenes/" (ej: blogs/imagenes/mi-nuevo-blog.jpg)
 *  3. Copia el bloque del PRIMER blog de abajo y pégalo AL INICIO del array BLOGS (antes de todos los demás)
 *  4. Completa los campos: id, titulo, categorias, fecha, imagen, extracto, archivo
 *  5. ¡Listo! Blogs.html lo mostrará automáticamente como el último blog.
 *
 *  ⭐ CAMPO "masLeido":
 *  Si CounterAPI no está disponible, la sección "Lo más leído"
 *  mostrará los blogs que tengan masLeido: true.
 *  Marcá 3-4 blogs con masLeido: true para que el fallback funcione bien.
 *
 *  📊 CONTADOR DE VISTAS (CounterAPI):
 *  Cada vez que alguien abre una página de blog, se incrementa su contador.
 *  Para que esto funcione, cada página .html de blog debe incluir este script:
 *
 *  <script>
 *    // 📌 REEMPLAZÁ "id-del-blog" con el ID real del blog (campo "id" de abajo)
 *    fetch('https://api.counterapi.dev/v1/grupobs/id-del-blog/up').catch(()=>{});
 *  </script>
 *
 * ================================================================
 */

const BLOGS = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔴 ÚLTIMO BLOG — Este es el que aparece como "destacado" en la página
  //    Para agregar uno nuevo, pega un bloque igual ANTES de este.
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "costo-construccion-alta-gracia-2026",
    titulo: "¿Cuánto cuesta construir una casa en Alta Gracia en 2026? | Grupo B's",
    categorias: ["Arquitectura", "Construcción"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-28",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/costo-construccion-alta-gracia-2026.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Costo del m² de construcción en Alta Gracia 2026 según el Colegio de Arquitectos de Córdoba, con datos en pesos y dólares y factores que influyen en el precio.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/costo-construccion-alta-gracia-2026.html",
    masLeido: true
  },

  {
    id: "contrato-construccion-alta-gracia",
    titulo: "Si pensás construir en Alta Gracia, esto es lo que tiene que decir tu contrato",
    categorias: ["Construcción", "Gestión"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-29",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/contrato-construccion-alta-gracia.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Qué cláusulas no pueden faltar en un contrato de construcción en Alta Gracia: sistema de precios, plazos, garantías legales, barrios cerrados y cómo protegerte antes de arrancar la obra.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/contrato-construccion-alta-gracia.html",
    masLeido: true
  },

  {
    id: "contrato-construccion-malagueno",
    titulo: "Si pensás construir en Malagueño, esto es lo que tiene que decir tu contrato",
    categorias: ["Construcción", "Gestión"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-29",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/contrato-construccion-malagueno.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Las cláusulas que protegen tu inversión en un contrato de obra en Malagueño: sistema de precios, barrios privados del corredor RP C45, garantías legales y cómo evitar conflictos antes de arrancar.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/contrato-construccion-malagueno.html",
    masLeido: true
  },

  {
    id: "como-construir-casa-alta-gracia",
    titulo: "Cómo construir una casa en Alta Gracia en 2026: guía completa",
    categorias: ["Arquitectura", "Construcción", "Gestión"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-28",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/como-construir-casa-alta-gracia.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Todo lo que tenés que saber para construir una casa en Alta Gracia: permisos municipales, características del suelo, proveedores, etapas de obra y cómo evitar imprevistos.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/como-construir-casa-alta-gracia.html",
    masLeido: true
  },

  {
    id: "como-construir-casa-malagueno",
    titulo: "Cómo construir una casa en Malagueño en 2026: guía completa",
    categorias: ["Arquitectura", "Construcción", "Gestión"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-27",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/como-construir-casa-malagueno.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Permisos municipales, requisitos para barrios privados del corredor RP C45 y todo lo que necesitás saber para construir en Malagueño sin imprevistos.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/como-construir-casa-malagueno.html",
    masLeido: true
  },

  {
    id: "contrato-construccion-anisacate",
    titulo: "Si pensás construir en Anisacate, esto es lo que tiene que decir tu contrato",
    categorias: ["Construcción", "Gestión"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-30",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/contrato-construccion-anisacate.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Las cláusulas que protegen tu inversión en un contrato de obra en Anisacate: suelo ribereño, permisos municipales, garantías legales y cómo evitar conflictos antes de arrancar.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/contrato-construccion-anisacate.html",
    masLeido: true
  },

  {
    id: "construir-corredor-ruta5-sur-cordoba",
    titulo: "Si pensás construir en el corredor Ruta 5 sur de Córdoba, esto es lo que tiene que decir tu contrato",
    categorias: ["Construcción", "Gestión"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-30",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/construir-corredor-ruta5-sur-cordoba.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Las cláusulas que protegen tu inversión en un contrato de obra en Villa Parque Santa Ana, Los Cedros o Villa del Prado: suelo loéssico, permisos por municipio o comuna, barrios cerrados y garantías legales.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/construir-corredor-ruta5-sur-cordoba.html",
    masLeido: true
  },

  {
    id: "luz-natural-residencial",
    titulo: "Beneficios de la luz natural en el diseño residencial moderno",
    categorias: ["Arquitectura"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-12",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/luz-natural.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Exploramos cómo la integración estratégica de la iluminación natural no solo reduce el consumo energético, sino que mejora el bienestar y la percepción espacial.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/luz-natural-residencial.html",
    masLeido: true
  },

  {
    id: "como-construir-casa-anisacate",
    titulo: "Cómo construir una casa en Anisacate en 2026: guía completa",
    categorias: ["Arquitectura", "Construcción", "Gestión"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-26",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/como-construir-casa-anisacate.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Permisos municipales, características del suelo ribereño, etapas de obra y cómo evitar imprevistos al construir en Anisacate.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/como-construir-casa-anisacate.html",
    masLeido: false
  },

  {
    id: "construir-corredor-ruta5-sur-cordoba",
    titulo: "Cómo construir una casa en Malagueño en 2026: guía completa",
    categorias: ["Arquitectura", "Construcción", "Gestión"],
    // 📌 Formato de fecha: "YYYY-MM-DD"
    fecha: "2026-03-29",
    // 📌 Ruta de la imagen relativa a la raíz del sitio
    imagen: "blogs/imagenes/construir-corredor-ruta5-sur-cordoba.jpg",
    // 📌 Extracto: 1-2 oraciones cortas (máx ~200 caracteres)
    extracto: "Guía práctica 2026 para construir en el corredor Ruta 5 sur de Córdoba: características del suelo loéssico, permisos por municipio o comuna, y cómo planificar una obra sin imprevistos.",
    // 📌 Ruta al archivo HTML del blog
    archivo: "blogs/construir-corredor-ruta5-sur-cordoba.html",
    masLeido: false
  },

  {
    id: "psicologia-color-espacios",
    titulo: "La psicología del color en espacios corporativos",
    categorias: ["Interiorismo"],
    fecha: "2026-01-30",
    imagen: "blogs/imagenes/psicologia-color.jpg",
    extracto: "Cómo el diseño de interiores influye en la productividad y la salud mental en los nuevos entornos de trabajo híbridos.",
    archivo: "blogs/psicologia-color-espacios.html",
    masLeido: false
  },

  {
    id: "eficiencia-plazos-ejecucion",
    titulo: "Eficiencia en plazos: Del proyecto a la ejecución",
    categorias: ["Gestión", "Construcción"],
    fecha: "2026-01-15",
    imagen: "blogs/imagenes/eficiencia-plazos.jpg",
    extracto: "Metodologías propias para evitar retrasos y garantizar la rentabilidad en obras residenciales de alta complejidad.",
    archivo: "blogs/eficiencia-plazos-ejecucion.html",
    masLeido: false
  },

  {
    id: "iluminacion-led-alta-gama",
    titulo: "Iluminación LED de alta gama: más allá del ahorro energético",
    categorias: ["Iluminación", "Arquitectura"],
    fecha: "2025-12-20",
    imagen: "blogs/imagenes/iluminacion-led.jpg",
    extracto: "La iluminación inteligente no es solo tecnología: es la herramienta que define la atmósfera y el carácter de cada espacio.",
    archivo: "blogs/iluminacion-led-alta-gama.html",
    masLeido: false
  },

  {
    id: "planos-3d-visualizacion",
    titulo: "Visualización 3D: cuando el cliente ve su hogar antes de construirlo",
    categorias: ["Tecnología", "Diseño"],
    fecha: "2025-12-05",
    imagen: "blogs/imagenes/visualizacion-3d.jpg",
    extracto: "El renderizado fotorrealístico transforma la toma de decisiones y elimina sorpresas en la ejecución de obra.",
    archivo: "blogs/planos-3d-visualizacion.html",
    masLeido: false
  },

  {
    id: "cimientos-suelos-blandos",
    titulo: "Cimientos en suelos blandos: soluciones para Córdoba",
    categorias: ["Construcción", "Ingeniería"],
    fecha: "2025-11-18",
    imagen: "blogs/imagenes/cimientos.jpg",
    extracto: "Las particularidades geológicas del suelo cordobés requieren soluciones de fundación específicas que garanticen la seguridad estructural.",
    archivo: "blogs/cimientos-suelos-blandos.html",
    masLeido: false
  }

];

/**
 * ================================================================
 *  CATEGORÍAS DEL BLOG
 *  ─ Lista de todas las categorías válidas.
 *  ─ Podés agregar nuevas categorías acá cuando las necesites.
 * ================================================================
 */
const CATEGORIAS_BLOG = [
  "Arquitectura",
  "Construcción",
  "Diseño",
  "Gestión",
  "Iluminación",
  "Ingeniería",
  "Interiorismo",
  "Sostenibilidad",
  "Tecnología"
];

/**
 * ================================================================
 *  CONFIGURACIÓN DE COUNTERAPI
 *  ─ Namespace único para tu sitio. Cambialo si querés algo más personal.
 *  ─ CounterAPI es un servicio gratuito que solo guarda {clave: número}.
 *    Sin datos personales, sin cookies. Totalmente privado.
 * ================================================================
 */
const COUNTER_NAMESPACE = "grupobs-blog";
