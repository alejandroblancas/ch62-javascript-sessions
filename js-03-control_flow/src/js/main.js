let isActive = true;

if(isActive === true) console.log("El usuario está activo:");
if(isActive == true) console.log("El usuario esta activo");

if(isActive === true){
    console.log("El usuario esta activo");
}

if(isActive){
    console.log("El usuario esta activo");
} else {
    console.log("El usuario no esta activo");
}

//Bloque de codigo 
//Conjunto de sentencias agrupadas entre llaves { ... }
{
    let firstName = "Juan";
    let lastName = "Perez";
    var alias = "Juampi";
    let age = 28;

    console.log(firstName,lastName,alias); //Juan Perez Juampi
    {//Bloque anidado
        let firstName = "Alejandro";
        let lastName = "Gonzalez";
        var alias = "Alejo"; 
        var alias = "Serch";
        console.log(firstName,lastName,alias,age); //Alejandro Gonzalez Serch
    }

    console.log(firstName,lastName,alias,age);
}
//console.log(firstName,lastName,alias,age); // error porque ya no hay alcance de bloque.
console.log(alias); //Serch

/*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".
 Imprimir el valor del retorno por consola.
*/

const checkTemperature = (temperature) => {
    let message = "";
  if (temperature > 25) {
    message = "Hace calor";
  } else if (temperature >=15 && temperature <=30){
    message = "Temperatura agradable";
  } else if (temperature <15 && temperature >0) {
    message = "Hace frio";
  } else {
    message = "Hace mucho frio";
  };
  return message;
}

console.log(checkTemperature(30)); 
console.log(checkTemperature(25)); 

/*
    Relizar una funcion que reciba el valor booleano si una persona esta feliz o no
    Si la persona esta feliz, mostrar en la interfaz de imagen "public/images/dino/jpg"
    En caso contrario mostrar la imagen "public/images/dino.jpg"
*/

//if-else-if

const checkWeather = (code) => {
    let message2 = "";
  if (code === 0) {
    message2 = "Clear Sky";
  } else if (code === 1 || code === 2 || code === 3){
    message2 = " Mainly clear, partly cloudy, and overcast";
  } else if (code === 45 || code === 48  ) {
    message2 = "Fog and depositing rime fog";
  } else if (code === 51 || code === 53 ||  code === 55 ) {
    message2 = "Drizzle: Light, moderate, and dense intensity";
  } else if (code === 56 || code === 57  ) {
    message2 = "Freezing Drizzle: Light and dense intensity";
  } else {
    message2 = "Codigo no definido";
  }
  return message2;
};

console.log(checkWeather(0)); 
console.log(checkWeather(1)); 
console.log(checkWeather(2)); 
console.log(checkWeather(3)); 
console.log(checkWeather(45)); 
console.log(checkWeather(48)); 
console.log(checkWeather(56)); 
console.log(checkWeather(57)); 

// --- condicional switch-cas ----
/* 
La condicional Switch evalua una expresion y se compara con el valor de cada instancia 'case' y se ejecuta
las sentencias asociadas
*/

const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "super_admin":
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("super_admin") ); // Acceso para editar contenido
console.log( getAccessLevel("customer") );
console.log( getAccessLevel("editor") );
console.log( getAccessLevel("viewer") );


const getAccessLevelWithEarlyReturn = ( role ) => {
    switch ( role ) {
        case "super_admin":
        case "admin":
            return "Acceso completo al sistema";
        case "editor":
            return "Acceso para editar contenido";  
        case "viewer":
            return "Acceso solo para ver contenido";
        default:
            return "Acceso denegado";
    }
  };

console.log( getAccessLevel("super_admin") ); 
console.log( getAccessLevel("customer") );
console.log( getAccessLevel("editor") );
console.log( getAccessLevel("viewer") );

/*
Refactorizar la funcion getWeather usando switch-case
*/

const getWeather = ( role ) => {
    switch ( role ) {
        case 0:
            return "Clear Sky";
        case 1: case 2: case 3:
            return "Mainly clear, partly cloudy, and overcast";
        case 45: case 48:
            return "Fog and depositing rime fog";  
        case 51: case 52: case 55:
            return "Drizzle: Light, moderate, and dense intensity";
        case 56:
        case 57:
            return "Freezing Drizzle: Light and dense intensity";
        default:
            return "Codigo no definido";
    }
  };

console.log(getWeather(52));

// ==========================================================
/* 
  Dado un numero entero, imprimir:

  "Negativo": si el numero es menor a 0.
  "Cero": si el numero es 0.
  "Positivo": si el numero es mayor a cero pero menor a 100.
  "Grande": si el numero es mayor o igual a 100.
*/ 

function clasificarNumeroIfElse(numero) {
  if (numero <0) {
    return "Negativo"
  } else if (numero === 0){
    return "Cero"
  } else if (numero >0 && numero <100){
    return "Positivo"
  } else if (numero >= 100)
    return "Grande"
}

 // ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.
 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 
*/



const votingEligibility = (age) => {
  return age > 18 ? "Puede votar" : "No puede votar";
}

console.log(votingEligibility(20)); //Puede votar 
console.log(votingEligibility(16)); //No Puede votar 

/*
 Realizar una función que reciba un número y retorne
 "Par" si el número es par o "Impar" si el número es impar.
 Usar el operador ternario.
*/

const numeroParImpar = (num) => {
  return num%2 === 0 ? "Par" : "Impar";
}
console.log(numeroParImpar(27)); //Impar
console.log(numeroParImpar(12)); //Par

// Ejercicio de Mari con operador ternario
// img.src = weather.temperature > 19 ? "calor.png" : "frio.png";