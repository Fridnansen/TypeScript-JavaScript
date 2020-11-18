import {question} from 'readline-sync';

let numero: number = 0;
let suma: number = 0;
let contador: number = 0;
let promedio: number = 0;

numero = pedirYValidar();

while (numero > 0) {

    suma = suma + numero;
    contador ++;
    
    numero = pedirYValidar (); 

}

if (contador === 0) promedio = 0;
else promedio = suma / contador;

console.log('El promedio es : ', promedio);

function pedirYValidar(): number {

    let _numero: number = + question('Ingresa un  numero: '); 
    
    while (_numero < 0 || isNaN(_numero)) {
        _numero = +question('Ingresa un numero: ');
    }
    return _numero;
}