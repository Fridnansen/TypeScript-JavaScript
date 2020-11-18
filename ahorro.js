"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var contador = 0;
var total = 0;
var mes = +readline_sync_1.question('Introduzca ganancia del mes (1): ');
while (contador < 11) {
    total = total + mes;
    console.log("Ahorro acumulado del mes (" + (contador + 1) + ") es: " + total);
    contador = contador + 1;
    mes = +readline_sync_1.question("\nIntroduzca ganancia del mes (" + (contador + 1) + "): ");
}
console.log("\nAhorro total anual es: " + (total + mes));
