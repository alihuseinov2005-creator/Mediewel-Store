```javascript
// Sayfa açılış animasyonu

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

document.body.style.opacity="0";
document.body.style.transition="1s";



// Kart Efekti

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(57,255,182,.35),
rgba(255,255,255,.08))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});



// Navbar Scroll

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>60){

nav.style.background="rgba(0,0,0,.75)";

}else{

nav.style.background="rgba(0,0,0,.25)";

}

});



// Buton Animasyonu

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
```
