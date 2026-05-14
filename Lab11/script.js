// -- Entrada del Usuario --
/*let nombreUsuario = prompt('¿Como te llamas?');

// Pide el edad del Usuario con prompt() y guarda en 'edadUsuario'
let edadUsuario = prompt('¿Cuantos años tienes?');

function saludar(nombre, edad) {
    console.log(`Que tal ${nombre} tienes ${edad} años de edad `);
}

saludar(nombreUsuario,edadUsuario);
*/
let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);

if (edad >=18) {
    let resultado = 50;
    alert("Puedes votar 🧒");
} else {
  alert("Aún no puedes votar 👨‍🦱");
}
console.log(resultado);

function producto(numero){
    console.log("Esta linea esta arriba del return");
    return numero*2;
    console.log("Esta linea esta debajo del return se imprime?");
}

function verificarMayoriaEdad(edad){
    if(edad >= 18){
        return true; // Si eres mayor de edad
    } else {
        return false; // No eres mayor de edad
    }
}

console.log("El producto de 2 por 5 es" +producto(5));
