  document.addEventListener('DOMContentLoaded', function(event) {
      // Código JavaScript que manipula el DOM
      const contenedorPrincipal = document.getElementById('contenedor');

    // Crea un párrafo
    const paragraph = document.createElement('p');

    // Se le añade contenido
    paragraph.innerText = 'Hola Mundo, soy un parrafo';

    // Se le añade una clase
    paragraph.classList.add('p1');

    // Se añade al body
      contenedorPrincipal.appendChild(paragraph);
      console.log("Esoty dentro")


  })



