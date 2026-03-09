//console.log("hola");

const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const listaTextos = ["Hoy te voy a contar mi inspiradora historia",  "Todo comienza cuando nací...", "en un pequeño barrio marginal", "logré salir adelante porque aprendí a programar en html", "y ahora soy dueño de google."];

let estadoInicial = true;
let indice = 0;

varTitulo.addEventListener("click", () => {
    if(estadoInicial=== true) {
        varTitulo.innerText = "¡Buenos días!";
        varTitulo.style.color = "#32a852";
        varTitulo.style.backgroundColor = "white";
    } else {
        varTitulo.innerText = "Hola";
        varTitulo.style.color = "#f21a30";
        varTitulo.style.backgroundColor = "transparent";
    }
    estadoInicial = !estadoInicial; 
})

varTexto.addEventListener("click", () => {
    if(indice < listaTextos.length){
    varTexto.innerText = listaTextos[indice];
    indice = indice + 1;
} else {
    // indice = 0; // Si quiero que vuelva a empezar
    varTexto.innerText = "FIN.";
}
} )