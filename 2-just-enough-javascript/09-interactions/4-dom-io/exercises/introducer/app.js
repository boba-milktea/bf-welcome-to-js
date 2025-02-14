// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const name = readString('fn') + ' ' + readString('ln');

  // --- create a message ---
  const message = `Yo! ${name}.`;
  // --- display the message ---
  console.log(message);
  displayString('greet-field', message);
});
