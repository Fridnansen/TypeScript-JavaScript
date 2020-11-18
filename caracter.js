var miNombre = 'Marcelo';
function getInitial(unNombre) {
    var inicial = unNombre.substr(0, 1);
    return inicial;
}
var miInicial = getInitial(miNombre);
console.log('Mi inicial es: ', miInicial);
