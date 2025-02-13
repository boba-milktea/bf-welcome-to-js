'use strict';
let input = null; 

while (!input || input.length !== 10 || input !== "everything") {
 input = prompt('enter "every"'); 
 
  if (input === "every") {
    input = prompt ('enter "everything"'); 
  } else {
    input = prompt('enter "every"'); 
  }

}


let message = 'thank you for "' + input + '"!';

alert(message);



/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

