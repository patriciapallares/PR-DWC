function agregarTexto() {
    // Obtener el valor del input
    var texto = document.getElementById('textoInput').value;

    // Crear un elemento de párrafo
    var parrafo = document.createElement('p');

    // Asignar el texto ingresado al párrafo
    parrafo.textContent = texto;

    // Obtener el contenedor de texto mostrado
    var contenedorTexto = document.getElementById('textoMostrado');

    // Agregar el párrafo al contenedor
    contenedorTexto.appendChild(parrafo);

    // Limpiar el input después de agregar el texto
    document.getElementById('textoInput').value = '';
  }