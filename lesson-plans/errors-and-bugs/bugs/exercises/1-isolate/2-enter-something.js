'use strict';

/*
  test cases:
    null -> (do not exit the loop)
    '' -> (do not exit the loop)
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line: 24
    why: it's an infinite loop
    trying: add break keyword

*/

let message = '';

let input = null;
while (input === null || input.length === 0) {
  const input = prompt('enter something');

  message = 'you entered "' + input + '"';
  break; 
}

alert(message);
