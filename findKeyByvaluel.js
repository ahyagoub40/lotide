const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅Assertion Passed: ${actual}  === ${expected}`) : console.log(`⛔️Assertion Failed: ${actual} != ${expected}`);
};

const findKeyByValue = function(object, value) {
  let firstKey = "";
  for (let key in object) {  // for every key in the object passed
    
    if (object[key] === value) {  // if value of that key is same as the value passed to the function
      firstKey = key;
      return firstKey; // return the first time i find key
    }
  }
  return undefined; // if i completed the loop and didn't find the key, return undefined
  
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama":  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "This is Us"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined);