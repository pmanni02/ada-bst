const assert = require('chai').assert;
const Bst = require('../src/bst');

describe('bst.js', function(){
  it('should initialize a tree', function(){
    const myBST = new Bst();
    assert.isNull(myBST.root)
  });
});
