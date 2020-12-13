import { question } from 'readline-sync';

let numero: number = 0;
let mayor: number = 0;
let menor: number = 0;
let n: number = 0;

let numeros: Array<number> = [];
let burbuja: Array<number> = [];

function pedirYValidar(): number {

    let _numero: number = +question('Ingresa un numero: ');

    while (isNaN(_numero)) {
        if (isNaN(_numero)) console.log(`Debe introducir un numero`);
        _numero = +question('Ingresa un numero: ');
    }
    return _numero;
}

do {
    numero = pedirYValidar();
    numeros.push(numero);
    n++;
} while (numero !== 0);

function ordenarPorBurbuja(arrayDesordenado: number[]): number[] {
    // Copia el array recibido
    let tempArray: number[] = arrayDesordenado;
    let volverAOrdenar: boolean = false
    // Recorre el array
    tempArray.forEach(function (valor, key) {
        // Comprueba si el primero es mayor que el segundo y no esta en la última posición
        if (tempArray[key] > tempArray[key + 1] && tempArray.length - 1 != key) {
            // Intercambia la primera posición por la segunda
            let primerNum: number = tempArray[key]
            let segundoNum: number = tempArray[key + 1]
            tempArray[key] = segundoNum
            tempArray[key + 1] = primerNum
            // Si debe volver a ordenarlo
            volverAOrdenar = true
        }
    })
    // Vuelve a llamar al función
    if (volverAOrdenar) {
        ordenarPorBurbuja(tempArray)
    }
    // Array ordenado
    return tempArray
}


console.log("Los numeros se introdujeron en el siguiente orden: ", numeros);

burbuja = ordenarPorBurbuja(numeros);

console.log("Los numero se organizan de la siguiente forma ", burbuja);



