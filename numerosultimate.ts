import { question } from 'readline-sync';

let posi: number = 0;
let nega: number = 0;
let numero: number = 0;
let promedio: number = 0;
let total: number = 0;
let mayor: number = 0;
let menor: number = 0;
let cientocincuenta: number = 0;
let negativos: number = 0;
let contador: number = 0;
let mayornegativo: number = 0;
let menorpositivo: number = 0;
const n: number = 75;

let numeros: Array<number> = [];

for (let index = 0; index < n; index++) {

    numero = pedirYValidar();
    numeros.push(numero);
}

console.log(numeros);

for (let i = 0; i < n; i++) {

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
for (let i = 0; i < n; i++) {
    if ((numeros[i] < 0)) {
        negativos++;
        nega = numeros[i];
        if (mayornegativo < nega) {
            mayornegativo = nega;
        }
    } else {
        total = total + numeros[i];
        contador++;
        posi = numeros[i];
        if (menorpositivo > posi) {
            menorpositivo = posi;
        }
    }
}
if (mayor === 0) {
    console.log(`\nEl numero mayor es: ${mayornegativo}`);
} else {
    console.log(`\nEl numero mayor es: ${mayor}`);
}
if (menor === 0) {
    console.log(`\nEl numero menor es: ${menorpositivo}`);
} else {
    console.log(`\nEl numero menor es: ${menor}`);
}

console.log(`\nLos numeros mayores de 150 son: ${cientocincuenta}`);
console.log(`\nLa cantidad de numeros negativos es: ${negativos}`);
if (contador === 0) {
    console.log(`\nNo se puede calcular el promedio, porque no hay numeros positivos`);
} else {
    console.log(`\nPromedio de los positivos es: ${promedio = total / contador}`);
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