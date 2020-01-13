


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

module.exports = middle;