"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var numero = 0;
var total = 0;
var mayor = 0;
var menor = 0;
var cientocincuenta = 0;
var negativos = 0;
var contador = 0;
var cantidadNumeros = 5;
var numeros = [];
numero = pedirYValidar();
mayor = numero;
menor = numero;
for (var i = 0; i < cantidadNumeros - 1; i++) {
    if (mayor < numero) {
        mayor = numero;
    }
    if (menor > numero) {
        menor = numero;
    }
    if (numero > 150) {
        cientocincuenta++;
    }
    if (numero < 0) {
        negativos++;
    }
    else {
        total = total + numero;
        contador++;
    }
    numeros.push(numero);
    numero = pedirYValidar();
}
console.log(numeros);
console.log("\nEl numero mayor es: " + mayor);
console.log("\nEl numero menor es: " + menor);
console.log("\nLos numeros mayores de 150 son: " + cientocincuenta);
console.log("\nLa cantidad de numeros negativos es: " + negativos);
if (contador === 0) {
    console.log("\nNo se puede calcular el promedio, porque no hay numeros positivos");
}
else {
    console.log("\nPromedio de los positivos es: " + total / contador);
}
function pedirYValidar() {
    var _numero = +readline_sync_1.question('Ingresa un  numero: ');
    while (_numero === 0 || isNaN(_numero)) {
        if (_numero === 0)
            console.log("No debe introducir cero por favor");
        if (isNaN(_numero))
            console.log("Debe introducir un numero");
        _numero = +readline_sync_1.question('Ingresa un numero: ');
    }
    return _numero;
}
