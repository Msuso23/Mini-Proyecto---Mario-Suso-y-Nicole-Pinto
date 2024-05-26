const palabra = document.getElementById("palabra");
const BotonStart = document.getElementById("start");
const LetrasUsadas = document.getElementById("LetrasUsadas");


const tecladoDiv = document.querySelector(".teclado");


for (let letra = 97; letra <= 122; letra++) {
    const boton = document.createElement("button");
    boton.innerText = String.fromCharCode(letra);
    tecladoDiv.appendChild(boton)

}


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 0;
ctx.canvas.height = 0;


let palabraSelec;
let LetrasUsed;
let errores;
let puntos;