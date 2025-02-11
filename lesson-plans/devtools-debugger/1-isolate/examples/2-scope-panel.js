'use strict';

/*  Scope Panel

  go through this program one step at a time and watch the Scopes panel
    this shows you the CURRENT VALUE of each variable in your program
  the Scope Panel is one of the most important tools help you have to understand code

  before pressing the "step" button:
  - predict which line will be next
  - predict what will change in the Scopes panel -->

  after pressing the "step":
  - were you right about which line was next?
  - were you right about what changed in the Scopes panel? -->

*/

/* 
How many scops do we have in JS? 
1. block scope -  let , const 
2. function scope - var 
3. script scope / module scope  
4. global scope
*/

// The curly braces will keep the variable in a block. 
{
  const age = 34; 
}


// same as the curly braces in a function
function sayHello () {
  var age = 67; 
}

let didClickOk = confirm('please click "ok":');

let message = '';
if (didClickOk !== true) {
  message = ':(';
} else {
  message = 'thank you!';
}

alert(message);
