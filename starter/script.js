'use strict'

// function logger () {
//   console.log ('My name is jonas')
// }



// // calling/ running / invoking function
// logger ();
// logger ();
// logger ();
// function fruitProcessor (apples, oranges) {
//   const juice = 'juice with ${apples} apples and ${oranges} oranges.';
//   return juice;

// }


// const appleJuice = fruitProcessor (5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor (2, 4);
// console.log (appleOrangeJuice);
// const num = Number ('23');
// //


/*

//function declaration
function calcAge1 (birthYear){
  return 2037 - birthYear;

}
const age1 = calcAge1 (1991);
//funs=ction statement
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;

}

const age2 = calcAge2 (1991);
console.log (age1, age2);
*/
// function expression
// const calcAge2 = function (birthYear ) {
//   return 2037 - birthYear;
// }

// //Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log (age3);

// const yearsUntilRetirement = (birthYear, firstname) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   //return retirement;
//   return `${firstname} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement (1991, 'Jonas'));
// console.log (yearsUntilRetirement (1980, 'bob'));

// Calling function inside function : Data flow

const cutPieces = function (fruit) {
  return fruit *4;
};
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces (apples);
  const orangePieces = cutPieces (oranges);

  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
  return juice;
}