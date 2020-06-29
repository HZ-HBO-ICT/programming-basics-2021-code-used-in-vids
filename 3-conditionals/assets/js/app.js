/**
 * Examples in sheets conditional
 */
let occupation = 'Police';
let flashLights = false;

if(occupation == 'Police'){
    flashLights = true;
}

console.log('can I use flash lights?', flashLights);

let myAge = 13;
let myHeight = 1.6;

if(myAge >= 13 && myHeight >= 1.4){
    console.log('Wow, Python here I come');
}else{
    console.log('Wait What...');
}

let myPoints = 80;
let grade = undefined;

if(myPoints < 60){
    grade = 4;
}else if(myPoints >= 60 && myPoints < 70){
    grade = 5;
}else if(myPoints >= 70 && myPoints < 80){
    grade = 6;
}else if(myPoints >= 80 && myPoints < 85){
    grade = 7;
}else if(myPoints >= 85 && myPoints < 90){
    grade = 8;
}else if(myPoints >= 90 && myPoints < 95){
    grade = 9;
}else if(myPoints >= 95 && myPoints < 100){
    grade = 10;
}

console.log('my grade is:', grade);

// //Change this action to output another result
// var currentAction = "strings"; //calculating, strings, booleans
// console.log("machine:start", currentAction);

// //Switch is more elegant than X else-if statements
// switch (currentAction) {
//     case "calculating":
//         //Init vars
//         var number1 = 5;
//         var number2 = 9;
//         var myString = "Hello World!";


//         //Let's do some calculating
//         var sum = number1 + number2;
//         var subtract = number1 - number2;
//         var multiply = number1 * number2;
//         var devide = number1 / number2;

//         console.log("calculating:sum", sum);
//         console.log("calculating:subtract", subtract);
//         console.log("calculating:multiply", multiply);
//         console.log("calculating:devide", devide);


//         //Let's try that a little different
//         var numberSumString = number1 + myString;
//         console.log("calculating:numberSumString", numberSumString);

//         break;

//     case "strings":
//         //Init vars
//         var sentenceThatMakesSense = "Programmeren is tof!";
//         var matchString = "tof";
//         var charAtNumber = 5;


//         //Let's see some nice string expressions
//         console.log("strings:string", sentenceThatMakesSense);
//         console.log("strings:toUpperCase", sentenceThatMakesSense.toUpperCase());
//         console.log("strings:substr", sentenceThatMakesSense.substr(5, 7));
//         console.log("strings:length", sentenceThatMakesSense.length);
//         console.log("strings:match(" + matchString + ")", sentenceThatMakesSense.match(matchString));
//         console.log("strings:charAt(" + charAtNumber + ")", sentenceThatMakesSense.charAt(charAtNumber));

//         break;

//     case "booleans":
//         //Init vars
//         var myImp01Grade = 9;
//         var sufficientGrade = 6;
//         var myBoolean = false;


//         //Let's see if our grade is sufficient
//         console.log("booleans:sufficient", myImp01Grade >= sufficientGrade);
//         console.log("booleans:notExactlySufficient", sufficientGrade != myImp01Grade);
//         console.log("booleans:exactlySufficient", sufficientGrade == myImp01Grade);


//         //Every if check results in 'true or false' (see every other example)
//         if (myBoolean) {
//             console.log("booleans:if", myBoolean); //If it's false, I will never reach this log..
//         } else if (myImp01Grade < sufficientGrade) {
//             console.log("booleans:elseIf", "grade is not sufficient"); //I will only reach this log when my grade is not sufficient
//         } else {
//             console.log("booleans:else", "if & else if are false. The end."); //Final fallback if all other checks are false
//         }

//         break;

//     default:
//         //Give feedback when an invalid action has been chosen
//         console.log(currentAction + ":invalidAction", "Please choose a different action");
//         break;
// }

// console.log("machine:stop", currentAction);