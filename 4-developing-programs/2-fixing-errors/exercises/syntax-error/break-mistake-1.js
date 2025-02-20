// #todo

'use strict';

/*
  environment: crhome

  name: SyntaxError
  message:Failed to execute 'appendChild' on 'Node': Illegal break statement

  callstack: at evaller.onload (study-with.js:63:34)

  life cycle: creation 

  the mistake: shouldn't have break

  the fix(es): delete break
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);

}


