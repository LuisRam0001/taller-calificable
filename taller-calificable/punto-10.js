/*Escribe una función llamada mayoresDeEdad que reciba un arreglo de objetos (que representan personas) y retorne un nuevo arreglo con los nombres de las personas mayores de edad:

    let personas = [
        { nombre: "Ana", precio: 25 },
        { nombre: "Carlos", precio: 13 },
        { nombre: "Luisa", precio: 32 },
        { nombre: "Juan", precio: 15 },
        { nombre: "Elisa", precio: 45 },
        { nombre: "Sofia", precio: 9 },
        { nombre: "Manuela", precio: 30 },
    ];

Nota: No olvide usar console.log() para mostrar los resultados retornados por la función personas:

Entrada:    mayoresDeEdad( personas );
Salida:     [ "Ana", "Luisa", "Elisa", "Manuela" ]*/


function mayoresDeEdad(personas) {
    const nombresMayores = [];
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].precio >= 18) {
        nombresMayores.push(personas[i].nombre);
      }
    }
    return nombresMayores;
  }
  
  // Ejemplo de uso
  let personas = [
    { nombre: "Ana", precio: 25 },
    { nombre: "Carlos", precio: 13 },
    { nombre: "Luisa", precio: 32 },
    { nombre: "Juan", precio: 15 },
    { nombre: "Elisa", precio: 45 },
    { nombre: "Sofia", precio: 9 },
    { nombre: "Manuela", precio: 30 },
  ];
  
  const nombresMayores = mayoresDeEdad(personas);
  console.log(nombresMayores);
  


















     
     
            
            
                                          
      
      
      
            
      
                  
      
      
      
      
      
      
      
      
            
      
      







    
