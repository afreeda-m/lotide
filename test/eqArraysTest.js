const assert= require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for eqArray([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  })
  it("returns false for eqArrays([1, 2, 3], [1, 4, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 4, 3]), false)
  })
  it("returns true for eqArrays(['LHL', 'bootcamp', 'may'], ['LHL', 'bootcamp', 'may'])", () => {
    assert.deepEqual(eqArrays(["LHL", "bootcamp", "may"], ["LHL", "bootcamp", "may"]), true)
  })
  it("returns true for eqArrays([], [])", () => {
    assert.deepEqual(eqArrays([], []), true)
  })
});