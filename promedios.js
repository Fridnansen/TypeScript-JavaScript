"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var numero = 0;
var suma = 0;
var contador = 0;
var promedio = 0;
numero = pedirYValidar();
while (numero > 0) {
    suma = suma + numero;
    contador++;
    numero = pedirYValidar();
}
if (contador === 0)
    promedio = 0;
else
    promedio = suma / contador;
console.log('El promedio es : ', promedio);
function pedirYValidar() {
    var _numero = +readline_sync_1.question('Ingresa un  numero: ');
    while (_numero < 0 || isNaN(_numero)) {
        _numero = +readline_sync_1.question('Ingresa un numero: ');
    }
    return _numero;
}
