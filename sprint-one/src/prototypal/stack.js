var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var stackMethods = {};

 stackMethods.push = function(value){
    this.storage[this.counter] = value;
    this.counter++;
  };

  stackMethods.pop = function(){
    if(this.counter > 0){
      this.counter--;
      var val = this.storage[this.counter];
      delete this.storage[this.counter];
      return val;
    }
  };

  stackMethods.size = function(){
    return this.counter;
  };



