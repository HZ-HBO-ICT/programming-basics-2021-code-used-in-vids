// const word = 'bart';
// let reversedWord = '';
// let count = word.length;

// while (count > 0 ) {
//     reversedWord += word[count-1];
//     console.log(reversedWord);
//     count--;
// }

// console.warn(reversedWord);

// const numbers = 25;
// let counter = 1;
// while(counter <= 25){
//     if(counter % 3 == 0){
//         console.log(`The number ${counter} is divisible by 3`);
//     }
//     else{
//         console.log(`The number ${counter} is not divisible by 3`);
//     }
//     counter++;
// }

// if(word == reversedWord){
//     console.info('Yes it is a palindrome');
// }else{
//     console.error('to bad');
// }

// var message = 'Het is eindelijk weekend';

// for(var i=0;i<message.length;i++){
// 	console.log(message.charAt(i));
// }

let sips = 0; //initialisor
//between the brackets - the condition
while (sips < 10) {
  //statement
  console.log("I am hanging in the curtains");
  sips++; //incrementor
}

do {
  console.log("I am standing on one leg");
  sips++;
} while (sips <= 10);
