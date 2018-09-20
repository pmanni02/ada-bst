const assert = require('chai').assert;
const LinkedList = require('../src/linkedList');

describe('linkedList.js', function(){
  it('Should initialize linked list', function(){
    let myList = new LinkedList();
    assert.equal(myList.head, null);
  });

  let myList;
  beforeEach(function(){
    myList = new LinkedList();
  });

  describe('insertNode method', function(){
    it('should add new node to linkedList', function(){
      myList.insertNode(1);
      assert.equal(myList.head.value, 1);
      assert.equal(myList.head.next, null);
    });
  });

  describe('insertNodeEnd(val)', function(){
    it('should increment size()', function(){
      myList.insertNodeEnd(1);
      assert.equal(myList.size(), 1);
      myList.insertNodeEnd(2);
      assert.equal(myList.size(), 2);
    });

    it('should print the correct string after one insert', function(){
      myList.insertNodeEnd(1);
      assert.equal(myList.printList(), "1 ");
    });

    it('should print the correct string after insertions', function(){
      myList.insertNodeEnd(1);
      myList.insertNodeEnd(2);
      assert.equal(myList.printList(), "1 2 ");
    });
  });

  describe('size function',function(){
    it('should have the correct number of nodes', function(){
      myList.insertNode(1);
      myList.insertNode(2);
      assert.equal(myList.size(), 2);
      myList.insertNode(3);
      assert.equal(myList.size(), 3);
    });
  })

  describe('print function', function(){
    it('should print "" with no data', function(){
      assert.equal(myList.printList(), "");
    });

    it('should print single char for one node', function(){
      myList.insertNode(1);
      const list = myList.printList();
      assert.equal(list, "1 ");
    });

    it('should print correct multinode list', function(){
      myList.insertNode(1);
      myList.insertNode(2);
      myList.insertNode(3);
      const list = myList.printList();
      assert.equal(list, "3 2 1 ");
    });
  });

  describe('deleteNode method', function(){
    it('list size should decrease after delete method', function(){
      myList.insertNode(1);
      assert.equal(myList.size(), 1);
      myList.deleteNode();
      assert.equal(myList.size(), 0);
    });

    it('should print the correct list after deletions', function(){
      myList.insertNode(1);
      myList.insertNode(2);
      myList.insertNode(3);
      myList.deleteNode();
      const list = myList.printList();
      assert.equal(list, "2 1 ");
    });
  });

  describe('findVal(x)', function(){
    it('returns null if the value is not in the list', function(){
      myList.insertNode(1);
      myList.insertNode(2);
      myList.insertNode(3);
      assert.isNull(myList.findVal(4), "val no found");
    });

    it('returns the first node found if the value exists', function(){
      myList.insertNode(1);
      myList.insertNode(2);
      myList.insertNode(3);
      assert.equal(myList.findVal(3).value, 3);
      let nextNode = myList.findVal(3).next;
      assert.equal(nextNode.value, 2);
    });

    it('returns correct str if the list is empty', function(){
      assert.equal(myList.findVal(1), "The list is empty");
    });
  });

  describe('findMax()', function(){
    it('returns null if the list is empty', function(){
      assert.isNull(myList.findMax(), "No error");
    });

    it('returns correct max value in list w/ > 1 node and with max at the front of the list', function(){
      myList.insertNode(1);
      myList.insertNode(2);
      assert.equal(myList.findMax(), 2);
    });

    it('returns correct max value in list w/ > 1 node and with max at end of the list', function(){
      myList.insertNode(10);
      myList.insertNode(2);
      myList.insertNode(5);
      assert.equal(myList.findMax(), 10);
    });

    it('returns correct max value in list w/ > 1 node and max at in middle of the list', function(){
      myList.insertNode(5);
      myList.insertNode(10);
      myList.insertNode(4);
      assert.equal(myList.findMax(), 10);
    });

    it('returns correct max value in list w/ 1 node', function(){
      myList.insertNode(1);
      assert.equal(myList.findMax(), 1);
    });
  });

  describe('detectCycle()', function(){
    it('returns false if there are <1 nodes', function(){
      assert.isFalse(myList.detectCycle(), "No error");
    });

    // it('returns false if there is no cycle with > 1 nodes', function(){
    //   myList.insertNode(1);
    //   myList.insertNode(2);
    //   myList.insertNode(3);
    //   assert.isFalse(myList.detectCycle());
    // });

    // it('returns true if there is a cycle w/ 1 node', function(){
    //   myList.insertNode(1);
    //   let node = myList.head;
    //   node.next = node;
    //   assert.isTrue(myList.detectCycle(), "No error");
    // });

    // it('returns true if there is a cycle w/ >1 node', function(){
    //   myList.insertNode(1);
    //   myList.insertNode(2);
    //   myList.insertNode(3);
    //   let node = myList.findVal(1);
    //   node.next = myList.findVal(2);
    //   assert.isTrue(myList.detectCycle(), "No error");
    // });
  });

});
