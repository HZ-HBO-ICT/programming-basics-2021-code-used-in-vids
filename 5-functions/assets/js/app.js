// Some code to explain scoping
let a = 100; //global scope of the programme

function getANumber(){
    let a = 10; //local scope or function scope
    console.log(a);
}

function getAnOtherNumber(){
    let a = 11;
}

function getYetAnOtherNumber(){
    let a = 12;
}

// interesting for difference between var and let.
for (let index = 0; index < 5; index++) {
    console.log('Hello', index);
}

getANumber();
getAnOtherNumber();
getYetAnOtherNumber();

console.log(index);
console.log(a);


// Different functions
// //Simple function declaration
// function pleaseDoNotShout() {
//     console.info('SHOUT');
// }

// //function declaration with a parameter
// function pleaseDoNotShoutMyName(myName) {
//     console.info(myName);
// }

// //function declaration with paramater and return value
// function pleaseDoNotShoutMyName(myName) {
//     let whisper = '...whispering... ' + myName;
//     return whisper;
// }

// console.log(pleaseDoNotShoutMyName('Rimmert'));

// // exercise 1
// function giveMeSomeNiceName(animal) {
//     let newName = '';
//     if (gender = 'cat') {
//         newName = 'Arnold';
//     } else {
//         newName = 'Alicia';
//     }
//     return newName;
// }

// const myNewName = giveMeSomeNiceName('cat');
// console.log('myNewName is: ', myNewName);

// // exercise 2
// var pigs = function (numberOfPigs) {
//     var pigs = '';
//     var counter = 0;
//     while (counter <= numberOfPigs) {
//         pigs += '\u{1F437}';
//         counter++;
//     }
//     pigs += 'knor!';
//     return pigs;
// };
// console.log(pigs(4));

// // Exercise 3
// function factorialize(num) {
//     // Step 1. Create a variable result to store num
//     var result = num;

//     // If num = 0 OR num = 1, the factorial will return 1
//     // if (num === 0 || num === 1){
//     //     return 1;
//     // }

//     // Step 2. Create the WHILE loop 
//     while (num > 1) {
//         num--; // decrementation by 1 at each iteration
//         result = result * num; // or result *= num; 
//         /* 
//                         num           num--      var result      result *= num         
//         1st iteration:   5             4            5             20 = 5 * 4      
//         2nd iteration:   4             3           20             60 = 20 * 3
//         3rd iteration:   3             2           60            120 = 60 * 2
//         4th iteration:   2             1          120            120 = 120 * 1
//         5th iteration:   1             0          120
//         End of the WHILE loop 
//         */
//     }

//     // Step 3. Return the factorial of the provided integer
//     return result; // 120
// }
// console.log('8! =', factorialize(1));

