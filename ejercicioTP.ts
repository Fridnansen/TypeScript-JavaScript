import {question} from 'readline-sync'
//interface Symbol {}
//let question = require('readline-sync');



while (true){
    const valor: string = question ("Ingresa una cadena de carcateres: ");

    // ingresa
    for (let index = 0; index < valor.length; index++){

        const caracter: string = valor [index];
        console.log(`El caracter ${caracter} es ${devolvemeElTipoDeDato(caracter)}`  );

    }

}

function devolvemeElTipoDeDato(_caracter:string): 'string' | 'number'{
    if (isNaN(+_caracter)=== true){
        return 'string';
    } else{
        return 'number'
    }
}