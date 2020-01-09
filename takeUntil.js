const takeUntil = function(array, callback) {
  const newArray = [];
  for (const item of array) {
    const y = callback(item);
    if (!y) {
      newArray.push(y);
    } else {
      break;
    }
  }
  return newArray;
};
const data1 = [1,2,5,7,2,-1,2,4,5];
const result1 = takeUntil(data1, x => x < 0);
console.log(result1);
console.log("\n");

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);