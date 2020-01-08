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
const flatten = function(arrayOfArrays) {
  let flattened = [];
  for (let outer = 0; outer < arrayOfArrays.length; outer++) {
    if (Array.isArray(arrayOfArrays[outer])) {
      console.log(arrayOfArrays[outer]);
      for (let inner = 0; inner < arrayOfArrays[outer].length; inner++) {
        flattened.push(arrayOfArrays[outer][inner]);
      }
    } else {
      flattened.push(arrayOfArrays[outer]);
    }
  }
  return flattened;
};



const letterPositions = function(sentence) {
  let indeciesOfLetters = {};  // init an object



  return indeciesOfLetters; // object of arrays
};
const resultedObject = letterPositions('hello');
const ValueOfIndecies = Object.values(resultedObject);
const arrayOfIndecies = flatten(ValueOfIndecies);

assertArraysEqual(arrayOfIndecies, [0, 1, 2, 3, 4]);
