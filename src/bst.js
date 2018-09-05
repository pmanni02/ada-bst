const Node = require('./node');

class BST {
  constructor(){
    this.root = null;
  }

  insert(val){
    if(this.root == null){
      this.root = new Node(val);
    } else {
      this.insertRecursive(this.root, new Node(val));
    }

    return this.root;
  }

  insertRecursive(currNode, newNode){
    if(newNode.value <= currNode.value){
      if(currNode.left === null){
        currNode.left = newNode;
        return;
      } else {
        this.insertRecursive(currNode.left, newNode);
      }
    } else {
      if(currNode.right === null){
        currNode.right = newNode;
        return;
      } else {
        this.insertRecursive(currNode.right, newNode);
      }
    }
  }

  // search(val){
  //
  // }

  inOrderPrint(){
    let printedVals = "";
    if(this.root == null){
      return printedVals;
    }
    return this.inOrderPrintRecursive(this.root, printedVals);
  }

  inOrderPrintRecursive(root, result){
    if(root === null){
      return result;
    }

    if(root.left != null){
      result = this.inOrderPrintRecursive(root.left);
    }

    result += `${root.value} `;

    if(root.right != null){
      result = this.inOrderPrintRecursive(root.right);
    }
    return result;


  }


}

module.exports = BST;
