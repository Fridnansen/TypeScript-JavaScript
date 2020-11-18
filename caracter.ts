const miNombre: string= 'Marcelo';

function getInitial(unNombre: string): string {

    const inicial : string = unNombre.substr(0,1);
    
    return inicial; 
}

const miInicial: string = getInitial(miNombre);

console.log('Mi inicial es: ', miInicial);

