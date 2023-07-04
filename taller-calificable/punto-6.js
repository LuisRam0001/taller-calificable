/* Convertir una cadena en una lista

Escriba una función para dividir una cadena y convertirla en una lista de palabras.

Resultados esperados:

Entrada:    "Robin Singh" 
Salida:     ["Robin", "Singh"]

Entrada:    "Me encantan los arreglos, son mis favoritos"
Salida:     ["Yo", "amo", "arreglos", "ellos", "son", "mi", "favorito"] */

function dividirCadena(cadenaPalabras){

    let palabras = cadenaPalabras.split(" ");
    return palabras;
}

let cadena1 = 'Robin Singh';
let result1 = dividirCadena(cadena1);
console.log(result1);

let cadena2 ='Yo amo los arreglos son mis favoritos';
let result2 = dividirCadena(cadena2);
console.log(result2);