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
      assert.isFalse(myBST.search(1));
    });

    it('should return false if val is not in one node bst', function(){
      myBST.insert(1);
      assert.isFalse(myBST.search(2));
    });

    it('should return true if the only node is the value', function(){
      myBST.insert(1);
      assert.isTrue(myBST.search(1));
    });

    it('should return false if value is not found for > 1 bst', function(){
      myBST.insert(5);
      myBST.insert(2);
      myBST.insert(8);
      myBST.insert(1);
      assert.isFalse(myBST.search(0));
    });

    it('should return true if value is found for > 1 bst', function(){
      myBST.insert(5);
      myBST.insert(2);
      myBST.insert(8);
      myBST.insert(1);
      assert.isTrue(myBST.search(8));
    });
  });

  describe('insert(val)', function(){
    it('should correctly insert first node', function(){
      myBST.insert(1);
      assert.equal(myBST.root.value, 1);
      assert.isNotNull(myBST.root);
      assert.isNull(myBST.root.left);
      assert.isNull(myBST.root.right);
    });

    it('correctly ref root node', function(){
      myBST.insert(5);
      myBST.insert(1);
      assert.equal(myBST.root.value, 5);
    });

    it('correctly refs left and right nodes of root', function(){
      myBST.insert(5);
      myBST.insert(1);
      assert.equal(myBST.root.left.value, 1);
      assert.isNull(myBST.root.right);
    });

    // add a more extensive tests
    it('has correct refs for 3 node bst', function(){
      myBST.insert(5);
      myBST.insert(8);
      myBST.insert(1);
      let root = myBST.root;
      assert.equal(root.right.value, 8);
      assert.equal(root.left.value, 1);

    });

    it('has correct refs for 4 node bst', function(){
      myBST.insert(5);
      myBST.insert(8);
      myBST.insert(3);
      myBST.insert(2);
      const myLeftTree = myBST.root.left;
      assert.equal(myLeftTree.value, 3);
      assert.equal(myLeftTree.left.value, 2);
      assert.isNull(myLeftTree.right);
    });
  });

  describe('inOrderPrint()', function(){
    it('should print empty str if bst is empty', function(){
      assert.equal(myBST.inOrderPrint(), "");
    });

    it('should correctly print a 1 node tree', function(){
      myBST.insert(1);
      assert.equal(myBST.inOrderPrint(), "1 ");
    });

    it('should correctly print a >1 node tree', function(){
      myBST.insert(5);
      myBST.insert(7);
      assert.equal(myBST.inOrderPrint(), "5 7 ");
    });

    it('should correctly print 7 node balanced tree', function(){
      myBST.insert(5);
      myBST.insert(2);
      myBST.insert(11);
      myBST.insert(-4);
      myBST.insert(19);
      myBST.insert(8);
      myBST.insert(4);
      assert.equal(myBST.inOrderPrint(), "-4 2 4 5 8 11 19 ");
    });
  });

});
