const Node = require('./node');
const Stack = require('./stack');
const Queue = require('./queue');

class BST {
  constructor(){
    this.root = null;
  }

  insert(val){
    let newNode = new Node(val);
    // console.log(`New Node: ${newNode.value}`);

    if(this.root == null){
      this.root = newNode;
      return;
    }

    let currNode = this.root;
    let parentNode = null;
    while(currNode !== null){
      parentNode = currNode;
      if(newNode.value <= currNode.value){
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }

    if(newNode.value <= parentNode.value){
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
    return this.root;
  }

  search(val){
    let currNode = this.root;

    while(currNode !== null){
      if(currNode.value === val){
        return true;
      }
      if(val < currNode.value){
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return false;
  }

  inOrderPrint(){
    let myStack = new Stack();
    let currNode = this.root;
    let result = "";
    while(currNode !== null || myStack.empty() === false){
      if(currNode !== null){
        myStack.push(currNode);
        currNode = currNode.left;
      } else if (myStack.empty() === false){
        currNode = myStack.pop();
        result += `${currNode.value.value} `;
        currNode = currNode.value.right;
      }
    }

    return result;
  }

  breadthFirstTraversal(){

  }

  height(){
    let myQueue = new Queue();
    let height = 0;
    let nodeCount = 0;
    if(this.root == null){
      return height;
    }

    myQueue.enqueue(this.root);
    nodeCount = 1;
    while(nodeCount > 0){
      height ++;
      let newCount = 0;
      for(let i=0; i< nodeCount; i++){
        let node = myQueue.dequeue();
        if(node.value.right){
          myQueue.enqueue(node.value.right);
          newCount++;
        } else if (node.value.left){
          myQueue.enqueue(node.value.left);
          newCount++;
        }
        nodeCount--;
      }
      nodeCount = newCount;
    }
    return height;
  }

}

module.exports = BST;

// let bst = new BST();
// bst.insert(5);
// bst.insert(8);
// bst.insert(1);
// let result = bst.inOrderPrint();
// console.log(result);
