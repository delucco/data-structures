

var Graph = function(){
};

Graph.prototype.addNode = function(node){
  var instance = {};
  instance.node = node;
  instance.connections = {};
  this.node = instance;
  //add edge to node (from existing node)
};

Graph.prototype.contains = function(node){
  return this.hasOwnProperty(node);
  //return boolean
};

Graph.prototype.removeNode = function(node){
  var fromNode = this.node;
  var toNodes = this.node.connections
  for (var key in toNodes){
    this.removeEdges(fromNode, key);
  }
  delete this.node;
  //remove
  //delete node
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.fromNode.connections.hasOwnProperty(toNode);
  //return boolean
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.fromNode.connections.toNode = toNode;
  this.toNode.connections.fromNode = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.fromNode.connections.toNode;
  delete this.toNode.connections.fromNode;
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this){
    cb(this[key], key, this);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



