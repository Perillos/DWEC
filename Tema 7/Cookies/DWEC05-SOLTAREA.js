// Obtenemos los elementos del DOM que vamos a utilizar
const formulario = document.getElementById("formulario");
const errores = document.getElementById("errores");
const intentos = document.getElementById("intentos");

// Función que incrementa el número de intentos y actualiza el mensaje
function actualizarIntentos() {
  let numIntentos = obtenerIntentos();
  numIntentos++;
  document.cookie = `intentos=${numIntentos}`;
  intentos.innerHTML = `Intento de envíos del formulario: ${numIntentos}`;
}

// Función que obtiene el número de intentos almacenado en la cookie
function obtenerIntentos() {
  let numIntentos = 0;
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [nombre, valor] = cookie.split("=");
    if (nombre === "intentos") {
      numIntentos = parseInt(valor);
      break;
    }
  }
  return numIntentos;
}

// Función que comprueba que no haya campos vacíos antes de enviar el formulario
function validarFormulario() {
  let primerCampoVacio = null;
  for (const campo of formulario.elements) {
    if (campo.type !== "submit" && campo.value.trim() === "") {
      if (!primerCampoVacio) {
        primerCampoVacio = campo;
      }
      campo.classList.add("error");
    } else {
      campo.classList.remove("error");
    }
  }

  if (primerCampoVacio) {
    primerCampoVacio.focus();
    errores.innerHTML = "No pueden quedar campos vacíos";
    return false;
  } else {
    return true;
  }
}

// Añadimos el evento 'submit' al formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
  if (validarFormulario()) {
    formulario.submit(); // Si no hay campos vacíos, enviamos el formulario
  } else {
    actualizarIntentos(); // Si hay campos vacíos, actualizamos los intentos
  }
});

fetch("Tema 5. Práctica.html").then((response) => console.log(response));
