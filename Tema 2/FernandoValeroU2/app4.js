


const screen1 = window.open("https://portal.edu.gva.es/03013224/es/inicio/")

const screen2 = window.open();
screen2.document.write("<h1>Soy la ventana 2</h1> <script></script>");


const screen3 = window.open();
screen3.document.write("<h1>Soy la ventana 3</h1>");


screen2.close();