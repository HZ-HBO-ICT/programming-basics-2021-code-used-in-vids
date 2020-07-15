/**
 * code in variables sheets
 */ 
let welcome;
// alternatives
// const welcome;
// var welcome;

welcome = 'My name is Rimmert Zelle';
let myBirthYear = 1978;
let myHomeCity = 'Tholen';
let myTwitterAccount = 'rimmertzelle';
let toDay = new Date().getFullYear();

// loosely vs strongly typed, does not work in the browser
// let message : string = 'Hello';
// let amountOfMoney : number = 5;

// let message = ‘Hello’;
// let amountOfMoney = 5;

// assignments after the video
let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');
let age = prompt('What is your age?');

console.log(`Hello, I am ${firstName} ${lastName} and I am ${age}`);

/**
 * code in operators sheets
 */ 

// lets use the recipe analogy
let amountOfSugar = 5; //gram per person
let amountOfPersons = 6;
let totalAmountOfSuger = amountOfSugar * amountOfPersons;

let numberOfPiePiece = 128;
let amountOfPeople = 30;
let piecesPerPerson = numberOfPiePiece / amountOfPeople;
let piecesLeft = numberOfPiePiece % amountOfPeople

// assignments after the video
let priceOfAnApple = 0.59 // do not use the ``
let numberOfApples = 200;
let price = priceOfAnApple * numberOfApples;
console.log(price);


let a = 5, b = 6, c = 8, d = 12;
let sum = a + b + c + d;
let division = a / b / c / d;
// stelling van pythagoras
// (a*a)+(b*b) = (c*c)
let pythagoras = Math.sqrt((5*5) + (6*6));
//Math.pow
//Math.sqrt(4);

/**
 * code in boolean sheets
 */ 
let driversLicense = true;
let ownsACar = false;

let temperatureOfToDay = 30;
let temperatureOfYesterday = 25;
console.log(temperatureOfToDay > temperatureOfYesterday);

// assignment after the video
// null

/**
 * code in string expressions sheets
 */

let sentence = 'What an awesome day it is!';
console.log(sentence);
console.log(sentence.charAt(4)); //what happens here?
console.log(sentence.length); //what happens here?
console.log(sentence.toUpperCase); //what happens here?
console.log(sentence.match('awesome')); //what happens here?

// assignment after video

let myNewSentence = 'HZ University of Applied Science';
let myLatestSentence = myNewSentence.replace('Applied', 'Mad');
console.log(myLatestSentence);
