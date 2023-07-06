//Crea una función llamada ordenarDesc (puede ser normal o función flecha) que reciba un arreglo de números como argumento y que retorne la lista ordenada de forma descendente (es decir, de mayor a menor)

//Entrada:    [ 34, 7, 9, 11, 77, 23, 2 ]
//Salida:     [ 77, 34, 23, 11, 9, 7, 2 ]




const ordenarDesc = arr => arr.sort((a, b) => b - a);

// Ejemplo de uso
const numeros = [100, 102, 45, 123, 34, 56, 12];
const numerosOrdenados = ordenarDesc(numeros);
console.log(numerosOrdenados);
