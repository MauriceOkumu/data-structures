var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
    someInstance.storage = {};
    someInstance.first = 0;
    someInstance.last = 0;

    return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (val) {
	this.storage[++this.last] = val;

};

queueMethods.dequeue = function () {
  if (this.last - this.first > 0) {
  	var temp = this.storage[++this.first];
  }
  return temp;
};

queueMethods.size = function () {
  return this.last - this.first;
};

