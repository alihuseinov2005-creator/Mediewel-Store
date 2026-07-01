// Copy IP Button

const copyButton = document.getElementById("copyIP");

if(copyButton){

    copyButton.addEventListener("click", ()=>{

        navigator.clipboard.writeText("mediewel.aternos.me");

        copyButton.innerHTML="✅ IP Copied!";

        setTimeout(()=>{

            copyButton.innerHTML="Copy IP";

        },2000);

    });

}


// Fake Server Status
// Daha sonra gerçek API bağlayacağız.

const players=document.getElementById("players");

if(players){

    players.innerHTML="🟢 Online<br>0 Players";

}


// Fade Animation

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".status-card,.news-card").forEach(el=>{

    observer.observe(el);

});


// Smooth Scroll

document.querySelectorAll("a").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
