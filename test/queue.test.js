const assert = require('chai').assert;
const Queue = require('../src/queue');

describe('Queue.js', function(){
  it('initializes an empty queue', function(){
    const myQueue = new Queue();
    assert.isNull(myQueue.front.head, "initialize");
  });

  describe('empty()', function(){
    it('returns true if the queue is empty', function(){
      let myQueue = new Queue();
      assert.isTrue(myQueue.empty(), "empty queue");
    });

    it('returns false if the queue is not empty', function(){
      let myQueue = new Queue();
      myQueue.enqueue(1);
      assert.isFalse(myQueue.empty(), "non empty queue");
    });
  });

  describe('enqueue(value)', function(){
    it('increments the size of the stack', function(){
      let myQueue = new Queue();
      assert.equal(myQueue.front.size(), 0);
      myQueue.enqueue(1);
      assert.equal(myQueue.front.size(), 1);
    });
  });

  describe('dequeue', function(){
    it('returns null if the queue is empty', function(){
      let myQueue = new Queue();
      assert.isNull(myQueue.dequeue(), "Empty queue");
    });

    it('decrements the size of the stack', function(){
      let myQueue = new Queue();
      myQueue.enqueue(1);
      assert.equal(myQueue.front.size(), 1);
      myQueue.dequeue();
      assert.equal(myQueue.front.size(), 0);
    });

    it('removes the correct node', function(){
      let myQueue = new Queue();
      myQueue.enqueue(1);
      myQueue.enqueue(2);
      myQueue.enqueue(3);
      let dequeued = myQueue.dequeue();
      assert.equal(dequeued.value, 1);
    });
  });

});
