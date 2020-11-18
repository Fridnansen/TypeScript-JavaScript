import { question } from 'readline-sync';

let numero: number = 0;
let total: number = 0;
let mayor: number = 0;
let menor: number = 0;
let cientocincuenta: number = 0;
let negativos: number = 0;
let contador: number = 0;
const cantidadNumeros: number = 5;

let numeros: Array<number> = [];

numero = pedirYValidar();
mayor = numero;
menor = numero;

for (let i = 0; i < cantidadNumeros-1; i++) {

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
    } else {
        total = total + numero;
        contador++;
    }
    numeros.push(numero);
    numero = pedirYValidar();
}

console.log(numeros);
console.log(`\nEl numero mayor es: ${mayor}`);
console.log(`\nEl numero menor es: ${menor}`);
console.log(`\nLos numeros mayores de 150 son: ${cientocincuenta}`);
console.log(`\nLa cantidad de numeros negativos es: ${negativos}`);
if (contador === 0) {
    console.log(`\nNo se puede calcular el promedio, porque no hay numeros positivos`);
} else {
    console.log(`\nPromedio de los positivos es: ${total / contador}`);
}

function pedirYValidar(): number {

    let _numero: number = + question('Ingresa un  numero: ');

    while (_numero === 0 || isNaN(_numero)) {
        if (_numero === 0) console.log(`No debe introducir cero por favor`);
        if (isNaN(_numero)) console.log(`Debe introducir un numero`);
        _numero = +question('Ingresa un numero: ');
    }
    return _numero;
}