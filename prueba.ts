const unNumero : number = 2;
const otroNumero : number =5;
const tercerNumero : number = 6;
const cuartoNumero: number = 19;


function sumar(primerParametro:number, segundoParametro: number){

    const resultado = primerParametro + segundoParametro;
    
    return resultado;

}

function restar(primerParametros:number,segundoParametros: number){

    const resultador =  segundoParametros - primerParametros;
    
    return resultador;

}

function despedirme():void{

    console.log('Chauuu');

}


const resultadoSuma= sumar (tercerNumero, cuartoNumero);

const resultadoResta= restar(unNumero, otroNumero);

console.log('El resultado de la suma es: ', resultadoSuma);

console.log('El resultado de la resta es: ', resultadoResta);

despedirme();