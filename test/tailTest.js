const assertEqual = require('../assertEqual');
const tail = require('../tail');


const input = ["Lighthouse", "Labs"];
const output = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(output.length, input.length);
assertEqual(output[0], input[0]);
assertEqual(output[1], input[1]);