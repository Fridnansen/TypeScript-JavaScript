"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var posi = 0;
var nega = 0;
var numero = 0;
var promedio = 0;
var total = 0;
var mayor = 0;
var menor = 0;
var cientocincuenta = 0;
var negativos = 0;
var contador = 0;
var mayornegativo = 0;
var menorpositivo = 0;
var n = 75;
var numeros = [];
for (var index = 0; index < n; index++) {
    numero = pedirYValidar();
    numeros.push(numero);
}
console.log(numeros);
for (var i = 0; i < n; i++) {
    if (mayor < numeros[i]) {
        mayor = numeros[i];
    }
    if (menor > numeros[i]) {
        menor = numeros[i];
    }
    if (numeros[i] > 150) {
        cientocincuenta++;
    }
}
menorpositivo = mayor;
mayornegativo = menor;
for (var i = 0; i < n; i++) {
    if ((numeros[i] < 0)) {
        negativos++;
        nega = numeros[i];
        if (mayornegativo < nega) {
            mayornegativo = nega;
        }
    }
    else {
        total = total + numeros[i];
        contador++;
        posi = numeros[i];
        if (menorpositivo > posi) {
            menorpositivo = posi;
        }
    }
}
if (mayor === 0) {
    console.log("\nEl numero mayor es: " + mayornegativo);
}
else {
    console.log("\nEl numero mayor es: " + mayor);
}
if (menor === 0) {
    console.log("\nEl numero menor es: " + menorpositivo);
}
else {
    console.log("\nEl numero menor es: " + menor);
}
console.log("\nLos numeros mayores de 150 son: " + cientocincuenta);
console.log("\nLa cantidad de numeros negativos es: " + negativos);
if (contador === 0) {
    console.log("\nNo se puede calcular el promedio, porque no hay numeros positivos");
}
else {
    console.log("\nPromedio de los positivos es: " + (promedio = total / contador));
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
