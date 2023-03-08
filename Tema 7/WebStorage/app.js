// Función para guardar un coche
function guardarCoche() {
  // Obtener los valores de los campos de texto
  var matricula = document.getElementById("matricula").value;
  var color = document.getElementById("color").value;
  var marca = document.getElementById("marca").value;

  // Validar los datos ingresados, por ejemplo:
  if (!matricula || !color || !marca) {
    alert("Por favor, complete todos los campos del formulario");
    return;
  }

  // Crear un objeto para almacenar los datos del coche
  var coche = {
    matricula: matricula,
    color: color,
    marca: marca,
  };

  // Almacenar el objeto en un array, por ejemplo:
  var coches = JSON.parse(localStorage.getItem("coches")) || [];
  coches.push(coche);
  localStorage.setItem("coches", JSON.stringify(coches));

  // Mostrar un mensaje de confirmación
  alert("Coche guardado correctamente");

  // Limpiar el formulario
  limpiarFormulario();

  // Actualizar el índice del coche actual
  indiceActual = coches.length - 1;
}

// Función para limpiar el formulario
function limpiarFormulario() {
  // Obtener los campos del formulario
  var matricula = document.getElementById("matricula");
  var color = document.getElementById("color");
  var marca = document.getElementById("marca");

  // Limpiar los campos del formulario
  matricula.value = "";
  color.value = "";
  marca.value = "";

  // Establecer el foco en el primer campo
  matricula.focus();
}

// Índice del coche actual
var indiceActual = 0;

// Función para ver el coche siguiente
function verCocheSiguiente() {
  // Obtener el array de coches almacenados
  var coches = JSON.parse(localStorage.getItem("coches")) || [];

  // Incrementar el índice del coche actual
  indiceActual++;

  // Si el índice es mayor o igual a la longitud del array, volver al primer coche
  if (indiceActual >= coches.length) {
    indiceActual = 0;
  }

  // Mostrar los datos del coche actual en el formulario
  mostrarCoche(coches[indiceActual]);
}

// Función para ver el coche anterior
function verCocheAnterior() {
  // Obtener el array de coches almacenados
  var coches = JSON.parse(localStorage.getItem("coches")) || [];

  // Decrementar el índice del coche actual
  indiceActual--;

  // Si el índice es menor que cero, ir al último coche
  if (indiceActual < 0) {
    indiceActual = coches.length - 1;
  }

  // Mostrar los datos del coche actual en el formulario
  mostrarCoche(coches[indiceActual]);
}

// Función para mostrar los datos de un coche en el formulario
function mostrarCoche(coche) {
  // Obtener los campos del formulario
  var matricula = document.getElementById("matricula");
  var color = document.getElementById("color");
  var marca = document.getElementById("marca");

  // Mostrar los datos del coche en los campos correspondientes
  matricula.value = coche.matricula;
  color.value = coche.color;
  marca.value = coche.marca;
}

// Función para eliminar el coche actual
function eliminarCoche() {
  // Obtener el array de coches almacenados
  var coches = JSON.parse(localStorage.getItem("coches")) || [];

  // Eliminar el coche actual del array
  coches.splice(indiceActual, 1);

  // Actualizar el almacenamiento
  localStorage.setItem("coches", JSON.stringify(coches));

  // Limpiar el formulario
  limpiarFormulario();
}
