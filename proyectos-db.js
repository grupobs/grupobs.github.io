/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  proyectos-db.js — Base de datos de proyectos · Grupo B's          ║
 * ║  Ubicación: raíz del sitio (mismo nivel que index.html)            ║
 * ║                                                                    ║
 * ║  CÓMO AGREGAR UN PROYECTO NUEVO:                                   ║
 * ║  1. Agregá un objeto al array OBRAS (idealmente al principio,      ║
 * ║     para que aparezca primero en la grilla).                       ║
 * ║  2. Completá todos los campos según las instrucciones de cada uno. ║
 * ║  3. Si ya tiene su página web, poné el slug. Si todavía no,       ║
 * ║     dejá slug: null → la tarjeta irá a "Página en construcción".  ║
 * ║                                                                    ║
 * ║  ESTRUCTURA DE CADA PROYECTO:                                      ║
 * ║  {                                                                 ║
 * ║    slug:  'nombre-del-proyecto'  // o null si no tiene página aún  ║
 * ║    img:   'ruta/desde/la/raiz/foto-h1.jpg'  // portada (h1)       ║
 * ║    anio:  '2024'                // año de finalización             ║
 * ║    m2:    '340 m²'              // superficie total                ║
 * ║    name:  'Nombre del Proyecto' // título de la tarjeta            ║
 * ║    tags:  ['Tag1', 'Tag2']      // categorías (máx. 3-4)           ║
 * ║    desc:  'Descripción corta.'  // 1-2 oraciones, máx. 180 chars  ║
 * ║  }                                                                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const OBRAS = [

    /* ══════════════════════════════════════════════════════════════
       PROYECTOS CON PÁGINA PUBLICADA (slug definido)
       Estos 12 proyectos tienen su propia sub-página.
    ══════════════════════════════════════════════════════════════ */

    {
        slug: 'casa-country-campos-del-Virrey',
        img: 'todas-las-obras/Imagenes/casa-country-campos-del-Virrey/casa-country-campos-del-Virrey-h5.webp',
        anio: '2021',
        m2: '340 m²',
        name: 'Casa Country Campos del Virrey',
        tags: ['Construcción', 'Diseño Arquitectónico', 'Iluminación', 'Interiorismo'],
        desc: 'Vivienda unifamiliar y quincho multiespacio de 340 m². Ladrillo visto, iluminación indirecta y espacios de diseño singular en entorno arbolado.'
    },

    {
        slug: 'casona-en-etapas',
        img: 'todas-las-obras/Imagenes/casona-en-etapas/casona-en-etapas-h1.jpg',
        anio: '2001–2018',
        m2: '480 m²',
        name: 'Casona en Etapas',
        tags: ['Construcción', 'Diseño Arquitectónico', 'Iluminación', 'Interiorismo'],
        desc: 'Vivienda unifamiliar de 480 m² desarrollada en cuatro etapas. Tres plantas, quincho, cine en casa, gym y diseño de paisajismo integral.'
    },

    {
        slug: 'iluminacion-casona-country-golf',
        img: 'todas-las-obras/Imagenes/iluminacion-casona-country-golf/iluminacion-casona-country-golf-h1.jpg',
        anio: '2017',
        m2: '540 m²',
        name: 'Iluminación Casona Country Golf',
        tags: ['Iluminación', 'Residencial'],
        desc: 'Hall-museo con cúpula, colección de antigüedades, escalera metálica con vidrio, piscina interior y jardín con luminarias de diseño propio.'
    },

    {
        slug: 'iluminacion-residencia-alto-de-achumani',
        img: 'todas-las-obras/Imagenes/iluminacion-residencia-alto-de-achumani/iluminacion-residencia-alto-de-achumani-h1.jpg',
        anio: '2023',
        m2: '787 m²',
        name: 'Residencia Alto de Achumani',
        tags: ['Iluminación', 'Residencial'],
        desc: 'Iluminación integral de 787 m² y 3 pisos con vistas panorámicas. Piscina, sauna, gym, salón de entretenimiento, bar y taller de motos.'
    },

    {
        slug: 'iluminacion-country-aleman',
        img: 'todas-las-obras/Imagenes/iluminacion-country-aleman/iluminacion-country-aleman-h1.jpg',
        anio: '2022',
        m2: '600 m²',
        name: 'Iluminación Country Alemán',
        tags: ['Iluminación', 'Residencial'],
        desc: 'Proyecto de iluminación integral en vivienda de alta gama. Vitrales iluminados con simulación de luz natural y luminarias de diseño fabricadas a medida.'
    },

    {
        slug: 'proyecto-de-dos-viviendas-en-un-mismo-lote',
        img: 'todas-las-obras/Imagenes/proyecto-de-dos-viviendas-en-un-mismo-lote/proyecto-de-dos-viviendas-en-un-mismo-lote-h1.webp',
        anio: '2020',
        m2: '161 m²',
        name: 'Dos Viviendas en un Mismo Lote',
        tags: ['Construcción', 'Diseño Arquitectónico', 'Iluminación', 'Interiorismo'],
        desc: 'Refuncionalización y ampliación de dos unidades habitacionales. Estética minimalista, optimización de cada m² y rentabilidad como objetivo.'
    },

    {
        slug: 'Iluminacion-la-florida',
        img: 'todas-las-obras/Imagenes/Iluminacion-la-florida/Iluminacion-la-florida-h1.jpg',
        anio: '2022',
        m2: '435 m²',
        name: 'Iluminación Residencia La Florida',
        tags: ['Iluminación', 'Residencial'],
        desc: 'Diseño libre de flicker y luz directa por condición visual del cliente. Luminarias fabricadas a medida, vitrales, piscina atemperada y jardín.'
    },

    {
        slug: 'iluminacion-casona-achumani',
        img: 'todas-las-obras/Imagenes/iluminacion-casona-achumani/iluminacion-casona-achumani-h1.jpg',
        anio: '2022',
        m2: '490 m²',
        name: 'Iluminación Casona Achumani',
        tags: ['Iluminación', 'Residencial'],
        desc: 'Residencia de estilo colonial de 490 m². Interior, fachada y jardines iluminados para valorizar la arquitectura en piedra, teja y madera.'
    },

    {
        slug: 'iluminacion-comlpejo-familiar-tres-residencias',
        img: 'todas-las-obras/Imagenes/iluminacion-comlpejo-familiar-tres-residencias/iluminacion-comlpejo-familiar-tres-residencias-h1.jpg',
        anio: '2018',
        m2: '720 m²',
        name: 'Complejo Familiar — Tres Residencias',
        tags: ['Iluminación', 'Residencial'],
        desc: 'Proyecto de iluminación integral para tres residencias familiares independientes. Luz indirecta perimetral, fachada, tragaluces y exteriores.'
    },

    {
        slug: 'iluminacion-edificio-corporativo-msc-naviera',
        img: 'todas-las-obras/Imagenes/iluminacion-edificio-corporativo-msc-naviera/iluminacion-edificio-corporativo-msc-naviera-h1.jpg',
        anio: '2018',
        m2: '890 m²',
        name: 'Iluminación Edificio Corporativo MSC',
        tags: ['Iluminación', 'Comercial'],
        desc: 'Iluminación corporativa integral en edificio de 5 plantas. 100% luminarias a medida, incluyendo tres colgantes escultóricos de 7 m en el vestíbulo.'
    },

    {
        slug: 'iluminacion-estudio-juridico',
        img: 'todas-las-obras/Imagenes/iluminacion-estudio-juridico/iluminacion-estudio-juridico-h1.webp',
        anio: '2018',
        m2: '1.147 m²',
        name: 'Iluminación Estudio Jurídico',
        tags: ['Iluminación', 'Comercial'],
        desc: 'Dos plantas de oficinas premium. Luminaria lineal fabricada a medida, integrada invisiblemente en techo de listones de madera maciza.'
    },

    {
        slug: 'iluminacion-la-escondida',
        img: 'todas-las-obras/Imagenes/iluminacion-la-escondida/Iluminacion-la-escondida-h1.jpg',
        anio: '2016',
        m2: '600 m²',
        name: 'Complejo La Escondida',
        tags: ['Iluminación', 'Residencial'],
        desc: 'Iluminación integral de dos viviendas de 300 m² cada una en complejo privado. Interior, patio y fachada con luz indirecta, spots y placas eléctricas.'
    },




    /* ══════════════════════════════════════════════════════════════
       PROYECTOS SIN PÁGINA PUBLICADA AÚN (slug: null)
       Al hacer clic irán a la página "en construcción".
       📌 Cuando tengan su sub-página, reemplazá null por el slug.
    ══════════════════════════════════════════════════════════════ */


    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-residencia-8-de-calacoto.jpg', anio: '2013', m2: '365 m²', name: 'Iluminación Residencia 8 de Calacoto', tags: ['Iluminación', 'Residencial'], desc: 'Proyecto de iluminación integral para interiores y exteriores con luminarias de importación española.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/departamento-zapata.jpg', anio: '2013', m2: '285 m²', name: 'Departamento Zapata', tags: ['Iluminación', 'Residencial'], desc: 'Diseño lumínico basado en luz indirecta, spots de empotrar y piezas decorativas para dos unidades residenciales.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/laboratorio-bago.jpg', anio: '2024', m2: '540 m²', name: 'Laboratorio BAGÓ', tags: ['Iluminación', 'Industrial'], desc: 'Instalación de iluminación técnica hermética bajo normativas de seguridad para áreas de producción de laboratorios.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/biblioteca-universidad-catolica.jpg', anio: '2014', m2: '1.280 m²', name: 'Biblioteca Universidad Católica', tags: ['Iluminación', 'Universidad'], desc: 'Fabricación a medida, suministro y montaje especializado de sistemas de iluminación educativa.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/oficinas-la-boliviana-ciacruz-seguros.jpg', anio: '2014', m2: '560 m²', name: 'Oficinas La Boliviana CIACRUZ Seguros', tags: ['Iluminación', 'Corporativo'], desc: 'Desarrollo de luminarias especiales con luz indirecta diseñadas para áreas de Gerencia.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-corporacion-andina-de-fomento-caf.jpg', anio: '2012', m2: '1.173 m²', name: 'Iluminación Corporación Andina de Fomento CAF', tags: ['Iluminación', 'Corporativo'], desc: 'Optimización del consumo eléctrico en iluminación bajo estándares de certificación de edificio verde.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/caja-de-pandora-la-paz.jpg', anio: '2016', m2: '1.120 m²', name: 'Iluminación Locales Comerciales Caja de Pandora - La Paz', tags: ['Iluminación', 'Comercial'], desc: 'Soluciones integrales en iluminación con tecnología LED para espacios comerciales.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/locales-comerciales-caja-de-pandora-santa-cruz-cuarto-anillo.jpg', anio: '2015', m2: '420 m²', name: 'Iluminación Locales Comerciales Caja de Pandora - Santa Cruz (Cuarto Anillo)', tags: ['Iluminación', 'Comercial'], desc: 'Fabricación de luminarias LED de alto rendimiento y ejecución de la instalación eléctrica comercial.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/locales-comerciales-caja-de-pandora-santa-cruz-av-irala-primer-anillo.jpg', anio: '2016', m2: '196 m²', name: 'Iluminación Locales Comerciales Caja de Pandora - Santa Cruz (Av. Irala - Primer Anillo)', tags: ['Iluminación', 'Comercial'], desc: 'Implementación de sistemas LED y red eléctrica para punto de venta en zona estratégica.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/hotel-suites-camino-real.jpg', anio: '2004', m2: '2.960 m²', name: 'Hotel Suites Camino Real', tags: ['Iluminación'], desc: 'Equipamiento completo de iluminación, placas de diseño y tableros de distribución eléctrica.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-campo-ferial-chuquiago-marka.jpg', anio: '2013', m2: '9.830 m²', name: 'Iluminación Campo Ferial Chuquiago Marka', tags: ['Iluminación'], desc: 'Suministro y montaje de sistemas lumínicos de gran escala para salones de exposición masiva.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/casa-del-camba-el-bosque.jpg', anio: '2022', m2: '345 m²', name: 'Casa del Camba (El Bosque)', tags: ['Restaurante', 'Iluminación'], desc: 'Producción e instalación de luminarias LED personalizadas para ambiente gastronómico.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/apart-hotel-casa-grande.jpg', anio: '2018', m2: '690 m²', name: 'Apart Hotel Casa Grande', tags: ['Iluminación'], desc: 'Dotación de sistemas de iluminación y accesorios eléctricos para hospitalidad de lujo.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/hotel-casa-grande.jpg', anio: '2016', m2: '4.200 m²', name: 'Hotel Casa Grande', tags: ['Iluminación'], desc: 'Proyecto integral que abarca desde la iluminación decorativa hasta tableros de potencia.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/hotel-casa-grande-express.jpg', anio: '2019', m2: '1.100 m²', name: 'Hotel Casa Grande Express', tags: ['Iluminación'], desc: 'Suministro técnico de placas y tableros eléctricos para infraestructura hotelera.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/oficinas-seguros-conesa-kieffer-y-asociados-sa.jpg', anio: '2013', m2: '120 m²', name: 'Oficinas Seguros Conesa Kieffer y Asociados S.A.', tags: ['Iluminación'], desc: 'Adecuación lumínica y eléctrica para oficinas administrativas de alta gama.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/edificio-marta-de-la-rocha.jpg', anio: '2012', m2: '1.500 m²', name: 'Edificio Marta de la Rocha', tags: ['Iluminación'], desc: 'Consultoría y ejecución de iluminación para fachadas y áreas comunes interiores.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/dm-andino-resort-spa.jpg', anio: '2010', m2: '2.430 m²', name: 'DM Andino Resort & Spa', tags: ['Iluminación'], desc: 'Soluciones eléctricas y de iluminación para ambientes de relax y áreas sociales.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/edificio-america.jpg', anio: '2011', m2: '1.600 m²', name: 'Edificio América', tags: ['Iluminación'], desc: 'Fabricación y montaje de luminarias para proyecto arquitectónico vertical.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/estacion-de-servicio.jpg', anio: '2004', m2: '360 m²', name: 'Estación de Servicio', tags: ['Iluminación'], desc: 'Implementación de iluminación de alta eficiencia para áreas de servicio exterior.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/showroom-volkswagen-hansa.jpg', anio: '2015', m2: '300 m²', name: 'Showroom Volkswagen-Hansa', tags: ['Iluminación'], desc: 'Ambientación lumínica profesional diseñada para resaltar la exposición de vehículos.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/hard-rock-cafe-la-paz.jpg', anio: '2022', m2: '120 m²', name: 'Hard Rock Cafe La Paz', tags: ['Iluminación'], desc: 'Producción e instalación de luminarias temáticas de alta especificación para franquicia internacional.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/hostal-nayra.jpg', anio: '2011', m2: '570 m²', name: 'Hostal Nayra', tags: ['Iluminación'], desc: 'Equipamiento de luminarias personalizadas para espacios de hospedaje turístico.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/taller-imcruz-megacenter.jpg', anio: '2010', m2: '820 m²', name: 'Taller IMCRUZ Megacenter', tags: ['Iluminación'], desc: 'Iluminación industrial técnica y ejecución de instalaciones eléctricas de fuerza.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/seguros-la-vitalicia.jpg', anio: '2025', m2: '650 m²', name: 'Seguros La Vitalicia', tags: ['Iluminación'], desc: 'Desarrollo y suministro de sistemas de iluminación corporativa moderna.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/residencia-mallasilla.jpg', anio: '2019', m2: '380 m²', name: 'Residencia Mallasilla', tags: ['Iluminación'], desc: 'Fabricación y montaje de luminarias decorativas para vivienda unifamiliar de lujo.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/showroom-mercedes-benz-autostar.jpg', anio: '2014', m2: '340 m²', name: 'Showroom Mercedes Benz - Autostar', tags: ['Iluminación'], desc: 'Aplicación de tecnología LED avanzada para la exhibición premium de automóviles.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/salas-de-venta-y-taller-mercedes-benz-autostar.jpg', anio: '2016', m2: '920 m²', name: 'Salas de Venta y Taller Mercedes Benz Autostar', tags: ['Iluminación'], desc: 'Infraestructura lumínica funcional dividida en áreas de atención al cliente y mantenimiento.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-multicine-la-paz.jpg', anio: '2013', m2: '2.350 m²', name: 'Iluminación Multicine La Paz', tags: ['Iluminación'], desc: 'Provisión e instalación de luminarias para áreas de circulación y entretenimiento.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-museo-musef.jpg', anio: '2006', m2: '1.400 m²', name: 'Iluminación Museo MUSEF', tags: ['Iluminación'], desc: 'Iluminación museográfica técnica para la correcta conservación y exhibición de piezas artísticas.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/museo-nacional-de-arte.jpg', anio: '2008', m2: '280 m²', name: 'Museo Nacional de Arte', tags: ['Iluminación'], desc: 'Especialización en iluminación de acento para la jerarquización de obras pictóricas y esculturas.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/museo-tambo-quirquincho.jpg', anio: '2007', m2: '420 m²', name: 'Museo Tambo Quirquincho', tags: ['Iluminación'], desc: 'Soluciones lumínicas de alta precisión para ambientes culturales de valor histórico.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/museo-palacio-portales-cochabamba.jpg', anio: '2007', m2: '245 m²', name: 'Museo Palacio Portales Cochabamba', tags: ['Iluminación'], desc: 'Diseño de luz arquitectónica para destacar la riqueza ornamental de las salas de exposición.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/museo-costumbrista-la-paz.jpg', anio: '2006', m2: '340 m²', name: 'Museo Costumbrista La Paz', tags: ['Iluminación'], desc: 'Adecuación de sistemas de iluminación funcional para recorridos museísticos.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/oficinas-corporativas-parque-18.jpg', anio: '2011', m2: '738 m²', name: 'Oficinas Corporativas Parque 18', tags: ['Iluminación'], desc: 'Fabricación y suministro de luminarias enfocadas en la productividad y confort visual.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/edificio-montecristo.jpg', anio: '2012', m2: '5.680 m²', name: 'Edificio Montecristo', tags: ['Iluminación'], desc: 'Dotación integral de luminarias residenciales y equipamiento eléctrico de bajo consumo.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/complejo-residencial-achumani.jpg', anio: '2013', m2: '2.800 m²', name: 'Complejo Residencial Achumani', tags: ['Iluminación'], desc: 'Suministro técnico de luminarias y sistemas de placas eléctricas para urbanización.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-restaurant-pollo-copacabana-la-paz.jpg', anio: '2008', m2: '735 m²', name: 'Iluminación Restaurant Pollo Copacabana La Paz', tags: ['Iluminación'], desc: 'Diseño y montaje de luminarias comerciales para alto flujo de público.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-restaurant-pollo-copacabana-santa-cruz.jpg', anio: '2009', m2: '200 m²', name: 'Iluminación Restaurant Pollo Copacabana Santa Cruz', tags: ['Iluminación'], desc: 'Implementación de iluminación característica de marca para sucursal comercial.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-parque-urbano-central.jpg', anio: '2005', m2: '20.640 m²', name: 'Iluminación Parque Urbano Central', tags: ['Iluminación'], desc: 'Desarrollo de postes decorativos y sistemas de iluminación exterior para grandes áreas urbanas.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-iglesia-de-san-francisco.jpg', anio: '2004', m2: '512 m²', name: 'Iluminación Iglesia de San Francisco', tags: ['Iluminación'], desc: 'Intervención lumínica patrimonial con énfasis en la puesta en valor de su emblemática fachada.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-colegio-saint-andrews-school.jpg', anio: '2009', m2: '5.783 m²', name: 'Iluminación Colegio Saint Andrews School', tags: ['Iluminación'], desc: 'Suministro de sistemas de iluminación para aulas y áreas deportivas escolares.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-residencia-humamanta.jpg', anio: '2025', m2: '492 m²', name: 'Iluminación Residencia Humamanta', tags: ['Iluminación'], desc: 'Proyecto residencial con tecnología LED de última generación y diseño minimalista.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-edificio-torre-azul.jpg', anio: '2008', m2: '5.322 m²', name: 'Iluminación Edificio Torre Azul', tags: ['Iluminación'], desc: 'Ejecución de iluminación técnica LED para uno de los edificios más icónicos del skyline paceño.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-edificio-corporativo-unicef-la-paz.jpg', anio: '2019', m2: '712 m²', name: 'Iluminación Edificio Corporativo UNICEF La Paz', tags: ['Iluminación'], desc: 'Instalación de luminarias LED profesionales para entornos de trabajo internacionales.' },
    { slug: null, img: 'todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-edificio-de-la-union-europea-la-paz.jpg', anio: '2015', m2: '2.600 m²', name: 'Iluminación Edificio de la Unión Europea La Paz', tags: ['Iluminación'], desc: 'Suministro y montaje de sistemas lumínicos eficientes para sede diplomática.' },


];


