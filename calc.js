// comentario de una linea
/* comentario de más
de una línea*/
const prompt = require("prompt-sync")(); //esto para pdoer usar prompt
// ejecutar por terminal: npm install prompt-sync
// indentar control +k control +F

var nombre;
var n1, n2, suma;

seguir = prompt("Bienvenido a la calculadora, ¿quiere seguir? s/n: ");
if (seguir == "s") {
    opcion = parseInt(prompt("1.- Suma, 2.- Resta, 3.- Multiplicación, 4.- División, ¿quiere hacer?:"));
    if (opcion ==1){
        console.log ("esto es suma")
        n1 = parseInt(prompt("Ingrese número 1: "));
        n2 = parseFloat(prompt("Ingrese número 2: "));
        suma = n1 + n2;
        console.log(suma)
    }
    else if (opcion ==2)
    {
        console.log ("esto es resta")
    }
    else if (opcion ==3){
        console.log ("esto es multiplicacion")
    }
    else {
        console.log ("esto es division")
    }
}
else
    console.log("Chau");



