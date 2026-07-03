# Proyecto: Eli ♥ Cris - Cuenta regresiva para boda

## Objetivo

Desarrollar un sitio web completamente estático (HTML, CSS y JavaScript puro) para publicar en GitHub Pages.

El sitio será una página elegante y minimalista dedicada a una cuenta regresiva para una boda.

No utilizar frameworks.

No utilizar Bootstrap.

No utilizar jQuery.

No utilizar librerías externas.

Todo debe funcionar únicamente con HTML5, CSS3 y JavaScript ES6.

---

# Arquitectura

El proyecto deberá quedar organizado de la siguiente forma.

```
/
│
├── index.html
├── style.css
├── script.js
├── gallery.js
├── manifest.json
├── favicon.ico
│
├── images/
│   ├── gallery.json
│   ├── (las fotografías)
│
└── assets/
```

Cada archivo debe tener una única responsabilidad.

---

# Diseño

Inspirarse en el lenguaje visual de Apple.

El resultado debe sentirse como una landing page premium.

No debe parecer una plantilla.

Características visuales:

- Minimalista
- Mucho espacio en blanco
- Glassmorphism
- Sombras suaves
- Colores pastel
- Fondo con degradados muy sutiles
- Animaciones discretas
- Excelente experiencia en iPhone

Paleta aproximada:

- Fondo:
  #F8F4F6

- Blanco:
  #FFFFFF

- Rosa principal:
  #C77A90

- Gris texto:
  #5D4A52

- Gris secundario:
  #A28A92

---

# Hero

Mostrar:

NUESTRA BODA

Eli ♥ Cris

09 · Octubre · 2027

Todo perfectamente centrado.

---

# Contador

Debe mostrar únicamente

- Días
- Horas
- Minutos
- Segundos

No mostrar años.

No mostrar meses.

Cada número dentro de una tarjeta elegante.

Las tarjetas deben tener:

- bordes redondeados
- fondo blanco semitransparente
- efecto glass
- ligera sombra

Cuando cambie un número debe animarse suavemente.

No hacer efectos exagerados.

---

# Frase

Debajo del contador mostrar exactamente:

El primer día del resto de nuestras vidas.

Debe verse elegante.

Nunca debe romperse en dos líneas en móviles si existe espacio suficiente.

---

# Sección de galería

No debe tener título.

Debe aparecer debajo del contador.

Debe ocupar prácticamente todo el ancho.

Las fotografías deben ser grandes.

No miniaturas pequeñas.

Cada fotografía debe tener:

- border-radius
- sombra
- object-fit: cover

Utilizar:

CSS Scroll Snap

para que cada fotografía quede perfectamente centrada al deslizar.

No utilizar carrusel automático.

No utilizar flechas visibles.

El usuario únicamente desliza con el dedo.

---

# gallery.json

Las imágenes nunca estarán escritas en JavaScript.

Toda la información debe provenir de

images/gallery.json

Formato:

```json
{
    "images":[
        {
            "file":"pedida.jpeg"
        },
        {
            "file":"bosque.jpg"
        },
        {
            "file":"anillo.png"
        }
    ]
}
```

Para agregar fotografías únicamente será necesario:

- copiar la imagen
- agregar una entrada al JSON

Nunca modificar JavaScript.

---

# Visor de imágenes

Al tocar una fotografía abrir:

Pantalla completa.

Características:

- fondo negro semitransparente
- transición fade
- botón cerrar
- deslizar izquierda
- deslizar derecha
- swipe
- indicador

Ejemplo

3 / 12

---

# Tarjeta final

Después de la última fotografía agregar automáticamente una tarjeta.

No forma parte del JSON.

Debe mostrar

💍

Nos vemos
en el altar

09 Octubre 2027

Debe tener el mismo tamaño que las fotografías.

---

# Responsive

Optimizado para

- iPhone
- Android
- iPad
- Escritorio

En móviles:

La primera pantalla debe mostrar únicamente:

- título
- contador
- frase

La galería aparece al hacer scroll.

---

# Contador

Fecha objetivo

09 Octubre 2027

00:00:00

Actualizar cada segundo.

Cuando llegue la fecha reemplazar el contador por

💍

Hoy comienza
el primer día
del resto de nuestras vidas.

---

# Animaciones

Utilizar únicamente:

opacity

transform

translateY

scale

transition

No utilizar animaciones exageradas.

Todo debe sentirse muy elegante.

---

# Accesibilidad

Agregar:

alt

aria-label

focus visible

Soporte teclado para el visor.

Escape debe cerrar el visor.

---

# Rendimiento

Todas las imágenes:

loading="lazy"

No bloquear renderizado.

Utilizar defer en scripts cuando sea posible.

---

# Código

El código debe estar completamente comentado.

Separar claramente las secciones.

No duplicar lógica.

Utilizar funciones pequeñas.

Mantener buena legibilidad.

---

# Calidad esperada

El resultado debe sentirse como una aplicación premium para una boda.

La primera impresión debe ser el contador.

La galería debe sentirse como la aplicación Fotos de iOS.

Toda la experiencia debe ser limpia, romántica y elegante.

No sobrecargar el diseño.

Priorizar simplicidad y calidad visual.

