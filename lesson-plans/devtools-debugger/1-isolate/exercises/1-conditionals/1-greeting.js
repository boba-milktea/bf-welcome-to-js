'use strict';

const firstInput = prompt('enter your first name:');

const secondInput = prompt('enter your last name:');

const input = firstInput + ' ' + secondInput;

let greeting = '';

if (input === null || input === ' ') {
  greeting = 'hello anonymous.';
} else {
  greeting = `hello ${input} !`;
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
