import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: SyntaxError
  message: Invalid left-hand side expression in prefix operation

  location: app.js:23  

  life cycle: execution phase

  the mistake: why do you put hyphen there?!! No! it's ""

  the fix(es): change hyphens to ""
*/

whenFormDataChanges('input', () => {
  console.log("form data changed");

  // --- read the user's input ---

  let userText = readString('to-mirror');

  // --- mirror the text ---

  let mirrored = ' | ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  displayString('output', mirrored);
});
