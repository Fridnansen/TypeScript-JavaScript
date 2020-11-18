var unNumero = 2;
var otroNumero = 5;
var tercerNumero = 6;
var cuartoNumero = 19;
function sumar(primerParametro, segundoParametro) {
    var resultado = primerParametro + segundoParametro;
    return resultado;
}
function restar(primerParametros, segundoParametros) {
    var resultador = segundoParametros - primerParametros;
    return resultador;
}
function despedirme() {
    console.log('Chauuu');
}
var resultadoSuma = sumar(tercerNumero, cuartoNumero);
var resultadoResta = restar(unNumero, otroNumero);
console.log('El resultado de la suma es: ', resultadoSuma);
console.log('El resultado de la resta es: ', resultadoResta);
despedirme();
