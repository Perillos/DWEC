

function eliminarNodos () { 
  const divConten = document.getElementById('contenido')
  const divContenChild = divConten.childNodes
  
  const newdivContenChild = []
  divContenChild.forEach(element => {
    if (element.nodeName == 'P') {
      newdivContenChild.push(element.nodeName);
    }
  });

  const htmlunic = `
    <p>Respuesta:</p>
    <p>Número de hijos que contiene el div antes: ${divContenChild.length}</p>
    <p>Número de hijos que contiene el div después: ${newdivContenChild.length}</p>
    
  `

  const divConten2 = document.createElement('div')
  divConten2.classList.add("respuesta")
  divConten2.innerHTML = htmlunic
  divConten.appendChild(divConten2)
}


eliminarNodos()