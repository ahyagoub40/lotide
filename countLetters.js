const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅Assertion Passed: ${actual}  === ${expected}`) : console.log(`⛔️Assertion Failed: ${actual} != ${expected}`);
};

const countLetters = function(sentence) { // function that accepts a string in a sentence
  const count = {};  // init a object to count the letters later
  for (let letter of sentence) { // loop through every letter in the sentence
    if (!(letter === " ")) {  // skip the space
      // fill the count object. the keys will be the letters, the values will be the number of occurances
      if (count[letter]) {
        count[letter] += 1;
      } else {
        count[letter] = 1;
      }
    }

  }
  
  return count; // returns the count of each letter
};

const result = countLetters('lighthouse in the house'); // call the function and assign the value to a string

// check if the actual result is what we expect
assertEqual(result["h"], 1);
assertEqual(result["h"], undefined);
assertEqual(result["u"], 2);