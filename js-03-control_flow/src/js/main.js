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
  if (temperature > 25) {
    console.log("Hace mucho calor");
  } else {
    console.log("Hace frío! Wuju :D");
  }
};

checkTemperature(30); // Output: Hace mucho calor
checkTemperature(25); // Output: Hace frío! Wuju :D

