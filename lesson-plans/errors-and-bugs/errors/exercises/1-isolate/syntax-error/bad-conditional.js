

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: SyntaxError
  message: Failed to execute 'appendChild' on 'Node': Unexpected token '{'

  location:at evaller.onload (study-with.js:63:34)

  life cycle: creation phase

  the mistake: can't have two else 

  the fix(es): change one else to else if 
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


