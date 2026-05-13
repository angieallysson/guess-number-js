// Mensaje inicial
console.log("¡Hola desde JavaScript!");

// Variables
let nombre = "Angie Allysson";
let edad = 25;
let estaAprendiendo = true;

// Mostrar variables
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Está aprendiendo:", estaAprendiendo);

// Tipos de datos
console.log("Tipo de dato de nombre:", typeof nombre);
console.log("Tipo de dato de edad:", typeof edad);
console.log("Tipo de dato de estaAprendiendo:", typeof estaAprendiendo);

// Constante
const curso = "Code 101";
console.log("Curso:", curso);

// Otra constante
const maxIntentos = 10;
console.log("Máximo número de intentos:", maxIntentos);

// Reasignación de variables
nombre = "Angie Allysson Alvarez Arce";
console.log("Nombre:", nombre);

edad = "25";
console.log("Edad:", edad);

// Verificar nuevo tipo
console.log("Tipo de edad:", typeof edad);

// Operaciones matemáticas
let a = 30;
let b = 4;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación", a * b);
console.log("División", a / b);
console.log("Módulo", a % b);

// Función
function saludar(nombre, edad) {
  return `Hola ${nombre}, tienes ${edad} años.`;
}

console.log(saludar("Angie Allysson Alvarez Arce", 25));
console.log(saludar(nombre, edad));

// Calcular año aproximado de nacimiento
function calcularNacimiento(nombre, edad) {
  let anioActual = new Date().getFullYear();
  let nacimiento = anioActual - edad;

  return `Hola ${nombre}, naciste aproximadamente en ${nacimiento}.`;
}

console.log(calcularNacimiento("Angie Allysson Alvarez Arce", 25));