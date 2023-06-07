const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



assertArraysEqual(['favourite', 'item'], middle(["my", "favourite", "item", "teddy"]));
assertArraysEqual(['item'], middle(["my", "item", "teddy"]));

assertArraysEqual(['favourite', 'item'], middle(["my", "favourite", "item", "teddy"]));

assertArraysEqual([''], middle(['', '', '']))