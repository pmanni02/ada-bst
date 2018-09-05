const assert = require('chai').assert;
const BST = require('../src/bst');

describe('bst.js', function(){
  it('should initialize a tree', function(){
    const myBST = new BST();
    assert.isNull(myBST.root)
  });

  let myBST;
  beforeEach(function(){
    myBST = new BST();
  });

  describe('search(value)', function(){
    it('should return false if bst is empty', function(){
      assert.isFalse(myBST.search());
    });

    it('should return false if val is not in one node bst', function(){
      myBST.insert(1);
      assert.isFalse(myBST.search(2));
    });

    it('should return true if the only node is the value', function(){
      myBST.insert(1);
      assert.true(myBST.search(1));
    });

    it('should return false if value is not found for > 1 bst', function(){
      myBST.insert(5);
      myBST.insert(2);
      myBST.insert(8);
      myBST.insert(1);
      assert.isFalse(myBST.search(1));
    });

    it('should return true if value is found for > 1 bst', function(){
      myBST.insert(5);
      myBST.insert(2);
      myBST.insert(8);
      myBST.insert(1);
      assert.isTrue(myBST.search(8));
    });
  });
});
