

'use strict';

console.log('--- in execution phase ---');


/*
  environment:chrome 

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Invalid or unexpected token

  location: at evaller.onload (study-with.js:63:34)

  life cycle: creation phase

  the mistake: the string should be on the same line. It's not a template literal. 
s
  the fix(es): we can use a template literal
*/

const a = `this is 
two lines`;


