const assert = require('chai').assert;
const Stack = require('../src/stack');
const Node = require('../src/node');

describe('Stack.js', function(){
  it('initializes an empty stack', function(){
    const myStack = new Stack();
    assert.isNull(myStack.top.head, "initialize");
  });

  let myStack;
  beforeEach(function(){
    myStack = new Stack();
  });

  describe('empty()', function(){
    it('returns true if the stack is empty', function(){
      assert.isTrue(myStack.empty(), "empty stack");
    });

    it('returns false if the stack is not empty', function(){
      myStack.push(1);
      assert.isFalse(myStack.empty(), 'not empty stack');
    });
  });

  describe('push(value)', function(){
    it('increments the size of the linkned list after push', function(){
      assert.equal(myStack.top.size(), 0);
      myStack.push(1);
      assert.equal(myStack.top.size(), 1);
    });
  });

  describe('pop()', function(){
    it('returns null if the stack is empty', function(){
      assert.isNull(myStack.pop(), "Stack is empty");
    });

    it('decrements the size of the linked list after pop', function(){
      myStack.push(1);
      assert.equal(myStack.top.size(), 1);
      myStack.pop();
      assert.equal(myStack.top.size(), 0);
    });

    it('returns the correct value', function(){
      myStack.push(1);
      const result = myStack.pop();
      assert.instanceOf(result, Node);
      assert.equal(result.value, 1);
    });
  });
});
