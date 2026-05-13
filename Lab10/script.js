/*// -- Entrada del Usuario --
let nombreUsuario = prompt('¿Como te llamas?');

// Pide el edad del Usuario con prompt() y guarda en 'edadUsuario'
let edadUsuario = prompt('¿Cuantos años tienes?');

console.log(`Hola ${nombreUsuario} tienes ${edadUsuario} años de edad `);

console.log(`En 10 años tendra ${10+Number(edadUsuario)}`);
*/

/*console.log(5>10);
console.log(10<=10);
console.log(10<=12);
console.log(8!==9);
console.log("COMPARACION EN TEXTOS====");
console.log("Hola"==="Hola"); //True
console.log("Hola"==="HOla"); //False

console.log("OPERADORES LOGICOS====");
let edad = 15;
let tienelicencia = true;
console.log(edad>=18 && tienelicencia);

let esFeriado = false; //No es feriado
let esDomingo = true; //Si es domingo
console.log(esFeriado || esDomingo);
console.log(false || false); //False

console.log(15<=18 || 20==="20");*/

let edad=20;
let genero="femenino";
let esVip=true; //Booleano
let tienePlata=true;
22

console.log(((genero==="femenino" && edad>=18) || esVip==="true") && tienePlata)// Falso o Verdadero

const PUNTAJE=Number(prompt("Ingresa tu nota de Examen del 0 al 20"))
if(PUNTAJE >= 18){
    //Lineas de codigo que se ejecutan si la consicion cumple
    alert("Excelente Nota")
} else if (PUNTAJE >= 11){
    alert("Nota Regular")
} else {
    alert("Nota Desaprobatoria")
}
console.log("Continuo su camino")