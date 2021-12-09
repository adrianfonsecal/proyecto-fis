// VARIABLES

let personaje  = 'Mario Bros'; 
var superHeroe = 'Iron-Man';// <------ YA NO SE UTILIZA PARA DECLARAR VARIABLES
const miNombre = 'Adrian';

// ASEGÚRSENSE DE QUE LAS PALABRAS RESERVADAS DE EL LENGUAJE DE PROGRAMACIÓN ESTÉN ACTUALIZADAS.

//ARREGLOS
let juegos  = [ 'Zelda','Mario','Metroid','Chrono' ];
let juegos2 = [...juegos];

//Cambio de valor 
juegos2     = 'Gears of Wars';

console.log( 'Largo', juegos.length );
console.log({ primero, ultimo });

// FUNCIONES 
juegos.forEach( (elemento, indice, arr) => {
    console.log( {elemento, indice, arr} );
});

let nuevaLongitud = juegos.push( 'F-Zero' );
let miNombre2     = 'Fonseca';

console.log({ nuevaLongitud, juegos });
console.log('Hola mundo');






// nuevaLongitud = juegos.unshift('Fire Emblem');
// console.log({ nuevaLongitud, juegos });

// let juegoBorrado = juegos.pop();
// console.log({juegoBorrado, juegos});


// let pos = 1;

// console.log(juegos);
// let juegosBorrados = juegos.splice( pos, 2);
// console.log({juegosBorrados});

// let metroidIndex = juegos.indexOf('Metroid'); //Case Sensitive
// console.log({metroidIndex});












