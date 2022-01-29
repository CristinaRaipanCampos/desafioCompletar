// variables obtenidas del html
let num1 = document.getElementById("valor1");
let num2 = document.getElementById("valor2");
let boton1 = document.getElementById("btn-sumar");
let boton2 = document.getElementById("btn-restar");
let resultado = document.getElementById("resultado");

//sumar
boton1.addEventListener("click", function () {
    let numero1 = parseInt(num1.value);
    let numero2 = parseInt(num2.value);
    let suma = numero2 + numero1;
    resultado.innerHTML = suma;

    //se eliminara el resultado a los 5 segundos
    setTimeout(() => {
        resultado.innerHTML = "";
    }, 5000);
    limpiarFormulario();
})

//restar
boton2.addEventListener("click", function () {
    let numero1 = parseInt(num1.value);
    let numero2 = parseInt(num2.value);
    let resta = numero1 - numero2;
    if (resta < 0) {
        resultado.innerHTML = 0;
    } else {
        resultado.innerHTML = resta;
    }
    limpiarFormulario();

})
//limpiar inputs
let limpiarFormulario = () => {
    let elementos = document.querySelectorAll("input[type=text]");
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].value = '';
    }
}