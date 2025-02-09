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

// const cutPieces = function (fruit) {
//   return fruit *4;
// };
// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces (apples);
//   const orangePieces = cutPieces (oranges);

//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
//   return juice;
// }


//Coding Challenge
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log (calcAverage(3, 4, 5));


// //Test 1
// let scoreDolphins = calcAverage (44, 23, 71);
// let scoreKoalas = calcAverage (65, 54, 49);
// console.log (scoreDolphins, scoreKoalas);
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log (`Dolphins win 🏆 (${avgDolphins} vs (${avgKoalas}))`);
//   } else if (avgKoalas >= 2 * avgDolphins ) {
//     console.log (`Koalas wins 🏆(${avgKoalas} vs (${avgDolphins}))`);

//   } else {
//     console.log (`No team wins....`);
//   }
// }
// checkWinner (scoreDolphins, scoreKoalas);
// checkWinner (576, 111);


// // Test 2
//  scoreDolphins = calcAverage (85, 54, 21);
//  scoreKoalas = calcAverage  (23, 34, 27);
// console.log (scoreDolphins, scoreKoalas);
// checkWinner (scoreDolphins, scoreKoalas);

/*
// Storing and replacing data in Arrays
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log (friends);
const y = new Array (1991, 1984, 2008, 2020);
console.log (friends [0]);
console.log (friends [2]);
console.log (friends.length);
console.log (friends [friends.length - 1]);
 friends [2] = 'jay';
 console.log (friends);


 const firstName = 'Jonas';
 const Jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
 console.log (Jonas);
 console.lg (Jonas.length);
  
 //Excercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge (years [0]);
const age2 = calcAge (years [1]);
const age3 = calcAge (years [2]);

console.log (age1, age2, age3);
const ages = [calcAge(years[0])]; calcAge(years [1]), calcAge(years [years.length -1]);
console.log(ages);
*/

//Basic Array Operations

// const friends = ['Micheal, Steven, Peter'];

// // Add Element
// const newLength = friends.push('jay');
// console.log(friends);
// console.log(newLength);
// friends.unshift('john');
// console.log(friends);
// // Remove element
// friends.pop(); //Last
// const popped = friends.pop();
// console.log (popped);
// console.log (friends);

// friends.shift(); // First
// console.log(friends);


// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'
// ));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));
// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }
// const calTip = function (bill){
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
// }
// const bills = [125, 555, 44];

// const tips = [calTip (bills [0]), calTip (bills[1]), calTip (bills [2])];
// const totals = [bills [0] + tips [0], + bills[1] + tips [1], + bills [2] + tips [2]];

// console.log (bills, tips, totals);




// // dot and bracket notation
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
// age: 2037 - 1991,
// job: 'teacher',
// friends: ['Micheal', 'Peter', 'Steven']
// };
// console.log(jonas);
// console.log (jonas.lastName);
// console.log(jonas['lastName']);
// const nameKey = 'Name';
// console.log(jonas[first + nameKey]);
// console.log(jonas[last + nameKey]);

// // console.log(jonas.'last' + nameKey)

// const interestedin = prompt ('what do you want to know about jonas ? chose between firstName, lastName, age, job, and friends');
// if (jonas[interestedin])
// {
//   console.log (jonas[interestedin]);
// }  else {
//     console.log ('Wrong request !  chose between firstName, lastName, age, job, and friends')
//   }
// }

// jonas.location = 'portugal';
// jonas['twitter'] = '@jonasSchmedtmann';
// console.log(jonas);


// // //challenge 
// // // "Jonas has 3 friends and his best friend is called Micheal"


// // // for loops keep running while condition is TRUE
// // for (let rep = 1; rep <=10; rep ++) {
// //   console.log(`lifting weights repition ${rep} 🤸`)
// }


const jonas = [
   'Jonas',
  'Schmedtmann',
2037 - 1991,
 'teacher',
 ['Micheal', 'Peter', 'Steven'],
 true
];

const types = [];

for (let i = 0; i< jonas.length; i++) {
  //Reading from the jonas Array
  console.log(jonas [i], typeof jonas [i]);

  types.push (typeof jonas[i]);

}



console.log(types);
const years = [1991, 2007, 1969, 2020];
const age = [];
for (let i = 0; i < years.length; i++){
  age.push(2037 - years[i]);
}
console.log(age);


//continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++){
if(typeof jonas [i]  !== 'string') continue;

console.log(jonas [i], typeof jonas [i]);
}
console.log('---Break Number---')
for (let i = 0; i < jonas.length; i++){
  if(typeof jonas [i]  === 'number') break;
  
  console.log(jonas [i], typeof jonas [i]);
  }