var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = []; // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  if (this.value === target) {
    result = true;
  } else {
    for (var i=0; i<this.children.length; i++){
      result = result || this.children[i].contains(target);
    }
  }
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

