const myDiv = document.getElementById("myDiv");
const myP = document.getElementById("myP");
const botBub = document.getElementById("botBub");
const botCapt = document.getElementById("botCapt");
const botStop = document.getElementById("botStop");

let bubbling = false;
let capturing = false;

// Funciones de manejo de eventos
const handleBubbling = function () {
  console.log("Bubbling activado");
};

const handleCapturing = function () {
  console.log("Capturing activado");
};

const handleClickDiv = function (e) {
  if (capturing) {
    console.log("Has hecho clic en el naranja");
    e.stopPropagation();
    handleClickP(e);
  }
};

const handleClickP = function (e) {
  if (bubbling) {
    console.log("Has hecho clic en el blanco");
    e.stopPropagation();
    handleClickDiv(e);
  }
};

const activateBubbling = function () {
  myDiv.addEventListener("click", handleClickDiv, false);
  myP.addEventListener("click", handleClickP, capturing);
  bubbling = true;
  capturing = false;
  handleBubbling();
};

const activateCapturing = function () {
  myDiv.addEventListener("click", handleClickDiv, bubbling);
  myP.addEventListener("click", handleClickP, false);
  bubbling = false;
  capturing = true;
  handleCapturing();
};

const deactivateEvents = function () {
  myDiv.removeEventListener("click", handleClickDiv, bubbling);
  myP.removeEventListener("click", handleClickP, capturing);
  botBub.addEventListener("click", activateBubbling, false);
  botCapt.addEventListener("click", activateCapturing, false);
  bubbling = false;
  capturing = false;
  console.log("Eventos desactivados");
};


botBub.addEventListener("click", activateBubbling, false);
botCapt.addEventListener("click", activateCapturing, false);
botStop.addEventListener("click", deactivateEvents, false);