/*
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-residencia-8-de-calacoto.jpg', anio: '2013', m2: '365 m²', name: 'Iluminación Residencia 8 de Calacoto', tags: ['Iluminación', 'Residencial'], desc: 'Iluminación interior y exterior con luminarias de España.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/departamento-zapata.jpg', anio: '2013', m2: '285 m²', name: 'Departamento Zapata', tags: ['Iluminación', 'Residencial'], desc: 'Iluminación con luz indirecta, spots de empotrar y decorativas en 2 departamentos residenciales.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/laboratorio-bago.jpg', anio: '2024', m2: '540 m²', name: 'Laboratorio BAGÓ', tags: ['Iluminación', 'Industrial'], desc: 'Iluminación especial hermética para laboratorios de producción de departamentos.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/biblioteca-universidad-catolica.jpg', anio: '2014', m2: '1.280 m²', name: 'Biblioteca Universidad Católica', tags: ['Iluminación', 'Universidad'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/oficinas-la-boliviana-ciacruz-seguros.jpg', anio: '2014', m2: '560 m²', name: 'Oficinas La Boliviana CIACRUZ Seguros', tags: ['Iluminación', 'Corporativo'], desc: 'Fabricación, suministro e instalación de luminarias especiales con luz indirecta para gerencias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-corporacion-andina-de-fomento-caf.jpg', anio: '2012', m2: '1.173 m²', name: 'Iluminación Corporación Andina de Fomento CAF', tags: ['Iluminación', 'Corporativo'], desc: 'Edificio verde. Mejoramiento de consumo eléctrico en iluminación.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-locales-comerciales-caja-de-pandora-la-paz.jpg', anio: '2016', m2: '1.120 m²', name: 'Iluminación Locales Comerciales Caja de Pandora - La Paz', tags: ['Iluminación', 'Comercial'], desc: 'Fabricación, suministro e instalación de luminarias LED.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-locales-comerciales-caja-de-pandora-santa-cruz-cuarto-anillo.jpg', anio: '2015', m2: '420 m²', name: 'Iluminación Locales Comerciales Caja de Pandora - Santa Cruz (Cuarto Anillo)', tags: ['Iluminación', 'Comercial'], desc: 'Fabricación, suministro e instalación de luminarias LED e instalación eléctrica.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-locales-comerciales-caja-de-pandora-santa-cruz-av-irala-primer-anillo.jpg', anio: '2016', m2: '196 m²', name: 'Iluminación Locales Comerciales Caja de Pandora - Santa Cruz (Av. Irala - Primer Anillo)', tags: ['Iluminación', 'Comercial'], desc: 'Fabricación, suministro e instalación de luminarias LED e instalación eléctrica.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/hotel-suites-camino-real.jpg', anio: '2004', m2: '2.960 m²', name: 'Hotel Suites Camino Real', tags: ['Iluminación'], desc: 'Iluminación, placas y tableros eléctricos.' },

{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/iluminacion-campo-ferial-chuquiago-marka.jpg', anio: '2013', m2: '9.830 m²', name: 'Iluminación Campo Ferial Chuquiago Marka', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias para los salones de exposición.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/casa-del-camba-el-bosque.jpg', anio: '2022', m2: '345 m²', name: 'Casa del Camba (El Bosque)', tags: ['Restaurante', 'Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias LED.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/apart-hotel-casa-grande.jpg', anio: '2018', m2: '690 m²', name: 'Apart Hotel Casa Grande', tags: ['Iluminación'], desc: 'Iluminación y placas eléctricas.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/hotel-casa-grande.jpg', anio: '2016', m2: '4.200 m²', name: 'Hotel Casa Grande', tags: ['Iluminación'], desc: 'Iluminación, placas y tableros eléctricos.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/hotel-casa-grande-express.jpg', anio: '2019', m2: '1.100 m²', name: 'Hotel Casa Grande Express', tags: ['Iluminación'], desc: 'Placas y tableros eléctricos.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/oficinas-seguros-conesa-kieffer-y-asociados-sa.jpg', anio: '2013', m2: '120 m²', name: 'Oficinas Seguros Conesa Kieffer y Asociados S.A.', tags: ['Iluminación'], desc: 'Iluminación y placas eléctricas.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/edificio-marta-de-la-rocha.jpg', anio: '2012', m2: '1.500 m²', name: 'Edificio Marta de la Rocha', tags: ['Iluminación'], desc: 'Iluminación interior y exterior.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/dm-andino-resort-spa.jpg', anio: '2010', m2: '2.430 m²', name: 'DM Andino Resort & Spa', tags: ['Iluminación'], desc: 'Iluminación y placas eléctricas.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/edificio-america.jpg', anio: '2011', m2: '1.600 m²', name: 'Edificio América', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/estacion-de-servicio.jpg', anio: '2004', m2: '360 m²', name: 'Estación de Servicio', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias.' },

{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2015', m2: '300 m²', name: 'Showroom Volkswagen-Hansa', tags: ['Iluminación'], desc: 'Iluminacion de Showroom' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2022', m2: '120 m²', name: 'Hard Rock Cafe La Paz', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2011', m2: '570 m²', name: 'Hostal Nayra', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2010', m2: '820 m²', name: 'Taller IMCRUZ Megacenter', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias. Instalacion electrica' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2025', m2: '650 m²', name: 'Seguros La Vitalicia', tags: ['iluminacion'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2019', m2: '380 m²', name: 'Residencia Mallasilla', tags: ['Iluminacion'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2014', m2: '340 m²', name: 'Showroom Mercedez Benz - Autostar', tags: ['Iluminacion'], desc: 'Fabricación, suministro e instalación de luminarias LED.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2016', m2: '920 m²', name: 'Salas de venta y taller Bercedez Benz Autostar', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2013', m2: '2.350 m²', name: 'Iluminacion Multicine La Paz', tags: ['Iluminacion'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2006', m2: '1.400 m²', name: 'Iluminacion Museo Musef', tags: ['Iluminacion'], desc: 'Fabricación, suministro e instalación de luminarias.' },

{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2008', m2: '280 m²', name: 'Museo Nacional de Arte', tags: ['Iluminacion'], desc: 'Iluminacion especial de Museo' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2007', m2: '420 m²', name: 'Museo Tambo Quirquincho', tags: ['Iluminacion'], desc: 'Iluminacion especial de Museo' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2007', m2: '245 m²', name: 'Museo Palacio Portales Cochabamba', tags: ['Iluminacion'], desc: 'Iluminacion especial de Museo' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2006', m2: '340 m²', name: 'Museo Costumbrista La Paz', tags: ['Iluminacion'], desc: 'Iluminacion de Museo' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2011', m2: '738 m²', name: 'Oficinas Corporativas Parque 18', tags: ['Iluminacion'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2012', m2: '5.680 m²', name: 'Edificio Montecristo', tags: ['Iluminacion'], desc: 'Suministro de luminarias y placas electricas.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2013', m2: '2.800 m²', name: 'Complejo recidencial Achumani', tags: ['Iluminación'], desc: 'Suministro de luminarias y placas electricas.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2008', m2: '735 m²', name: 'Iluminacion Restaurant Pollo Copacabana La Paz', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2009', m2: '200 m²', name: 'Iluminacion Restaurant Pollo Copacabana Santa Cruz', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2005', m2: '20.640 m²', name: 'Iluminacion Parque Urban Central', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de Luminarias y postes decorativos' },

{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2004', m2: '512 m²', name: 'Iluminacion Iglesia de San Francisco', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de Luminarias. Iluminacion interior, exterior. Especial atencion en la iluminaicon de la fachada' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2009', m2: '5.783 m²', name: 'Iluminacion Colegio Saint Andrews School', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de Luminarias.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2025', m2: '492 m²', name: 'Iluminacion Residencia Humamanta', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de Luminarias LED.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2008', m2: '5.322 m²', name: 'Iluminacion Edificio Torre Azul', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de Luminarias LED.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2019', m2: '712 m²', name: 'Iluminacion Edificio Corporativo UNICEF La PAz', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de Luminarias LED.' },
{ slug: null, img: 'Obras/todas-las-obras/Imagenes/00-Sin-pagina/placeholder.jpg', anio: '2015', m2: '2.600 m²', name: 'Iluminacion Edificio de la Union Europea La PAz', tags: ['Iluminación'], desc: 'Fabricación, suministro e instalación de Luminarias LED.' },
*/



/* No modificar — esta línea expone el array al script de la página */
if (typeof window !== 'undefined') window.OBRAS = OBRAS;
