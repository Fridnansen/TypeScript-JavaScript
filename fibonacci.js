"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var i = 0;
var a = 0;
var b = 1;
var c = 0;
var readline = require('readline-sync');
function fibonacci() {
    var fibo = +readline_sync_1.question("Introduzca el numero Fibonacci:  ");
    for (i = 0; i < fibo; i++) {
        if (i < fibo - 1) {
            console.log(a + ",");
            c = a + b;
            a = b;
            b = c;
        }
        else {
            console.log(a);
        }
        return a;
    }
}
fibonacci();
