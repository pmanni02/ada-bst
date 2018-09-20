// TODO: implement the following
// detect cycle
// insert in ascending order

const Node = require('./node');

class LinkedList {
    constructor(){
        this.head = null;
    }

    size(){
      if (this.head == null) return 0;
      let count = 1;
      let curr = this.head;

      while (curr.next != null){
        count++;
        curr = curr.next;
      }

      return count;
    }

    insertNode(val){
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode
      return this;
    }

    insertNodeEnd(val){
      if(this.size() == 0){
        this.head = new Node(val);
        return this;
      }
      const newNode = new Node(val);
      let curr = this.head;
      while(curr != null){
        if(curr.next == null){
          curr.next = newNode;
          return this;
        }
        curr = curr.next;
      }
    }

    printList(){
      let curr = this.head;
      let listStr = "";

      for(let i=0 ; i<this.size() ; i++){
        listStr = listStr + `${curr.value} `;
        curr = curr.next;
      }

      return listStr;
    }

    deleteNode(){
      if(!this.head) return null;

      let curr = this.head;
      this.head = curr.next;

      return this.head;
    }

    findVal(val){
      if(this.size() == 0){
        return 'The list is empty';
      }
      let curr = this.head;
      // let count = 0;
      while (curr.next != null){
        if(curr.value == val){
          return curr;
        }
        // count += 1;
        curr = curr.next;
      }
      return null;
  }

  findMax(){
    if(this.size() == 0){
      return null;
    }

    let curr = this.head;
    let currMax = curr.value;

    for(let i=0; i< this.size(); i++){
      if(curr.value > currMax){
        currMax = curr.value;
      }
      curr = curr.next;
    }

    return currMax;
  }

// TODO: come back to this & figure out tests
  detectCycle(){
    if(this.size() == 0){
      return false;
    }

    let slow = this.head;
    let fast = this.head;
    while(fast != null){
      if(slow == fast){
        return true;
      }
      slow = slow.next;
      fast = fast.next;

      if(fast.next != null){
        fast = fast.next;
      } else {
        fast = null;
      }
    }

    return false;
  }
}

module.exports = LinkedList;
