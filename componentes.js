/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  COMPONENTES.JS — Grupo B's                                      ║
 * ║  Bloques compartidos: franja superior, navbar, footer y WA.      ║
 * ║                                                                  ║
 * ║  CÓMO USAR EN CADA PÁGINA:                                       ║
 * ║  Poné esto ANTES del <script src="componentes.js">:              ║
 * ║                                                                  ║
 * ║  <script>                                                        ║
 * ║    var BASE        = './';          // raíz: './' · blogs: '../' ║
 * ║    var NAVBAR_TEMA = 'dark';        // 'dark' o 'light'          ║
 * ║    var FOOTER_TEMA = 'dark';        // 'dark' o 'light'          ║
 * ║    var NAV_ACTIVO  = 'inicio';      // ver lista abajo           ║
 * ║  </script>                                                       ║
 * ║                                                                  ║
 * ║  Valores válidos para NAV_ACTIVO:                                ║
 * ║    'inicio' · 'nosotros' · 'servicios' · 'obras'                 ║
 * ║    'blog'   · 'contacto'                                         ║
 * ║                                                                  ║
 * ║  Ponés estos placeholders en el HTML donde querés cada bloque:   ║
 * ║    <div id="gb-franja"></div>   ← franja superior                ║
 * ║    <div id="gb-navbar"></div>   ← navbar + menú móvil            ║
 * ║    <div id="gb-footer"></div>   ← footer                         ║
 * ║  El botón de WhatsApp se agrega solo al final del body.          ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */


/* ════════════════════════════════════════════════════════════════════
   CONFIGURACIÓN DE CONTACTO
   Editá solo este bloque. Todos los links, teléfonos, email y redes
   se actualizan solos en toda la página al cambiar los valores acá.
   ════════════════════════════════════════════════════════════════════ */
var CONFIG = {

    // ── WhatsApp ────────────────────────────────────────────────────
    // Número sin espacios ni '+'. Ejemplo: 5493516661234
    wsp1: {
        numero: '5493513579053',              // ← CAMBIAR
        display: '+54 9 351 357-9053',         // ← CAMBIAR
        texto: 'Buenas%20tardes.%20Estaba%20interesado%20en%20construir%20con%20Grupo%20Bs.'
    },
    wsp2: {
        numero: '5493517447070',              // ← CAMBIAR
        display: '+54 9 351 744-7070',         // ← CAMBIAR
        texto: 'Buenas%20tardes.'
    },

    // ── Email ────────────────────────────────────────────────────────
    email: 'grupobs.contacto@gmail.com',          // ← CAMBIAR

    // ── Redes sociales (URL completa del perfil) ─────────────────────
    instagram: 'https://www.instagram.com/grupo_bs_/',                             // ← CAMBIAR
    facebook: 'https://www.facebook.com/OficialGrupobs',                             // ← CAMBIAR
    youtube: 'https://www.youtube.com/@GrupoBs-YT'                              // ← CAMBIAR

};
/* ══════════════════════════════════════════════════════════════════
   Fin del bloque de configuración. No modificar lo que sigue.
   ══════════════════════════════════════════════════════════════════ */


