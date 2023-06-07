const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["hello", 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
assertEqual(eqArrays([1], [1, 4, "3"]), false);
assertEqual(eqArrays(["LHL", "bootcamp", "may"], ["LHL", "bootcamp", "may"]), true);
assertEqual(eqArrays([], []), true);