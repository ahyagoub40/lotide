const assertEqual = function(actual, expected) {
  (actual === expected) ? console.log(`✅Assertion Passed: ${actual}  === ${expected}`) : console.log(`⛔️Assertion Failed: ${actual} != ${expected}`);
};

const tail = function(array) {
  let newArray = array;
  newArray.shift();
  return newArray;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
const input = ["Lighthouse", "Labs"];
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], input[i]);
}
  