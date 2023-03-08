var windowHeight = window.innerHeight;

var topHeight = windowHeight / 3;
var bottomHeight = topHeight * 2;

window.addEventListener("click", function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  if (mouseY < topHeight) {

    escribePalabras("zona", "alta", "pantalla");
  } else if (mouseY > bottomHeight) {

    escribePalabras("zona", "baja", "de", "la", "pantalla");
  } else {

    escribePalabras("ahora", "has", "dado", "en", "el", "centro");
  }
});


function escribePalabras() {
  var result = "";
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i] + " ";
  }
  document.getElementById("result").innerHTML = result;
}