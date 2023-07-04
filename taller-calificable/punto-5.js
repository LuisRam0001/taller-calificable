//Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.
//
//Recibe una lista con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!
//
//¡Devuelve True si estás mejor, de lo contrario False!
//
//Nota: Sus puntos no están incluidos en la lista de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la lista dada!






function PuntajesClase(puntajes, miPuntaje) {
    puntajes.push(miPuntaje);
    let promedioClase = puntajes.reduce((a, b) => a + b, 0) / puntajes.length;
    return miPuntaje > promedioClase;
  }
  
  // Ejemplo de uso
  var puntajesClase = [80, 75, 90, 85];
  var miPuntaje = 95;
  var resultado = PuntajesClase(puntajesClase, miPuntaje);
  console.log(resultado);  // Salida: true
  