---

# Progressive Web App (PWA)

El proyecto debe funcionar como una Progressive Web App (PWA).

El usuario debe poder instalarla tanto en iPhone como en Android desde el navegador utilizando la opción:

- iPhone: Compartir → Agregar a pantalla de inicio
- Android: Instalar aplicación

La aplicación debe abrirse en modo standalone, sin mostrar la barra del navegador.

Generar los siguientes archivos:

```
manifest.json
service-worker.js
favicon.ico

assets/
    icon-192.png
    icon-512.png
    apple-touch-icon.png
```

Configurar correctamente el `manifest.json` con:

- name
- short_name
- description
- start_url
- display: standalone
- orientation: portrait
- theme_color
- background_color
- icons

Registrar automáticamente el Service Worker desde JavaScript.

El Service Worker debe cachear:

- HTML
- CSS
- JavaScript
- manifest
- favicon
- imágenes

para permitir abrir la aplicación incluso sin conexión a Internet.

Implementar una estrategia Cache First para recursos estáticos.

No utilizar librerías externas para la PWA.

---

# Instalación

Agregar soporte para instalación en:

- Safari iPhone
- Chrome Android
- Edge
- Chrome Desktop

No mostrar mensajes intrusivos.

La aplicación debe comportarse como una aplicación nativa cuando se agregue a la pantalla de inicio.

---

# Iconos

Generar iconos con estilo minimalista.

Fondo:

Rosa pastel (#F8F4F6)

Elemento principal:

💍

Texto:

Eli ♥ Cris

Los iconos deben verse bien tanto en modo claro como oscuro.

---

# Modo sin conexión

Si el usuario abre la aplicación sin Internet:

- La cuenta regresiva debe seguir funcionando.
- La galería debe seguir funcionando.
- Todas las imágenes previamente descargadas deben seguir disponibles.

No mostrar errores de red.

---

# Rendimiento

Objetivo:

Google Lighthouse

- Performance > 95
- Accessibility > 95
- Best Practices > 95
- SEO > 95
- PWA > 100

Optimizar imágenes.

Precargar únicamente los recursos necesarios.

Lazy loading para todas las fotografías.

Minimizar repintados.

Utilizar transform y opacity para animaciones.

Evitar layouts innecesarios.

---

# Calidad del código

El código debe ser apto para producción.

Separar responsabilidades.

No repetir lógica.

Utilizar módulos JavaScript cuando tenga sentido.

Documentar todas las funciones importantes.

Seguir buenas prácticas de HTML5, CSS3 y JavaScript moderno.

---

# Experiencia de usuario

La experiencia debe sentirse como una aplicación de Apple.

El usuario debe percibir que está utilizando una aplicación nativa y no una página web.

La navegación debe ser extremadamente fluida.

Las animaciones deben ser discretas y elegantes.

El contador debe ser el protagonista de la página.

La galería debe complementar la experiencia sin distraer.

Toda la interfaz debe transmitir una sensación romántica, premium y minimalista.

Utiliza ES Modules y organiza el código por componentes, por ejemplo:

/
index.html

css/
    style.css
    countdown.css
    gallery.css
    viewer.css

js/
    main.js
    countdown.js
    gallery.js
    viewer.js
    sw-register.js

images/
    gallery.json
    ...

assets/
    icons/


# Aplicación instalable

El proyecto debe comportarse como una aplicación nativa cuando se agregue a la pantalla de inicio.

En iPhone:

- Debe ser compatible con Safari.
- Debe aparecer correctamente la opción "Agregar a pantalla de inicio".
- Debe utilizar los metadatos Apple correspondientes.
- Debe mostrar un icono personalizado.
- Debe abrirse sin la interfaz del navegador.

Agregar automáticamente en index.html:

```html
<link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">

<meta name="apple-mobile-web-app-capable" content="yes">

<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<meta name="apple-mobile-web-app-title" content="Eli ♥ Cris">


En Android:

Configurar correctamente:

manifest.json
service-worker.js

para que Chrome muestre la opción:

Instalar aplicación

El icono debe ser generado automáticamente por el proyecto.

Debe existir en:

assets/icons/

icon-192.png

icon-512.png

apple-touch-icon.png

favicon.ico

Todos los iconos deben utilizar la misma identidad visual.

Color de fondo:

#F8F4F6

Elemento principal:

💍

Texto:

Eli ♥ Cris

Una vez instalada, la aplicación debe:

Abrirse en pantalla completa.
Funcionar sin conexión cuando los recursos estén en caché.
Tener su propio icono.
Mantener la cuenta regresiva funcionando.


---

## Yo haría una mejora más (y esta sí vale mucho la pena)

En lugar de que el ícono sea simplemente un emoji 💍, le pediría a Codex que diseñe un ícono elegante:

- Fondo rosa pastel con un degradado suave.
- Un anillo blanco o dorado minimalista en el centro.
- Sin texto (para que se vea limpio en tamaños pequeños).
- Estilo inspirado en los íconos de iOS.

Así, cuando Eli vea el ícono en la pantalla de inicio de su iPhone, se verá como una app real y no como un acceso directo genérico. Creo que ese detalle hará que el proyecto se sienta mucho más especial. 💍🤍