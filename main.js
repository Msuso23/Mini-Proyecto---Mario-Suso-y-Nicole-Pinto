const palabra = document.getElementById("palabra");
const BotonStart = document.getElementById("start");
const LetrasUsadas = document.getElementById("LetrasUsadas");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 0;
ctx.canvas.height = 0;



let palabraSelec;
let LetrasUsed;
let errores;
let puntos;
