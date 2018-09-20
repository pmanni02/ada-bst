const Node = require('./node');
const Stack = require('./stack');

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
    
  }

}

module.exports = BST;

// let bst = new BST();
// bst.insert(5);
// bst.insert(8);
// bst.insert(1);
// let result = bst.inOrderPrint();
// console.log(result);
