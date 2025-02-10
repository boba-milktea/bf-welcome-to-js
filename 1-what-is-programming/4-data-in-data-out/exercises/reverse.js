'use strict';

/* Reverse

  Data In:
  any text 

  Data Out:
  the input and an arrow and the reversed input 


  Test Cases:
  what is your name -> eman ruoy si tahw

*/

/* --- gather user input --- */

let input = null; //what is your name
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message); //eman ruoy si tahw

/* --- display message to the user --- */

alert(message);
