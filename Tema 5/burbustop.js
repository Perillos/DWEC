// Obtener los elementos del DOM
const myDiv = document.querySelector("#myDiv");
const myP = document.querySelector("#myP");
const botBub = document.querySelector("#botBub");
const botCapt = document.querySelector("#botCapt");
const botStop = document.querySelector("#botStop");

// Declarar variables para almacenar el estado de los eventos
let bubblingActive = false;
let capturingActive = false;

// Declarar funciones para los eventos
function handleDivClick() {
    alert("Has hecho clic en el naranja");
}

function handleParrafoClick() {
    alert("Has hecho clic en el blanco");
    if (bubblingActive) {
        handleDivClick();
    }
}

// Añadir eventos al hacer clic en los botones
botBub.addEventListener("click", function() {
    if (!bubblingActive && !capturingActive) {
        myDiv.textContent = "BUBBLING";
        myDiv.addEventListener("click", handleDivClick, false);
        myP.addEventListener("click", handleParrafoClick, false);
        bubblingActive = true;
    }
});

botCapt.addEventListener("click", function() {
    if (!bubblingActive && !capturingActive) {
        myDiv.textContent = "CAPTURING";
        myDiv.addEventListener("click", handleDivClick, true);
        myP.addEventListener("click", handleParrafoClick, true);
        capturingActive = true;
    }
});

botStop.addEventListener("click", function() {
    if (bubblingActive || capturingActive) {
        myDiv.textContent = "EVENTO CLIC DESACTIVADO";
        myDiv.removeEventListener("click", handleDivClick);
        myP.removeEventListener("click", handleParrafoClick);
        bubblingActive = false;
        capturingActive = false;
    }
});
