"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
//interface Symbol {}
//let question = require('readline-sync');
while (true) {
    var valor = readline_sync_1.question("Ingresa una cadena de carcateres: ");
    // ingresa
    for (var index = 0; index < valor.length; index++) {
        var caracter = valor[index];
        console.log("El caracter " + caracter + " es " + devolvemeElTipoDeDato(caracter));
    }
}
function devolvemeElTipoDeDato(_caracter) {
    if (isNaN(+_caracter) === true) {
        return 'string';
    }
    else {
        return 'number';
    }
}
