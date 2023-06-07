const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns ['favourite', 'item'] for ['my', 'favourite', 'item', 'teddy']", () => {
    assert.deepEqual(middle(["my", "favourite", "item", "teddy"]), ['favourite', 'item']);
  });
  it("returns '5' for ['woofwoof', '5', 'wootwoot]", () => {
    assert.deepEqual(middle(['woofwoof',5, "wootwoot"]), [5]);
  });
  it("returns [] for []", () => {
    assert(middle([]), [1]);
  });
});
