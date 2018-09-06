const LinkedList = require('./linkedList');

class Stack {
  constructor(){
    this.top = new LinkedList();
  }

  empty(){
    if(this.top.head == null){
      return true;
    }
    return false;
  }

  push(value){
    this.top.insertNode(value);
    return this;
  }

  pop(){
    if(this.top.head == null){
      return null;
    }

    let node = this.top.head;
    this.top.deleteNode();
    return node;
  }
}

module.exports = Stack;
