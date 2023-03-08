// console.log("hola");

$(document).ready(function () {
  // Escucha el evento de click en el botón
  $("#boton").click(function () {
    // Obtén los valores de los campos de entrada
    let val1 = $("#val1").val();
    let val2 = $("#val2").val();

    // Crea un objeto con los datos que se enviarán al servidor
    let datos = { val1: val1, val2: val2 };

    // Envía una solicitud POST al archivo PHP
    $.post("ServidorPOST.php", datos, function (respuesta) {
      // Actualiza el contenido del elemento de párrafo con la respuesta del servidor
      $("#respuesta").text(respuesta);
      $("#metodo").text("POST");
    });
  });
});
