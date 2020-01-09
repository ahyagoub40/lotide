const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅Assertion Passed: ${actual}  === ${expected}`) : console.log(`⛔️Assertion Failed: ${actual} != ${expected}`);
};

const comapreArrays = function(array1, array2) {

  if (array1.length === array2.length) {

    for (let i = 0; i < array1.length; i++) {

      if (array2[i] !== array1[i]) {
        return false;
      }
    }
    return true;
  }  else {
    return false;
  }
};

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {  // check if length of objects is the same
    for (let key in object1) {  // for every key in first object
      
      if (key in object2) {  // if that key is in object2 as well
        if (Array.isArray(object1[key] && Array.isArray(object2[key]))) {  // if both values are arrays in both objects
          if (comapreArrays(object1[key], object2[key])) {
            return true; // if the array values are same
          } else {
            return false; // if the arrys are not the same
          }
        } else if (object1[key] !== object2[key]) {  // value of key is not same in both objects
          
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false




