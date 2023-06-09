const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns ['favourite', 'item'] for ['favourite', ['item']]", () => {
    assert.deepEqual(flatten(['favourite', ['item']]), ['favourite', 'item']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("returns ['one', 2, 'three', 4, 'five'] for ['one', [2, 'three'], 4, ['five']]", () => {
    assert.deepEqual(flatten(['one', [2, 'three'], 4, ['five']]), ['one', 2, 'three', 4, 'five']);
  });
  it("returns undefined for undefined", () => {
    assert(flatten(['']), undefined);
  });
});