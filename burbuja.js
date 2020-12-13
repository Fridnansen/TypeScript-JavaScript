"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var numero = 0;
var mayor = 0;
var menor = 0;
var n = 0;
var numeros = [];
var burbuja = [];
function pedirYValidar() {
    var _numero = +readline_sync_1.question('Ingresa un numero: ');
    while (isNaN(_numero)) {
        if (isNaN(_numero))
            console.log("Debe introducir un numero");
        _numero = +readline_sync_1.question('Ingresa un numero: ');
    }
    return _numero;
}
do {
    numero = pedirYValidar();
    numeros.push(numero);
    n++;
} while (numero !== 0);
function ordenarPorBurbuja(arrayDesordenado) {
    // Copia el array recibido
    var tempArray = arrayDesordenado;
    var volverAOrdenar = false;
    // Recorre el array
    tempArray.forEach(function (valor, key) {
        // Comprueba si el primero es mayor que el segundo y no esta en la última posición
        if (tempArray[key] > tempArray[key + 1] && tempArray.length - 1 != key) {
            // Intercambia la primera posición por la segunda
            var primerNum = tempArray[key];
            var segundoNum = tempArray[key + 1];
            tempArray[key] = segundoNum;
            tempArray[key + 1] = primerNum;
            // Si debe volver a ordenarlo
            volverAOrdenar = true;
        }
    });
    // Vuelve a llamar al función
    if (volverAOrdenar) {
        ordenarPorBurbuja(tempArray);
    }
    // Array ordenado
    return tempArray;
}
console.log("Los numeros se introdujeron en el siguiente orden: ", numeros);
burbuja = ordenarPorBurbuja(numeros);
console.log("Los numero se organizan de la siguiente forma ", burbuja);
