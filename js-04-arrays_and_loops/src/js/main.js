
console.log("Sesión JS-04Ñ Arrays y Bucles");

/*
    Arrays (Arreglos)

============================================================================

    Un array es una estructura 
 */

const frutas = []; //empty array 
const fruits = new Array(); //array using constructor (less common)

const numeros = [5] //Array with one element
const numbers = new Array(5); //array with 5 empty slots [ , , , , ] [ <5 empty spaces> ]

// ---2. Accediendo a los elementos---
// Los indices comienzan en 0 (Zero-base indexing)
// [0] -> Primer elemento
// [length.array - 1] -> Ultimo elemento

const techStack = ["HTML","CSS","JavaScript"];

console.log(`Accediendo al primer elemento: ${techStack[0]}`); //HTML
console.log(`Accediendo al segundo elemento: ${techStack[1]}`); //CSS
console.log(`Accediendo al ultimo elemento con length -1: ${techStack[techStack.length-1]}`); //JavaScript

// ---3. Modificacion de los Elementos ---
techStack[1] = "Sass" // cama=biando "CSS" por "Sass"
console.log(`Despues de la modificacion: ${techStack}`); //HTML,Sass,JavaScript

//Agregar un nuevo elemento al final
techStack [techStack.length] = "TypeScript";
console.log(`Agregado un elemento al final del arreglo ${techStack}`); //HTML,Sass,JavaScript,TypeScript
console.log(techStack.length); //4

/*========================================================
 Bloque 2: Metodos de Arrays (Add/remove)
 =========================================================
 JavaScript nos da metodos para manipular la lista como una pila o cola
*/

const shoppingList = ["Leche", "Huevos"];

//1. push(): Agrega al FINAL (el mas usado)
//Retorna la nueva longitud del array

shoppingList.push("Pan")
console.log("Push:", shoppingList); //["Leche", "Huevos", "Pan"]

//2. unshift:Agregar al INICIO del arreglo (mueve todos los indices, es mas lento)
shoppingList.unshift("Cafe");
console.log("Unshift:", shoppingList); //["Cafe","Leche", "Huevos", "Pan"]

// --- Eliminar elemtos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"

// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("Colores iniciales",colors.toString());
console.log("Colores iniciales", colors.join(" - ")); //Colores iniciales Rojo - Verde - Azul - Amarillo - Morado - Naranja

//Agregar 2 elementos en el indice 2, sin eliminar otros elementos 
colors.splice(2, 0, "Rosa", "Cian");
console.log("Despues de agregar el splice",colors.toString()); //Despues de agregar el splice Rojo,Verde,Rosa,Cian,Azul,Amarillo,Morado,Naranja

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const guestList = ["Fernando", "Jorge"];
console.log("Lista inicial: ", guestList.join(", "));
guestList.push ("Alejandro");
console.log("Lista despues de agregar un invitado al final: ", guestList.join(", "));
guestList.unshift("Angy");
console.log("Lista agregando un invitado al inicio de la lista: ",guestList.join(", "));
guestList.splice(1, 1, "Gerardo");
console.log("Lista final de invitados: ", guestList.join(", "));

/*=======================================================================
Bloque 3. Estructuras de datos - pilas y colas

Las pilas y colas son estructuras de datos que organizan como se almacenan y acceden a los elementos

1. LIFO(Last-In, First-Out) - Pila(Stack)
Concepto: el ultimo elemento en entrar es el primero en salir.

*/

// Navegamos a sitios (push)
const historyStack = [];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");

console.log("Historial actual: " + historyStack.join(", ")); // ["google.com, "youtube.com", "githun.com"]

// Presiono el boton de "atras"
console.log(`Regresando a: ${historyStack.pop()}`); //"github.com"

/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión: ", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/

const taskList = [];
// Paso 1
taskList.push("Lavar la ropa");
taskList.push("Lavar los trastes");
taskList.push("Hacer mi cuarto");
// Paso 2
console.log("Tareas pendientes:\n " + taskList.join("\n "));
// Paso 3
console.log(`Tareas completadas:\n ${taskList.shift()}`);
// Paso 4
taskList.unshift("Lavar el carro");
// Paso 5
console.log(`Tareas actualizadas:\n ${taskList.join("\n ")}`);
// Paso 6
taskList.shift();
console.log("Tareas pendientes actualizadas: \n" + taskList.join("\n" ))

