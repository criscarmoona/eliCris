/* ============================
   FECHA DE LA BODA
============================ */

const weddingDate = new Date(
    2027,
    9,
    9,
    0,
    0,
    0
).getTime();

/* ============================
   ELEMENTOS
============================ */

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

/* ============================
   ANIMACIÓN
============================ */

function animate(element, value){

    if(element.textContent === value)
        return;

    element.animate(
        [
            {
                opacity:.35,
                transform:"translateY(8px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],
        {
            duration:220,
            easing:"ease-out"
        }
    );

    element.textContent = value;

}

/* ============================
   CONTADOR
============================ */

function updateCountdown(){

    let difference = weddingDate - Date.now();

    if(difference <= 0){

        document.querySelector(".countdown").innerHTML = `

            <div class="box"
                 style="grid-column:1 / -1">

                <span class="number">
                    💍
                </span>

                <span class="label">
                    HOY NOS CASAMOS
                </span>

            </div>

        `;

        return;

    }

    const days = Math.floor(
        difference / 86400000
    );

    difference %= 86400000;

    const hours = Math.floor(
        difference / 3600000
    );

    difference %= 3600000;

    const minutes = Math.floor(
        difference / 60000
    );

    difference %= 60000;

    const seconds = Math.floor(
        difference / 1000
    );

    animate(
        daysElement,
        String(days)
    );

    animate(
        hoursElement,
        String(hours).padStart(2,"0")
    );

    animate(
        minutesElement,
        String(minutes).padStart(2,"0")
    );

    animate(
        secondsElement,
        String(seconds).padStart(2,"0")
    );

}

/* ============================
   INICIAR
============================ */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

/* ============================
   EFECTO TARJETAS
============================ */

document
.querySelectorAll(".box")
.forEach(box=>{

    box.addEventListener("touchstart",()=>{

        box.style.transform="scale(.97)";

    });

    box.addEventListener("touchend",()=>{

        box.style.transform="scale(1)";

    });

});

/* ============================
   EFECTO HERO
============================ */

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    const hero =
        document.querySelector(".hero");

    hero.style.transform =
        `translateY(${y*.05}px)`;

});