const palabra = document.getElementById("palabra");
const BotonStart = document.getElementById("start");
const LetrasUsadas = document.getElementById("LetrasUsadas");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 2;
ctx.canvas.height = 0;


const cuerpo = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1],

]

let palabraSelec;
let LetrasUsed;
let errores;
let puntos;

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
    dibujar();    
};

BotonStart.addEventListener("click", startGame);

  