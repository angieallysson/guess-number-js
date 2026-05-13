/*let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);

if (edad >= 18) {
  alert("Puedes votar 🗳️");
} else {
  alert("Aún no puedes votar 🧒");
}*/

console.log("==== Temperatura ====");
let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}
console.log(temperatura);

console.log("==== Crear Contraseña ====");
let clave = prompt("Crea una contraseña:");
if (clave.length >= 6) {
  alert("Contraseña válida ✅");
} else {
  alert("Contraseña muy corta ❌");
}
console.log(clave);

console.log("==== Edad ====");
let edad = prompt("¿Cuántos años tienes?");
if (edad < 13) {
  alert("Eres un niño 🧒");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}
console.log(edad);

if (edad > 18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
}

console.log("==== Ejercicio 01 ====");
// Pedir el total de la compra
let total = parseFloat(prompt("Ingresa el total de la compra:"));

// Variable para guardar el precio final
let precioFinal;

// Aplicar descuentos
if (total > 100) {
    // 20% de descuento
    precioFinal = total * 0.80;
} else if (total >= 50 && total <= 100) {
    // 10% de descuento
    precioFinal = total * 0.90;
} else {
    // Sin descuento
    precioFinal = total;
}
// Mostrar resultado
alert("Tu precio final es: $" + precioFinal);

//Mostrar en la Consola
console.log(precioFinal);

/*console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);*/
