import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('reversify', () => {
  //debugger;

  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  let screaming = readBoolean('loud');

  console.log(text, screaming);

  // --- reverse the string input ---

  let reversed = '';
  for (const lastChar of text) {
    if (reversed.includes(lastChar)) {
      console.log('repeated');
    } else {
      reversed = lastChar + reversed;
    }
  }

  // --- set to upper or lower case ---

  let finalText = '';
  if (reversed.length > 8) {
    finalText = reversed.toUpperCase();
  } else if (reversed.length > 5) {
    finalText = reversed;
  } else {
    finalText = reversed.toLowerCase();
  }

  console.log(finalText);

  // --- display the final text ---

  // display the final text to the <pre> with id "out"
  displayString('out', finalText);
});

/*  ===== Challenges =====

  - change the condition so upper/lower case depends on the length of the input
      longer inputs are upper case
      medium inputs are not changed
      shorter inputs are lower case
  - make sure each character appears only once in the reversed text

*/
