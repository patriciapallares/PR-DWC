// la declaro fuera :D 
let tamanyoActual = 0;

// mejora: qué pasa si tamanyo es impar D:

function cambiaTamanyo(tamanyo, condicion){
    console.log(tamanyoActual);

    const MAX_TAMANYO = tamanyo*2;
    const MIN_TAMANYO = tamanyo/2;
    let texto = document.getElementById('foto');
    let warning = document.getElementById('warning');
    
    if (tamanyoActual === 0){
        tamanyoActual = parseInt(tamanyo);
    }


    if (condicion === 'ampliar'){
        if(tamanyoActual<MAX_TAMANYO){
            tamanyoActual += 0.5;
            warning.innerHTML=""
        }else{
            warning.innerHTML="Máximo alcanzado, reduce o restaura."
        }

    } else if (condicion === 'reducir'){
        if(tamanyoActual>MIN_TAMANYO){
            tamanyoActual -= 2;
            warning.innerHTML=""
        }else{
            warning.innerHTML="Mínimo alcanzado, amplía o restaura."
        }
    } else {
        tamanyoActual = parseInt(tamanyo);
        warning.innerHTML=""
    }

    texto.style.fontSize=`${tamanyoActual}px`;
}