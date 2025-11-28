/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
Legibilidad: Hacer que el código sea más claro y fácil de entender.
Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
Evitar efectos secundar
ios: Una función no debe modificar variables externas.*/

//Funciones declaradas

function saludar(nombre){
    console.log(`Hola ${nombre}, que vas a comer hoy?`);
    return;
}

saludar('John');


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

/**
 * funcion que recibe nombre y apellido y retorna el nombre completo
 * @param {string} firstName nombre de la persona
 * @param {string} lastName apellido de la persona
 * @returns concatenacion del nombre y apellido de la persona en la cohorte ch62


const printFullName = function (firstName,lastName) {
  return `${firstName} ${lastName} estudiante de la ch62`
}; 

console.log( printFullName("Johan", "Gonzalez") );

*/

// Funcion flecha

const printFullName = (firstName, lastName) => `${firstName} ${lastName} estudiante de la ch62`;


/* --- Parametros por defetco ---
        (default parameters)
  Inicializa un parametro de la funcion, si no se envia el argumento cuando se invoca
 */


  const makeCoffe = (type) => `Preparando un cafe ${type}`;

  console.log( makeCoffe("Latte")); //Preparando un cafe Latte
  console.log( makeCoffe()); // Preparando un cafe undefined

  const makeCoffe2 = (type = "Americano") => `Preparando un cafe ${type}`;
  
  console.log( makeCoffe2("Latte")); //Preparando un cafe Latte
  console.log( makeCoffe2()); //Preparando un cafe Americano

 
//Todo: generar una funcion que calcule el area de un rectangulo usando como parametros por defecto
//para largo y ancho ( (base x altura) /2)

const rectangleArea = (length = 1, width = 1) => length * width;
console.log(rectangleArea(4,5));

//Tiempo de uso de default parameters
console.log(`Vales 1000, estoy diciendo que vales: ${parseInt("1000",10)}`);
console.log(`Vales 1111101000 base 2, estoy diciendo que vales: ${parseInt("1111101000",2)}`); //1000


 /*
  Pase de datos:
    - Por valor: Se crea una copia independiente del dato. 
      Si modificas la copia, el original NO cambia.
    - Por referencia: Se pasa la dirección de memoria (referencia), 
      no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */

/*
 ---Funciones de callback ---
 
 Es una funcion (definida, expresada, arrow, anonima) que se pasa a otra funcion
 como argumento.
 Se pasa en el argumento como referencia (sin parentesis).

 */

  // Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};

console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2

// Aplicando funciones de callback
// 1. La funcion principal esta "cerrada"(no la tocamos mas)

const calculate = (a, b, operationFunction) => {
  return operationFunction(a, b);
}

// console.log(`Usando incorrectamente la funcion: ${calculte(5,3,10)}`); //OperationFunction is not a function con el numero 10

// 2. Definimos operaciones basicas
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const division = (a,b) => a/b;
const sum = (a,b) => a+b;

console.log(`Realizando una resta: ${calculate(5,3,subtract)}`);
console.log(`Realizando una multiplicacion: ${calculate(5,3,multiply)}`);
console.log(`Realizando una division: ${calculate(5,3,division)}`);
console.log(`Realizando una suma: ${calculate(5,3,sum)}`);

// Aplicar una funcion que calcule la potencia de un numero
console.log(`Realizando una potencia: ${calculate(6,3, (a,b) => a**b)}`); //Math.pow(a,b)

// Aplicar una funcion que calcule el residuo de una division, para saber si 6 es divisible entre 3
console.log(`residuo de 7 entre 3 ${calculate(7,3,(a,b)=>a%b)}`)
