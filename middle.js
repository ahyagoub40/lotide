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
assertEqual(comapreArrays([1,2,3], [1,2,3]), true);
assertEqual(comapreArrays([1,2,3], [3,2,1]), true);
assertEqual(comapreArrays(["1","2","3"], ["1","2","3"]), true);
assertEqual(comapreArrays(["1","2","3"], ["1","2",3]), true);

const assertArraysEqual = function(firstArray, secondArray) {
  if (comapreArrays(firstArray, secondArray)) {
    console.log(`✅Assertion Passed: ${firstArray}  === ${secondArray}`);
  } else {
    console.log(`⛔️Assertion Failed: ${firstArray} != ${secondArray}`);
  }

};


const middle = function(array) {
  let middleArray = [];
  let lengthOfArray = array.length;
  if (lengthOfArray === 1 || lengthOfArray === 2) {
    return middleArray;
  } else if (lengthOfArray % 2 === 1) {
    let middleIndex = Math.floor(lengthOfArray / 2);
    middleArray.push(array[middleIndex]);
  
    return middleArray;
  } else if (lengthOfArray % 2 === 0) {
    let middleIndex = lengthOfArray / 2;
    middleArray.push(array[middleIndex - 1]);
    middleArray.push(array[middleIndex]);
    return middleArray;
  }
   
};
assertArraysEqual(middle([1,2,3]), middle([1,2,3]));
assertArraysEqual(middle([1,2,3]), middle([3,2,1]));