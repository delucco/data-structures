var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var added = 0;
  var removed = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[added] = value;
    added++;
  };

  someInstance.dequeue = function(){
    if(someInstance.size() > 0){
      var result = storage[removed];
      delete storage[removed];
      removed++;
      return result;
    }
  };

  someInstance.size = function(){
    return added - removed;
  };

  return someInstance;
};
