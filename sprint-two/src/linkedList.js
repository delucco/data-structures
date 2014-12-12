var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.tail === null){
      //list is empty
      list.head = list.tail = newNode;
    }
    else {
      // list has something
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if(list.head){
      var val = list.head;
      if (list.head === list.tail){
        delete list.tail;
      }
      delete list.head;
      list.head = val.next;
      return val.value;
    }
  };

  list.contains = function(target){
    var checkNodes = function(start){
      if (start.value === target){
        return true;
      }
      else if (start.next === null){
        return false;
      }
      else {
        return checkNodes(start.next);
      }
    }
    return checkNodes(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
