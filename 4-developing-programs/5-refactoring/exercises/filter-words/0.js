// #todo

'use strict';

/*
  the original program for reference
  and in case you need to start over in an exercise ;)
*/

let sentence = '';

let isValid = false; //use the true flag 

//while isValid is falsy
while (!isValid) { 
  // it prompts 
  sentence = prompt('enter a sentence with at least 2 words');
  // if the user cancel 
  if (sentence === null) {
    //alert no escape and then continue looping
    alert('there is no escape');
    continue;
  }
  // now we have the words, trim the empty space
  sentence = sentence.trim();
  // the sentence trimed has a length less than three
  if (sentence.length < 3) {
    // alert too short 
    alert('"' + sentence + '" is too short to have two words');
    // sentence not including empty string 
  } else if (!sentence.includes(' ')) {
    //alert only one word
    alert('there is only one word');
  } else {
    // else set isValid to true
    isValid = true;
  }
}

// save the sentence with space
sentence = sentence + ' ';

// dec newSentence
let newSentence = '';

// dec nextword
let nextWord = '';

// loop char
for (const character of sentence) {
  //if the char is space 
  if (character === ' ') {

    //prompt confirm 
    const keep = confirm(
      'do you want to keep this word:\n\n"' + nextWord + '"',
    );

    //if confirmed, save the char with the nextWord
    if (keep) {
      newSentence = newSentence + character + nextWord;
    }

    //clear nextWord
    nextWord = '';
  } else {
    // if char is not an empty string, save the char to nexWord
    nextWord = nextWord + character;
  }
}

alert(newSentence);
