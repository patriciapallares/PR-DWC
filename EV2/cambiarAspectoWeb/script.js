function cambioHTML() {
    let titulo = document.getElementById('titulo')
    titulo.setAttribute("style", "color:red;size:large");
}



function cambiaFondo(colorParam) {
   

    let titulo = document.getElementById('titulo')

    switch (colorParam) {
        case "azul":
            titulo.setAttribute("style", "color: lightblue");
            break;
        case "verde":
            titulo.setAttribute("style", "color: lightgreen");
            break;

        case "rojo":
            titulo.setAttribute("style", "color: lightcoral");
            break;

        default:
            break;
    }

}