var nombre = document.getElementById('nombre')
var mail = document.getElementById('mail')
var msg = document.getElementById('msg')
var error = document.getElementById('error')
var form = document.getElementById('formulario1');

    form.addEventListener('submit', function(evt){
        evt.preventDefault()

        var mensajeError = [];
    if (nombre.value === null ||nombre.value ===   ''){
        mensajeError.push ('Ingresa tu nombre');
    }
    if (mail.value === null || mail.value === ''){
        mensajeError.push ('Ingresa tu Mail');
    }
    if (msg.value === null || msg.value === ''){
        mensajeError.push ('Ingresa tu Mensaje');
    }

        error.innerHTML = mensajeError.join(', ')
    return false;
    });