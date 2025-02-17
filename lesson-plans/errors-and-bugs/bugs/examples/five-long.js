'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line: 21 & 23 
    why: when the character length is equal to 5, it doesn't show perfect 
    trying: delete the equal sign 

*/

let input = prompt('enter something 5 characters long');

if (input === null) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
