let miNombre2  = 'Fonseca';
let personaje  = 'Mario Bros'; 
var superHeroe = 'Iron-Man';
const miNombre = 'Adrian';

let juegos  = [ 'Zelda','Mario','Metroid','Chrono' ];
let juegos2 = [...juegos];

let nuevaLongitud = juegos.push( 'F-Zero' );

juegos2 = 'Gears of Wars';
miNombre = 'Andrés';

console.log({ nuevaLongitud, juegos });
console.log('Hola mundo');
console.log( 'Largo', juegos.length );
console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => {
    console.log( {elemento, indice, arr} );
});








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












