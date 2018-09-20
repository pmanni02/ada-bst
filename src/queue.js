const LinkedList = require('./linkedList');

class Queue {
  constructor(){
    this.front = new LinkedList();
  }

  empty(){
    if(this.front.head == null){
      return true;
    }
    return false;
  }

  enqueue(value){
    this.front.insertNodeEnd(value);
    return this;
  }

  dequeue(){
    if(this.front.head == null){
      return null;
    }

    let node = this.front.head;
    this.front.deleteNode();
    return node;
  }
}

module.exports = Queue;
