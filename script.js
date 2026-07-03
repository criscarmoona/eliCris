const target=new Date(2027,9,9,0,0,0).getTime();

const d=document.getElementById("days");
const h=document.getElementById("hours");
const m=document.getElementById("minutes");
const s=document.getElementById("seconds");

function fade(el,val){
 if(el.textContent!==val){
   el.style.opacity=0;
   setTimeout(()=>{
      el.textContent=val;
      el.style.opacity=1;
   },120);
 }
}

function update(){
 let diff=target-Date.now();

 if(diff<=0){
   document.querySelector(".card").innerHTML="<h1>Eli ♥ Cris</h1><p class='quote'>Hoy comienza el primer día del resto de nuestras vidas.</p>";
   return;
 }

 const days=Math.floor(diff/86400000);
 diff%=86400000;
 const hours=Math.floor(diff/3600000);
 diff%=3600000;
 const minutes=Math.floor(diff/60000);
 diff%=60000;
 const seconds=Math.floor(diff/1000);

 fade(d,String(days));
 fade(h,String(hours).padStart(2,"0"));
 fade(m,String(minutes).padStart(2,"0"));
 fade(s,String(seconds).padStart(2,"0"));
}

update();
setInterval(update,1000);
