// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-words', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const sentence =
    readString('noun') +
    ' ' +
    readString('verb') +
    ' ' +
    readString('adjective');
  console.log(sentence);
  // --- create a funny sentence ---

  // --- display the sentence ---
  displayString('funny-sentence', sentence);
});