(function () {

    /* ── Defaults de variables de página ────────────────────────── */
    var BASE = (typeof window.BASE !== 'undefined') ? window.BASE : './';
    var NAVBAR_TEMA = (typeof window.NAVBAR_TEMA !== 'undefined') ? window.NAVBAR_TEMA : 'dark';
    var FOOTER_TEMA = (typeof window.FOOTER_TEMA !== 'undefined') ? window.FOOTER_TEMA : 'dark';
    var NAV_ACTIVO = (typeof window.NAV_ACTIVO !== 'undefined') ? window.NAV_ACTIVO : autodetectarActivo();

    function autodetectarActivo() {
        var p = window.location.pathname;
        if (p.indexOf('/blogs/') !== -1 || p.indexOf('blog') !== -1) return 'blog';
        if (p.indexOf('nosotros') !== -1) return 'nosotros';
        if (p.indexOf('obras') !== -1) return 'obras';
        if (p.indexOf('contacto') !== -1) return 'contacto';
        if (p.indexOf('diseno') !== -1 ||
            p.indexOf('ejecucion') !== -1 ||
            p.indexOf('iluminacion') !== -1) return 'servicios';
        if (p === '/' || p.indexOf('index') !== -1) return 'inicio';
        return '';
    }

    /* ── URLs de WhatsApp ────────────────────────────────────────── */
    var WSP1_URL = 'https://wa.me/' + CONFIG.wsp1.numero + '?text=' + CONFIG.wsp1.texto;
    var WSP2_URL = 'https://wa.me/' + CONFIG.wsp2.numero + '?text=' + CONFIG.wsp2.texto;


    /* ════════════════════════════════════════════════════════════════
       1. INYECCIÓN DE CSS
       ════════════════════════════════════════════════════════════════ */
    function inyectarCSS() {
        var css = /*css*/`

/* ── Variables (por si la página no las tiene) ── */
:root {
    --primary:   #1B2A4A;
    --accent:    #C9A96E;
    --sec-blue:  #2C5F8A;
    --bg-warm:   #F8F6F2;
    --pearl:     #EDEAE4;
    --charcoal:  #2D2D2D;
    --footer-bg: #111d33;
    --white:     #ffffff;
    --wsp-green: #25d366;
}

/* ────────────────────────────────────────────────
   BLOQUE 1 — FRANJA SUPERIOR
──────────────────────────────────────────────── */
#franja-contacto {
    background-color: var(--footer-bg);
    color: rgba(237,234,228,.75);
    padding: 7px 32px;
    display: flex; align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; gap: 10px;
    font-size: .78rem; letter-spacing: .04em;
    border-bottom: 1px solid rgba(201,169,110,.15);
    font-family: 'Inter', sans-serif;
}
.gb-franja-izq { display:flex; align-items:center; gap:20px; flex-wrap:wrap; }
.gb-franja-izq a,
.gb-franja-izq .gb-mail-item {
    color:rgba(237,234,228,.75); display:flex; align-items:center;
    gap:7px; font-weight:500; transition:color .2s; text-decoration:none;
}
.gb-franja-izq a:hover    { color:var(--accent); }
.gb-franja-izq a i        { color:var(--wsp-green); font-size:.95rem; }
.gb-franja-izq .gb-mail-item i { color:var(--accent); font-size:.95rem; }
.gb-franja-redes { display:flex; align-items:center; gap:14px; }
.gb-franja-redes a {
    color:rgba(237,234,228,.6); font-size:1rem;
    transition:color .2s, transform .2s; display:flex; align-items:center;
    text-decoration:none;
}
.gb-franja-redes a:hover { color:var(--accent); transform:translateY(-2px); }

/* ────────────────────────────────────────────────
   BLOQUE 2 — NAVBAR (base compartida)
──────────────────────────────────────────────── */
#navbar {
    position: sticky; top: 0; z-index: 1000;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 2px solid var(--accent);  /* línea dorada en ambos temas */
    font-family: 'Inter', sans-serif;
}
.nav-inner {
    max-width: 1280px; margin: 0 auto;
    padding: 0 32px; height: 74px;
    display: flex; align-items: center;
    justify-content: space-between; gap: 16px;
}
.nav-logo a { display:flex; align-items:center; gap:12px; text-decoration:none; }
.logo-icon-box {
    width:36px; height:36px; background:var(--accent); border-radius:8px;
    display:flex; align-items:center; justify-content:center; overflow:hidden;
}
.logo-icon-box img { width:80%; height:80%; object-fit:cover; }
.logo-text { font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:700; letter-spacing:.15em; }
.menu-desktop { display:flex; align-items:center; gap:4px; }
.menu-desktop > a,
.menu-desktop .dropdown-toggle {
    font-size:.72rem; font-weight:600; letter-spacing:.12em; text-transform:uppercase;
    padding:8px 13px; border-radius:6px; transition:color .2s, background .2s;
    display:flex; align-items:center; gap:5px; cursor:pointer;
    background:none; border:none; font-family:'Inter',sans-serif; white-space:nowrap;
    text-decoration:none;
}
.menu-desktop .nav-blogs, #menu-movil .nav-blogs {
    font-family:'Dancing Script',cursive; font-size:1.1rem;
    font-style:italic; text-transform:none; letter-spacing:.02em;
}
.dropdown { position:relative; }
.dropdown .chevron { font-size:.62rem; transition:transform .2s; }
.dropdown:hover .chevron { transform:rotate(180deg); }
.dropdown::after { content:''; position:absolute; top:100%; left:0; width:100%; height:12px; }
.dropdown-menu {
    display:none; position:absolute; top:calc(100% + 10px); left:0;
    background:var(--primary); border:1px solid rgba(201,169,110,.2);
    border-radius:8px; box-shadow:0 16px 48px rgba(0,0,0,.3);
    min-width:240px; z-index:999; overflow:hidden;
}
.dropdown-menu a {
    display:block; padding:11px 20px;
    color:rgba(237,234,228,.75); font-size:.75rem; font-weight:500;
    letter-spacing:.06em; text-transform:uppercase;
    transition:background .15s, color .15s;
    border-bottom:1px solid rgba(255,255,255,.06); text-decoration:none;
}
.dropdown-menu a:last-child { border-bottom:none; }
.dropdown-menu a:hover { background:rgba(201,169,110,.12); color:var(--accent); }
.dropdown:hover .dropdown-menu { display:block; }
.btn-contactar {
    display:inline-flex; align-items:center; justify-content:center; gap:7px;
    border-radius:8px; padding:9px 22px; font-size:.72rem; font-weight:700;
    letter-spacing:.12em; text-transform:uppercase; transition:all .3s;
    white-space:nowrap; text-decoration:none; font-family:'Inter',sans-serif;
}
#btn-hamburguesa {
    display:none; background:none; border:none; cursor:pointer;
    flex-direction:column; gap:5px; padding:4px;
}
#btn-hamburguesa span {
    display:block; width:24px; height:2px; border-radius:2px;
    transition:transform .3s, opacity .3s;
}
#btn-hamburguesa.abierto span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
#btn-hamburguesa.abierto span:nth-child(2) { opacity:0; }
#btn-hamburguesa.abierto span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }
#menu-movil {
    display:none; flex-direction:column; background:var(--primary);
    border-top:1px solid rgba(201,169,110,.15); position:fixed;
    left:0; right:0; z-index:999; overflow-y:auto;
    box-shadow:0 12px 40px rgba(0,0,0,.4);
}
#menu-movil.visible { display:flex; }
#menu-movil a {
    color:rgba(237,234,228,.8); font-weight:500; font-size:.75rem;
    letter-spacing:.12em; text-transform:uppercase; padding:15px 28px;
    border-bottom:1px solid rgba(255,255,255,.06); transition:color .2s, background .2s;
    text-decoration:none;
}
#menu-movil a:hover { color:var(--accent); background:rgba(201,169,110,.06); }
#menu-movil a.nav-active-mob { color:var(--accent); font-weight:700; }
.movil-seccion-titulo {
    padding:15px 28px; border-bottom:1px solid rgba(255,255,255,.06);
    font-weight:600; font-size:.75rem; letter-spacing:.12em; text-transform:uppercase;
    color:rgba(237,234,228,.8); display:flex; align-items:center;
    justify-content:space-between; cursor:pointer; user-select:none; transition:color .2s;
    font-family:'Inter',sans-serif;
}
.movil-seccion-titulo:hover { color:var(--accent); }
.chevron-movil { font-size:.62rem; transition:transform .25s; }
.movil-seccion-titulo.expandido .chevron-movil { transform:rotate(180deg); }
#submenu-servicios-movil { display:none; flex-direction:column; }
#submenu-servicios-movil.visible { display:flex; }
#menu-movil a.submenu-item {
    padding-left:48px; font-size:.7rem; font-weight:400;
    letter-spacing:.08em; color:rgba(237,234,228,.5); background:rgba(0,0,0,.12);
}
#menu-movil a.submenu-item:hover { color:var(--accent); }
.movil-contactar-wrapper { padding:18px 28px; border-bottom:1px solid rgba(255,255,255,.06); }
.movil-contactar-wrapper .btn-contactar { width:100%; justify-content:center; padding:12px; }

/* ── Tema DARK (fondo marino, texto blanco) ── */
#navbar.tema-dark {
    background-color: rgba(27,42,74,.97);
}
#navbar.tema-dark .logo-text { color:var(--white); }
#navbar.tema-dark .menu-desktop > a,
#navbar.tema-dark .menu-desktop .dropdown-toggle { color:rgba(255,255,255,.8); }
#navbar.tema-dark .menu-desktop > a:hover,
#navbar.tema-dark .menu-desktop .dropdown:hover .dropdown-toggle {
    color:var(--accent); background:rgba(201,169,110,.08);
}
#navbar.tema-dark .menu-desktop > a.nav-active {
    color:var(--accent);
    box-shadow:0 2px 0 0 var(--accent);
    border-radius:0; padding-bottom:6px;
}
#navbar.tema-dark .btn-contactar {
    border:1px solid rgba(201,169,110,.35);
    background:rgba(201,169,110,.1); color:var(--accent);
}
#navbar.tema-dark .btn-contactar:hover { background:var(--accent); color:var(--primary); }
#navbar.tema-dark #btn-hamburguesa span { background:rgba(237,234,228,.85); }

/* ── Tema LIGHT (fondo blanco, texto marino) ── */
#navbar.tema-light {
    background-color: var(--white);
    box-shadow: 0 2px 16px rgba(27,42,74,.07);
}
#navbar.tema-light .logo-text { color:var(--primary); }
#navbar.tema-light .menu-desktop > a,
#navbar.tema-light .menu-desktop .dropdown-toggle { color:rgba(27,42,74,.75); }
#navbar.tema-light .menu-desktop > a:hover,
#navbar.tema-light .menu-desktop .dropdown:hover .dropdown-toggle {
    color:var(--accent); background:rgba(201,169,110,.08);
}
#navbar.tema-light .menu-desktop > a.nav-active {
    color:var(--primary); font-weight:700;
    box-shadow:0 2px 0 0 var(--accent);
    border-radius:0; padding-bottom:6px;
}
#navbar.tema-light .btn-contactar {
    background:var(--primary); color:var(--white); border:none;
}
#navbar.tema-light .btn-contactar:hover { background:var(--accent); color:var(--primary); }
#navbar.tema-light .btn-contactar.pagina-actual {
    background:var(--accent); color:var(--primary); pointer-events:none;
}
#navbar.tema-light #btn-hamburguesa span { background:var(--primary); }

/* ────────────────────────────────────────────────
   BLOQUE 3 — FOOTER (base compartida)
──────────────────────────────────────────────── */
#footer {
    padding:64px 32px 28px;
    font-family:'Inter',sans-serif;
}
.footer-grid {
    max-width:1280px; margin:0 auto;
    display:grid; grid-template-columns:1.6fr 1fr 1.4fr 1fr;
    gap:48px; align-items:start;
    padding-bottom:44px;
}
.footer-marca { display:flex; flex-direction:column; gap:16px; }
.footer-logo-link { display:inline-flex; align-items:center; gap:10px; text-decoration:none; }
.footer-logo-icon {
    width:34px; height:34px; background:var(--accent); border-radius:8px;
    display:flex; align-items:center; justify-content:center; overflow:hidden;
}
.footer-logo-icon img { width:80%; height:80%; object-fit:contain; }
.footer-col h4 {
    font-size:.65rem; font-weight:700;
    text-transform:uppercase; letter-spacing:.22em;
    margin-bottom:22px; position:relative; padding-bottom:10px;
    font-family:'Inter',sans-serif;
}
.footer-col h4::after {
    content:''; position:absolute; left:0; bottom:0;
    width:22px; height:2px; background:var(--accent); border-radius:2px;
}
.footer-col.menu-col a {
    display:block; font-size:.82rem;
    margin-bottom:10px; font-weight:400; transition:color .2s, padding-left .2s;
    text-decoration:none;
}
.footer-col.menu-col a:hover { color:var(--accent); padding-left:4px; }
.footer-col.menu-col a.footer-blogs { font-family:'Dancing Script',cursive; font-size:.98rem; font-style:italic; }
.footer-col.menu-col a.footer-active { color:var(--accent); font-weight:600; }
.footer-contacto-item { display:flex; align-items:flex-start; gap:10px; margin-bottom:13px; font-size:.82rem; }
.footer-contacto-item i { margin-top:2px; font-size:.9rem; flex-shrink:0; }
.footer-contacto-item.wsp i { color:var(--wsp-green); }
.footer-contacto-item.mail i { color:var(--accent); }
.footer-contacto-item a { transition:color .2s; text-decoration:none; }
.footer-contacto-item a:hover { color:var(--accent); }
.ing-label { font-size:.72rem; margin-left:3px; }
.footer-red-item {
    display:flex; align-items:center; gap:12px; margin-bottom:11px;
    font-size:.82rem; transition:color .2s, gap .2s;
    text-decoration:none;
}
.footer-red-item i { font-size:1.1rem; width:18px; text-align:center; }
.footer-red-item:hover { color:var(--accent); gap:16px; }
.footer-bottom {
    max-width:1280px; margin:0 auto; padding-top:22px;
    display:flex; flex-wrap:wrap; justify-content:space-between;
    align-items:center; gap:10px; font-size:.68rem;
    letter-spacing:.1em; text-transform:uppercase;
}
.footer-bottom-links { display:flex; gap:24px; }
.footer-bottom-links a { transition:color .2s; text-decoration:none; }

/* ── Footer DARK (fondo marino oscuro) ── */
#footer.tema-dark {
    background:var(--footer-bg); color:rgba(237,234,228,.65);
    border-top:1px solid rgba(255,255,255,.05);
}
#footer.tema-dark .footer-grid {
    border-bottom:1px solid rgba(255,255,255,.08);
}
#footer.tema-dark .footer-brand-name { color:var(--white); font-family:'Cormorant Garamond',serif; font-size:1.15rem; font-weight:700; letter-spacing:.14em; }
#footer.tema-dark .footer-tagline { font-size:.8rem; line-height:1.7; color:rgba(237,234,228,.45); font-weight:300; max-width:220px; }
#footer.tema-dark .footer-col h4 { color:var(--white); }
#footer.tema-dark .footer-col.menu-col a { color:rgba(237,234,228,.6); }
#footer.tema-dark .footer-contacto-item { color:rgba(237,234,228,.6); }
#footer.tema-dark .footer-contacto-item a { color:rgba(237,234,228,.6); }
#footer.tema-dark .ing-label { color:rgba(237,234,228,.3); }
#footer.tema-dark .footer-red-item { color:rgba(237,234,228,.6); }
#footer.tema-dark .footer-bottom { color:rgba(237,234,228,.28); }
#footer.tema-dark .footer-bottom-links a { color:rgba(237,234,228,.28); }
#footer.tema-dark .footer-bottom-links a:hover { color:rgba(237,234,228,.6); }

/* ── Footer LIGHT (fondo cálido, texto marino) ── */
#footer.tema-light {
    background:var(--bg-warm); color:rgba(27,42,74,.6);
    border-top:2px solid var(--accent);
}
#footer.tema-light .footer-grid {
    border-bottom:1px solid rgba(27,42,74,.1);
}
#footer.tema-light .footer-brand-name { color:var(--primary); font-family:'Cormorant Garamond',serif; font-size:1.15rem; font-weight:700; letter-spacing:.14em; }
#footer.tema-light .footer-tagline { font-size:.8rem; line-height:1.7; color:rgba(27,42,74,.5); font-weight:300; max-width:220px; }
#footer.tema-light .footer-col h4 { color:var(--primary); }
#footer.tema-light .footer-col.menu-col a { color:rgba(27,42,74,.6); }
#footer.tema-light .footer-col.menu-col a:hover { color:var(--accent); }
#footer.tema-light .footer-contacto-item { color:rgba(27,42,74,.6); }
#footer.tema-light .footer-contacto-item a { color:rgba(27,42,74,.6); }
#footer.tema-light .footer-contacto-item a:hover { color:var(--accent); }
#footer.tema-light .ing-label { color:rgba(27,42,74,.3); }
#footer.tema-light .footer-red-item { color:rgba(27,42,74,.6); }
#footer.tema-light .footer-red-item:hover { color:var(--accent); }
#footer.tema-light .footer-bottom { color:rgba(27,42,74,.35); }
#footer.tema-light .footer-bottom-links a { color:rgba(27,42,74,.35); }
#footer.tema-light .footer-bottom-links a:hover { color:var(--primary); }

/* ────────────────────────────────────────────────
   BLOQUE 4 — BOTÓN WHATSAPP FLOTANTE
──────────────────────────────────────────────── */
#whatsapp-flotante {
    position:fixed; bottom:28px; right:28px; z-index:9999;
    width:58px; height:58px; background:var(--wsp-green); border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 4px 20px rgba(37,211,102,.45);
    transition:transform .25s, box-shadow .25s;
    animation:gb-wsp-pulso 2.5s infinite; text-decoration:none;
}
#whatsapp-flotante:hover {
    transform:scale(1.12); box-shadow:0 6px 28px rgba(37,211,102,.65); animation:none;
}
#whatsapp-flotante i { color:#fff; font-size:1.9rem; }
#whatsapp-flotante::before {
    content:'¡Escribinos!'; position:absolute; right:66px;
    background:var(--primary); color:#fff; font-size:.72rem;
    font-weight:600; font-family:'Inter',sans-serif; letter-spacing:.06em;
    padding:6px 12px; border-radius:20px; white-space:nowrap;
    opacity:0; transform:translateX(8px);
    transition:opacity .2s, transform .2s; pointer-events:none;
    border:1px solid rgba(201,169,110,.2);
}
#whatsapp-flotante:hover::before { opacity:1; transform:translateX(0); }
@keyframes gb-wsp-pulso {
    0%  { box-shadow:0 0 0 0 rgba(37,211,102,.5); }
    70% { box-shadow:0 0 0 14px rgba(37,211,102,0); }
    100%{ box-shadow:0 0 0 0 rgba(37,211,102,0); }
}

/* ── Responsive ─────────────────────────────── */
@media (max-width:768px) {
    .menu-desktop { display:none; }
    .btn-contactar.desktop-only { display:none; }
    #btn-hamburguesa { display:flex; }
    .nav-inner { padding:0 20px; height:64px; }
    /* Franja: una sola fila compacta en tablet */
    #franja-contacto { padding:6px 16px; gap:12px; flex-wrap:nowrap; }
    .gb-franja-izq { gap:14px; }
    .footer-grid { grid-template-columns:1fr 1fr; gap:36px; }
    .footer-marca { grid-column:1 / -1; }
}
@media (max-width:480px) {
    /* Franja: UNA SOLA FILA — solo WhatsApp + redes, nunca se rompe */
    #franja-contacto {
        flex-wrap: nowrap;          /* nunca pasa a dos filas            */
        justify-content: space-between;
        padding: 5px 14px;
        gap: 8px;
        overflow: hidden;
    }
    /* Ocultar el mail en pantallas muy pequeñas */
    .gb-mail-item { display: none !important; }
    /* Solo el número de WhatsApp, sin texto adicional si hay poco espacio */
    .gb-franja-izq { gap: 0; flex-wrap: nowrap; }
    /* Redes a la derecha, más compactas */
    .gb-franja-redes { gap: 10px; flex-shrink: 0; }
    /* Footer */
    .footer-grid { grid-template-columns:1fr; }
    .footer-bottom { flex-direction:column; align-items:center; text-align:center; gap:8px; }
}
        `;

        var style = document.createElement('style');
        style.id = 'gb-styles';
        style.textContent = css;
        document.head.appendChild(style);
    }


    /* ════════════════════════════════════════════════════════════════
       2. HTML DE CADA BLOQUE
       ════════════════════════════════════════════════════════════════ */

    /* ── Bloque 1: Franja superior ─────────────────────────────── */
    function htmlFranja() {
        return (
            '<div id="franja-contacto">' +
            '<div class="gb-franja-izq">' +
            '<a href="' + WSP1_URL + '" target="_blank" rel="noopener noreferrer">' +
            '<i class="fa-brands fa-whatsapp"></i>' +
            '<span class="gb-wsp1-display">' + CONFIG.wsp1.display + '</span>' +
            '</a>' +
            '<span class="gb-mail-item">' +
            '<i class="fa-solid fa-envelope"></i>' +
            '<a href="mailto:' + CONFIG.email + '" class="gb-email-link">' + CONFIG.email + '</a>' +
            '</span>' +
            '</div>' +
            '<div class="gb-franja-redes">' +
            '<a href="' + CONFIG.instagram + '" target="_blank" rel="noopener noreferrer" title="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
            '<a href="' + CONFIG.facebook + '" target="_blank" rel="noopener noreferrer" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
            '<a href="' + CONFIG.youtube + '" target="_blank" rel="noopener noreferrer" title="YouTube"><i class="fa-brands fa-youtube"></i></a>' +
            '</div>' +
            '</div>'
        );
    }

    /* ── Bloque 2: Navbar + Menú móvil ─────────────────────────── */
    function htmlNavbar() {
        /* Determina qué ítem queda activo */
        var esInicio = NAV_ACTIVO === 'inicio';
        var esNosotros = NAV_ACTIVO === 'nosotros';
        var esObras = NAV_ACTIVO === 'obras';
        var esBlog = NAV_ACTIVO === 'blog';
        var esContacto = NAV_ACTIVO === 'contacto';

        /* Clases nav-active según ítem */
        function actClass(nombre) {
            return (NAV_ACTIVO === nombre) ? ' class="nav-active"' : '';
        }
        function actClassMob(nombre) {
            return (NAV_ACTIVO === nombre) ? ' class="nav-active-mob"' : '';
        }

        /* Botón Contactar: varía según tema y si es la página activa */
        var btnContactar;
        if (NAVBAR_TEMA === 'light' && esContacto) {
            btnContactar = '<a class="btn-contactar desktop-only pagina-actual" href="' + BASE + 'contacto.html">' +
                '<i class="fa-solid fa-envelope" style="font-size:.75rem;"></i> Contacto</a>';
        } else {
            btnContactar = '<a class="btn-contactar desktop-only" href="' + BASE + 'contacto.html"><i class="fa-solid fa-envelope" style="font-size:.75rem;"></i> Contactar</a>';
        }

        return (
            '<header id="navbar" class="tema-' + NAVBAR_TEMA + '">' +
            '<div class="nav-inner">' +
            '<div class="nav-logo">' +
            '<a href="' + BASE + 'index.html">' +
            '<span class="logo-icon-box">' +
            '<img src="' + BASE + '01 - Fotos/00 - Fotos barra de navegacion principal/Logo 2.png" alt="Ícono Grupo B\'s">' +
            '</span>' +
            '<span class="logo-text">GRUPO B\'s</span>' +
            '</a>' +
            '</div>' +
            '<nav class="menu-desktop">' +
            '<a href="' + BASE + 'index.html"' + actClass('inicio') + '>Inicio</a>' +
            '<div class="dropdown">' +
            '<button class="dropdown-toggle' + (NAV_ACTIVO === 'servicios' ? ' nav-active' : '') + '">' +
            'Servicios <i class="fa-solid fa-chevron-down chevron"></i>' +
            '</button>' +
            '<div class="dropdown-menu">' +
            '<a href="' + BASE + 'diseno-y-proyecto.html#anteproyecto">Elaboración de anteproyecto</a>' +
            '<a href="' + BASE + 'diseno-y-proyecto.html#proyecto-ejecutivo">Elaboración de proyecto ejecutivo</a>' +
            '<a href="' + BASE + 'ejecucion-del-proyecto.html#gestion-y-direccion">Gestión y dirección</a>' +
            '<a href="' + BASE + 'ejecucion-del-proyecto.html#construccion-integral">Construcción integral</a>' +
            '<a href="' + BASE + 'iluminacion.html">Iluminación</a>' +
            '</div>' +
            '</div>' +
            '<a href="' + BASE + 'nosotros.html"' + actClass('nosotros') + '>Nosotros</a>' +
            '<a href="' + BASE + 'obras.html"' + actClass('obras') + '>Obras</a>' +
            '<a href="' + BASE + 'blog.html" class="nav-blogs' + (esBlog ? ' nav-active' : '') + '">Blogs</a>' +
            '</nav>' +
            '<div style="display:flex;align-items:center;gap:16px;">' +
            btnContactar +
            '<button id="btn-hamburguesa" aria-label="Abrir menú"><span></span><span></span><span></span></button>' +
            '</div>' +
            '</div>' +
            '</header>' +

            /* Menú móvil */
            '<nav id="menu-movil">' +
            '<a href="' + BASE + 'index.html"' + actClassMob('inicio') + '>Inicio</a>' +
            '<div class="movil-seccion-titulo" id="toggle-servicios-movil">' +
            'Servicios <i class="fa-solid fa-chevron-down chevron-movil"></i>' +
            '</div>' +
            '<div id="submenu-servicios-movil">' +
            '<a class="submenu-item" href="' + BASE + 'diseno-y-proyecto.html#anteproyecto">Elaboración de anteproyecto</a>' +
            '<a class="submenu-item" href="' + BASE + 'diseno-y-proyecto.html#proyecto-ejecutivo">Elaboración de proyecto ejecutivo</a>' +
            '<a class="submenu-item" href="' + BASE + 'ejecucion-del-proyecto.html#gestion-y-direccion">Gestión y dirección</a>' +
            '<a class="submenu-item" href="' + BASE + 'ejecucion-del-proyecto.html#construccion-integral">Construcción integral</a>' +
            '<a class="submenu-item" href="' + BASE + 'iluminacion.html">Iluminación</a>' +
            '</div>' +
            '<a href="' + BASE + 'nosotros.html"' + actClassMob('nosotros') + '>Nosotros</a>' +
            '<a href="' + BASE + 'obras.html"' + actClassMob('obras') + '>Obras</a>' +
            '<a href="' + BASE + 'blog.html" class="nav-blogs' + (esBlog ? ' nav-active-mob' : '') + '">Blogs</a>' +
            '<a href="' + BASE + 'contacto.html"' + actClassMob('contacto') + '>Contacto</a>' +
            '<div class="movil-contactar-wrapper">' +
            '<a class="btn-contactar" href="' + WSP1_URL + '" target="_blank" rel="noopener noreferrer">' +
            '<i class="fa-brands fa-whatsapp" style="font-size:.85rem;"></i> WhatsApp' +
            '</a>' +
            '</div>' +
            '</nav>'
        );
    }

    /* ── Bloque 3: Footer ──────────────────────────────────────── */
    function htmlFooter() {
        function activeClass(nombre) {
            return (NAV_ACTIVO === nombre) ? ' footer-active' : '';
        }
        return (
            '<footer id="footer" class="tema-' + FOOTER_TEMA + '">' +
            '<div class="footer-grid">' +
            '<div class="footer-marca">' +
            '<a class="footer-logo-link" href="' + BASE + 'index.html">' +
            '<span class="footer-logo-icon">' +
            '<img src="' + BASE + '01 - Fotos/00 - Fotos barra de navegacion principal/Logo 2.png" alt="Ícono Grupo B\'s">' +
            '</span>' +
            '<span class="footer-brand-name">GRUPO B\'s</span>' +
            '</a>' +
            '<p class="footer-tagline">Ingeniería, arquitectura e iluminación de alta gama. Más de 25 años transformando el sueño del hogar en realidad, con seguridad, compromiso y fiabilidad.</p>' +
            '</div>' +
            '<div class="footer-col menu-col">' +
            '<h4>Menú</h4>' +
            '<a href="' + BASE + 'index.html"              class="' + activeClass('inicio') + '">Inicio</a>' +
            '<a href="' + BASE + 'nosotros.html"           class="' + activeClass('nosotros') + '">Nosotros</a>' +
            '<a href="' + BASE + 'diseno-y-proyecto.html"  class="' + activeClass('servicios') + '">Diseño y Proyecto</a>' +
            '<a href="' + BASE + 'ejecucion-del-proyecto.html">Ejecución de Obra</a>' +
            '<a href="' + BASE + 'iluminacion.html">Iluminación</a>' +
            '<a href="' + BASE + 'obras.html"              class="' + activeClass('obras') + '">Obras</a>' +
            '<a href="' + BASE + 'blog.html" class="footer-blogs' + activeClass('blog') + '">Blogs</a>' +
            '<a href="' + BASE + 'contacto.html"           class="' + activeClass('contacto') + '">Contacto</a>' +
            '</div>' +
            '<div class="footer-col">' +
            '<h4>Contacto</h4>' +
            '<div class="footer-contacto-item wsp">' +
            '<i class="fa-brands fa-whatsapp"></i>' +
            '<div>' +
            '<a href="' + WSP1_URL + '" target="_blank" rel="noopener noreferrer">' + CONFIG.wsp1.display + '</a>' +
            '<span class="ing-label">(Ing. Jhonatan Sequeiros)</span>' +
            '</div>' +
            '</div>' +
            '<div class="footer-contacto-item wsp">' +
            '<i class="fa-brands fa-whatsapp"></i>' +
            '<div>' +
            '<a href="' + WSP2_URL + '" target="_blank" rel="noopener noreferrer">' + CONFIG.wsp2.display + '</a>' +
            '<span class="ing-label">(Ing. Felipe Sequeiros)</span>' +
            '</div>' +
            '</div>' +
            '<div class="footer-contacto-item mail">' +
            '<i class="fa-solid fa-envelope"></i>' +
            '<a href="mailto:' + CONFIG.email + '">' + CONFIG.email + '</a>' +
            '</div>' +
            '</div>' +
            '<div class="footer-col">' +
            '<h4>Redes Sociales</h4>' +
            '<a class="footer-red-item" href="' + CONFIG.instagram + '" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i> Instagram</a>' +
            '<a class="footer-red-item" href="' + CONFIG.facebook + '" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i> Facebook</a>' +
            '<a class="footer-red-item" href="' + CONFIG.youtube + '" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i> YouTube</a>' +
            '</div>' +
            '</div>' +
            '<div class="footer-bottom">' +
            '<p>© 2026 Grupo B\'s. Todos los derechos reservados.</p>' +
            '<div class="footer-bottom-links">' +
            '<a href="' + BASE + 'privacidad.html">Privacidad</a>' +
            '</div>' +
            '</div>' +
            '</footer>'
        );
    }

    /* ── Bloque 4: Botón WhatsApp flotante ─────────────────────── */
    function htmlWspFlotante() {
        return (
            '<a id="whatsapp-flotante" href="' + WSP1_URL + '" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">' +
            '<i class="fa-brands fa-whatsapp"></i>' +
            '</a>'
        );
    }


    /* ════════════════════════════════════════════════════════════════
       3. INYECCIÓN EN EL DOM
       ════════════════════════════════════════════════════════════════ */
    function inyectarBloques() {
        var elFranja = document.getElementById('gb-franja');
        var elNavbar = document.getElementById('gb-navbar');
        var elFooter = document.getElementById('gb-footer');

        if (elFranja) elFranja.outerHTML = htmlFranja();
        if (elNavbar) elNavbar.outerHTML = htmlNavbar();
        if (elFooter) elFooter.outerHTML = htmlFooter();

        /* WhatsApp flotante: se agrega al body si no existe ya */
        if (!document.getElementById('whatsapp-flotante')) {
            var wsp = document.createElement('div');
            wsp.innerHTML = htmlWspFlotante();
            document.body.appendChild(wsp.firstElementChild);
        }
    }


    /* ════════════════════════════════════════════════════════════════
       4. COMPORTAMIENTO JS (hamburguesa, acordeón servicios)
       ════════════════════════════════════════════════════════════════ */
    function inicializarNavbar() {
        var btnHamb = document.getElementById('btn-hamburguesa');
        var menuMovil = document.getElementById('menu-movil');
        var navbar = document.getElementById('navbar');
        var toggleServ = document.getElementById('toggle-servicios-movil');
        var submenuServ = document.getElementById('submenu-servicios-movil');

        if (!btnHamb || !menuMovil || !navbar) return;

        function posicionarMenu() {
            var y = navbar.getBoundingClientRect().bottom;
            menuMovil.style.top = y + 'px';
            menuMovil.style.maxHeight = (window.innerHeight - y) + 'px';
        }

        btnHamb.addEventListener('click', function () {
            btnHamb.classList.toggle('abierto');
            menuMovil.classList.toggle('visible');
            if (menuMovil.classList.contains('visible')) posicionarMenu();
        });

        document.querySelectorAll('#menu-movil a').forEach(function (l) {
            l.addEventListener('click', function () {
                btnHamb.classList.remove('abierto');
                menuMovil.classList.remove('visible');
            });
        });

        window.addEventListener('resize', function () {
            if (menuMovil.classList.contains('visible')) posicionarMenu();
        });

        if (toggleServ && submenuServ) {
            toggleServ.addEventListener('click', function () {
                toggleServ.classList.toggle('expandido');
                submenuServ.classList.toggle('visible');
            });
        }
    }


    /* ════════════════════════════════════════════════════════════════
       5. ARRANQUE
       ════════════════════════════════════════════════════════════════ */
    inyectarCSS();

    /* Si el DOM ya está listo, inyectamos de inmediato;
       si no, esperamos a DOMContentLoaded. */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            inyectarBloques();
            inicializarNavbar();
        });
    } else {
        inyectarBloques();
        inicializarNavbar();
    }

})();
