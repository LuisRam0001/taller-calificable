/*Cree una función con dos argumentos que devolverá una lista de los primeros n múltiplos de x.

Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

Devuelve los resultados como una lista.  */
//Number(prompt('ingrese un numero'))

function obtenerMultiplos(x, n) {
    let multiplos = [];
  
    for (let i = 1; i <= n; i++) {
      multiplos.push(x * i);
    }
  
    console.log(multiplos);
  }
  
  
  let resultado1 = obtenerMultiplos(3, 5);
  console.log(resultado1); 
  
  let resultado2 = obtenerMultiplos(7, 3);
  console.log(resultado2); 
  
  let resultado3 = obtenerMultiplos(2, 6);
  console.log(resultado3); 
  