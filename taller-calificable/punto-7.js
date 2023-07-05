

//rea un objeto explicito en una variable llamada auto que tenga un atributo velocidad (con valor inicial 0) y dos métodos acelerar y frenar.
//
//los métodos acelerar y frenar deben incrementar y decrementar la propiedad velocidad en 1.
//
//Nota: Utiliza métodos concisos. No olvide usar console.log() para mostrar los resultados retornados por la función auto.velocidad:


function Auto() {
    this.velocidad = 0;
    this.acelerar = () => {
      this.velocidad += 1;
    };
    this.frenar = () => {
      this.velocidad -= 1;
    };
  }
  
  const auto = new Auto();
  
  console.log(auto.velocidad);  
  auto.acelerar();
  console.log(auto.velocidad);  
  auto.frenar();
  console.log(auto.velocidad);  
  














