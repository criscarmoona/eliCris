/* ============================
   CONFIGURACIÓN
============================ */

const CACHE_NAME = "eli-cris-v2";

const CORE_ASSETS = [
    "./",
    "index.html",
    "style.css",
    "script.js",
    "gallery.js",
    "sw-register.js",
    "manifest.json",
    "favicon.ico",
    "assets/icons/favicon.ico",
    "assets/icons/icon-192.png",
    "assets/icons/icon-512.png",
    "assets/icons/apple-touch-icon.png",
    "images/gallery.json"
];

/* ============================
   INSTALACIÓN
============================ */

self.addEventListener("install", event=>{

    event.waitUntil(
        cacheCoreAssets()
        .then(()=>self.skipWaiting())
    );

});

async function cacheCoreAssets(){

    const cache = await caches.open(CACHE_NAME);

    await cache.addAll(CORE_ASSETS);

    await cacheGalleryImages(cache);

}

async function cacheGalleryImages(cache){

    try{

        const response =
            await fetch("images/gallery.json", {
                cache:"no-cache"
            });

        const data =
            await response.json();

        const imageUrls =
            (data.images ?? [])
            .map(image=>`images/${image.file}`);

        await cache.addAll(imageUrls);

    }
    catch(error){

        console.warn(
            "No se pudieron precargar todas las imágenes:",
            error
        );

    }

}

/* ============================
   ACTIVACIÓN
============================ */

self.addEventListener("activate", event=>{

    event.waitUntil(
        caches
        .keys()
        .then(keys=>Promise.all(
            keys
            .filter(key=>key !== CACHE_NAME)
            .map(key=>caches.delete(key))
        ))
        .then(()=>self.clients.claim())
    );

});

/* ============================
   CACHE FIRST
============================ */

self.addEventListener("fetch", event=>{

    if(event.request.method !== "GET")
        return;

    event.respondWith(
        cacheFirst(event.request)
    );

});

async function cacheFirst(request){

    const cachedResponse =
        await caches.match(request);

    if(cachedResponse)
        return cachedResponse;

    try{

        const response =
            await fetch(request);

        if(response && response.ok){

            const cache =
                await caches.open(CACHE_NAME);

            cache.put(
                request,
                response.clone()
            );

        }

        return response;

    }
    catch(error){

        if(request.mode === "navigate")
            return caches.match("index.html");

        throw error;

    }

}
