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


const map = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    newArray.push(callback(item));
  }

  return newArray;
};

const words = ["ground", "control", "to", "major", "tom"];

const firstIndexArray = map(words, word => word[0]);
const secondIndexArray = map(words, word => word[2]);

assertArraysEqual(firstIndexArray, ["g","c","t", "m", "t"]);
assertArraysEqual(secondIndexArray, [3,2,1]);
assertArraysEqual(secondIndexArray, ["g","c","t", "m", "t"]);
assertArraysEqual(firstIndexArray, 0);