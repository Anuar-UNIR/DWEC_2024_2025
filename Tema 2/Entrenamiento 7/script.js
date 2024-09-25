//Defino variable global
var n = 1 

document.addEventListener('DOMContentLoaded', function (event) {
    // Código JavaScript que manipula el DOM
    const contenedorPrincipal = document.getElementById('contenedor');
    contenedorPrincipal.classList.add("container")

    // Crea un párrafo
    const paragraph = document.createElement('p')

    // Se le añade contenido
    paragraph.innerText = 'Hola Mundo, soy un parrafo'

    // Se le añade una clase
    paragraph.classList.add('p1')

    // Se añade al body
    contenedorPrincipal.appendChild(paragraph)
    console.log("Estoy dentro")
    
    // Crea un boton, configuro su clase y su contenido
    const boton = document.createElement('button')
    boton.classList.add("btn-principal")
    boton.innerText = "Click me"

    // Lo inserto en el contenedor principal
    contenedorPrincipal.appendChild(boton)

    //Genero el evento click del boton
    boton.addEventListener("click", function (event) {
      clickMiboton();
    });
  
  


})

function clickMiboton()
{
  alert("Boton pulsado " + n)
  n++
}


