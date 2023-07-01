// va a sobrevivir?

//Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

//Responda a la pregunta y devuelva true si es así, de lo contrario false :)

 let balas = Number(prompt('ingresa un numero de balas'));
 let dragones = 2;
 let vaASobrevivir = sobrevivirDragones(dragones);
function sobrevivirDragones(numDragones) {
  let numBalasNecesarias = numDragones * 2; 
  let numBalasHeroe = balas ; 

  if (numBalasHeroe >= numBalasNecesarias) {
    return console.log('Va a sobrevir');
  } else {
    return console.log('No sobrevivira');
  }
}





  





