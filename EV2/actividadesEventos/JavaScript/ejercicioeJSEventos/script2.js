function cambiaFondo(condicion, pregunta) {
    let preguntaTest = document.getElementById(pregunta)
    switch (condicion) {
        case "correcta":
            preguntaTest.setAttribute("style", "color: lightgreen");
            break;
 
 
        case "incorrecta":
            preguntaTest.setAttribute("style", "color: lightcoral");
            break;
 
 
        default:
            break;
    }
 }
 