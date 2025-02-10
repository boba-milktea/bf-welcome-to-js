'use strict';

/* Mirror

  Data In:
  any text

  Data Out:
  the input and "|" and the reversed input 

  Test Cases:
  888--- -> 888---|---888


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character; //1|1 //12|21 //123|321
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
