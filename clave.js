const palabras = ["sistemas", "computacion", "programacion", "ahorcado", "estudio", "informacion"];

function seleccionarPalabraAleatoria() {
    const palabra = Math.floor(Math.random() * palabras.length);
    return palabras[palabra];
}

const word = seleccionarPalabraAleatoria();
const wordLength = word.length;