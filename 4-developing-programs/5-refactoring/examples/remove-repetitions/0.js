'use strict';

/*
  the original program for reference
  and in case you need to start over in an exercise ;)
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';
for (const next of phrase) {

  //see if the next char is equal to the prev 
  if (next !== previous) {
    // if not, the char is saved
    noRepetitions = noRepetitions + next;
    // the char is saved to next for the next if
    previous = next;
  }
}

alert(noRepetitions);
