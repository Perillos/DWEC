let widthScreen = window.screen.width
let heightScreen = window.screen.height

let diagonalScreen = Math.sqrt(Math.pow(widthScreen,2) + Math.pow(heightScreen,2));

let spanH3 = document.getElementById("diagonal")

spanH3.innerHTML = diagonalScreen
