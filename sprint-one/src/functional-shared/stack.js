var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  _.extend(someInstance, stackMethods);
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





