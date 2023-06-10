const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject= { size: "medium", color: "red"};
// console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
