const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅Assertion Passed: ${actual}  === ${expected}`) : console.log(`⛔️Assertion Failed: ${actual} != ${expected}`);
};

const findKey = function(object, callback) { // function that takes an object and a callback function

  for (const key in object) { // check every key (inner object) in the main object
    const isTrue = callback(object[key]); // to access each property, object.key
    if (isTrue) { // if value is truthy
      return key;
    }
  }
};



const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);


assertEqual(result, "noma");
assertEqual(result, "Ora");
assertEqual(result, 3);