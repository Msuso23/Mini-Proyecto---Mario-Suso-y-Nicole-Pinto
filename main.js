const palabra = document.getElementById("palabra");
const BotonStart = document.getElementById("start");
const LetrasUsadas = document.getElementById("LetrasUsadas");

let LetrasUsed;
let errores;
let palabraActual;
let puntos;

const tecladoDiv = document.querySelector(".teclado");


for (let letra = 97; letra <= 122; letra++) {
    const boton = document.createElement("button");
    boton.innerText = String.fromCharCode(letra);
    tecladoDiv.appendChild(boton);
    
}

function seleccionarPalabraAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    const palabraAleatoria = palabras[indiceAleatorio];
    const palabraActual = palabraAleatoria.palabra;
    palabraActual.toUpperCase();
    palabraActual.split("")
    return palabraAleatoria;
}

function seleccionarPalabraAleatoria2() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    const palabraAleatoria = palabras[indiceAleatorio];
    const palabraActual = palabraAleatoria.palabra;
    palabraActual.toUpperCase();
    palabraActual.split("")
    return palabraActual;
}

function mostrarPista(palabra) {
    const pistaElement = document.getElementById("pista");
    pistaElement.innerHTML = `Pista: <b>${palabra.pista}</b>`;
}


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 2;
ctx.canvas.height = 0;

const dibujarPalabra = () =>{
    palabraActu = seleccionarPalabraAleatoria2().toUpperCase().split("");


    for (let i = 0; i < palabraActu.length; i++) {
        const letter = palabraActu[i];
        const ELetra = document.createElement("span");
        ELetra.innerHTML = letter;
        ELetra.classList.add("letter");
        ELetra.classList.add("hidden");
        palabra.appendChild(ELetra);
    }
}



const cuerpo = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1],

]



const dibujar = () => {
    ctx.canvas.width=120;
    ctx.canvas.height=160;
    ctx.scale(20,20);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,7,4,1);
    ctx.fillRect(1,0,1,8);
    ctx.fillRect(2,0,3,1);
    ctx.fillRect(4,1,1,1);

}

  const startGame = () => {
    LetrasUsed=[];
    errores = 0;
    puntos = 0;
    palabra.innerHTML= "";
    LetrasUsadas.innerHTML = "";
    BotonStart.style.display = "none";
    const palabraAleatoria = seleccionarPalabraAleatoria();
    mostrarPista(palabraAleatoria);
    dibujar();    
    dibujarPalabra();
    
};

BotonStart.addEventListener("click", startGame);

