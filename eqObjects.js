const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅Assertion Passed: ${actual}  === ${expected}`) : console.log(`⛔️Assertion Failed: ${actual} != ${expected}`);
};

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {  // check if length of objects is the same
    for (let key in object1) {  // for every key in first object
      
      if (key in object2) {  // if that key is in object2 as well
        
        if (object1[key] !== object2[key]) {  // value of key is not same in both objects
          
          return false;
        }
      } else {
        return false;  // if key is not in both objects
      }
    }
    return true;  // if go through the object and everything is matching
    
  } else {
    return false; // if length is not the same
  }
 
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false