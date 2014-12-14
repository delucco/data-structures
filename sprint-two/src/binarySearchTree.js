var BinarySearchTree = function(value){
  var node = Object.create(BinarySearchTree.prototype);
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

BinarySearchTree.prototype.insert = function(value){
  var newTree = BinarySearchTree(value);
  var home = function(currentTree, newTree){
    if(newTree.value <= currentTree.value){
      if(!currentTree.left){
        currentTree.left = newTree;
      } else {
        home(currentTree.left, newTree);
      }
    } else {
      if(!currentTree.right){
        currentTree.right = newTree;
      } else {
        home(currentTree.right, newTree);
      }
    }
  }
  home(this, newTree);
};

BinarySearchTree.prototype.contains = function(value){
  var result = false;
  var checkNode = function(currentTree){
    if (value === currentTree.value) {
      result = true;
    } else if (value < currentTree.value) {
      if (currentTree.left !== null){
        return checkNode(currentTree.left);
      }
    } else if (value > currentTree.value){
      if (currentTree.right !== null){
        return checkNode(currentTree.right);
      }
    }
    return result;
  }
  return checkNode(this);
};

BinarySearchTree.prototype.depthFirstLog= function(callback){

  var goDeep = function(currentTree){
    callback(currentTree.value);
    if (currentTree.left !== null){
      goDeep(currentTree.left);
    }
    if (currentTree.right !== null){
      goDeep(currentTree.right);
    }
  }
  goDeep (this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
