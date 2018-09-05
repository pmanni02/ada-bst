const assert = require('chai').assert;
const Node = require('../src/node');

describe('node.js', function(){
  it('Should set node value correctly', function(){
    let value = 10;
    let newNode = new Node(value);
    assert.equal(newNode.value, value);
  });

  it('should initialize left and right pointers to null', function(){
    let value = "first node";
    let newNode = new Node(value);
    assert.isNull(newNode.left);
    assert.isNull(newNode.right);
  });
});
