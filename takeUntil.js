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


const assertArraysEqual = function(firstArray, secondArray) {
  if (comapreArrays(firstArray, secondArray)) {
    console.log(`✅Assertion Passed: ${firstArray}  === ${secondArray}`);
  } else {
    console.log(`⛔️Assertion Failed: ${firstArray} != ${secondArray}`);
  }

};

const takeUntil = function(array, callback) {
  const newArray = []; // init array for return value
  for (const item of array) { // loop through the array till the value is truthy
    const y = callback(item); // call a funtion
    if (y) { // condition evaluates to true
      break;  // stop looping
    } else {
      newArray.push(item); // if false, add item to the new array
    }
  }
  return newArray; // final array
};
const data1 = [1,2,5,7,2,-1,2,4,5];
const result1 = takeUntil(data1, x => x < 0);


assertArraysEqual(result1, [1,2,3]);
assertArraysEqual(result1, [ 1, 2, 5, 7, 2 ]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


assertArraysEqual(results2, [1,2,3]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
