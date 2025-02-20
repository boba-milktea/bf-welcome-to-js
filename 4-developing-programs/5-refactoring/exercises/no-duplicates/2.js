// #todo

'use strict';

/*
  refactor this program so the I/O loop DOES NOT accept strings with duplicate characters
  hints:
    - one strategy is moving the `for-of` loop inside the I/O loop
    - you might want to try using a boolean flag for the I/O loop (or true/break/continue)

*/

let mayHaveDuplicates = null;
let hasNoDuplicates = '';
while (mayHaveDuplicates === null) {
  mayHaveDuplicates = prompt('enter something with no duplicate characters');
  for (let char of mayHaveDuplicates) {
    let isDuplicate = hasNoDuplicates.includes(char); 
    if (isDuplicate) {
      continue; 
    }
    hasNoDuplicates = hasNoDuplicates + char; 
  }
  
}


if (hasNoDuplicates.length === mayHaveDuplicates.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
