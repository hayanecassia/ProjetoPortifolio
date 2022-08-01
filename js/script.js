//Script da frase "Front-End Developer"

var i = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 200;

function typeWriter() {
    if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

//Direcionamento para pontos específicos

var sobre = document.querySelector(".btn-sobre");
var habilidades = document.querySelector(".btn-habilidades");
var oQue = document.querySelector(".btn-oque");
var menuAberto = document.querySelector(".menu-aberto");

sobre.addEventListener("click", function() {
    if(menuAberto.style.display = 'block') {
        menuAberto.style.display = 'none';
    }
    window.scrollTo(0, 600);
});

habilidades.addEventListener("click", function () {
    if(menuAberto.style.display = 'block') {
        menuAberto.style.display = 'none';
    }
    window.scrollTo(0, 900);
});

oQue.addEventListener("click", function() {
    if(menuAberto.style.display = 'block') {
        menuAberto.style.display = 'none';
    }
    window.scrollTo(0, 3500);
});