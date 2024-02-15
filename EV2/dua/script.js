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



function cambioHTML(condicion) {

    let mensaje = document.getElementById('msg');

    switch (condicion) {
        case "ingles":
            mensaje.innerHTML='Welcome!!'
            break;

        case "espanol":
            mensaje.innerHTML='¡¡Bienvenido!!'
            break;
        case "ruso":
            mensaje.innerHTML='Benvingut!!'
            break;

        default:
            break;
    }
}

let visible = true;

function ocultarIMG(){
    let img = document.getElementById('imgdiv');

    if (visible) {
        img.style.display='none';
        visible = false
    }else{
        img.style.display='initial';
        visible = true;
    }
}

// la declaro fuera :D 
let tamanyoActual = 0;

// mejora: qué pasa si tamanyo es impar D:

function cambiaTamanyo(tamanyo, condicion){
    console.log(tamanyoActual);

    const MAX_TAMANYO = tamanyo*2;
    const MIN_TAMANYO = tamanyo/2;
    let texto = document.getElementById('texto');
    let warning = document.getElementById('warning');
    let texto_tamanyo = document.getElementById('texto_tamanyo');
    
    if (tamanyoActual === 0){
        tamanyoActual = parseInt(tamanyo);
    }

    if (condicion === 'ampliar'){
        if(tamanyoActual<MAX_TAMANYO){
            tamanyoActual += 2;
            warning.innerHTML=""
            texto_tamanyo.innerHTML=`Tamaño: ${tamanyoActual}px`
        }else{
            warning.innerHTML="Máximo alcanzado, reduce o restaura."
        }

    } else if (condicion === 'reducir'){
        if(tamanyoActual>MIN_TAMANYO){
            tamanyoActual -= 2;
            warning.innerHTML=""
            texto_tamanyo.innerHTML=`Tamaño: ${tamanyoActual}px`
        }else{
            warning.innerHTML="Mínimo alcanzado, amplía o restaura."
        }
    } else {
        tamanyoActual = parseInt(tamanyo);
        warning.innerHTML=""
        texto_tamanyo.innerHTML=`Tamaño: ${tamanyoActual}px`
    }

    texto.style.fontSize=`${tamanyoActual}px`;
}

function cambiaTamanyoImg(tamanyo, condicion){
    console.log(tamanyoActual);

    const MAX_TAMANYO = tamanyo*2;
    const MIN_TAMANYO = tamanyo/2;
    let img = document.getElementById('img');
    let warning = document.getElementById('warning');
    let texto_tamanyo = document.getElementById('texto_tamanyo');
    
    if (tamanyoActual === 0){
        tamanyoActual = parseInt(tamanyo);
    }

    if (condicion === 'ampliar'){
        if(tamanyoActual<MAX_TAMANYO){
            tamanyoActual += 20;
            warning.innerHTML=""
            texto_tamanyo.innerHTML=`Tamaño: ${tamanyoActual}px`
        }else{
            warning.innerHTML="Máximo alcanzado, reduce o restaura."
        }

    } else if (condicion === 'reducir'){
        if(tamanyoActual>MIN_TAMANYO){
            tamanyoActual -= 20;
            warning.innerHTML=""
            texto_tamanyo.innerHTML=`Tamaño: ${tamanyoActual}px`
        }else{
            warning.innerHTML="Mínimo alcanzado, amplía o restaura."
        }
    } else {
        tamanyoActual = parseInt(tamanyo);
        warning.innerHTML=""
        texto_tamanyo.innerHTML=`Tamaño: ${tamanyoActual}px`
    }

    img.style.width=`${tamanyoActual}px`;
}

// let array = ['Patricia', 'DAW', '16-12', '20900812E']

// let texto_info = document.getElementById('texto_info')

// for (let i = 0; i < array.length; i++) {
//     texto_info.innerHTML+=`${array[i]}<br> `
// }

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