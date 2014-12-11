var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.added = 0;
  someInstance.removed = 0;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  return someInstance;
};

var queueMethods = {};

 queueMethods.enqueue = function(value){
    this.storage[this.added] = value;
    this.added++;
  };

  queueMethods.dequeue = function(){
    if(this.size() > 0){
      var result = this.storage[this.removed];
      delete this.storage[this.removed];
      this.removed++;
      return result;
    }
  };

  queueMethods.size = function(){
    return this.added - this.removed;
  };
