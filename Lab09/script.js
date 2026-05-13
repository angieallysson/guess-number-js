// --- Variables con let (pueden cambiar) ---
let nombre = 'Angie';
// Declara una variable 'edad' con tu edad real (usa let)
// Declara una variable 'estaAprendiendo' con valor true (usa let)

// --- Imprime cada variable ---
console.log(nombre);
// Imprime las otras dos variables que declaraste

// --- Verifica los tipos de dato ---
console.log(typeof nombre);       // ¿Qué tipo es?
// Usa typeof para verificar el tipo de 'edad' y 'estaAprendiendo'
// ¿Qué esperas que diga? Escríbelo en un comentario antes de ejecutar

// --- Variables con const (no pueden cambiar) ---
const curso = 'Code 101';
// Declara una constante 'maxIntentos' con valor 10

// Imprime ambas constantes con console.log()

// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
// Pide la edad al usuario con prompt() y guárdala en 'edadUsuario'

// --- Salida al usuario ---
// Muestra un alert que diga: "Hola [nombre], tienes [edad] años."
// Usa concatenación con + para unir las variables con el texto

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
// Imprime la edad y su tipo de dato (usa typeof)
// Pregúntate: ¿por qué el tipo no es "number"?
// --- Entrada del usuario ---


// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);        // 27
console.log('Resta:', a - b);       // 13
// Completa las 3 operaciones que faltan:
// - Multiplicación (usa *)
// - División (usa /)
// - Módulo (usa % — devuelve el residuo de la división)

// --- ¿Qué resultado esperas? ---
console.log('5' + 3);    // ¿53 o 8?
console.log(5 + 3);      // ¿53 o 8?
console.log('5' - 3);    // ¿Qué pasa aquí?

// Forma 1: Concatenación con +
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)
// Escribe el mismo saludo usando backticks (`) y ${variable}
// let saludo2 = ...
// console.log(saludo2);

// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

// Completa el mensaje usando template literals:
// Debe decir: "Hola [nombre], naciste aproximadamente en [año]"
// Tu código aquí...