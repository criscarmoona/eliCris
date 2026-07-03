/* ============================
   SERVICE WORKER
============================ */

if("serviceWorker" in navigator){

    let refreshing = false;

    navigator.serviceWorker.addEventListener(
        "controllerchange",
        ()=>{

            if(refreshing)
                return;

            refreshing = true;

            window.location.reload();

        }
    );

    window.addEventListener("load",()=>{

        navigator
        .serviceWorker
        .register("service-worker.js")
        .then(registration=>{

            registration.update();

        })
        .catch(error=>{

            console.warn(
                "No se pudo registrar el Service Worker:",
                error
            );

        });

    });

}
