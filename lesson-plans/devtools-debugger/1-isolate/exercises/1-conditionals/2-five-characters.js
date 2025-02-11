'use strict';

let input = 'pretty'

input = prompt('enter something with 5 characters:');


let message = '';

if (input || input === null) {
  message = 'thank you'
} else {
   message = 'please enter something'
}


alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
