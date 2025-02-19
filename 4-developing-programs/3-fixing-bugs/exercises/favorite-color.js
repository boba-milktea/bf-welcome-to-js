// #todo

'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  --- experiments ---

  1. FAILING: hi  
      EXPECT: give me "hi"
      ACTUAL: give me the loop 

    TRY: change the strict equal to none equal 
    PREDICT: it should turn it into a loop 
    IT DID: 
    EXPLAIN:

  --- lessons learned ---


*/

let message = null; 

while (true) {
  const input = prompt('enter something');
  if (input !== null && input.length !== 0) {
     message =  `"${input}"`;
  }
  break;
}

 alert (message); 


// while (true) {
//   const input = prompt('enter something');

//   if (input === null && input.length === 0) {
//     message = input + '"';
//     break;
//   }
// }
