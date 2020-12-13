interface Symbol { }

import { resolveAny } from "dns";
import { question } from "readline-sync";

let i: number = 0; 
let a: number = 0; 
let b: number = 1; 
let c: number = 0;

let readline = require('readline-sync');

function fibonacci(): number {   
    
   let fibo: number = +question ("Introduzca el numero Fibonacci:  ");

    
    for (i = 0; i < fibo; i++) {
        
        if (i < fibo-1) {
        
            console.log (a + ",");
            c = a + b;
            a = b;
            b = c;
        
        } else {
        
            console.log (a);
        }
        
        return a;
    }     
}

fibonacci();