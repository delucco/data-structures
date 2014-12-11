var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.added = 0;
  this.removed = 0;

};

Queue.prototype.enqueue = function(value){
   this.storage[this.added] = value;
   this.added++;
 };

 Queue.prototype.dequeue = function(){
   if(this.size() > 0){
     var result = this.storage[this.removed];
     delete this.storage[this.removed];
     this.removed++;
     return result;
   }
 };

 Queue.prototype.size = function(){
   return this.added - this.removed;
 };

