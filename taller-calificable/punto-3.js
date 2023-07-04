//Escribe una función que tome una lista de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la lista no contiene ningún número, debe devolver 0.
//
//Resultados esperados
//
//Entrada: [1, 5.2, 4, 0, -1]
//Salida: 9.2
//
//Entrada: []
//Salida: 0
//
//Entrada: [-2.398]
//Salida: -2.398




function sumarNumeros(lista) {
    if (lista.length === 0) {
      return 0;
    } else {
      let suma = 0;
      for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
      }
      return suma;
    }
  }
  
  
  let lista1 = [1, 5.2, 4, 0, -1];
  let resultado1 = sumarNumeros(lista1);
  console.log(resultado1); 
  
  let lista2 = [];
  let resultado2 = sumarNumeros(lista2);
  console.log(resultado2); 
  
  let lista3 = [-2.398];
  let resultado3 = sumarNumeros(lista3);
  console.log(resultado3);  
  