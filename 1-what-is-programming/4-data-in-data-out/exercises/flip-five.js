'use strict';

/* Flip Five

  Data In:
  any text

  Data Out:
  the reverse input if the input text is exactly 5 characters long
  get the alert 'nope, try again.' if it's not 5 characters. 

  Test Cases:
  1. "cookies" -> alert 'nope, try again.'
  2. ""  -> alert 'nope, try again.'
  3. 12345 -> 54321

*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
