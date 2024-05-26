const palabra = document.getElementById("palabra");
const BotonStart = document.getElementById("start");
const LetrasUsadas = document.getElementById("LetrasUsadas");


function obtenerPalabraRandom(palabras) {
    const indiceRandom = Math.floor(Math.random() * palabras.length);
    const palabraRandom = palabras[indiceRandom];
    console.log(palabraRandom, pista);
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 0;
ctx.canvas.height = 0;


let palabraSelec;
let LetrasUsed;
let errores;
let puntos;
