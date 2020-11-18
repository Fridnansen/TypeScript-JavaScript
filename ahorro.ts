import {question} from 'readline-sync';

let contador: number = 0;
let total: number = 0;

let mes: number = +question('Introduzca ganancia del mes (1): '); 

	
while (contador < 11){
		
    total = total + mes;
	console.log (`Ahorro acumulado del mes (${contador + 1}) es: ${total}`);
	contador = contador + 1;
	mes = +question (`\nIntroduzca ganancia del mes (${contador + 1}): `);
} 
	
console.log (`\nAhorro total anual es: ${total + mes}`);