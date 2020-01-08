const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅Assertion Passed: ${actual}  === ${expected}`) : console.log(`⛔️Assertion Failed: ${actual} != ${expected}`);
};

const countLetters = function(sentence) { // function that accepts a string in a sentence
  const count = {};  // init a object to count the letters later
  return count; // returns the count of each letter
};

const result = countLetters('LHL'); // call the function and assign the value to a string

// check if the actual result is what we expect
assertEqual(result["H"], 1);
assertEqual(result["H"], undefined);
assertEqual(result["L"], 2);