/* ================================================================
   BLOQUE 3: BUCLES (LOOPS) 
   ================================================================
   Estructuras que repiten un bloque de código mientras una condición sea verdadera.
*/
// --- 1. Ciclo FOR (Controlado) ---
// Úsalo cuando sabes cuántas veces quieres repetir algo (ej. recorrer un array).
// Sintaxis: for (expresión_inicial; condición; expresión_final) { ... }
// Imprimier los números del 1 al 5

//Orden de los pasos del ciclo FOR
//       1       2 <---  4
for(let i = 1; i <=5 ; i++ ) {
    // 3
    console.log(`Número ${i}`);
}
// 5

// ================================================================
for(let i = 1; i <=10 ; i++) {
    if(i === 6){
        console.log("Se alcanzo el numero 6!");
        break;
    }
        console.log(`(Con break) Numero ${i}`);
}
// ================================================================
let iteracion = 0;

for(  ;  ;  ){
    console.log(`Num de iteracion: ${iteracion}`);
    iteracion++;
    if(iteracion === 5){
        break;
    }
}
console.log("Final: " + iteracion );

// =================================================================
let myIteration;

for( myIteration = 0 ;myIteration <= 5; myIteration++ ){
    console.log(`For Loop: ${myIteration}`);
    if(myIteration === 2)break;
}
console.log("Final: " + myIteration );

// =================================================================
let jiteration

for (jiteration = 0; jiteration <3; jiteration++){
    console.log("For loop", jiteration);
}
console.log("Final", jiteration);

// =================================================================
let k;

for (k = 0; k < 5; k++);{
    console.log("Valor de", k);
}
console.log("Final", k);

// ---------------------Uso de continue en ciclos --------------------
// break: TERMINA completamente un bucle (for, while, switch, etc.)
// continue: SALTA la iteracion actual y pasa a la siguiente sin salir del bucle.

for (let i = 0 ; i <= 5 ; i++){
    if(i === 3)continue;
    console.log("Estoy dentro del ciclo for");
    console.log("Valor de i: " +i);
}


// --- 2. Ciclo WHILE (Basado en condicion) ---
// Usalo cuando NO sabes cuantas veces se repetira, depende de algo externo.
// Cuidado: Si la condicion nunca es falsa, creas un bucle infinito (infinite loop)
/*
while ( confirm("Quieres tu numero de la suerte:")){
    const numeroSuerte = Math.random(); 
}
*/

let i= 1;
while (i <= 5) {
  console.log(`Numero ${i}`);
  i++; 
}

// ========================================================

const countries = ["Mexico", "USA", "Canda", "Japon"];

//Usando FOR LOOP
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    console.log(`(for) Pais en indice ${index}: ${element}`);
}

//Usando FOR OF (ES6+)
for (const country of countries) {
    console.log(`(for of) Pais: ${country}`);
}

// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;
// Con el metodo FOR OF
for (const recorrido of transactions) {
    totalBalance += recorrido;
} 
 console.log(`Balance Final: ${totalBalance}`);

 // Con el metodo FOR
 let totalBalanceFor = 0;
for (let i = 0; i < transactions.length; i++) {
    const sum = transactions[i];
    totalBalanceFor += sum;
}
console.log(`Balance Final con FOR: ${totalBalanceFor}`);

// Con el metodo WHILE
let totalBalanceWhile = 0; // Usamos una variable nueva para esta demostración
// La condición de parada es que el índice (i) sea menor que la longitud del array
while (i < transactions.length) {
  // Obtenemos el movimiento usando el índice
  const movement = transactions[i]; 
  
  // Sumamos el valor al balance
  totalBalanceWhile += movement;
  
  // ¡MUY IMPORTANTE! Incrementar el índice para evitar un ciclo infinito
  i++; 
}

console.log("Balance con ciclo WHILE:" + totalBalanceWhile);

// FOR-EACH
let totalBalanceForEach = 0;
transactions.forEach((transaction,index,transactions) => totalBalanceForEach += transaction);
console.log("Balance con FOR EACH: " + totalBalanceForEach);
