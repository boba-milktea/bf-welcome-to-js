// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';


/*
  environment: chrome

  name: SyntaxError
  message:Unexpected token '+'

  location: js:33  

  life cycle: execution phase 

  the mistake: the plus sign is invalid

  the fix(es): change it to the assigment symbol 
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});
