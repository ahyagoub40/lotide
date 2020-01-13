const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([1,2,3]), middle([1,2,3]));
assertArraysEqual(middle([1,2,3]), middle([3,2,1]));