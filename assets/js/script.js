let txtNombre = document.getElementById("nombre");
let errorNombre = document.getElementById("errorNombre");
let txtAsunto = document.getElementById("asunto");
let errorAsunto = document.getElementById("errorAsunto");
let txtMensaje = document.getElementById("mensaje");
let errorMensaje = document.getElementById("errorMensaje");
let txtResultado = document.getElementById("resultado");

let formulario = document.getElementsByTagName("form")[0];

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    limpiarErrores();

    const expRegLetras = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    let nombre = txtNombre.value;
    let asunto = txtAsunto.value;
    let mensaje = txtMensaje.value;
    let nombreValido = false;
    let asuntoValido = false;
    let mensajeValido = false;


    //valida input nombre
    if (nombre == '') {
        errorNombre.innerHTML = 'Ingresar el nombre';
    } else if (expRegLetras.test(nombre) == false) {
        errorNombre.innerHTML = 'Ingresar sólo letras';
    } else {
        nombreValido = true;
    }
    expRegLetras.lastIndex = 0;

    //valida input asunto
    if (asunto == '') {
        errorAsunto.innerHTML = 'Ingresar el asunto';
    } else if (expRegLetras.test(asunto) == false) {
        errorAsunto.innerHTML = 'Ingresar sólo letras';
    } else {
        asuntoValido = true;
    }
    expRegLetras.lastIndex = 0;

    //valida textarea mensaje
    if (mensaje == '') {
        errorMensaje.innerHTML = 'Ingresar el mensaje';
    } else if (expRegLetras.test(mensaje) == false) {
        errorMensaje.innerHTML = 'Ingresar sólo letras';
    } else {
        mensajeValido = true;
    }

    //si todos los campos estan correctos se muestra el mensaje enviado
    if (nombreValido == true && asuntoValido == true && mensajeValido == true) {
        txtResultado.innerHTML = 'Mensaje enviado con exito!';
        //el mensaje desaparecera en 3 segundos
        setTimeout(() => {
            txtResultado.innerHTML = "";
        }, 3000);
        limpiarFormulario();
    }

})
let limpiarErrores = () => {
    let errores = document.getElementsByClassName("error");
    for (let index = 0; index < errores.length; index++) {
        errores[index].innerHTML = '';
    }
}
let limpiarFormulario = () => {
    let elementos = document.querySelectorAll("input[type=text], textarea");
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].value = '';
    }
}