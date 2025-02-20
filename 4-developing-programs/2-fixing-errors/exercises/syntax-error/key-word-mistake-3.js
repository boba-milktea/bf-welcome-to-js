// #todo

'use strict';

/*
  environment:

  name: SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Unexpected token '{'

  callstack:  at evaller.onload (study-with.js:63:34)

  life cycle: creation phase 

  the mistake: else if 

  the fix(es): change 25 to else if 
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');

} else if (userName.length < 5) {
  console.log('just right');

} else {
  console.log('too long');
}


