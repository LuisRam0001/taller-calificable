//Crea una funcion que recibirá como parámetro una letra, por ejemplo la letra o a partir de la cual dibujará el siguiente patrón. Una matriz de 10 x 10 donde dicha letra se imprimirá de forma intercalada.

//Ejemplo mostrando los
//indices de la matriz
//
//   12345678910
//1  o o o o o 
//2   o o o o o 
//3  o o o o o 
//4   o o o o o 
//5  o o o o o 
//6   o o o o o 
//7  o o o o o 
//8   o o o o o
//9  o o o o o 
//10  o o o o o


function dibujarPatron() {
    const matriz = [];
  
    
    for (let i = 0; i < 10; i++) {
      matriz[i] = [];
      for (let j = 0; j < 10; j++) {
        matriz[i][j] = " o ";
      }
    }
  
    
    for (let i = 0; i < 10; i += 2) {
      for (let j = 0; j < 10; j += 2) {
        matriz[i][j] = ":)";
      }
    }
  
    
    for (let i = 0; i < 10; i++) {
      let fila = (i + 1).toString().padStart(2, " ");
      for (let j = 0; j < 10; j++) {
        fila += matriz[i][j] + " ";
      }
      console.log(fila);
    }
  }
  
  
  dibujarPatron();
  