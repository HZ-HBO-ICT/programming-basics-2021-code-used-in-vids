//immediately invoked function expression (iife)
(function () {
    console.log('IIFC');
}());

//function declaration
function pleaseDoNotShout() {
    console.info('SHOUT');
}

function pleaseDoNotShoutMyName(myName) {
    console.info(myName);
}

//function declaration with return value
function pleaseDoNotShoutMyName(myName) {
    let whisper = '...whispering... ' + myName;
    return whisper;
}

console.log(pleaseDoNotShoutMyName('Rimmert'));

//function declaration with return value
function giveMeSomeNiceName(gender) {
    let newName = '';
    if (gender = 'male') {
        newName = 'Arnold';
    } else {
        newName = 'Alicia';
    }
    return newName;
}

const myNewName = giveMeSomeNiceName('male');
console.log('myNewName is: ', myNewName);

//console.log(pigs(4)); hoisting example

//function expression
var pigs = function (numberOfPigs) {
    var pigs = '';
    var counter = 0;
    while (counter <= numberOfPigs) {
        pigs += '\u{1F437}';
        counter++;
    }
    pigs += 'knor!';
    return pigs;
};
console.log(pigs(4));



// const animal = function (makeSomeNoise, breed) {
//     console.log('This is a:', breed);
//     makeSomeNoise(breed);
// }

const makeASound = function (animal) {
    var audio = new Audio('./assets/sounds/' + animal + '.mp3');
    audio.play();
}

// makeASound('cat');

const writeASound = function (animal) {
    if (animal == 'cat') {
        sound = 'Meow!';
    } else if (animal == 'dog') {
        sound = 'Bark!';
    }
    console.log('This animal says : ' + sound);
}

const handleAnimalSounds = function (func, animal) {
    return func(animal);
}

//handleAnimalSounds(makeASound, 'cat');


var add = function (a, b) {
    return a + b;
}
var subtract = function (a, b) {
    return a - b;
}

var handle_data = function (func) {
    // get data from user or other external source
    var x = 2;
    var y = 3;
    return func(x, y);
}

console.log(handle_data(add)); // 5
console.log(handle_data(subtract)); // -1

function factorialize(num) {
    // Step 1. Create a variable result to store num
    var result = num;

    // If num = 0 OR num = 1, the factorial will return 1
    // if (num === 0 || num === 1){
    //     return 1;
    // }

    // Step 2. Create the WHILE loop 
    while (num > 1) {
        num--; // decrementation by 1 at each iteration
        result = result * num; // or result *= num; 
        /* 
                        num           num--      var result      result *= num         
        1st iteration:   5             4            5             20 = 5 * 4      
        2nd iteration:   4             3           20             60 = 20 * 3
        3rd iteration:   3             2           60            120 = 60 * 2
        4th iteration:   2             1          120            120 = 120 * 1
        5th iteration:   1             0          120
        End of the WHILE loop 
        */
    }

    // Step 3. Return the factorial of the provided integer
    return result; // 120
}
console.log('8! =', factorialize(1));

// function greeting(name) {
//     alert('Hello ' + name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);
function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        console.log(b);
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

console.log(fibonacci(10));