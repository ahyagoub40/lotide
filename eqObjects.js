const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅Assertion Passed: ${actual}  === ${expected}`) : console.log(`⛔️Assertion Failed: ${actual} != ${expected}`);
};

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    return true;
  } else {
    return false;
  }
 
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false