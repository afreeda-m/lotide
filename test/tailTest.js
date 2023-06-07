const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '5' for ['woofwoof', '5']", () => {
    assert.deepEqual(tail(['woofwoof',5]), [5]);
  });
  it("returns [] for []", () => {
    assert(tail([]), [1]);
  });
});