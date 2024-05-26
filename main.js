const palabra = document.getElementById("palabra");
const BotonStart = document.getElementById("start");
const LetrasUsadas = document.getElementById("LetrasUsadas");

let LetrasUsed;
let errores;
let palabraActual;
let puntos;

const tecladoDiv = document.querySelector(".teclado");

const Jugar=(boton, letraselec)=>{
    console.log(palabraActual);
    if ((palabraActual).includes(letraselec)){
        [...palabraActual].forEach((letter,index)=>{
            if(letter === letraselec){
                const ELetra = palabra.children[index];
            ELetra.classList.remove("hidden");
            puntos++;
            }
        })
    }else{
        
    }
}

const PalabraRandom = ()=>{
    const {palabra, pista} = palabras[Math.floor(Math.random() * palabras.length)];
    palabraActual=palabra;
    console.log(palabra,pista);
    
    


}

for (let letra = 97; letra <= 122; letra++) {
    const boton = document.createElement("button");
    boton.innerText = String.fromCharCode(letra);
    tecladoDiv.appendChild(boton);
    boton.addEventListener("click", e =>Jugar(e.obj,String.fromCharCode(letra)))
    
}

function mostrarPista(palabra) {
    const pistaElement = document.getElementById("pista");
    pistaElement.innerHTML = `Pista: <b>${pista.pista}</b>`;
}


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.canvas.width = 2;
ctx.canvas.height = 0;

const dibujarPalabra = () =>{
    palabraActu = palabraActual.toUpperCase().split("");
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

  const startJuego = () => {
    LetrasUsed=[];
    errores = 0;
    puntos = 0;
    palabra.innerHTML= "";
    LetrasUsadas.innerHTML = "";
    BotonStart.style.display = "none";
    PalabraRandom();
    dibujar();    
    dibujarPalabra();
    
};

BotonStart.addEventListener("click", startJuego);

