import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: TypeError
  message: screaming is not iterable

  location: app.js:34

  life cycle: execution phase 

  the mistake: screaming is a boolean 

  the fix(es): change screaming to text
*/

whenFormDataChanges('reversify', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  let screaming = readBoolean('loud');

  // --- reverse the string input ---

  let reversed = '';
  for (let character of text) {
    reversed = character + reversed;
  }

  // --- set to upper or lower case ---

  let finalText = '';
  if (screaming) {
    finalText = reversed.toUpperCase();
  } else {
    finalText = reversed.toLowerCase();
  }

  // --- display the final text ---

  displayString('out', finalText);
});
