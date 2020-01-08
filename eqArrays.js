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