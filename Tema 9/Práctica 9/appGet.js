// console.log("hola");

$(document).ready(function () {
  // Escucha el evento de click en el botón
  $("#boton").click(function () {
    // Obtén los valores de los campos de entrada
    let val1 = $("#val1").val();
    let val2 = $("#val2").val();

    // Envía una solicitud GET al archivo PHP
    $.get("ServidorGET.php", { val1: val1, val2: val2 }, function (respuesta) {
      // Actualiza el contenido del elemento de párrafo con la respuesta del servidor
      $("#respuesta").text(respuesta);
      $("#metodo").text("GET");
    });
  });
});

let valores1 = $("#val11").hide();

console.log(valores1.text());
