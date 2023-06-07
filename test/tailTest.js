const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);


const result = tail(["Hello", "Lighthouse", "Labs", "bootcamp"]);
console.log(result);
assertEqual(result.length, 3);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[2], "bootcamp");

