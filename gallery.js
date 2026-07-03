/* ==========================================
   GALERÍA
========================================== */

const dots =
document.getElementById("dots");

const gallery = document.getElementById("gallery");

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");

const closeViewer = document.getElementById("closeViewer");

const previous = document.getElementById("previous");
const next = document.getElementById("next");

const indicator = document.getElementById("indicator");

let images = [];
let currentIndex = 0;

/* ==========================================
   CARGAR JSON
========================================== */

async function loadGallery() {

    try {

        const response = await fetch("images/gallery.json");

        if(!response.ok)
            throw new Error("No se pudo cargar gallery.json");

        const json = await response.json();

        images = json.images ?? [];

    }
    catch (e) {

        console.warn(
            "Usando galería local de respaldo:",
            e
        );

        images = loadFallbackGallery();

    }

    createGallery();

}

function loadFallbackGallery(){

    const fallback =
        document.getElementById("galleryFallback");

    if(!fallback)
        return [];

    try{

        const json =
            JSON.parse(fallback.textContent);

        return json.images ?? [];

    }
    catch(error){

        console.error(
            "No se pudo leer la galería de respaldo:",
            error
        );

        return [];

    }

}

/* ==========================================
   CREAR GALERÍA
========================================== */

function createGallery() {

    gallery.innerHTML = "";

    images.forEach((image, index) => {

        const article = document.createElement("article");

        article.className = "photo";

        article.tabIndex = 0;

        article.setAttribute(
            "role",
            "button"
        );

        article.setAttribute(
            "aria-label",
            `Abrir foto ${index + 1}`
        );

        article.innerHTML = `

            <img
                loading="lazy"
                src="images/${image.file}"
                alt="Foto ${index+1}">

        `;

        article.onclick = () => {

            openViewer(index);

        };

        article.onkeydown = event => {

            if(event.key === "Enter" || event.key === " "){

                event.preventDefault();

                openViewer(index);

            }

        };

        gallery.appendChild(article);

    });

    addFinalCard();

    createDots();

    highlightCurrent();

    gallery.addEventListener(
        "scroll",
        updateCurrentFromScroll,
        {
            passive:true
        }
    );

}

function createDots(){

    dots.innerHTML="";

    images.forEach((_, index)=>{

        const dot =
        document.createElement("button");

        dot.className="dot";

        dot.type="button";

        dot.setAttribute(
            "aria-label",
            `Ir a foto ${index + 1}`
        );

        dot.onclick=()=>{

            goToImage(index);

        };

        dots.appendChild(dot);

    });

    updateDots();

}

function updateDots(){

    document
    .querySelectorAll(".dot")
    .forEach((dot,index)=>{

        dot.classList.toggle(
            "active",
            index===currentIndex
        );

    });

}

function goToImage(index){

    currentIndex = index;

    syncGalleryPosition();

    updateDots();

    highlightCurrent();

}

function syncGalleryPosition(){

    const photo =
        document.querySelectorAll(".photo")[currentIndex];

    if(photo){

        photo.scrollIntoView({
            behavior:"smooth",
            inline:"center",
            block:"nearest"
        });

    }

}

function updateCurrentFromScroll(){

    const photos =
        [...document.querySelectorAll(".photo:not(.final)")];

    if(!photos.length)
        return;

    const center =
        gallery.scrollLeft + gallery.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    photos.forEach((photo,index)=>{

        const photoCenter =
            photo.offsetLeft + photo.offsetWidth / 2;

        const distance =
            Math.abs(center - photoCenter);

        if(distance < closestDistance){

            closestIndex = index;
            closestDistance = distance;

        }

    });

    if(currentIndex !== closestIndex){

        currentIndex = closestIndex;

        updateDots();

        highlightCurrent();

    }

}

function highlightCurrent(){

    document
    .querySelectorAll(".photo")
    .forEach((photo,index)=>{

        photo.classList.toggle(
            "active",
            index===currentIndex
        );

    });

}

/* ==========================================
   TARJETA FINAL
========================================== */

function addFinalCard() {

    const template =
        document.getElementById("finalCard");

    const node =
        template.content.cloneNode(true);

    gallery.appendChild(node);

}

/* ==========================================
   ABRIR VISOR
========================================== */

function openViewer(index) {

    currentIndex = index;

    viewer.classList.remove("hidden");

    updateViewer();

}

/* ==========================================
   ACTUALIZAR
========================================== */

function updateViewer() {

    viewerImage.src =
    "images/" +
    images[currentIndex].file;

    viewerImage.alt =
        "Foto " +
        (currentIndex + 1);

    indicator.textContent =
        (currentIndex + 1)
        + " / "
        + images.length;

    syncGalleryPosition();

    updateDots();

    highlightCurrent();

}

/* ==========================================
   CERRAR
========================================== */

closeViewer.onclick = () => {

    viewer.classList.add("hidden");

}

/* ==========================================
   SIGUIENTE
========================================== */

next.onclick = () => {

    currentIndex++;

    if (currentIndex >= images.length)
        currentIndex = 0;

    updateViewer();

}

/* ==========================================
   ANTERIOR
========================================== */

previous.onclick = () => {

    currentIndex--;

    if (currentIndex < 0)
        currentIndex = images.length - 1;

    updateViewer();

}

/* ==========================================
   CERRAR AL TOCAR EL FONDO
========================================== */

viewer.addEventListener("click", e => {

    if (e.target === viewer)
        viewer.classList.add("hidden");

});

/* ==========================================
   SWIPE
========================================== */

let startX = 0;

viewer.addEventListener("touchstart", e => {

    startX = e.changedTouches[0].clientX;

});

viewer.addEventListener("touchend", e => {

    const endX =
        e.changedTouches[0].clientX;

    const distance =
        startX - endX;

    if (Math.abs(distance) < 60)
        return;

    if (distance > 0) {

        next.click();

    }
    else {

        previous.click();

    }

});

/* ==========================================
   TECLADO
========================================== */

document.addEventListener("keydown", e => {

    if (viewer.classList.contains("hidden"))
        return;

    if (e.key === "Escape")
        closeViewer.click();

    if (e.key === "ArrowRight")
        next.click();

    if (e.key === "ArrowLeft")
        previous.click();

});

/* ==========================================
   INICIAR
========================================== */

loadGallery();
