'use strict'
function logger () {
  console.log ('My name is jonas')
}



// calling/ running / invoking function
logger ();
logger ();
logger ();
function fruitProcessor (apples, oranges) {
  const juice = 'juice with ${apples} apples and ${oranges} oranges.';
  return juice;

}


const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor (2, 4);
console.log (appleOrangeJuice);
const num = Number ('23');